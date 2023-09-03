import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { PointsErrorElement } from './points-error.element';
import { PointsElement } from './points.element';
import { routes as pointsListRoutes } from './list/routes';
import { routes as pointsCreateRoutes } from './create/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <PointsElement />,
    errorElement: <PointsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...pointsListRoutes, ...pointsCreateRoutes],
  },
];
