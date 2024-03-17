import { useCallback, useState } from 'react';

import { QuestionItemData } from '~components/feature/employee-polls/question-item';
import QuestionList from '~components/feature/employee-polls/question-list';
import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import { useAppSelector } from '~plugins/store';
import { questionApi, userApi } from '~services/api';
import { Question, User } from '~types/model';
import { getErrorMessage } from '~utils/error';

export default function DashboardPage() {
  const loading = useLoading();

  const authUser = useAppSelector((state) => state.auth.user);

  const [unAnsweredQuestions, setUnAnsweredQuestions] = useState<QuestionItemData[] | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<QuestionItemData[] | null>(null);

  const mapAuthor = useCallback<(questions: Question[], users: Record<string, User>) => QuestionItemData[]>((questions, users) => {
    return questions
      .map<QuestionItemData>((question) => {
        const authorUser = users[question.author];
        if (!authorUser) {
          throw new Error(`User with id '${question.author}' not found`);
        }

        return {
          ...question,
          authorUser,
        };
      })
      .sort((question1, question2) => question2.timestamp - question1.timestamp);
  }, []);

  useEffectOnce(() => {
    if (!authUser) {
      return;
    }

    (async () => {
      try {
        loading.show();

        const [user, questions, users] = await Promise.all([userApi.getUser(authUser.id), questionApi.getQuestions(), userApi.getUsers()]);

        setUnAnsweredQuestions(() =>
          mapAuthor(
            Object.values(questions).filter((question) => !Object.keys(user.answers).includes(question.id)),
            users,
          ),
        );
        setAnsweredQuestions(() =>
          mapAuthor(
            Object.values(questions).filter((question) => Object.keys(user.answers).includes(question.id)),
            users,
          ),
        );
      } catch (error) {
        alert(getErrorMessage(error));
      } finally {
        loading.hide();
      }
    })();
  });

  if (!authUser || !unAnsweredQuestions || !answeredQuestions) {
    return null;
  }

  return (
    <div className="container py-5">
      <div className="accordion accordion-flush border rounded" id="question-list-board">
        <QuestionList parentId="question-list-board" id="unanswered" title="Unanswered" items={unAnsweredQuestions} buttonText="Answer" show />
        <QuestionList parentId="question-list-board" id="answered" title="Answered" items={answeredQuestions} buttonText="Result" />
      </div>
    </div>
  );
}
