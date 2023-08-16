import { Input } from '@nextui-org/react';
import { useState } from 'react';
import { PASSWORD } from 'src/constants';
import { EyeFilledIcon } from '~components/Icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '~components/Icons/EyeSlashFilledIcon';
import { isSubmitting } from '~utils/helpers';

interface IInputPassword {
  state: string;
  isRequired?: boolean;
}

export const InputPassword = ({ state, isRequired }: IInputPassword) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      label={PASSWORD}
      isDisabled={isSubmitting(state)}
      variant='bordered'
      name='password'
      isRequired={isRequired}
      endContent={
        <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          ) : (
            <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className='w-full'
    />
  );
};
