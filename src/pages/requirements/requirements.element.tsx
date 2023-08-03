import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequirementsElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/requirements') {
    return <Navigate to='list' />;
  }

  return (
    <div data-testid='requirements-element'>
      <Outlet />
    </div>
  );
};
