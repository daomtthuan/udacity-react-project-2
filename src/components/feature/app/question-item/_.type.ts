import { PropsWithClassName } from '~types/component/ui.type';
import { Question, User } from '~types/model';

export type QuestionItemData = Question & {
  authorUser: User;
};

export type QuestionItemProps = PropsWithClassName<{
  question: QuestionItemData;
  buttonText: string;
}>;
