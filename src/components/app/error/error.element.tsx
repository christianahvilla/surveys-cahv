import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';
import { NO_ROUTE_ERROR } from './constants';

export function ErrorElement() {
  const error = useRouteError();

  if (
    isRouteErrorResponse(error) &&
    error.status === 404 &&
    error.error?.message.includes(NO_ROUTE_ERROR)
  )
    return <Navigate to='/404' />;

  return (
    <div>
      <h1>Error</h1>
      <code>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </code>
    </div>
  );
}
