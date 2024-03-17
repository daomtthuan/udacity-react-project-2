import { QuestionItemData, QuestionItemProps } from '~components/feature/employee-polls/question-item';

export type QuestionListProps = {
  parentId: string;
  id: string;
  title: string;
  items: QuestionItemData[];
  buttonText: QuestionItemProps['buttonText'];
  show?: boolean;
};
