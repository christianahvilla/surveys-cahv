import { Navigate } from 'react-router-dom';
import { getFromLocalStorage } from 'src/hooks/useLocalStorage';
import { HeaderElement } from '~components/app/header/app-header.component';
import { SidenavElement } from '~components/app/sidenav/sidenav-element.component';

interface IRequireAuth {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuth) => {
  const authData = getFromLocalStorage('authData');
  const isUserAuthenticated = Boolean(authData);

  if (!isUserAuthenticated) {
    return <Navigate replace to='/login' />;
  }

  return (
    <>
      <HeaderElement />
      <SidenavElement />
      {children}
    </>
  );
};
