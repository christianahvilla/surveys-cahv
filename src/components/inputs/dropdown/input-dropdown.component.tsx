import { Button, Dropdown, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import { IDropdownOptions as IDropdownOption } from './types';
import { displayOptions } from './helpers';
import { Key } from 'react';

interface IInputDropdown {
  name: string;
  value: IDropdownOption;
  defaultValue?: IDropdownOption;
  options: Array<IDropdownOption>;
  handleSelect: (key: Key) => void;
}

export const InputDropdown = ({
  name,
  value: { label, key },
  defaultValue: { label: defaultLabel, key: defaultKey } = { label: '', key: '' },
  options,
  handleSelect,
}: IInputDropdown) => {
  return (
    <>
      <Input className='hidden' name={name} defaultValue={key || defaultKey} />
      <Dropdown>
        <DropdownTrigger name='roles'>
          <Button size='lg' className='w-full h-full' variant='bordered'>
            {label || defaultLabel}
          </Button>
        </DropdownTrigger>
        <DropdownMenu onAction={handleSelect} aria-label='Static Actions'>
          {displayOptions(options)}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
