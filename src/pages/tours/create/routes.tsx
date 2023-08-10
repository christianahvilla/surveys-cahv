import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersCreateElement } from './tours-create.element';
import { createToursAction } from './create-action';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersCreateElement />,
    name: RouteURLs.ROOT,
    action: createToursAction,
    showInNav: false,
    order: 1,
  },
];
