import { Card, Input } from '@nextui-org/react';
import { useEffect, useState, ChangeEvent, DragEvent, Key, Suspense } from 'react';
import { Await, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { InputFile } from '~components/inputs/file/input-file.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { fileToBase64, getDropdownValue, isSubmitting } from '~utils/helpers';
import { ADD_OPTIONS_ROUTE, LIST_OPTIONS_ROUTE } from '../constants';
import { ADD_OPTION_TITLE } from './constants';
import { IQuestionsSelectDTO, QuestionsSelectListDTO } from '~types/selects/questions-object.type';
import { SELECT_ELEMENT } from 'src/constants';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { OptionsCreateErrorElement } from './options-create-error.element';
import { LoadingElement } from '~components/app/loading/loading-element.component';

export const OptionsCreateElement = () => {
  const results = useLoaderData() as {
    questions: Awaited<QuestionsSelectListDTO>;
  };
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [question, setQuestion] = useState<IQuestionsSelectDTO>(SELECT_ELEMENT);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    fileToBase64(event.target.files[0]).then((base64) => {
      setFile(base64);
    });

    setUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    if (!event.dataTransfer.files) {
      return;
    }

    fileToBase64(event.dataTransfer.files[0]).then((base64) => {
      setFile(base64);
    });

    setUrl(URL.createObjectURL(event.dataTransfer.files[0]));
  };

  const handleDeleteFile = () => {
    setFile(null);
    setUrl(undefined);
  };

  const handleSelect = (key: Key) => setQuestion(getDropdownValue(key, results.questions));

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

    return <Navigate to='/options/list' />;
  }

  return (
    <div data-testid='create-user-element'>
      <ParentContainer>
        <PageContainer>
          <Suspense fallback={<LoadingElement />}>
            <Await errorElement={<OptionsCreateErrorElement />} resolve={results.questions}>
              {(questions) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitleAction title={ADD_OPTION_TITLE} route={LIST_OPTIONS_ROUTE} />
                    <Form method={ApiMethods.POST} action={ADD_OPTIONS_ROUTE}>
                      <Card className='p-6'>
                        <div className='space-y-12'>
                          <div className='pb-4'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                              <div className='sm:col-span-1 '>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  type='text'
                                  isDisabled={isSubmitting(state)}
                                  name='name'
                                  label='Nombre'
                                  isRequired
                                />
                              </div>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  type='text'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  name='text'
                                  label='Texto'
                                  isRequired
                                />
                              </div>
                              <div className='sm:col-span-1'>
                                <InputDropdown
                                  handleSelect={handleSelect}
                                  value={question}
                                  defaultValue={SELECT_ELEMENT}
                                  name='questionId'
                                  options={questions}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='border-b border-gray-900/10 pb-12'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8'>
                              <div className='w-full'>
                                <InputFile
                                  state={state}
                                  url={url}
                                  base64File={file}
                                  name='img'
                                  handleDrop={handleDrop}
                                  handleChange={handleFileChange}
                                  handleDelete={handleDeleteFile}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <FormButtons state={state} backRoute={LIST_OPTIONS_ROUTE} />
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
