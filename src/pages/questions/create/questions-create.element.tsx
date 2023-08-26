import { Card, Input } from '@nextui-org/react';
import { Key, Suspense, useEffect, useState } from 'react';
import { Await, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
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
import { SurveySelectDTO, SurveySelectListDTO } from '~types/selects/survey-object.type';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { SELECT_ELEMENT } from '../../../constants';
import { ADD_QUESTION_ROUTE, AVAILABLE_QUESTION_TYPE, LIST_QUESTION_ROUTE } from '../constants';
import { ADD_QUESTIONS_TITLE } from './constants';
import { QuestionsCreateErrorElement } from './questions-create-error.element';

export const QuestionsCreateElement = () => {
  const surveyId = useLoaderData() as {
    results: Awaited<SurveySelectListDTO>;
  };

  const navigation = useNavigation();
  const fetcher = useFetcher();

  const [questionType, setQuestionType] = useState(
    getDropdownValue('abierta', AVAILABLE_QUESTION_TYPE),
  );
  const [survey, setSurvey] = useState<SurveySelectDTO>(SELECT_ELEMENT);
  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;
  const { success } = (data || {}) as ApiSuccess;

  const handleSelectQuestion = (key: Key) =>
    setQuestionType(getDropdownValue(key, AVAILABLE_QUESTION_TYPE));
  const handleSelect = (key: Key) => setSurvey(getDropdownValue(key, surveyId.results || []));
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
    return <Navigate to='/questions/list' />;
  }
  return (
    <div data-testid='create-questions-element'>
      <ParentContainer>
        <PageContainer>
          <Suspense fallback={<LoadingElement />}>
            <Await errorElement={<QuestionsCreateErrorElement />} resolve={surveyId.results}>
              {(results) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitleAction title={ADD_QUESTIONS_TITLE} route={LIST_QUESTION_ROUTE} />
                    <Form method={ApiMethods.POST} action={ADD_QUESTION_ROUTE}>
                      <Card className='p-6'>
                        <div className='space-y-12'>
                          <div className='pb-4'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  type='questionText'
                                  name='questionText'
                                  label='Texto'
                                  isRequired
                                />
                              </div>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  type='description'
                                  name='description'
                                  label='Descripcion'
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
                                  label='orden'
                                  isRequired
                                />
                              </div>
                            </div>
                            <div className='border-b border-gray-900/10 pb-12'>
                              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                                <div className='sm:col-span-1'>
                                  <InputDropdown
                                    handleSelect={handleSelect}
                                    value={survey}
                                    defaultValue={SELECT_ELEMENT}
                                    name='surveyId'
                                    options={results}
                                  />
                                </div>
                                <div className='sm:col-span-1'>
                                  <InputDropdown
                                    handleSelect={handleSelectQuestion}
                                    value={questionType}
                                    name='questionType'
                                    options={AVAILABLE_QUESTION_TYPE}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <FormButtons state={state} backRoute={LIST_QUESTION_ROUTE} />
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
