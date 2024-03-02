import authSlice from '~plugins/store/auth';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});
