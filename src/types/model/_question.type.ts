import { Answer } from './_answer.type';
import { Option } from './_option.type';

export type Question = {
  id: string;
  author: string;
  timestamp: number;
} & Record<Answer, Option>;
