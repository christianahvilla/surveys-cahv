import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { QuestionsCreateElement } from './questions-create.element';
import { QuestionsCreateErrorElement } from './questions-create-error.element';
import { listSurveyLoader } from './loader';
import { createQuestionsAction } from './create-action';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <QuestionsCreateElement />,
    action: createQuestionsAction,
    errorElement: <QuestionsCreateErrorElement />,
    name: RouteURLs.ROOT,
    loader: listSurveyLoader,
    showInNav: false,
    order: 1,
  },
];
