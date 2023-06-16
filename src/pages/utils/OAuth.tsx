import { Navigate } from 'react-router-dom';

interface IOAuth {
  children: JSX.Element;
}

export const OAuth = ({ children }: IOAuth) => {
  const isUserAuthenticated = true; // Boolean(localStorage.getItem('user'));

  if (isUserAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};
