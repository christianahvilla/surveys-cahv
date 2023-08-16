import { Key, useEffect, useState } from 'react';
import { Navigate, useFetcher } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import {
  ADD_USER_ROUTE,
  LIST_USER_ROUTE,
  USER_DROPDOWN_OPTIONS as USER_DROPDOWN_OPTIONS,
} from '../constants';
import { ADD_USER_TITLE } from './constants';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { Card, Input } from '@nextui-org/react';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { EMAIL } from 'src/constants';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { InputPassword } from '~components/inputs/password/input-password.component';

export const UsersCreateElement = () => {
  const fetcher = useFetcher();
  const [role, setRole] = useState(getDropdownValue('admin', USER_DROPDOWN_OPTIONS));

  const handleSelect = (key: Key) => setRole(getDropdownValue(key, USER_DROPDOWN_OPTIONS));

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

    return <Navigate to='/users/list' />;
  }

  return (
    <div data-testid='create-user-element'>
      <ParentContainer>
        <PageContainer>
          <TitleAction title={ADD_USER_TITLE} route={LIST_USER_ROUTE} />
          <Form method={ApiMethods.POST} action={ADD_USER_ROUTE}>
            <Card className='p-6'>
              <div className='space-y-12'>
                <div className='pb-4'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='username'
                        name='username'
                        label='Nombre de usuario'
                        isRequired
                      />
                    </div>
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
                    <div className='sm:col-span-1'>
                      <InputDropdown
                        handleSelect={handleSelect}
                        value={role}
                        name='roles'
                        options={USER_DROPDOWN_OPTIONS}
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
                        type='email'
                        name='email'
                        label={EMAIL}
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <InputPassword state={state} />
                    </div>
                    <div className='col-span-1'>
                      <Input
                        className='w-full'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        type='phone'
                        name='phone'
                        label='Celular'
                        isRequired
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FormButtons state={state} backRoute={LIST_USER_ROUTE} />
            </Card>
          </Form>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
