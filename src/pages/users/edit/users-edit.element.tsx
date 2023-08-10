import { Suspense, useEffect } from 'react';
import {
  Await,
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { AVAILABLE_ERRORS, ApiError, IAvailableErrors } from '~types/error/error-object.type';
import { NotificationType } from '~types/notification/notification-object.type';
import { IUserDTO } from '~types/users/users-list-object';
import { UsersEditErrorElement } from './users-edit-error.element';
import useNotification from 'src/hooks/useNotification';

export const UsersEditElement = () => {
  const userById = useLoaderData() as {
    results: Awaited<IUserDTO>;
  };

  const navigation = useNavigation();
  const fetcher = useFetcher();

  const params = useParams<{ id: string }>();
  const { addNotification } = useNotification();

  const { state, data } = fetcher;
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
    <div data-testid='create-user-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await errorElement={<UsersEditErrorElement />} resolve={userById.results}>
          {(user: IUserDTO) => {
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
                      <Link to='/users/list/0' replace>
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
                      Editar Usuario
                    </h3>
                  </div>
                  <Form method='patch' action={`/users/${params.id}`}>
                    <div className='max-h-fit p-12 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                      <div className='space-y-12'>
                        <div className='pb-12'>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='username'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Username
                              </label>
                              <div className='mt-2'>
                                <input
                                  type='text'
                                  name='username'
                                  autoComplete='username'
                                  id='username'
                                  defaultValue={user.username}
                                  maxLength={32}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='name'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Nombre Completo
                              </label>
                              <div className='mt-2'>
                                <input
                                  type='text'
                                  name='name'
                                  autoComplete='name'
                                  id='name'
                                  defaultValue={user.name}
                                  maxLength={32}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='roles'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Roles
                              </label>
                              <div className='mt-2'>
                                <select
                                  id='roles'
                                  className='select select-bordered w-full focus-within:ring-indigo-600'
                                  name='roles'
                                  defaultValue={user.roles}
                                >
                                  <option value='admin'>Admin</option>
                                  <option value='supervisor'>Supervisor</option>
                                  <option value='promotor'>Promotor</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='border-b border-gray-900/10 pb-12'>
                          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='email'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Correo
                              </label>
                              <div className='mt-2'>
                                <input
                                  type='text'
                                  defaultValue={user.email}
                                  name='email'
                                  autoComplete='email'
                                  id='email'
                                  maxLength={32}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='sm:col-span-1'>
                              <label
                                htmlFor='password'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Contraseña
                              </label>
                              <div className='mt-2'>
                                <input
                                  type='password'
                                  name='password'
                                  autoComplete='current-password'
                                  id='password'
                                  maxLength={32}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
                              </div>
                            </div>
                            <div className='col-span-1'>
                              <label
                                htmlFor='phone'
                                className='block text-lg font-medium leading-8 text-gray-900'
                              >
                                Celular
                              </label>
                              <div className='mt-2'>
                                <input
                                  type='text'
                                  name='phone'
                                  id='phone'
                                  defaultValue={user.phone}
                                  autoComplete='tel'
                                  maxLength={10}
                                  className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8'
                                />
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
                          <Link to='/users/list'>Regresar</Link>
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
