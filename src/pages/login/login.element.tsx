import { OAuth } from '~pages/utils/OAuth';

export const LoginElement = () => {
  // const [username, setUsername] = useState<string>();
  // const [password, setPassword] = useState<string>();

  // const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { target } = e;
  //   const { value } = target;
  //   setUsername(value);
  // };

  // const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { target } = e;
  //   const { value } = target;
  //   setPassword(value);
  // };

  // const handleSubmit = async () => {
  //   const data = {
  //     account: username,
  //     password,
  //   };

  //   try {
  //     const response = await fetch('http://localhost:3000/auth/login', {
  //       body: JSON.stringify(data),
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     });

  //     console.log(response);

  //     if (response.status === 401) {
  //       alert('Invalid Credentials');
  //       return;
  //     }

  //     const jsonResponse = await response.json();
  //     localStorage.setItem('user', JSON.stringify(jsonResponse));
  //     window.location.reload();
  //   } catch (error) {
  //     alert('Something went wrong!');
  //     console.error(error);
  //   }
  // };

  return (
    <div data-testid='login-element' className='h-full'>
      <OAuth>
        <section className='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
          <div className='container h-full p-10'>
            <div className='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
              <div className='w-full'>
                <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
                  <div className='g-0 lg:flex lg:flex-wrap'>
                    <div className='px-4 md:px-0 lg:w-6/12'>
                      <div className='md:mx-6 md:p-12'>
                        <div className='text-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-48 h-32 mx-auto'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
                            />
                          </svg>

                          {/* <img className='mx-auto w-48' src={imageLogoPng} alt='logo' /> */}
                          <h4 className='mb-12 mt-1 pb-1 text-xl font-semibold'>Somos Focus</h4>
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
                          </div>
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
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className='gradient-form h-full w-full justify-center bg-neutral-200 dark:bg-neutral-700 flex'>
          <div className='container h-full p-10 w-full justify-center'>
            <div className='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
              <div className='w-full'>
                <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
                  <div className='g-0 lg:flex lg:flex-wrap'>
                    <div className='px-4 md:px-0 lg:w-6/12'>
                      <div className='md:mx-6 md:p-12'>
                        <div className='text-center'>
                          <img className='mx-auto w-48' src={imageLogoPng} alt='logo' />
                          <h4 className='mb-12 mt-1 pb-1 text-xl font-semibold'>
                            Financial Credit Union
                          </h4>
                        </div>

                        <form>
                          <div className='relative mb-4' data-te-input-wrapper-init>
                            <input
                              type='text'
                              className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                              id='exampleFormControlInput1'
                              placeholder='cahv@team.com'
                              onChange={handleUsername}
                            />
                            <label
                              htmlFor='exampleFormControlInput1'
                              className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
                            >
                              Userame
                            </label>
                          </div>

                          <div className='relative mb-4' data-te-input-wrapper-init>
                            <input
                              type='password'
                              className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                              id='exampleFormControlInput11'
                              placeholder='Password'
                              onChange={handlePassword}
                            />
                            <label
                              htmlFor='exampleFormControlInput11'
                              className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
                            >
                              Password
                            </label>
                          </div>

                          <div className='mb-12 pb-1 pt-1 text-center'>
                            <button
                              className='mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
                              type='button'
                              data-te-ripple-init
                              data-te-ripple-color='light'
                              onClick={handleSubmit}
                              style={{
                                background:
                                  'linear-gradient(to right, #cc24ee, #8c36d8, #7636dd, #4552b4)',
                              }}
                            >
                              Login
                            </button>
                          </div>

                          <div className='flex items-center justify-between pb-6'>
                            <p className='mb-0 mr-2'>Don&apos;t have an account?</p>
                            <Link to='/signup'>
                              <button
                                type='button'
                                className='inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                                data-te-ripple-init
                                data-te-ripple-color='light'
                              >
                                Register
                              </button>
                            </Link>
                          </div>
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
                        <h4 className='mb-6 text-xl font-semibold'>Banking Focused on You</h4>
                        <p className='text-sm'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </OAuth>
    </div>
  );
};
