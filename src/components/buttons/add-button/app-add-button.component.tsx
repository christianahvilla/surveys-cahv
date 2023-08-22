import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { TEXT_BUTTON_ADD } from './constants';

interface IAddButton {
  route: string;
}

export const AddButton = ({ route }: IAddButton) => {
  return (
    <Link className='flex self-center' to={route} replace>
      <Button color='primary'>{TEXT_BUTTON_ADD}</Button>
    </Link>
  );
};
