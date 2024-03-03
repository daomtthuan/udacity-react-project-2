import { useState } from 'react';

import QuestionList from '~components/feature/app/question-list';
import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import { useAppSelector } from '~plugins/store';
import { questionApi, userApi } from '~services/api';
import { Question } from '~types/model';
import { getErrorMessage } from '~utils/error';

export default function DashboardPage() {
  const loading = useLoading();

  const authUser = useAppSelector((state) => state.auth.user);

  const [newQuestions, setNewQuestions] = useState<Question[]>([]);
  const [doneQuestions, setDoneQuestions] = useState<Question[]>([]);

  useEffectOnce(() => {
    if (!authUser) {
      return;
    }

    (async () => {
      try {
        loading.show();

        const [user, questions] = await Promise.all([userApi.getUser(authUser.id), questionApi.getQuestions()]);

        setNewQuestions(() =>
          Object.values(questions)
            .filter((question) => !Object.keys(user.answers).includes(question.id))
            .sort((question1, question2) => question2.timestamp - question1.timestamp),
        );
        setDoneQuestions(() =>
          Object.values(questions)
            .filter((question) => Object.keys(user.answers).includes(question.id))
            .sort((question1, question2) => question2.timestamp - question1.timestamp),
        );
      } catch (error) {
        alert(getErrorMessage(error));
      } finally {
        loading.hide();
      }
    })();
  });

  if (!authUser) {
    return null;
  }

  return (
    <div className="container d-flex flex-column gap-5 py-5">
      <QuestionList title="New Questions" questions={newQuestions} />
      <QuestionList title="Done" questions={doneQuestions} />
    </div>
  );
}
