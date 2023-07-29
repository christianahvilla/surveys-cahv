import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotificationElement } from '~components/app/common-notification/notification.element';
import { routes } from '~pages/routes';
import NotificationProvider from '~utils/NotificationProvider';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <NotificationProvider>
      <>
        <RouterProvider router={router} />
        <NotificationElement />
      </>
    </NotificationProvider>
  );
}

export default App;
