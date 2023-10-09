import { AccountErrorElement } from './account-error.element';
import { AccountElement } from './account.element';
import { RouteURLs } from './urls';

import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <AccountElement />,
    errorElement: <AccountErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
  },
];
