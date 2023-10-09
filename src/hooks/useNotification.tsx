import { useContext } from 'react';
import { INotificationContext, NotificationContext } from '~utils/NotificationProvider';

const useNotification = (): INotificationContext => {
  const { message, addNotification, removeNotification } = useContext(NotificationContext);

  return { message, addNotification, removeNotification };
};

export default useNotification;
