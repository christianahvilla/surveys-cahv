import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersElement } from './users.element';
import { routes as usersListRoutes } from './list/routes';
import { routes as usersCreateRoutes } from './create/routes';
import { routes as usersEditRoutes } from './edit/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...usersListRoutes, ...usersCreateRoutes, ...usersEditRoutes],
  },
];
