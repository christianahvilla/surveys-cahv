import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSaveQuestion } from 'src/hooks/useSaveQuestion';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { displayAvailableQuestionType, displaySurveysOptions } from '../helpers';
import useNotification from 'src/hooks/useNotification';
import { useGetSurveys } from 'src/hooks/useGetSurveys';
import { AVAILABLE_QUESTION_TYPE } from '../constants';
import { QuestionValues } from '~types/questions/questions-action-objects';
import { LoadingElement } from '~components/app/loading/loading-element.component';

export const QuestionsCreateElement = () => {
  const [question, setQuestion] = useState<QuestionValues>({
    description: '',
    surveyId: '',
    text: '',
    order: 0,
    type: '',
  });
  const { isLoading: isLoadingSave, error: errorSave, saveQuestion, isSaved } = useSaveQuestion();
  const { surveys, isLoading: isLoadingSurveys, error: errorSurveys } = useGetSurveys();
  const { addNotification } = useNotification();

  const error = errorSave || errorSurveys;

  if (errorSurveys) {
    throw errorSurveys;
  }

  const { statusCode, message } = error || {};

  useEffect(() => {
    if (error) {
      addNotification({
        title: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors].title,
        body: message || '',
        type: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors]
          .type as unknown as NotificationType.ERROR,
      });
    }
  }, [addNotification, error, message, statusCode]);

  const handleChangeQuestion = (event: any) => {
    const { target } = event;
    const { id, value } = target;

    if (!id || !value) {
      return;
    }

    setQuestion({
      ...(question || {}),
      [id as keyof QuestionValues]: value,
    });
  };

  const handleSubmitQuestion = () => {
    if (!question) {
      return;
    }

    const formattedBody = {
      textoPregunta: question.text,
      orden: Number(question.order),
      tipo: question.type || AVAILABLE_QUESTION_TYPE[0].value,
      encuestaId: question.surveyId || surveys[0].id,
      descripcion: question.description,
    };

    saveQuestion(formattedBody);
  };

  if (isSaved) {
    addNotification(NOTIFICATION_SUCCESS);

    <Navigate to='/questions/list' />;
  }

  if (isLoadingSurveys) {
    return <LoadingElement />;
  }

  return (
    <div data-testid='questions-element'>
      <div className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60' id='content'>
        <div className='p-12'>
          <div className='flex flex-row  flex-nowrap'>
            <button
              type='button'
              className='text-lg flex items-center pr-2 font-semibold leading-8 text-gray-900'
            >
              <Link to='/questions/list' replace>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>
              </Link>
            </button>
            <h3 className='my-6 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
              Agregar Pregunta
            </h3>
          </div>
          <div>
            <div className='max-h-fit p-12 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
              <div className='space-y-12'>
                <div className='pb-12'>
                  <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2'>
                    <div className='sm:col-span-1'>
                      <label
                        htmlFor='text'
                        className='block text-lg font-medium leading-8 text-gray-900'
                      >
                        Texto
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='text'
                          id='text'
                          onChange={handleChangeQuestion}
                          maxLength={32}
                          className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-1'>
                      <label
                        htmlFor='description'
                        className='block text-lg font-medium leading-8 text-gray-900'
                      >
                        Descripción
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='description'
                          id='description'
                          onChange={handleChangeQuestion}
                          maxLength={32}
                          className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pb-12'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                    <div className='sm:col-span-1'>
                      <label
                        htmlFor='order'
                        className='block text-lg font-medium leading-8 text-gray-900'
                      >
                        Órden
                      </label>
                      <div className='mt-2'>
                        <input
                          type='number'
                          name='order'
                          min={1}
                          onChange={handleChangeQuestion}
                          max={99}
                          id='order'
                          className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-1'>
                      <label
                        htmlFor='survey'
                        className='block text-lg font-medium leading-8 text-gray-900'
                      >
                        Encuesta
                      </label>
                      <div className='mt-2'>
                        <select
                          id='survey'
                          className='select select-bordered w-full focus-within:ring-indigo-600'
                          name='survey'
                          onChange={handleChangeQuestion}
                          defaultValue={surveys[0]?.id}
                        >
                          {displaySurveysOptions(surveys)}
                        </select>
                      </div>
                    </div>
                    <div className='sm:col-span-1'>
                      <label
                        htmlFor='type'
                        className='block text-lg font-medium leading-8 text-gray-900'
                      >
                        Tipo
                      </label>
                      <div className='mt-2'>
                        <select
                          id='type'
                          className='select select-bordered w-full focus-within:ring-indigo-600'
                          name='type'
                          onChange={handleChangeQuestion}
                          defaultValue='abierta'
                        >
                          {displayAvailableQuestionType()}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button type='button' className='text-lg font-semibold leading-8 text-gray-900'>
                  <Link to='/questions/list'>Regresar</Link>
                </button>
                <button
                  className='rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  onClick={handleSubmitQuestion}
                  disabled={isLoadingSave}
                >
                  {isLoadingSave ? (
                    <>
                      <span className='loading loading-spinner'></span>
                    </>
                  ) : (
                    <>Guardar</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
