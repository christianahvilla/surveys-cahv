import { Key, Suspense, useEffect, useState } from 'react';
import { Await, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { ADD_USER_ROUTE, LIST_USER_ROUTE, USER_DROPDOWN_OPTIONS } from '../constants';
import { ADD_USER_TITLE } from './constants';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { Card, Divider, Input } from '@nextui-org/react';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { EMAIL, SELECT_ELEMENT } from 'src/constants';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { InputPassword } from '~components/inputs/password/input-password.component';
import { ClientsListSelectDTO, IClientSelectDTO } from '~types/selects/clients-object.type';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { UsersCreateErrorElement } from './users-create-error.element';

export const UsersCreateElement = () => {
  const results = useLoaderData() as Awaited<{
    clients: ClientsListSelectDTO;
  }>;
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const [role, setRole] = useState(getDropdownValue('admin', USER_DROPDOWN_OPTIONS));
  const [client, setClient] = useState<IClientSelectDTO>(SELECT_ELEMENT);

  const handleSelectRole = (key: Key) => setRole(getDropdownValue(key, USER_DROPDOWN_OPTIONS));
  const handleSelectClient = (key: Key) => setClient(getDropdownValue(key, results.clients || []));

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
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<UsersCreateErrorElement />} resolve={results}>
              {({ clients } = results) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
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
                                  handleSelect={handleSelectRole}
                                  value={role}
                                  name='roles'
                                  options={USER_DROPDOWN_OPTIONS}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='pb-4'>
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
                                <InputPassword isRequired state={state} />
                              </div>
                              <div className='col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  type='phone'
                                  maxLength={10}
                                  name='phone'
                                  label='Celular'
                                  isRequired
                                />
                              </div>
                            </div>
                          </div>
                          <div hidden={Boolean(role.key === 'admin')} className=' pb-4'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                              <InputDropdown
                                handleSelect={handleSelectClient}
                                value={client}
                                defaultValue={SELECT_ELEMENT}
                                name='clientId'
                                options={clients}
                              />
                            </div>
                          </div>
                        </div>
                        <Divider className='mt-8' />
                        <FormButtons state={state} backRoute={LIST_USER_ROUTE} />
                      </Card>
                    </Form>
                  </>
                );
              }}
            </Await>
          </PageContainer>
        </ParentContainer>
      </Suspense>
    </div>
  );
};
