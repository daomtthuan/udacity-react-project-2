import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '~components/page/error/boundary';

import authenticatedRoute from './_authenticated';
import errorRoute from './_error';
import guestRoute from './_guest';

const router = createBrowserRouter([
  {
    ErrorBoundary,

    children: [errorRoute, guestRoute, authenticatedRoute],
  },
]);

export default router;
