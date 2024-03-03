import { RouteObject } from 'react-router-dom';

const errorRoute: RouteObject = {
  path: 'error',
  lazy: async () => (await import('~components/layout/error')).default,

  children: [
    {
      index: true,
      lazy: async () => (await import('~components/page/error/500')).default,
    },
    {
      path: '404',
      lazy: async () => (await import('~components/page/error/404')).default,
    },
  ],
};

export default errorRoute;
