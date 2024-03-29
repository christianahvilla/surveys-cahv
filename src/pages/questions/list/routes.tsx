import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { QuestionsListElement } from './questions-list.element';
import { QuestionsListErrorElement } from './questions-list-error.element';
import { listQuestionLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <QuestionsListElement />,
    errorElement: <QuestionsListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listQuestionLoader,
    order: 1,
  },
];
