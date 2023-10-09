import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { createSurveysAction } from './edit-action';
import { requirementEditLoader } from './loader';
import { RequirementsEditElement } from './requirements-edit.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <RequirementsEditElement />,
    name: RouteURLs.ROOT,
    action: createSurveysAction,
    loader: requirementEditLoader,
    shouldRevalidate: () => false,
    showInNav: false,
    order: 1,
  },
];
