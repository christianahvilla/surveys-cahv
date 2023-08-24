import { Key, Suspense, useEffect, useState } from 'react';
import {
  Await,
  Navigate,
  useFetcher,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import useNotification from 'src/hooks/useNotification';
import { SurveysEditErrorElement } from './surveys-edit-error.element';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { SurveyLoaderData } from './types';
import { LIST_SURVEYS_ROUTE } from '../constants';
import { IClientSelectDTO } from '~types/selects/clients-object.type';
import { IRequirementSelectDTO } from '~types/selects/requirements-list-object';
import { EMPTY_PLACEHOLDER, SELECT_ELEMENT } from 'src/constants';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { ParentContainer } from '~components/containers/parent-container.component';
import { PageContainer } from '~components/containers/page-container.component';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { EDIT_SURVEY_TITLE } from './constants';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { Card, Input } from '@nextui-org/react';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';

export const SurveysEditElement = () => {
  const results = useLoaderData() as Awaited<SurveyLoaderData>;

  const navigation = useNavigation();
  const fetcher = useFetcher();
  const [client, setClient] = useState<IClientSelectDTO>(results.survey.client || SELECT_ELEMENT);
  const [requirement, setRequirement] = useState<IRequirementSelectDTO>(
    results.survey.requirement || SELECT_ELEMENT,
  );

  const params = useParams<{ id: string }>();
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
    <div data-testid='edit-survey-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<SurveysEditErrorElement />} resolve={results}>
              {({ clients, survey, requirements }: SurveyLoaderData) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitleAction title={EDIT_SURVEY_TITLE} route={LIST_SURVEYS_ROUTE} />
                    <Form method={ApiMethods.PATCH} action={`/surveys/${params.id}`}>
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
                                  defaultValue={survey.name}
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
                                  defaultValue={survey.description}
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
