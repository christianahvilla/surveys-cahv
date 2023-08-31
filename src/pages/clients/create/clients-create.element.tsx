import { Card, Input } from '@nextui-org/react';
import { useEffect } from 'react';
import { Navigate, useFetcher } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { isSubmitting } from '~utils/helpers';
import { ADD_CLIENT_ROUTE, LIST_CLIENT_ROUTE } from '../constants';
import { ADD_CLIENT_TITLE } from './constants';

export const ClientsCreateElement = () => {
  const fetcher = useFetcher();
  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;

  const { error, statusCode, message } = (data || {}) as ApiError;
  const { success } = (data || {}) as ApiSuccess;

  useEffect(() => {
    if (error && state !== 'submitting') {
      addNotification({
        title: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors].title,
        body: message,
        type: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors]
          .type as unknown as NotificationType.ERROR,
      });
    }
  }, [addNotification, error, message, state, statusCode]);

  if (success && state !== 'submitting') {
    addNotification(NOTIFICATION_SUCCESS);
    return <Navigate to='/clients/list' />;
  }

  return (
    <div data-testid='create-user-element'>
      <ParentContainer>
        <PageContainer>
          <TitleAction title={ADD_CLIENT_TITLE} route={LIST_CLIENT_ROUTE} />
          <Form method={ApiMethods.POST} action={ADD_CLIENT_ROUTE}>
            <Card className='p-6'>
              <div className='space-y-12'>
                <div className='pb-4'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1'>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='name'
                        name='name'
                        label='Nombre'
                        isRequired
                      />
                    </div>
                  </div>
                </div>
              </div>
              <FormButtons state={state} backRoute={LIST_CLIENT_ROUTE} />
            </Card>
          </Form>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
