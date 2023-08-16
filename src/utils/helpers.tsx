import { Key, ReactNode } from 'react';
import { IDropdownOptions } from '~components/inputs/dropdown/types';

export const SUBMITtING = 'submitting';

export const isSubmitting = (state: string) => state === SUBMITtING;

export const displayContentButton = (state: string, text: string): ReactNode => {
  return isSubmitting(state) ? (
    <>
      <span className='loading loading-spinner'></span>
    </>
  ) : (
    <>{text}</>
  );
};

export const getDropdownValue = (filterKey: Key, options: Array<IDropdownOptions>) =>
  options.filter(({ key }) => key === filterKey)[0];
