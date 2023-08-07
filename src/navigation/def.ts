import {RouteParams} from '@navigation/types';
import {AccountNavigationParams} from './Account/def';

export enum RootNavigationRoutes {
  Home = '/',
  Account = 'Account',
}

export type RootNavigationParams = {
  [RootNavigationRoutes.Home]: undefined;
  [RootNavigationRoutes.Account]: RouteParams<AccountNavigationParams>;
};
