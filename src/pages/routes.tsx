import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { HomeRouteErrorElement } from './home-route-error.element';
import { loader as homeRouteLoader } from './loader';
import { routes as serverErrorRoutes } from '~pages/500/routes';
import { routes as notFoundRoutes } from '~pages/404/routes';
import { routes as notAuthorizedRoutes } from '~pages/403/routes';
import { routes as loginRoutes } from '~pages/login/routes';
import { routes as answersRoutes } from '~pages/answers/routes';
import { routes as dashboardRoutes } from '~pages/dashboard/routes';
import { routes as questionsRoutes } from '~pages/questions/routes';
import { routes as resultsRoutes } from '~pages/results/routes';
import { routes as surveyedRoutes } from '~pages/surveyed/routes';
import { routes as surveysRoutes } from '~pages/surveys/routes';
import { routes as accountRoutes } from '~pages/account/routes';
import { routes as usersRoutes } from '~pages/users/routes';
import { routes as clientsRoutes } from '~pages/clients/routes';
import { routes as requirementsRoutes } from '~pages/requirements/routes';
import { routes as toursRoutes } from './tours/routes';
import { HomeRouteElement } from './home-route.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <HomeRouteElement />,
    errorElement: <HomeRouteErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: homeRouteLoader,
    children: [
      ...serverErrorRoutes,
      ...notAuthorizedRoutes,
      ...notFoundRoutes,
      ...loginRoutes,
      ...accountRoutes,
      ...answersRoutes,
      ...dashboardRoutes,
      ...questionsRoutes,
      ...resultsRoutes,
      ...surveyedRoutes,
      ...surveysRoutes,
      ...usersRoutes,
      ...clientsRoutes,
      ...requirementsRoutes,
      ...toursRoutes,
    ],
  },
];
