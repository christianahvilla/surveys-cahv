const Header = () => {
  return (
    <nav
      id='main-navbar'
      className='fixed left-0 right-0 top-0 flex w-full flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60'
      data-te-navbar-ref
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
        </ul>
      </div>
    </nav>
  );
};

export default Header;
