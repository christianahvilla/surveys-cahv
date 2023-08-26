import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { listAnswersLoader } from './loader';
import { AnswersListElement } from './answers-list.element';
import { AnswersListErrorElement } from './answers-list-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <AnswersListElement />,
    errorElement: <AnswersListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listAnswersLoader,
    order: 1,
    shouldRevalidate: () => false,
  },
];
