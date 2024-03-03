import { Location, Navigate, Outlet, useLocation } from 'react-router-dom';
import authConfig from '~plugins/auth';
import { useAppSelector } from '~plugins/store';

export default function AuthContainer() {
  const location: Location<string | null> = useLocation();

  const user = useAppSelector((state) => state.auth.user);

  // Not authenticated
  if (!user) {
    // Location is not guest routes
    if (!authConfig.guestPaths.includes(location.pathname)) {
      return <Navigate to={authConfig.signIn} state={location.pathname} />;
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
    if (authConfig.guestPaths.includes(location.pathname)) {
      return <Navigate to={authConfig.home} state={null} />;
    }

    return <Outlet />;
  }
}
