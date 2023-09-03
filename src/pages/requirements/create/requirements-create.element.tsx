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
import { LIST_REQUIREMENTS_ROUTE } from '../constants';
import { ADD_REQUIREMENT_TITLE } from './contants';

export const RequirementsCreateElement = () => {
  const fetcher = useFetcher();

  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;
  const { success } = (data || {}) as ApiSuccess;
  const { validation } = (data || {}) as { validation: string };

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

    return <Navigate to='/requirements/list' />;
  }

  return (
    <div data-testid='create-requirement-element'>
      <ParentContainer>
        <PageContainer>
          <TitleAction title={ADD_REQUIREMENT_TITLE} route={LIST_REQUIREMENTS_ROUTE} />
          <Form method={ApiMethods.POST} action='/requirements/create'>
            <Card className='p-6'>
              <div className='space-y-12'>
                <div>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4'>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='text'
                        name='name'
                        label='Nombre'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='number'
                        min={1}
                        errorMessage={validation}
                        name='quantity'
                        label='Cantidad General'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='number'
                        min={1}
                        name='female'
                        label='Femenino'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='number'
                        min={1}
                        name='male'
                        label='Masculino'
                        isRequired
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4'>
                  <div className='sm:col-span-1'>
                    <Input
                      className='w-full'
                      variant='bordered'
                      isDisabled={isSubmitting(state)}
                      type='number'
                      min={1}
                      name='adultLittle'
                      label='Adulto Menor'
                      isRequired
                    />
                  </div>
                  <div className='sm:col-span-1'>
                    <Input
                      className='w-full'
                      variant='bordered'
                      isDisabled={isSubmitting(state)}
                      type='number'
                      min={1}
                      name='adult'
                      label='Adulto'
                      isRequired
                    />
                  </div>
                  <div className='sm:col-span-1'>
                    <Input
                      className='w-full'
                      variant='bordered'
                      isDisabled={isSubmitting(state)}
                      type='number'
                      min={1}
                      name='adultUpper'
                      label='Adulto Mayor'
                      isRequired
                    />
                  </div>
                </div>
              </div>

              <FormButtons backRoute={LIST_REQUIREMENTS_ROUTE} state={state} />
            </Card>
          </Form>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
