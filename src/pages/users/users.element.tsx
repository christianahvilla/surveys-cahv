import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const UsersElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/users') {
    return <Navigate to='list/0' />;
  }

  return (
    <div data-testid='users-element'>
      <Outlet />
    </div>
  );
};
