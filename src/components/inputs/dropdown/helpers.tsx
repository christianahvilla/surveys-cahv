import { DropdownItem } from '@nextui-org/react';
import { IDropdownOptions } from './types';

export const displayOptions = (options: Array<IDropdownOptions>) =>
  options.map(({ label, key }) => (
    <DropdownItem className='w-full' key={key || ''}>
      {label}
    </DropdownItem>
  ));
