import {
  QuestionItemData,
  QuestionItemProps,
} from '~components/feature/employee-polls/question-item';

export type QuestionListProps = {
  title: string;
  items: QuestionItemData[];
  buttonText: QuestionItemProps['buttonText'];
};
