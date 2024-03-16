import { OptionResult } from '~components/feature/employee-polls/poll-view-item';
import { PollVoteItemProps } from '~components/feature/employee-polls/poll-vote-item';
import { Answer, Question, User } from '~types/model';

export type PollVoteProps = {
  type: 'vote';

  onVoteOptionOne: PollVoteItemProps['onVote'];
  onVoteOptionTwo: PollVoteItemProps['onVote'];
};

export type PollViewProps = {
  type: 'view';
  userCount: number;
  answer: Answer;
};

export type PollProps = {
  question: Question;
  authorUser: User;
} & (PollVoteProps | PollViewProps);

export type PollResult = {
  optionOne: OptionResult;
  optionTwo: OptionResult;
};
