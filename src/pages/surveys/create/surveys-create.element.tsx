import { useFetcher, useLoaderData, Await, useNavigation, Navigate } from 'react-router-dom';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { Key, Suspense, useEffect, useState } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { SurveysCreateErrorElement } from './surveys-create-error.element';
import useNotification from 'src/hooks/useNotification';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { IClientSelectDTO, ClientsListSelectDTO } from '~types/selects/clients-object.type';
import { ParentContainer } from '~components/containers/parent-container.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ADD_SURVEYS_ROUTE, LIST_SURVEYS_ROUTE } from '../constants';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { Card, Input } from '@nextui-org/react';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { ADD_SURVEY_TITLE } from './constants';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { EMPTY_PLACEHOLDER, SELECT_ELEMENT } from 'src/constants';
import { IRequirementSelectDTO, RequirementsSelectDTO } from '~types/selects/requirements-object';

export const SurveysCreateElement = () => {
  const results = useLoaderData() as Awaited<{
    clients: ClientsListSelectDTO;
    requirements: RequirementsSelectDTO;
  }>;
  const navigation = useNavigation();
  const fetcher = useFetcher();

  const [client, setClient] = useState<IClientSelectDTO>(SELECT_ELEMENT);
  const [requirement, setRequirement] = useState<IRequirementSelectDTO>(SELECT_ELEMENT);
  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;
  const { success } = (data || {}) as ApiSuccess;

  const handleSelectClient = (key: Key) => setClient(getDropdownValue(key, results.clients || []));

  const handleSelectRequirement = (key: Key) =>
    setRequirement(getDropdownValue(key, results.requirements || []));

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

    return <Navigate to={LIST_SURVEYS_ROUTE} />;
  }

  return (
    <div data-testid='create-survey-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<SurveysCreateErrorElement />} resolve={results}>
              {({ clients, requirements } = results) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitleAction title={ADD_SURVEY_TITLE} route={LIST_SURVEYS_ROUTE} />
                    <Form method={ApiMethods.POST} action={ADD_SURVEYS_ROUTE}>
                      <Card className='p-6'>
                        <div className='space-y-12'>
                          <div className='pb-12'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
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
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  type='text'
                                  name='description'
                                  label='Descripción'
                                  isRequired
                                />
                              </div>
                              <div className='sm:col-span-1'>
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
                          <div className='sm:col-span-1'></div>
                          <div className='border-b border-gray-900/10 pb-12'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                              <Input
                                className='w-full'
                                variant='bordered'
                                isDisabled={isSubmitting(state)}
                                type='date'
                                defaultValue={EMPTY_PLACEHOLDER}
                                name='startDate'
                                lang='es-MX'
                                label='Fecha de inicio'
                                isRequired
                              />
                              <Input
                                className='w-full'
                                variant='bordered'
                                defaultValue={EMPTY_PLACEHOLDER}
                                isDisabled={isSubmitting(state)}
                                type='date'
                                data-te-format='DD/MM/YYYY'
                                name='endDate'
                                lang='es-MX'
                                label='Fecha de termino'
                                isRequired
                              />
                              <div className='sm:col-span-1'>
                                <InputDropdown
                                  handleSelect={handleSelectRequirement}
                                  value={requirement}
                                  defaultValue={SELECT_ELEMENT}
                                  name='requirementsId'
                                  options={requirements}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <FormButtons state={state} backRoute={LIST_SURVEYS_ROUTE} />
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
