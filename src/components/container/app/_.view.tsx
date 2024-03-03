import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { useEffectOnce } from '~hooks/effect';
import useLoading from '~hooks/loading';
import router from '~plugins/router';
import store from '~plugins/store';

export default function AppContainer() {
  const loading = useLoading();

  useEffectOnce(() => {
    loading.hide();
  });

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
