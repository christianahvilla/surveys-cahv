import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '~pages/routes';

console.log(import.meta.env.VITE_API_HOST);

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
