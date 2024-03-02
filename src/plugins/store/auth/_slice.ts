import { User } from '~types/model';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthSliceState } from './_.type';

const initialState: AuthSliceState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthSliceState, { payload }: PayloadAction<User | null>) => {
      state.user = payload;
    },
  },
});

export default authSlice;
