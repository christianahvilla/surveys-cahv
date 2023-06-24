import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersListElement } from './users-list.element';
import { UsersListErrorElement } from './users-list-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersListElement />,
    errorElement: <UsersListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
  },
];
