import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as answerRouteLoader } from './loader';
import { AnswersElement } from './answers.element';
import { AnswersErrorElement } from './answers-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <AnswersElement />,
    errorElement: <AnswersErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: answerRouteLoader,
    children: [],
  },
];
