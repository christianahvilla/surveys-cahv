import { useContext } from 'react';
import { IModalContext, ModalContext } from '~utils/ModalProvider';

const useModal = (): IModalContext => {
  const { message, addModal, removeModal } = useContext(ModalContext);

  return { message, addModal, removeModal };
};

export default useModal;