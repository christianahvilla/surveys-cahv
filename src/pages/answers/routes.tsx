import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { AnswersElement } from './answers.element';
import { routes as answersListRoutes } from './list/routes';
import { AnswersErrorElement } from './answers-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <AnswersElement />,
    errorElement: <AnswersErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...answersListRoutes],
  },
];
