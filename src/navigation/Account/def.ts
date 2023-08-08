import {RouteParams} from '@navigation/types';
import {AccountSettingsNavigationParams} from './Settings/def';

export enum AccountNavigationRoutes {
  EditProfile = 'EditProfile',
  Settings = 'Settings',
}

export type AccountNavigationParams = {
  [AccountNavigationRoutes.EditProfile]: {userId: string};
  [AccountNavigationRoutes.Settings]: RouteParams<AccountSettingsNavigationParams>;
};
