import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const SurveyedElement = () => {
  const { pathname } = useLocation();
  if (pathname === '/surveyed') {
    return <Navigate to='list' />;
  }
  return (
    <div data-testid='surveyed-element'>
      <Outlet />
    </div>
  );
};
