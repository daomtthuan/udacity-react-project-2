import { User } from '~types/model';

import { accessSession, accessStorage, generateAvatar } from './_data';
import { CreateUserParams, SignInParams, VerifyAuthReturn } from './_user.type';

const usersStorage = accessStorage<User>('users');
const userSession = accessSession<string>('user');

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

      userSession.set(user.id);

      resolve(user);
    }, QUERY_TIME);
  });
}

export async function verifyAuth(): Promise<VerifyAuthReturn> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userId = userSession.get();
      if (!userId) {
        resolve({
          isAuth: false,
        });
        return;
      }

      const users = usersStorage.get();
      const user = users[userId];
      resolve({
        isAuth: true,
        user,
      });
    }, QUERY_TIME);
  });
}

export async function signOut(): Promise<true> {
  return new Promise((resolve) => {
    setTimeout(() => {
      userSession.set(null);

      resolve(true);
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

export async function getUser(userId: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = usersStorage.get();
      const user = users[userId];
      if (!user) {
        reject(new Error('User not found'));
        return;
      }

      resolve(user);
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
