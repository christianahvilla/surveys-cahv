import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersCreateElement } from './users-create.element';
import { createUserAction } from './create-action';
import { createUserLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersCreateElement />,
    name: RouteURLs.ROOT,
    action: createUserAction,
    loader: createUserLoader,
    shouldRevalidate: () => false,
    showInNav: false,
    order: 1,
  },
];
