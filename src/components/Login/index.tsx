import imageLogoPng from '~assets/imageLogo.png';

const Login = () => {
  return (
    <>
      <section className='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
        <div className='container h-full p-10'>
          <div className='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
            <div className='w-full'>
              <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
                <div className='g-0 lg:flex lg:flex-wrap'>
                  <div className='px-4 md:px-0 lg:w-6/12'>
                    <div className='md:mx-6 md:p-12'>
                      <div className='text-center'>
                        <img className='mx-auto w-48' src={imageLogoPng} alt='logo' />
                        <h4 className='mb-12 mt-1 pb-1 text-xl font-semibold'>Somos CAHV Team</h4>
                      </div>

                      <form>
                        <p className='mb-4'>Inicia Sesión</p>
                        <div className='relative mb-4' data-te-input-wrapper-init>
                          <input
                            type='text'
                            className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                            id='exampleFormControlInput1'
                            placeholder='cahv@team.com'
                          />
                          <label
                            htmlFor='exampleFormControlInput1'
                            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
                          >
                            Correo
                          </label>
                        </div>

                        <div className='relative mb-4' data-te-input-wrapper-init>
                          <input
                            type='password'
                            className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                            id='exampleFormControlInput11'
                            placeholder='Contraseña'
                          />
                          <label
                            htmlFor='exampleFormControlInput11'
                            className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
                          >
                            Contraseña
                          </label>
                        </div>

                        <div className='mb-12 pb-1 pt-1 text-center'>
                          <button
                            className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
                            type='button'
                            data-te-ripple-init
                            data-te-ripple-color='light'
                            style={{
                              background:
                                'linear-gradient(to right, #cc24ee, #8c36d8, #7636dd, #4552b4)',
                            }}
                          >
                            Iniciar
                          </button>

                          <a href='#!'>¿Olvidaste tu Contraseña?</a>
                        </div>

                        {/* <div className='flex items-center justify-between pb-6'>
                          <p className='mb-0 mr-2'>Don&apos;t have an account?</p>
                          <button
                            type='button'
                            className='inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                            data-te-ripple-init
                            data-te-ripple-color='light'
                          >
                            Register
                          </button>
                        </div> */}
                      </form>
                    </div>
                  </div>

                  <div
                    className='flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none'
                    style={{
                      background: 'linear-gradient(to right, #cc24ee, #8c36d8, #7636dd, #4552b4)',
                    }}
                  >
                    <div className='px-4 py-6 text-white md:mx-6 md:p-12'>
                      <h4 className='mb-6 text-xl font-semibold'>Somos mas que una compañia</h4>
                      <p className='text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='www.google.com'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{' '}
            <a
              href='www.google.com'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Login;
