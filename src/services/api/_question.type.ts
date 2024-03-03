import { Answer } from '~types/model';

export type CreateQuestionParams = {
  author: string;
  optionOneText: string;
  optionTwoText: string;
};

export type CreateQuestionAnswerParams = {
  userId: string;
  questionId: string;
  answer: Answer;
};
