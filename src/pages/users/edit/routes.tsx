import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { UsersEditElement } from './users-edit.element';
import { editUserAction } from './edit-action';
import { getUserLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <UsersEditElement />,
    name: RouteURLs.ROOT,
    action: editUserAction,
    loader: getUserLoader,
    showInNav: false,
    shouldRevalidate: () => false,
    order: 1,
  },
];
