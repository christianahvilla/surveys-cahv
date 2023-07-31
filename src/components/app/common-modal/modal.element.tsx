import { useCallback } from 'react';
import useModal from 'src/hooks/useModal';
import { formatBody } from './helper';

export interface IModalElement {
  title: string;
  body: Array<string> | string;
  confirmAction: () => void;
}

export const ModalElement = () => {
  const { message, removeModal } = useModal();
  const handleHide = useCallback(() => removeModal(), [removeModal]);
  if (!message) {
    return null;
  }

  const { title, body, confirmAction } = message;
  return (
    <dialog id='modalElement' className='modal'>
      <form method='dialog' className='modal-box'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className='py-4'>{formatBody(body)}</p>
        <div className='modal-action'>
          <button type='button'
            className='ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
            aria-label='Close'
            onClick={confirmAction}
          >
            Aceptar
          </button>
          <button
            type='button'
            className='ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
            aria-label='Close'
            onClick={handleHide}
          >
            Cerrar
          </button>
        </div>
      </form>
    </dialog>
  );
};
