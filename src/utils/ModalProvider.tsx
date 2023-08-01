import { useCallback, useState, createContext } from 'react';
import { IModalElement } from '~components/app/common-modal/modal.element';

type Message = IModalElement | null;

export interface IModalContext {
    message: Message;
    addModal: (message: IModalElement) => void;
    removeModal: () => void;
}

interface IModalProvider {
    children: JSX.Element;
}

export const ModalContext = createContext<IModalContext>({
    message: null,
    addModal: () => null,
    removeModal: () => null,
});

export default function ModalProvider({ children }: IModalProvider) {
    const [modal, setModal] = useState<Message>(null);

    const removeModal = () => setModal(null);

    const addModal = (message: IModalElement) => setModal({ ...message });

    const contextValue = {
        message: modal,
        addModal: useCallback((message) => {
            addModal(message);
            window['modalElement'].showModal();
        }, []),
        removeModal: useCallback(() => removeModal(), []),
    };

    return (
        <ModalContext.Provider value={contextValue}>{children}
        </ModalContext.Provider>
    );
}
