import { Question } from '~types/model';

export type CreateQuestionParams = {
  author: string;
  optionOneText: string;
  optionTwoText: string;
};

export type CreateQuestionAnswerParams = {
  authedUser: string;
  questionId: string;
  answer: keyof Pick<Question, 'optionOne' | 'optionTwo'>;
};
