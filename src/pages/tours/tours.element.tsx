import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ToursElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/tours') {
    return <Navigate to='list' />;
  }

  return (
    <div data-testid='tours-element'>
      <Outlet />
    </div>
  );
};
