import '~styles/theme.scss';
import 'bootstrap';

import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '~plugins/auth';
import router from '~plugins/router';
import store from '~plugins/store';
import api from '~services/api';

api.init();

const rootEl = document.querySelector('main');
if (!rootEl) {
  throw new Error('Root app not found');
}

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
);
