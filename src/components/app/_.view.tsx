import React from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from '~plugins/router';
import store from '~plugins/store';

export default function App() {
  /*
  I remove this code because last reject of review
  "I see the target is application is expected that always ask sign in, instead of cache the signed in user"
  So, I remove AuthProvider to close feature cache signed in user

  return (
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  );
  */

  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
