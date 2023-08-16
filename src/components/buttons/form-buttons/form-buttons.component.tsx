import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { BACK_MESSAGE, SAVE_MESSAGE } from 'src/constants';
import { isSubmitting } from '~utils/helpers';

interface IFormButtons {
  backRoute: string;
  state: string;
}

export const FormButtons = ({ backRoute, state }: IFormButtons) => {
  return (
    <div className='mt-6 flex items-center justify-end gap-x-6'>
      <Button isDisabled={isSubmitting(state)} type='button' color='secondary' variant='light'>
        <Link to={backRoute}>{BACK_MESSAGE}</Link>
      </Button>
      <Button
        isLoading={isSubmitting(state)}
        isDisabled={isSubmitting(state)}
        type='submit'
        color='primary'
      >
        {SAVE_MESSAGE}
      </Button>
    </div>
  );
};
