import { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '~plugins/store';

export function TestContainer({ children }: Readonly<PropsWithChildren>) {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
}
