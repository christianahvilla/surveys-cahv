import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { QuestionsElement } from './questions.element';
import { QuestionsErrorElement } from './questions-error.element';
import { routes as questionsListRoutes } from './list/routes';
import { routes as questionsCreateRoutes } from './create/routes';
import { routes as questionsEditRoutes } from './edit/routes';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <QuestionsElement />,
    errorElement: <QuestionsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    children: [...questionsListRoutes, ...questionsCreateRoutes, ...questionsEditRoutes],
  },
];
