import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ClientsElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/clients') {
    return <Navigate to='list' />;
  }

  return (
    <div data-testid='clients-element'>
      <Outlet />
    </div>
  );
};
