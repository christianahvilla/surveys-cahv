const Header = () => {
  return (
    <nav
      id='main-navbar'
      className='fixed left-0 right-0 top-0 flex w-full flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60'
      data-te-navbar-ref
      style={{ zIndex: 1000 }}
    >
      <div className='flex w-full flex-wrap items-center justify-between px-4'>
        <button
          data-te-sidenav-toggle-ref
          data-te-target='#sidenav-1'
          className='block border-0 bg-transparent px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden'
          aria-controls='#sidenav-1'
          aria-haspopup='true'
        >
          <span className='block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>

        <ul className='relative mr-4 ml-auto flex items-center'>
          <div className='relative' data-te-dropdown-ref>
            <span
              className='hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none'
              id='navbarDropdownMenuLink'
              role='button'
              data-te-dropdown-toggle-ref
              aria-expanded={true}
          <li className='mr-4'>
            <a href='www.google.com'>
              <span className='fill-gray-500 hover:fill-gray-700 focus:fill-gray-700 dark:fill-gray-200 [&>svg]:w-4'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                  <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                </svg>
              </span>
            </a>
          </li>

          <li className='relative' data-te-dropdown-ref>
            <a
          <div className='relative' data-te-dropdown-ref>
            <span
              className='hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none'
              id='navbarDropdownMenuLink'
              role='button'
              data-te-dropdown-toggle-ref
              aria-expanded='false'
            >
              <img
                src='https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp'
                className='rounded-full'
                style={{ height: 22, width: 22 }}
                alt='Avatar'
                loading='lazy'
              />
            </span>
            </a>
            </span>
            <ul
              className='absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block'
              aria-labelledby='dropdownMenuButton2'
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
                  href='www.google.com'
                  data-te-dropdown-item-ref
                >
                  Mi Perfil
                </a>
              </li>
              <li>
                <a
                  className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
                  href='www.google.com'
                  data-te-dropdown-item-ref
                >
                  Configuración
                </a>
              </li>
              <li>
                <a
                  className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30'
                  href='www.google.com'
                  data-te-dropdown-item-ref
                >
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
          </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
