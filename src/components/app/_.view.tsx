import React from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '~plugins/auth';
import router from '~plugins/router';
import store from '~plugins/store';

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  );
}
