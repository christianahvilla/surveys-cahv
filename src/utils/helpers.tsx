import { Key, ReactNode } from 'react';
import { IDropdownOptions } from '~components/inputs/dropdown/types';
import { SELECTELEMENT, SUBMITTING } from '../constants';

export const isSubmitting = (state: string) => state === SUBMITTING;

export const displayContentButton = (state: string, text: string): ReactNode => {
  return isSubmitting(state) ? (
    <>
      <span className='loading loading-spinner'></span>
    </>
  ) : (
    <>{text}</>
  );
};

export const getDropdownValue = (filterKey: Key, options: Array<IDropdownOptions>) => {
  if (!options.length) {
    return {
      label: SELECTELEMENT,
      key: SELECTELEMENT,
    };
  }
  return options.filter(({ key }) => key === filterKey)[0];
};
