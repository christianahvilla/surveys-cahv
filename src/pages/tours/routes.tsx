import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as surveyRouteLoader } from './loader';
import { ToursErrorElement } from './tours-error.element';
import { ToursElement } from './tours.element';
import { routes as tourListRoutes } from './list/routes';
import { routes as tourCreateRoutes } from './create/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ToursElement />,
    errorElement: <ToursErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: surveyRouteLoader,
    children: [...tourListRoutes, ...tourCreateRoutes],
  },
];
