import { Outlet } from 'react-router-dom';

export const OptionsElement = () => {
  return (
    <div data-testid='options-element'>
      <Outlet />
    </div>
  );
};
