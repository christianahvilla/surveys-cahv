import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const SurveysElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/surveys') {
    return <Navigate to='list' />;
  }

  return (
    <div data-testid='surveys-element'>
      <Outlet />
    </div>
  );
};
