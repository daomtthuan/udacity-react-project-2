import { createBrowserRouter } from 'react-router-dom';
import AuthContainer from '~components/container/auth';

import authenticatedRoute from './_authenticated';
import guestRoute from './_guest';

const router = createBrowserRouter([
  {
    Component: AuthContainer,

    children: [guestRoute, authenticatedRoute],
  },
]);

export default router;
