import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { ClientsListElement } from './clients-list.element';
import { RouteURLs } from './urls';
import { ClientsListErrorElement } from './clients-list-error.element';
import { listClientLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ClientsListElement />,
    errorElement: <ClientsListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listClientLoader,
    order: 1,
  },
];
