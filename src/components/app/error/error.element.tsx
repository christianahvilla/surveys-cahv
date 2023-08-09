import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';
import { NO_ROUTE_ERROR } from './constants';
import { ErrorType } from '~types/error/error-object.type';
import { removeFromLocalStorage } from '~utils/LocalStorage';

export function ErrorElement() {
  const error: any | ErrorType = useRouteError();

  if (!error) {
    return <></>;
  }

  if (
    isRouteErrorResponse(error) &&
    error.status === 404 &&
    error.error?.message.includes(NO_ROUTE_ERROR)
  )
    return <Navigate to='/404' />;

  if (error.statusCode === 403) return <Navigate to='/403' />;

  if (error.statusCode === 401) {
    removeFromLocalStorage('authData');
    window.location.reload();
  }

  if (error.statusCode === 500) return <Navigate to='/500' />;

  return (
    <div>
      <h1>Error</h1>
      <code>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </code>
    </div>
  );
}
