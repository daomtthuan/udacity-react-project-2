import { Question, User } from '~types/model';

import { accessStorage, generateUID } from './_data';
import { CreateQuestionAnswerParams, CreateQuestionParams } from './_question.type';

const usersStorage = accessStorage<User>('users');
const questionsStorage = accessStorage<Question>('questions');

const QUERY_TIME = 500;

export async function getQuestions(): Promise<Record<string, Question>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const questions = questionsStorage.get();

      resolve(questions);
    }, QUERY_TIME);
  });
}

export async function createQuestion({ optionOneText, optionTwoText, author }: CreateQuestionParams): Promise<Question> {
  if (!optionOneText || !optionTwoText || !author) {
    throw new Error('Please provide optionOneText, optionTwoText, and author');
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const questions = questionsStorage.get();
      const newQuestion: Question = {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
          votes: [],
          text: optionOneText,
        },
        optionTwo: {
          votes: [],
          text: optionTwoText,
        },
      };

      questionsStorage.set({
        ...questions,
        [newQuestion.id]: newQuestion,
      });

      resolve(newQuestion);
    }, QUERY_TIME);
  });
}

export function createQuestionAnswer({ authedUser, questionId, answer }: CreateQuestionAnswerParams): Promise<boolean> {
  if (!authedUser || !questionId || !answer) {
    throw new Error('Please provide authedUser, questionId, and answer');
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const users = usersStorage.get();
      const questions = questionsStorage.get();

      usersStorage.set({
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [questionId]: answer,
          },
        },
      });

      questionsStorage.set({
        ...questions,
        [questionId]: {
          ...questions[questionId],
          [answer]: {
            ...questions[questionId][answer],
            votes: questions[questionId][answer].votes.concat([authedUser]),
          },
        },
      });

      resolve(true);
    }, QUERY_TIME);
  });
}
