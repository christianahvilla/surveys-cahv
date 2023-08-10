import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { RequirementsCreateElement } from './requirements-create.element';
import { createRequirementAction } from './create-action';
import { requirementCreateLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <RequirementsCreateElement />,
    name: RouteURLs.ROOT,
    action: createRequirementAction,
    loader: requirementCreateLoader,
    showInNav: false,
    order: 1,
  },
];
