import { IContainers } from './types';

export const ParentContainer = ({ children }: IContainers) => {
  return (
    <div
      className='min-h-screen w-full bg-gray-50 !pl-0 text-center justify-center flex'
      id='content'
    >
      {children}
    </div>
  );
};
