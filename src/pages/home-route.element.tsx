import { Outlet } from 'react-router-dom';
import { HomeNavigator } from './utils/HomeNavigator';
import { RequireAuth } from './utils/RequireAuth';

export const HomeRouteElement = () => {
  return (
    <>
      <RequireAuth>
        <HomeNavigator />
      </RequireAuth>
      <Outlet />
    </>
  );
};
