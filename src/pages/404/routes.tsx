import { RouteURLs } from './urls';
import { ErrorErrorElement } from './error-error.element';

import { ErrorElement } from './error.element';
import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ErrorElement />,
    errorElement: <ErrorErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
  },
];
