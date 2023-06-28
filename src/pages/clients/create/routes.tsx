import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { ClientsCreateElement } from './clients-create.element';
import { createClientAction } from './create-action';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ClientsCreateElement />,
    name: RouteURLs.ROOT,
    action: createClientAction,
    showInNav: false,
    order: 1,
  },
];
