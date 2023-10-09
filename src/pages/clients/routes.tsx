import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { ClientsElement } from './clients.element';
import { routes as clientsListRoutes } from './list/routes';
import { routes as clientsCreateRoutes } from './create/routes';
import { routes as clientsEditRoutes } from './edit/routes';
import { ClientsErrorElement } from './clients-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ClientsElement />,
    errorElement: <ClientsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...clientsListRoutes, ...clientsCreateRoutes, ...clientsEditRoutes],
  },
];
