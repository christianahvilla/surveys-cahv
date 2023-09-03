import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { listPointsLoader } from './loader';
import { PointsListErrorElement } from './points-list-error.element';
import { PointsListElement } from './points-list.element';
import { RouteURLs } from './urls';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <PointsListElement />,
    errorElement: <PointsListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listPointsLoader,
    order: 1,
  },
];
