import { QuestionItemData, QuestionItemProps } from '~components/feature/app/question-item';

export type QuestionListProps = {
  title: string;
  items: QuestionItemData[];
  buttonText: QuestionItemProps['buttonText'];
};
