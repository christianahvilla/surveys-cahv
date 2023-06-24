import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersElement } from './users.element';
import { routes as usersListRoutes } from './list/routes';
import { UsersErrorElement } from './users-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersElement />,
    errorElement: <UsersErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...usersListRoutes],
  },
];
