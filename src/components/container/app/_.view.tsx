import { Provider } from 'react-redux';
import AuthContainer from '~components/container/auth';
import store from '~plugins/store';

export default function AppContainer() {
  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
}
