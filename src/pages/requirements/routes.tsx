import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { RequirementsErrorElement } from './requirements-error.element';
import { RequirementsElement } from './requirements.element';
import { routes as requirementsListRoutes } from './list/routes';
import { routes as requirementsEditRoutes } from './edit/routes';
import { routes as requirementsCreateRoutes } from './create/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <RequirementsElement />,
    errorElement: <RequirementsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    shouldRevalidate: () => false,
    order: 1,
    children: [...requirementsListRoutes, ...requirementsCreateRoutes, ...requirementsEditRoutes],
  },
];
