import { Link, useFetcher, useLoaderData, Await, useNavigation, Navigate } from 'react-router-dom';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { Suspense, useEffect } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { getSelectOptions } from '../helpers';
import { SurveysCreateErrorElement } from './surveys-create-error.element';
import useNotification from 'src/hooks/useNotification';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { IClientsListSelectDTO } from '~types/selects/clients-object.type';
import { RequirementListDTO } from '~types/requirements/requirements-list-object';

export const SurveysCreateElement = () => {
  const results = useLoaderData() as {
    results: Awaited<{ clients: IClientsListSelectDTO; requirements: RequirementListDTO }>;
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

    return <Navigate to='/surveys/list' />;
  }

  return (
    <div data-testid='create-survey-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await errorElement={<SurveysCreateErrorElement />} resolve={results}>
          {({ clients, requirements } = results) => {
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
                      <Link to='/surveys/list' replace>
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
                      Agregar Encuesta
                    </h3>
                  </div>
                  <Form method='post' action='/surveys/create'>
                    <div className='max-h-fit p-12 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                      <div className='space-y-12'>
                        <div className='pb-12'>
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
                                  autoComplete='name'
                                  id='name'
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
                                  maxLength={32}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='clientId'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Cliente
                              </label>
                              <div className='mt-2'>
                                <select
                                  id='clientId'
                                  className='select select-bordered w-full focus-within:ring-indigo-600'
                                  name='clientId'
                                  defaultValue={clients[0].id}
                                >
                                  {getSelectOptions(clients)}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='border-b border-gray-900/10 pb-12'>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div
                              className='relative mb-3'
                              data-te-datepicker-init
                              data-te-inline='true'
                              data-te-format='dd, mmm, yyyy'
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor='startDate'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Seleccione una fecha de inicio
                              </label>
                              <input
                                type='date'
                                name='startDate'
                                id='startDate'
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                placeholder='Seleccione una fecha'
                              />
                            </div>
                            <div
                              className='relative mb-3'
                              data-te-datepicker-init
                              data-te-inline='true'
                              data-te-format='dd, mmm, yyyy'
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor='endDate'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Seleccione una fecha de fin
                              </label>
                              <input
                                type='date'
                                name='endDate'
                                id='endDate'
                                className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                placeholder='Seleccione una fecha'
                              />
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='requirementsId'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Requisitos
                              </label>
                              <div className='mt-2'>
                                <select
                                  id='requirementsId'
                                  className='select select-bordered w-full focus-within:ring-indigo-600'
                                  name='requirementsId'
                                  defaultValue={requirements[0].id}
                                >
                                  {getSelectOptions(requirements)}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='mt-6 flex items-center justify-end gap-x-6'>
                        <button
                          type='button'
                          className='text-lg font-semibold leading-8 text-gray-900'
                        >
                          <Link to='/surveys/list'>Regresar</Link>
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
