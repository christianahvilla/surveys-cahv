import { Navigate } from 'react-router-dom';
import { getFromLocalStorage } from 'src/hooks/useLocalStorage';

interface IOAuth {
  children: JSX.Element;
}

export const OAuth = ({ children }: IOAuth) => {
  const authData = getFromLocalStorage('authData');
  console.log(authData);
  const isUserAuthenticated = Boolean(authData);

  if (isUserAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};
