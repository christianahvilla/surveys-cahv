import { Navigate, useLocation } from 'react-router-dom';

export const HomeNavigator = () => {
  const { pathname } = useLocation();
  if (pathname === '/') return <Navigate to='/bank' />;

  return <Navigate to={pathname} />;
};
