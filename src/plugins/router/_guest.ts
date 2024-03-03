import { RouteObject } from 'react-router-dom';

const guestRoute: RouteObject = {
  lazy: async () => (await import('~components/layout/welcome')).default,

  children: [
    {
      index: true,
      lazy: async () => (await import('~components/page/guest/sign-in')).default,
    },
    {
      path: 'sign-up',
      lazy: async () => (await import('~components/page/guest/sign-up')).default,
    },
  ],
};

export default guestRoute;
