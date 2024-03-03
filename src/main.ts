import '~styles/theme.scss';
import 'bootstrap';

import { createElement } from 'react';

import { createRoot } from 'react-dom/client';
import App from '~components/app';
import api from '~services/api';

api.init();

const rootEl = document.querySelector('main');
if (!rootEl) {
  throw new Error(`Root app with query selector 'main' not found`);
}

const root = createRoot(rootEl);
root.render(createElement(App));
