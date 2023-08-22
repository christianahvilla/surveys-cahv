import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersListElement } from './options-list.element';
import { UsersListErrorElement } from './options-list-error.element';
import { listOptionsLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersListElement />,
    errorElement: <UsersListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listOptionsLoader,
    order: 1,
  },
];
