import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { listRequirementsLoader } from './loader';
import { RouteURLs } from './urls';
import { RequirementsListElement } from './requirements-list.element';
import { RequirementsListErrorElement } from './requirements-list-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <RequirementsListElement />,
    errorElement: <RequirementsListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    shouldRevalidate: () => false,
    loader: listRequirementsLoader,
    order: 1,
  },
];
