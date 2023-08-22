import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { listToursLoader } from './loader';
import { ToursListErrorElement } from './tours-list-error.element';
import { ToursListElement } from './tours-list.element';
import { RouteURLs } from './urls';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ToursListElement />,
    errorElement: <ToursListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listToursLoader,
    order: 1,
  },
];
