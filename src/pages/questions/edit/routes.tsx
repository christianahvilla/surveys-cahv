import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { QuestionsEditElement } from './questions-edit.element';
import { QuestionsEditErrorElement } from './questions-edit-error.element';
import { EditQuestionLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <QuestionsEditElement />,
    errorElement: <QuestionsEditErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: EditQuestionLoader,
    order: 1,
  },
];
