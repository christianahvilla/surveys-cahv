import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const QuestionsElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/questions') {
    return <Navigate to='list' />;
  }

  return (
    <div data-testid='questions-element'>
      <Outlet />
    </div>
  );
};
