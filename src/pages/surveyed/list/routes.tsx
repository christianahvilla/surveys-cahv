import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { SurveyedErrorElement } from '../surveyed-error.element';
import { RouteURLs } from './url';
import { SurveyedListElement } from './surveyed-list.element';
import { listSurveyedLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveyedListElement />,
    errorElement: <SurveyedErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    loader: listSurveyedLoader,
    order: 1,
  },
];
