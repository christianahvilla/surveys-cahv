import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { loader as resultsRouteLoader } from './loader';
import { ResultsElement } from './results.element';
import { ResultsErrorElement } from './results-error.element';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <ResultsElement />,
    errorElement: <ResultsErrorElement />,
    name: RouteURLs.ROOT,
    showInNav: false,
    order: 1,
    loader: resultsRouteLoader,
    children: [],
  },
];
