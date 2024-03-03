import { User } from '~types/model';

export type SignInParams = {
  userId: string;
  password: string;
};

export type VerifyAuthReturn =
  | {
      isAuth: false;
    }
  | {
      isAuth: true;
      user: User;
    };

export type CreateUserParams = {
  userId: string;
  name: string;
  password: string;
};
