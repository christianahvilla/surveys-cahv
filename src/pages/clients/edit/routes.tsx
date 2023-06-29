import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { ClientsEditElement } from './clients-edit.element';
import { editClientAction } from './edit-action';
import { getClientsLoader } from './loader';
import { RouteURLs } from './urls';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ClientsEditElement />,
    name: RouteURLs.ROOT,
    action: editClientAction,
    loader: getClientsLoader,
    showInNav: false,
    order: 1,
  },
];
