import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const OptionsElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/options') {
    return <Navigate to='list' />;
  }

  return (
    <div data-testid='users-element'>
      <Outlet />
    </div>
  );
};
