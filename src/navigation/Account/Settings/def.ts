export enum AccountSettingsNavigationRoutes {
  Subsctiption = 'Subsctiption',
  Notifications = 'Notifications',
}

export type Subscription = 'free' | 'premium' | 'diamond';

export type AccountSettingsNavigationParams = {
  [AccountSettingsNavigationRoutes.Notifications]: undefined;
  [AccountSettingsNavigationRoutes.Subsctiption]: {
    userId: string;
    onBuy?: (subscription: Subscription) => void;
  };
};
