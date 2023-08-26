import { Card, Input } from '@nextui-org/react';
import { Key, Suspense, useEffect, useState } from 'react';
import { Await, Form, useFetcher, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import { NotificationType } from '~types/notification/notification-object.type';
import { SurveySelectDTO } from '~types/selects/survey-object.type';
import { TitleAction } from '../../../components/app/title-actions/app-title-page.component';
import { FormButtons } from '../../../components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '../../../components/containers/page-container.component';
import { ParentContainer } from '../../../components/containers/parent-container.component';
import { InputDropdown } from '../../../components/inputs/dropdown/input-dropdown.component';
import { SELECT_ELEMENT } from '../../../constants';
import { ApiMethods } from '../../../types/api/api-methods-object.type';
import { ApiError } from '../../../types/api/api-responses.object.type';
import { QuestionEditSurveyDto } from '../../../types/questions/questions-list-object';
import { getDropdownValue, isSubmitting } from '../../../utils/helpers';
import { AVAILABLE_QUESTION_TYPE, EDIT_QUESTION_ROUTE, LIST_QUESTION_ROUTE } from '../constants';
import { EDIT_QUESTION_TITLE } from './constants';
import { QuestionsEditErrorElement } from './questions-edit-error.element';

export const QuestionsEditElement = () => {
  const apiData = useLoaderData() as {
    results: Awaited<QuestionEditSurveyDto>;
  };

  const navigation = useNavigation();
  const fetcher = useFetcher();

  const [questionType, setQuestionType] = useState(
    getDropdownValue('abierta', AVAILABLE_QUESTION_TYPE),
  );

  const params = useParams<{ id: string }>();
  const [survey, setSurvey] = useState<SurveySelectDTO>(SELECT_ELEMENT);
  const { addNotification } = useNotification();

  const handleSelectQuestion = (key: Key) =>
    setQuestionType(getDropdownValue(key, AVAILABLE_QUESTION_TYPE));
  const { state, data } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;

  const handleSelect = (key: Key) =>
    setSurvey(getDropdownValue(key, apiData.results.surveys || []));
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
    <div data-testid='create-questions-element'>
      <ParentContainer>
        <PageContainer>
          <Suspense fallback={<LoadingElement />}>
            <Await errorElement={<QuestionsEditErrorElement />} resolve={apiData.results}>
              {({ question, surveys }: QuestionEditSurveyDto) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitleAction title={EDIT_QUESTION_TITLE} route={LIST_QUESTION_ROUTE} />
                    <Form method={ApiMethods.PATCH} action={`${EDIT_QUESTION_ROUTE}/${params.id}`}>
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
                                  defaultValue={question.text}
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
                                  defaultValue={question.description}
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
                                  defaultValue={question.order}
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
                                    options={surveys}
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
