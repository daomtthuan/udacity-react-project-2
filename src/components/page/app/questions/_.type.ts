import { Answer, Question, User } from '~types/model';

export type QuestionsPageParams = {
  questionId: string;
};

export type VoteOptionParams = {
  user: User;
  question: Question;
  authorUser: User;
  userCount: number;
  answer: Answer;
};
