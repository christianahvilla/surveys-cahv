import { Card, Input } from '@nextui-org/react';
import { Key, Suspense, useEffect, useState } from 'react';
import { Await, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import { SELECT_ELEMENT } from 'src/constants';
import useNotification from 'src/hooks/useNotification';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { RequirementEditSurveyDTO } from '~types/requirements/requirement-edit-object';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { LIST_REQUIREMENTS_ROUTE } from '../constants';
import { EDIT_REQUIREMENT_TITLE } from './contants';
import { RequirementsEditErrorElement } from './requirements-edit-error.element';

export const RequirementsEditElement = () => {
  const apiData = useLoaderData() as {
    results: Awaited<RequirementEditSurveyDTO>;
  };
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const [survey, setSurvey] = useState(SELECT_ELEMENT);

  const handleSelect = (key: Key) => setSurvey(getDropdownValue(key, apiData.results.surveys));

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
            <Await errorElement={<RequirementsEditErrorElement />} resolve={apiData.results}>
              {({ surveys, requirement }: RequirementEditSurveyDTO) => {
                if (navigation.state === 'loading') <LoadingElement />;

                return (
                  <>
                    <TitleAction title={EDIT_REQUIREMENT_TITLE} route={LIST_REQUIREMENTS_ROUTE} />
                    <Form method={ApiMethods.PATCH} action='/requirements/edit/:id'>
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
                                  defaultValue={requirement.name}
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
                                  defaultValue={String(requirement.quantity)}
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
                                  defaultValue={String(requirement.female)}
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
                                defaultValue={String(requirement.femaleAdvance)}
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
                                defaultValue={String(requirement.male)}
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
                                defaultValue={String(requirement.maleAdvance)}
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
                                defaultValue={String(requirement.adultLittle)}
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
                                defaultValue={String(requirement.adultLittleAdvance)}
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
                                defaultValue={String(requirement.adult)}
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
                                defaultValue={String(requirement.adultAdvance)}
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
                                defaultValue={String(requirement.adultUpper)}
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
                                defaultValue={String(requirement.adultUpperAdvance)}
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
                                defaultValue={SELECT_ELEMENT}
                                name='surveyId'
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
