import '~styles/theme.scss';
import 'bootstrap';

import React from 'react';

import { createRoot } from 'react-dom/client';
import AppContainer from '~components/container/app';
import api from '~services/api';

api.init();

const rootEl = document.querySelector('main');
if (!rootEl) {
  throw new Error('Root app not found');
}

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);
