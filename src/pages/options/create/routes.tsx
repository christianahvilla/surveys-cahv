import { NonIndexRouteObjectWithNav } from '~types/router/route-object-with-nav.type';
import { RouteURLs } from './urls';
import { OptionsCreateElement } from './options-create.element';
import { createOptionAction } from './create-action';
import { OptionsCreateErrorElement } from './options-create-error.element';
import { createOptionsLoader } from './loader';

export const routes: Array<NonIndexRouteObjectWithNav> = [
  {
    path: RouteURLs.ROOT,
    element: <OptionsCreateElement />,
    errorElement: <OptionsCreateErrorElement />,
    name: RouteURLs.ROOT,
    action: createOptionAction,
    // loader: createOptionsLoader,
    showInNav: false,
    order: 1,
  },
];
