import { CreateQuestionParams } from '~services/api';

export type PollCreateFormValues = Pick<CreateQuestionParams, 'optionOneText' | 'optionTwoText'>;

export type PollCreateProps = {
  userId: string;
};
