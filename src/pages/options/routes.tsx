import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { OptionsErrorElement } from './options-error.element';
import { OptionsElement } from './options.element';
import { routes as optionsListRoutes } from './list/routes';
import { routes as optionsCreateRoutes } from './create/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <OptionsElement />,
    errorElement: <OptionsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...optionsListRoutes, ...optionsCreateRoutes],
  },
];
