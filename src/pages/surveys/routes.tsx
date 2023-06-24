import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as surveyRouteLoader } from './loader';
import { SurveysErrorElement } from './surveys-error.element';
import { SurveysElement } from './surveys.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveysElement />,
    errorElement: <SurveysErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: surveyRouteLoader,
    children: [],
  },
];