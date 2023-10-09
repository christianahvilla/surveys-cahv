import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { SurveysEditElement } from './surveys-edit.element';
import { editSurveyAction } from './edit-action';
import { getSurveysLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <SurveysEditElement />,
    name: RouteURLs.ROOT,
    action: editSurveyAction,
    loader: getSurveysLoader,
    showInNav: false,
    shouldRevalidate: () => false,
    order: 1,
  },
];
