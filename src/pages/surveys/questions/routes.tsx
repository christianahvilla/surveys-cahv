import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { SurveyQuestionsListElement } from './survey-questions-list.element';
import { SurveyQuestionsListErrorElement } from './survey-questions-list-error.element';
import { listQuestionLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveyQuestionsListElement />,
    errorElement: <SurveyQuestionsListErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listQuestionLoader,
    order: 1,
  },
];
