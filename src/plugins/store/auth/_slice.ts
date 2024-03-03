import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthSliceState, AuthUser } from './_.type';

const initialState: AuthSliceState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthSliceState, { payload }: PayloadAction<AuthUser | null>) => {
      state.user = payload;
    },
  },
});

export default authSlice;
