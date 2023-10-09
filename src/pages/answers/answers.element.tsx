import { Outlet } from 'react-router-dom';

export const AnswersElement = () => {
  return (
    <div data-testid='answers-element'>
      <Outlet />
    </div>
  );
};
