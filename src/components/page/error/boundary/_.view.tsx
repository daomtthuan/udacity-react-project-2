import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <Navigate to="/error/404" replace />;
  }

  return <Navigate to="/error/500" replace />;
}
