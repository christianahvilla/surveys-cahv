import { Outlet } from 'react-router-dom';

export const RequirementsElement = () => {
  return (
    <div data-testid='requirements-element'>
      <Outlet />
    </div>
  );
};
