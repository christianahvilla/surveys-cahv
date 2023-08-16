import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '~components/Icons/ArrowBackIcon';

interface IBackButton {
  route: string;
}

export const BackButton = ({ route }: IBackButton) => {
  return (
    <Link className='self-center mr-2 px-0' to={route} replace>
      <Button color='secondary' variant='light'>
        <ArrowBackIcon />
      </Button>
    </Link>
  );
};
