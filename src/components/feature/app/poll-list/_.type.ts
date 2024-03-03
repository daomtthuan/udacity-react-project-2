import { User } from '~types/model';

export type UserItemData = User & {
  answerCount: number;
};

export type PollListProps = {
  items: UserItemData[];
};
