import { useState } from 'react';

import PollList, { UserItemData } from '~components/feature/app/poll-list';
import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import { useAppSelector } from '~plugins/store';
import { userApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

export default function LeaderboardPage() {
  const loading = useLoading();

  const authUser = useAppSelector((state) => state.auth.user);

  const [users, setUsers] = useState<UserItemData[] | null>(null);

  useEffectOnce(() => {
    (async () => {
      try {
        loading.show();

        const users = await userApi.getUsers();

        setUsers(() =>
          Object.values(users)
            .map<UserItemData>((user) => ({
              ...user,
              answerCount: Object.keys(user.answers).length,
            }))
            .sort((user1, user2) => {
              if (user2.answerCount === user1.answerCount) {
                return user2.questions.length - user1.questions.length;
              }

              return user2.answerCount - user1.answerCount;
            }),
        );
      } catch (error) {
        alert(getErrorMessage(error));
      } finally {
        loading.hide();
      }
    })();
  });

  if (!authUser || !users) {
    return null;
  }

  return (
    <div className="container d-flex flex-column gap-5 py-5">
      <PollList items={users} />
    </div>
  );
}
