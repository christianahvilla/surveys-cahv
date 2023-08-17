import { Suspense, useEffect } from 'react';
import { Await, Link, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { IUsersList } from '../../../types/users/users-list-object';
import { getUsersOptions } from './helpers';
import { ToursCreateErrorElement } from './tours-create-error.element';
import { ParentContainer } from '../../../components/containers/parent-container.component';
import { PageContainer } from '../../../components/containers/page-container.component';
import { TitleAction } from '../../../components/app/title-actions/app-title-page.component';
import { ADD_TOUR__TITLE } from './constants';
import { ADD_TOUR_ROUTE, LIST_TOUR_ROUTE } from '../constants';
import { ApiMethods } from '../../../types/api/api-methods-object.type';
import { Card, Input } from '@nextui-org/react';
import { isSubmitting } from '../../../utils/helpers';
import { InputDropdown } from '../../../components/inputs/dropdown/input-dropdown.component';
import { FormButtons } from '../../../components/buttons/form-buttons/form-buttons.component';

export const ToursCreateElement = () => {
  const usersById = useLoaderData() as {
    results: Awaited<IUsersList>;
  };
  const navigation = useNavigation();
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
    return <Navigate to='/tours/list' />;
  }

  return (
    <div data-testid='create-tours-element'>
      <ParentContainer>
        <PageContainer>
          <TitleAction title={ADD_TOUR__TITLE} route={LIST_TOUR_ROUTE} />
          <Form method={ApiMethods.POST} action={ADD_TOUR_ROUTE}>
            <Card className='p-6'>
              <div className='space-y-12'>
                <div className='pb-4'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='state'
                        name='state'
                        label='Estado'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='city'
                        name='city'
                        label='Ciudad'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='colony'
                        name='colony'
                        label='Colonia'
                        isRequired
                      />
                    </div>
                  </div>
                </div>
                <div className='border-b border-gray-900/10 pb-12'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='cp'
                        name='cp'
                        label='Código Postal'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='order'
                        name='order'
                        label='Orden'
                        isRequired
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FormButtons state={state} backRoute={LIST_TOUR_ROUTE} />
            </Card>
          </Form>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
