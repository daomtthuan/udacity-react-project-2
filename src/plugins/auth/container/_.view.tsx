import { Location, Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '~plugins/store';

import { AuthContainerProps } from './_.type';

const pathConfig = {
  signIn: '/',
  home: '/home',

  guest: ['/', '/sign-up'],
};

export default function AuthContainer({ children }: Readonly<AuthContainerProps>) {
  const location: Location<string | null> = useLocation();

  const authUser = useAppSelector((state) => state.auth.user);

  // Not authenticated
  if (!authUser) {
    // Location is not guest routes
    if (!pathConfig.guest.includes(location.pathname)) {
      return <Navigate to={pathConfig.signIn} state={location.pathname} />;
    }

    return children;
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

    return children;
  }
}
