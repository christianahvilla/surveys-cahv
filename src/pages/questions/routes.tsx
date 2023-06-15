import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as questionsRouteLoader } from './loader';
import { QuestionsElement } from './questions.element';
import { QuestionsErrorElement } from './questions-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <QuestionsElement />,
    errorElement: <QuestionsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: questionsRouteLoader,
    children: [],
  },
];
