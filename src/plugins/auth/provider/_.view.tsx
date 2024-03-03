import { useState } from 'react';

import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import { useAppDispatch } from '~plugins/store';
import { authSliceActions } from '~plugins/store/auth';
import { userApi } from '~services/api';
import { getErrorMessage } from '~utils/error';

import { AuthProviderProps } from './_.type';

export default function AuthProvider({ children }: Readonly<AuthProviderProps>) {
  const dispatch = useAppDispatch();

  const loading = useLoading();

  const [isVerify, setIsVerify] = useState<boolean>(false);

  useEffectOnce(() => {
    (async () => {
      try {
        loading.show();

        const result = await userApi.verifyAuth();
        if (!result.isAuth) {
          return;
        }

        dispatch(authSliceActions.setUser(result.user));
      } catch (error) {
        alert(getErrorMessage(error));
      } finally {
        setIsVerify(() => true);
        loading.hide();
      }
    })();
  });

  if (!isVerify) {
    return null;
  }

  return children;
}
