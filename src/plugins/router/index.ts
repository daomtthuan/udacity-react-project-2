import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '~plugins/auth';

import authenticatedRoute from './_authenticated';
import guestRoute from './_guest';

const router = createBrowserRouter([
  {
    Component: AuthLayout,

    children: [guestRoute, authenticatedRoute],
  },
]);

export default router;
