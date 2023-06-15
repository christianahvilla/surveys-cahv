/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import { Link } from 'react-router-dom';

export function HeaderElement() {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className='navbar bg-base-100' style={{ zIndex: 10000 }}>
      <div className='flex-1'></div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/account'>Cuenta</Link>
            </li>
            <li onClick={handleLogout}>
              <button>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
