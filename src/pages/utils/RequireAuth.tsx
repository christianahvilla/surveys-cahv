import { Navigate } from 'react-router-dom';
import { HeaderElement } from '~components/app/header/app-header.component';
import { SidenavElement } from '~components/app/sidenav/sidenav-element.component';

interface IRequireAuth {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: IRequireAuth) => {
  const isUserAuthenticated = false; // Boolean(localStorage.getItem('user'));

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
