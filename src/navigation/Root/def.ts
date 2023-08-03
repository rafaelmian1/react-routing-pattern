import {AccountNavigationParams} from '../Account/def';
import {DashboardNavigationParams} from '../Dashboard/def';

export enum RootNavigationRoutes {
  Home = 'Home',
  Account = 'Account',
  Dashboard = 'Dashboard',
}

type MapRouteParams<T, P> = P extends undefined
  ? {route: T}
  : {route: T; params: P};

type RouteParams<T> = {
  [K in keyof T]: MapRouteParams<K, T[K]>;
}[keyof T];

export type RootNavigationParams = {
  [RootNavigationRoutes.Home]: undefined;
  [RootNavigationRoutes.Account]: RouteParams<AccountNavigationParams>;
  [RootNavigationRoutes.Dashboard]: RouteParams<DashboardNavigationParams>;
};
