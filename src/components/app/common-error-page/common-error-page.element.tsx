import { ReactNode } from 'react';
import { CommonErrorPage } from './constants';
import { useNavigate } from 'react-router-dom';

interface ICommonErrorPage {
  message: string | ReactNode;
  status: number;
  title: string | ReactNode;
}

export function CommonErrorPageElement({ message, status, title }: ICommonErrorPage) {
  const navigate = useNavigate();

  return (
    <div className=' h-screen w-screen bg-gray-100 flex items-center pl-60 pb-20'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <div className='max-w-md'>
          <div className='text-5xl font-dark font-bold flex space-x-2'>
            Uppsss... <strong> {status} </strong>
          </div>
          <br />
          <br />
          <p className='text-2xl md:text-3xl font-light leading-normal justify-center'>
            <strong className='justify-self-auto'>{title}</strong>
          </p>
          <br />
          <p className='mb-8'>{message}</p>
          <br />
          <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
            <button className='btn btn-primary' onClick={() => navigate('/dashboard')}>
              {CommonErrorPage.returnHome}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
