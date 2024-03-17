import { useCallback, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Poll, { PollProps } from '~components/feature/employee-polls/poll';
import { PollVoteItemProps } from '~components/feature/employee-polls/poll-vote-item';
import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import { useAppSelector } from '~plugins/store';
import { questionApi, userApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

import { QuestionsPageParams, VoteOptionParams } from './_.type';

export default function QuestionsPage() {
  const { questionId } = useParams<QuestionsPageParams>();
  const navigate = useNavigate();

  const loading = useLoading();

  const authUser = useAppSelector((state) => state.auth.user);

  const [pollProps, setPollProps] = useState<PollProps | null>(null);

  const onVoteOption = useCallback<(params: VoteOptionParams) => PollVoteItemProps['onVote']>(
    ({ user, question, authorUser, answer, userCount }) =>
      async () => {
        try {
          loading.show();

          const updatedQuestion = await questionApi.createQuestionAnswer({
            userId: user.id,
            questionId: question.id,
            answer,
          });

          setPollProps(() => ({
            type: 'view',
            question: updatedQuestion,
            authorUser,
            userCount,
            answer,
          }));
        } catch (error) {
          alert(getErrorMessage(error));
        } finally {
          loading.hide();
        }
      },
    [loading],
  );

  useEffectOnce(() => {
    if (!authUser || !questionId) {
      return;
    }

    (async () => {
      try {
        loading.show();

        const question = await questionApi.getQuestion(questionId).catch(() => {
          navigate('/error/404', {
            replace: true,
          });
        });

        if (!question) {
          return;
        }

        const [authorUser, { user, answer, userCount }] = await Promise.all([
          userApi.getUser(question.author),

          (async () => {
            const user = await userApi.getUser(authUser.id);
            const answer = user.answers[question.id];
            const users = await userApi.getUsers();

            return {
              user,
              answer,
              userCount: Object.keys(users).length,
            };
          })(),
        ]);

        setPollProps(() =>
          !answer
            ? {
                type: 'vote',
                question,
                authorUser,

                onVoteOptionOne: onVoteOption({
                  user,
                  question,
                  authorUser,
                  userCount,
                  answer: 'optionOne',
                }),
                onVoteOptionTwo: onVoteOption({
                  user,
                  question,
                  authorUser,
                  userCount,
                  answer: 'optionTwo',
                }),
              }
            : {
                type: 'view',
                question,
                authorUser,
                userCount,
                answer,
              },
        );
      } catch (error) {
        alert(getErrorMessage(error));
      } finally {
        loading.hide();
      }
    })();
  });

  if (!authUser || !pollProps) {
    return null;
  }

  return (
    <div className="container d-flex flex-column gap-5 py-5">
      <Poll {...pollProps} />
    </div>
  );
}
