import { Button, Card, Input } from '@nextui-org/react';
import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { OAuth } from '~pages/utils/OAuth';
import { ApiError } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import { NotificationType } from '~types/notification/notification-object.type';
import { isSubmitting } from '~utils/helpers';
import { LOGIN, LOGIN_FORM_TITTLE, LOGIN_URL } from './constants';
import './style.css';
import { FocusIcon } from '~components/Icons/FocusIcon';
import { APP_NAME, EMAIL } from 'src/constants';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { InputPassword } from '~components/inputs/password/input-password.component';

export const LoginElement = () => {
  const fetcher = useFetcher();
  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;

  useEffect(() => {
    if (error) {
      addNotification({
        title: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors].title,
        body: message,
        type: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors]
          .type as unknown as NotificationType.ERROR,
      });
    }
  }, [addNotification, error, message, statusCode]);

  return (
    <div data-testid='login-element' className='h-full'>
      <OAuth>
        <>
          <section className='bg-gray-50 dark:bg-gray-900 h-full w-full bg-image'></section>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-fullno'>
            <div className='flex justify-center align-middle mb-10'>
              <FocusIcon />
              <h1 className='text-3xl font-bold leading-tight tracking-tight text-gray-100 md:text-3xl dark:text-white pb-4'>
                {APP_NAME}
              </h1>
            </div>
            <Card className='max-w-4xl lg:w-1/3 md:w-1/2 sm:w-full'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white pb-4'>
                  {LOGIN_FORM_TITTLE}
                </h1>
                <Form
                  className='space-y-4 md:space-y-6'
                  method={ApiMethods.POST}
                  action={LOGIN_URL}
                >
                  <div className='pb-2'>
                    <Input
                      className='w-full'
                      variant='bordered'
                      isDisabled={isSubmitting(state)}
                      type='email'
                      name='email'
                      label={EMAIL}
                      isRequired
                    />
                  </div>
                  <div className='pb-2'>
                    <InputPassword state={state} />
                  </div>
                  <Button
                    isLoading={isSubmitting(state)}
                    type='submit'
                    className='w-full'
                    color='primary'
                  >
                    {LOGIN}
                  </Button>
                </Form>
              </div>
            </Card>
          </div>
        </>
      </OAuth>
    </div>
  );
};
