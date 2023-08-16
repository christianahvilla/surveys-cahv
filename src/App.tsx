import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ModalElement } from '~components/app/common-modal/modal.element';
import { NotificationElement } from '~components/app/common-notification/notification.element';
import { routes } from '~pages/routes';
import ModalProvider from '~utils/ModalProvider';
import NotificationProvider from '~utils/NotificationProvider';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <NextUIProvider>
      <ModalProvider>
        <NotificationProvider>
          <>
            <RouterProvider router={router} />
            <NotificationElement />
            <ModalElement />
          </>
        </NotificationProvider>
      </ModalProvider>
    </NextUIProvider>
  );
}

export default App;
