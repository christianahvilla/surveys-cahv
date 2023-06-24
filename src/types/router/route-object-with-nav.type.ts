import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

interface WithNav {
  name: string;
  order: number;
  showInNav: boolean;
}

export interface IndexRouteObjectWithNav extends IndexRouteObject, WithNav {}

export interface NonIndexRouteObjectWithNav extends NonIndexRouteObject, WithNav {
  children?: NonIndexRouteObjectWithNav[];
}

export type RouteObjectWithNav = IndexRouteObjectWithNav | NonIndexRouteObjectWithNav;
