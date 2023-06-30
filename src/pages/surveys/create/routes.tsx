import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { SurveysCreateElement } from './surveys-create.element';
import { createSurveysAction } from './create-action';
import { listClientLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveysCreateElement />,
    name: RouteURLs.ROOT,
    action: createSurveysAction,
    loader: listClientLoader,
    showInNav: false,
    order: 1,
  },
];
