import { Location, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '~plugins/store';

const pathConfig = {
  signIn: '/',
  home: '/home',

  guest: ['/', '/sign-up'],
};

export default function AuthLayout() {
  const location: Location<string | null> = useLocation();

  const user = useAppSelector((state) => state.auth.user);

  // Not authenticated
  if (!user) {
    // Location is not guest routes
    if (!pathConfig.guest.includes(location.pathname)) {
      return <Navigate to={pathConfig.signIn} state={location.pathname} />;
    }

    return <Outlet />;
  }

  // Authenticated
  else {
    // Location has state
    if (location.state) {
      return <Navigate to={location.state} state={null} />;
    }

    // Location is guest routes
    if (pathConfig.guest.includes(location.pathname)) {
      return <Navigate to={pathConfig.home} state={null} />;
    }

    return <Outlet />;
  }
}
