import { RouteURLs } from './urls';
import { LoginErrorElement } from './login-error.element';

import { LoginElement } from './login.element';
import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <LoginElement />,
    errorElement: <LoginErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
  },
];
