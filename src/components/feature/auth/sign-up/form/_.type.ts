import { CreateUserParams } from '~services/api';

export type AuthSignUpFormValues = CreateUserParams & {
  repeatPassword: string;
};
