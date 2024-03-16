import { Question, User } from '~types/model';

import { CreateQuestionAnswerParams, CreateQuestionParams } from './_question.type';
import { accessStorage, generateUID } from './_utils';

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

export async function getQuestion(questionId: string): Promise<Question> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const questions = questionsStorage.get();
      const question = questions[questionId];
      if (!question) {
        reject(new Error(`Question with id '${questionId}' not found`));
        return;
      }

      resolve(question);
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

export function createQuestionAnswer({ userId, questionId, answer }: CreateQuestionAnswerParams): Promise<Question> {
  if (!userId || !questionId || !answer) {
    throw new Error('Please provide authedUser, questionId, and answer');
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = usersStorage.get();
      const questions = questionsStorage.get();

      const user = users[userId];
      if (!user) {
        reject(new Error(`User with id '${userId}' not found`));
        return;
      }

      const question = questions[questionId];
      if (!question) {
        reject(new Error(`Question with id '${questionId}' not found`));
        return;
      }

      usersStorage.set({
        ...users,
        [userId]: {
          ...user,
          answers: {
            ...user.answers,
            [questionId]: answer,
          },
        },
      });

      const updatedQuestion = {
        ...question,
        [answer]: {
          ...question[answer],
          votes: [...question[answer].votes, userId],
        },
      };

      questionsStorage.set({
        ...questions,
        [questionId]: updatedQuestion,
      });

      resolve(updatedQuestion);
    }, QUERY_TIME);
  });
}
