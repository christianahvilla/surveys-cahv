import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as dashboardRouteLoader } from './loader';
import { DashboardElement } from './dasboard.element';
import { DashboardErrorElement } from './dasboard-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <DashboardElement />,
    errorElement: <DashboardErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: dashboardRouteLoader,
    children: [],
  },
];
