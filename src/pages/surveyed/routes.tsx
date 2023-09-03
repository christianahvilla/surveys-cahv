import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as surveyedRouteLoader } from './loader';
import { SurveyedElement } from './surveyed.element';
import { SurveyedErrorElement } from './surveyed-error.element';
import { routes as surveyedListRoutes } from './list/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveyedElement />,
    errorElement: <SurveyedErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: surveyedRouteLoader,
    shouldRevalidate: () => false,
    children: [...surveyedListRoutes],
  },
];
