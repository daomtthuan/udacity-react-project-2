import { Option } from './_option.type';

export type Question = {
  id: string;
  author: string;
  timestamp: number;
  optionOne: Option;
  optionTwo: Option;
};
