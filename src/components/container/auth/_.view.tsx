import { RouterProvider } from 'react-router-dom';
import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import { authenticatedRouter, guestRouter } from '~plugins/router';
import { useAppSelector } from '~plugins/store';

export default function AuthContainer() {
  const loading = useLoading();

  const user = useAppSelector((state) => state.auth.user);

  useEffectOnce(() => {
    loading.hide();
  });

  if (user) {
    return <RouterProvider router={authenticatedRouter} />;
  }

  return <RouterProvider router={guestRouter} />;
}
