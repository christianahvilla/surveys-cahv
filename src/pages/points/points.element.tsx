import { Outlet } from 'react-router-dom';

export const PointsElement = () => {
  return (
    <div data-testid='tours-element'>
      <Outlet />
    </div>
  );
};
