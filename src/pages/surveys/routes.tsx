import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as surveyRouteLoader } from './loader';
import { SurveysErrorElement } from './surveys-error.element';
import { SurveysElement } from './surveys.element';
import { routes as surveysListRoutes } from './list/routes';
import { routes as surveysCreateRoutes } from './create/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveysElement />,
    errorElement: <SurveysErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: surveyRouteLoader,
    children: [...surveysCreateRoutes, ...surveysListRoutes],
  },
];
