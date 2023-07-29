import { Form, Link, useFetcher, useLoaderData, Await, useNavigation } from 'react-router-dom';
import { AVAILABLE_ERRORS, ApiError, IAvailableErrors } from '~types/error/error-object.type';
import { NotificationType } from '~types/notification/notification-object.type';
import { IClientsList } from '~types/clients/clients-list-object';
import { Suspense, useEffect } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { getClientOptions } from './helpers';
import { SurveysCreateErrorElement } from './surveys-create-error.element';
import useNotification from 'src/hooks/useNotification';

export const SurveysCreateElement = () => {
  const fetcher = useFetcher();
  const clientById = useLoaderData() as {
    results: Awaited<IClientsList>;
  };
  const navigation = useNavigation();
  const { state, data } = fetcher;
  const { addNotification } = useNotification();

  const { error, statusCode, message } = (data || {}) as ApiError;

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
    <div data-testid='create-survey-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await errorElement={<SurveysCreateErrorElement />} resolve={clientById.results}>
          {(clients: any) => {
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
                      className='text-lg flex items-center pr-2 font-semibold leading-6 text-gray-900'
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
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='clientId'
                                className='block text-lg font-medium leading-6 text-gray-900'
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
                                  {getClientOptions(clients)}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='border-b border-gray-900/10 pb-12'>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                            <div
                              className='relative mb-3'
                              data-te-datepicker-init
                              data-te-inline='true'
                              data-te-format='dd, mmm, yyyy'
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor='startDate'
                                className='block text-lg font-medium leading-6 text-gray-900'
                              >
                                Seleccione una fecha de inicio
                              </label>
                              <input
                                type='date'
                                name='startDate'
                                id='startDate'
                                className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
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
                                className='block text-lg font-medium leading-6 text-gray-900'
                              >
                                Seleccione una fecha de fin
                              </label>
                              <input
                                type='date'
                                name='endDate'
                                id='endDate'
                                className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                                placeholder='Seleccione una fecha'
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='mt-6 flex items-center justify-end gap-x-6'>
                        <button
                          type='button'
                          className='text-lg font-semibold leading-6 text-gray-900'
                        >
                          <Link to='/surveys/list'>Regresar</Link>
                        </button>
                        <button
                          className='rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                          // type='submit'
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
