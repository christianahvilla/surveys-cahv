import { Key, Suspense, useEffect, useState } from 'react';
import { Await, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { LIST_REQUIREMENTS_ROUTE } from '../constants';
import { ADD_REQUIREMENT_TITLE } from './contants';
import { RequirementsCreateErrorElement } from './requirement-create-error.element';
import { Card, Input } from '@nextui-org/react';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { SELECT_ELEMENT } from 'src/constants';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { SurveySelectListDTO } from '~types/selects/survey-object.type';
import { ApiMethods } from '~types/api/api-methods-object.type';

export const RequirementsCreateElement = () => {
  const apiData = useLoaderData() as {
    results: Awaited<SurveySelectListDTO>;
  };
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const [survey, setSurvey] = useState(SELECT_ELEMENT);

  const handleSelect = (key: Key) => setSurvey(getDropdownValue(key, apiData.results));

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
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<RequirementsCreateErrorElement />} resolve={apiData.results}>
              {(surveys: SurveySelectListDTO) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitleAction title={ADD_REQUIREMENT_TITLE} route={LIST_REQUIREMENTS_ROUTE} />
                    <Form method={ApiMethods.POST} action='/requirements/create'>
                      <Card className='p-6'>
                        <div className='space-y-12'>
                          <div>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
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
                            </div>
                          </div>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div className='sm:col-span-1'>
                              <Input
                                className='w-full'
                                variant='bordered'
                                isDisabled={isSubmitting(state)}
                                type='number'
                                min={1}
                                name='femaleAdvance'
                                label='Avance Femenino'
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
                            <div className='sm:col-span-1'>
                              <Input
                                className='w-full'
                                variant='bordered'
                                isDisabled={isSubmitting(state)}
                                type='number'
                                min={1}
                                name='maleAdvance'
                                label='Avance Masculino'
                                isRequired
                              />
                            </div>
                          </div>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
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
                                name='adultLittleAdvance'
                                label='Adulto Menor Avance'
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
                                label='Adult'
                                isRequired
                              />
                            </div>
                          </div>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div className='sm:col-span-1'>
                              <Input
                                className='w-full'
                                variant='bordered'
                                isDisabled={isSubmitting(state)}
                                type='number'
                                min={1}
                                name='adultAdvance'
                                label='Avance Adulto'
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
                            <div className='sm:col-span-1'>
                              <Input
                                className='w-full'
                                variant='bordered'
                                isDisabled={isSubmitting(state)}
                                type='number'
                                min={1}
                                name='adultUpperAdvance'
                                label='Avance Adulto Mayor'
                                isRequired
                              />
                            </div>
                          </div>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div className='sm:col-span-1'>
                              <InputDropdown
                                handleSelect={handleSelect}
                                value={survey}
                                name='surveyId'
                                defaultValue={SELECT_ELEMENT}
                                options={surveys}
                              />
                            </div>
                          </div>
                        </div>

                        <FormButtons backRoute={LIST_REQUIREMENTS_ROUTE} state={state} />
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
