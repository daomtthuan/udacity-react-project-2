import { Answer } from './_answer.type';

export type User = {
  id: string;
  password: string;
  name: string;
  avatarURL: string;
  answers: Record<string, Answer>;
  questions: string[];
};
