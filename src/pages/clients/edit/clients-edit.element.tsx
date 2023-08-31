import { Card, Input } from '@nextui-org/react';
import { Suspense, useEffect } from 'react';
import { Await, Form, useFetcher, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError } from '~types/api/api-responses.object.type';
import { IClientDTO, IClientsList } from '~types/clients/clients-list-object';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import { NotificationType } from '~types/notification/notification-object.type';
import { isSubmitting } from '~utils/helpers';
import { EDIT_CLIENT_ROUTE, LIST_CLIENT_ROUTE } from '../constants';
import { ClientsEditErrorElement } from './clients-edit-error.element';
import { EDIT_CLIENT_TITLE } from './constants';

export const ClientsEditElement = () => {
  const clientById = useLoaderData() as {
    results: Awaited<IClientsList>;
  };

  const navigation = useNavigation();
  const fetcher = useFetcher();

  const params = useParams<{ id: string }>();
  const { addNotification } = useNotification();

  const { state, data } = fetcher;
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
    <div data-testid='edit-client-element'>
      <ParentContainer>
        <PageContainer>
          <Suspense fallback={<LoadingElement />}>
            <Await errorElement={<ClientsEditErrorElement />} resolve={clientById.results}>
              {(client: IClientDTO) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitleAction title={EDIT_CLIENT_TITLE} route={LIST_CLIENT_ROUTE} />
                    <Form method={ApiMethods.PATCH} action={`${EDIT_CLIENT_ROUTE}/${params.id}`}>
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
                                  defaultValue={client.name}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <FormButtons state={state} backRoute={LIST_CLIENT_ROUTE} />
                      </Card>
                    </Form>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
