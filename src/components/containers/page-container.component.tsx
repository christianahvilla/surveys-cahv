import { IContainers } from './types';

export const PageContainer = ({ children }: IContainers) => {
  return <div className='w-10/12 pt-5'>{children}</div>;
};
