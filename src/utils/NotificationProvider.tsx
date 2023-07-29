import { useState, useCallback, createContext } from 'react';
import { INotificationElement } from '~components/app/common-notification/notification.element';

type Message = INotificationElement | null;

export interface INotificationContext {
  message: Message;
  addNotification: (message: INotificationElement) => void;
  removeNotification: () => void;
}

interface INotificationProvider {
  children: JSX.Element;
}

export const NotificationContext = createContext<INotificationContext>({
  message: null,
  addNotification: () => null,
  removeNotification: () => null,
});

export default function NotificationProvider({ children }: INotificationProvider) {
  const [notification, setNotification] = useState<Message>(null);

  const removeNotification = () => setNotification(null);

  const addNotification = (message: INotificationElement) => setNotification({ ...message });

  const contextValue = {
    message: notification,
    addNotification: useCallback((message: INotificationElement) => addNotification(message), []),
    removeNotification: useCallback(() => removeNotification(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>
  );
}
