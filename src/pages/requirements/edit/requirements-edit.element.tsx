import { Link, useFetcher, useLoaderData, Await, useNavigation, Navigate } from 'react-router-dom';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { Suspense, useEffect } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import useNotification from 'src/hooks/useNotification';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { RequirementsEditErrorElement } from './requirements-edit-error.element';
import { RequirementEditSurveyDTO } from '~types/requirements/requirement-edit-object';
import { getSurveyOptions } from '../helpers';

export const RequirementsEditElement = () => {
  const surveys = useLoaderData() as {
    results: Awaited<RequirementEditSurveyDTO>;
  };
  const navigation = useNavigation();
  const fetcher = useFetcher();

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

    return <Navigate to='/requirements/list' />;
  }

  return (
    <div data-testid='create-requirement-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await errorElement={<RequirementsEditErrorElement />} resolve={surveys.results}>
          {({ surveys, requirement }: RequirementEditSurveyDTO) => {
            if (navigation.state === 'loading')
              return (
                <div
                  className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60'
                  id='content'
                >
                  <div className='p-12'>
                    <LoadingElement />
                  </div>
                </div>
              );
            return (
              <div
                className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60'
                id='content'
              >
                <div className='p-12'>
                  <div className='flex flex-row  flex-nowrap'>
                    <button
                      type='button'
                      className='text-lg flex items-center pr-2 font-semibold leading-8 text-gray-900'
                    >
                      <Link to='/requirements/list' replace>
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
                      Editar Requisito
                    </h3>
                  </div>
                  <Form method='patch' action='/requirements/edit/:id'>
                    <div className='max-h-fit p-12 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                      <div className='space-y-12'>
                        <div>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='name'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Nombre
                              </label>
                              <div className='mt-2'>
                                <input
                                  type='text'
                                  name='name'
                                  defaultValue={requirement.name}
                                  autoComplete='name'
                                  id='name'
                                  maxLength={32}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='female'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Femenino
                              </label>
                              <div className='mt-2'>
                                <input
                                  name='female'
                                  id='female'
                                  min={1}
                                  defaultValue={requirement.female}
                                  type='number'
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='femaleAdvance'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Avance femenino
                              </label>
                              <div className='mt-2'>
                                <input
                                  name='femaleAdvance'
                                  id='femaleAdvance'
                                  min={1}
                                  defaultValue={requirement.femaleAdvance}
                                  type='number'
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='male'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Masculino
                            </label>
                            <div className='mt-2'>
                              <input
                                name='male'
                                id='male'
                                defaultValue={requirement.male}
                                min={1}
                                type='number'
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='maleAdvance'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Avance masculino
                            </label>
                            <div className='mt-2'>
                              <input
                                name='maleAdvance'
                                id='maleAdvance'
                                defaultValue={requirement.maleAdvance}
                                min={1}
                                type='number'
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='adultLittle'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Adulto menor
                            </label>
                            <div className='mt-2'>
                              <input
                                name='adultLittle'
                                id='adultLittle'
                                min={1}
                                type='number'
                                defaultValue={requirement.adultLittle}
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='adultLittleAdvance'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Adulto menor avance
                            </label>
                            <div className='mt-2'>
                              <input
                                name='adultLittleAdvance'
                                id='adultLittleAdvance'
                                min={1}
                                defaultValue={requirement.adultLittleAdvance}
                                type='number'
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='adult'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Adulto
                            </label>
                            <div className='mt-2'>
                              <input
                                name='adult'
                                id='adult'
                                min={1}
                                type='number'
                                defaultValue={requirement.adult}
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='adultAdvance'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Avance Adulto
                            </label>
                            <div className='mt-2'>
                              <input
                                name='adultAdvance'
                                id='adultAdvance'
                                min={1}
                                type='number'
                                defaultValue={requirement.adultAdvance}
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='adultUpper'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Adulto mayor
                            </label>
                            <div className='mt-2'>
                              <input
                                name='adultUpper'
                                id='adultUpper'
                                min={1}
                                type='number'
                                defaultValue={requirement.adultUpper}
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='adultUpperAdvance'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Avance adulto mayor
                            </label>
                            <div className='mt-2'>
                              <input
                                name='adultUpperAdvance'
                                id='adultUpperAdvance'
                                min={1}
                                defaultValue={requirement.adultUpperAdvance}
                                type='number'
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                              />
                            </div>
                          </div>
                          <div className='sm:col-span-1'>
                            <label
                              htmlFor='surveyId'
                              className='block text-lg font-medium leading-8 text-gray-900'
                            >
                              Encuesta
                            </label>
                            <div className='mt-2'>
                              <select
                                id='surveyId'
                                className='select select-bordered w-full focus-within:ring-indigo-600'
                                name='surveyId'
                                defaultValue={requirement.surveyId}
                              >
                                {getSurveyOptions(surveys)}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mt-6 flex items-center justify-end gap-x-6'>
                        <button
                          type='button'
                          className='text-lg font-semibold leading-8 text-gray-900'
                        >
                          <Link to='/requirements/list'>Regresar</Link>
                        </button>
                        <button
                          className='rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                          disabled={state === 'submitting'}
                        >
                          {state === 'submitting' ? (
                            <>
                              <span className='loading loading-spinner'></span>
                            </>
                          ) : (
                            <>Guardar</>
                          )}
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
