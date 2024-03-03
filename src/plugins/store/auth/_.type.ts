import { User } from '~types/model';

export type AuthUser = Pick<User, 'id' | 'name' | 'avatarURL'>;

export type AuthSliceState = {
  user: AuthUser | null;
};
