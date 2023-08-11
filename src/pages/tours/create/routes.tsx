import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { ToursCreateElement } from './tours-create.element';
import { createToursAction } from './create-action';
import { listUserLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ToursCreateElement />,
    name: RouteURLs.ROOT,
    action: createToursAction,
    loader: listUserLoader,
    showInNav: false,
    order: 1,
  },
];
