import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';
import { NO_ROUTE_ERROR } from './constants';
import { ErrorType } from '~types/error/error-object.type';
import { removeFromLocalStorage } from '~utils/LocalStorage';

export function ErrorElement() {
  const error: any | ErrorType = useRouteError();

  console.error(error);

  if (
    (isRouteErrorResponse(error) &&
      error.status === 404 &&
      error.error?.message.includes(NO_ROUTE_ERROR)) ||
    error.statusCode === 404
  )
    return <Navigate to='/404' />;

  if (error.statusCode === 403) return <Navigate to='/403' />;

  if (error.statusCode === 401) {
    removeFromLocalStorage('authData');
    window.location.reload();
  }

  if (error.statusCode === 500) return <Navigate to='/500' />;

  return (
    <div className='min-h-screen w-full bg-gray-50 !pl-0 text-justify sm:!pl-60' id='content'>
      <h1>Error</h1>
      <code>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </code>
    </div>
  );
}
