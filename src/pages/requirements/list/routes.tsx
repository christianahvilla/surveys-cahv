import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { listSurveysLoader } from './loader';
import { SurveysListErrorElement } from './requirements-list-error.element';
import { SurveysListElement } from './requirements-list.element';
import { RouteURLs } from './urls';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveysListElement />,
    errorElement: <SurveysListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listSurveysLoader,
    order: 1,
  },
];
