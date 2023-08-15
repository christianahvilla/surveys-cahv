import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { editToursAction } from './edit-action';
import { getToursLoader } from './loader';
import { ToursEditElement } from './tours-edit.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ToursEditElement />,
    name: RouteURLs.ROOT,
    action: editToursAction,
    loader: getToursLoader,
    showInNav: false,
    order: 1,
  },
];
