import { RouteObject } from 'react-router-dom';

const authenticatedRoute: RouteObject = {
  lazy: async () => (await import('~components/layout/board')).default,

  children: [
    {
      index: true,
      path: '/home',
      lazy: async () => (await import('~components/page/app/dashboard')).default,
    },
    {
      path: '/leaderboard',
      lazy: async () => (await import('~components/page/app/leaderboard')).default,
    },
    {
      path: '/add',
      lazy: async () => (await import('~components/page/app/add')).default,
    },
    {
      path: '/questions/:questionId',
      lazy: async () => (await import('~components/page/app/questions')).default,
    },
  ],
};

export default authenticatedRoute;
