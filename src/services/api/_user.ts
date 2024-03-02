import { User } from '~types/model';

import { accessStorage, generateAvatar } from './_data';
import { CreateUserParams, SignInParams } from './_user.type';

const usersStorage = accessStorage<User>('users');

const QUERY_TIME = 500;

export async function signIn({ userId, password }: SignInParams): Promise<User> {
  if (!userId || !password) {
    throw new Error('Please provide userId, password');
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = usersStorage.get();
      const user = users[userId];
      if (!user) {
        reject(new Error('User not found'));
        return;
      }

      if (user.password !== password) {
        reject(new Error('User or password is incorrect'));
        return;
      }

      resolve(user);
    }, QUERY_TIME);
  });
}

export async function getUsers(): Promise<Record<string, User>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = usersStorage.get();

      resolve(users);
    }, QUERY_TIME);
  });
}

export async function createUser({ userId, name, password }: CreateUserParams): Promise<User> {
  if (!userId || !name || !password) {
    throw new Error('Please provide userId, name, password');
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = usersStorage.get();
      const user = users[userId];
      if (user) {
        reject(new Error('This user already exists'));
        return;
      }

      const newUser: User = {
        id: userId,
        password,
        name,
        avatarURL: generateAvatar(),
        answers: {},
        questions: [],
      };

      usersStorage.set({
        ...users,
        [newUser.id]: newUser,
      });

      resolve(newUser);
    }, QUERY_TIME);
  });
}
