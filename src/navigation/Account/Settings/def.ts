export enum AccountSettingsNavigationRoutes {
  Subscription = 'Subscription',
  Notifications = 'Notifications',
}

export type Subscription = 'free' | 'premium' | 'diamond';

export type AccountSettingsNavigationParams = {
  [AccountSettingsNavigationRoutes.Notifications]: undefined;
  [AccountSettingsNavigationRoutes.Subscription]: {userId: string};
};
