export enum AccountNavigationRoutes {
  EditProfile = 'EditProfile',
  Settings = 'Settings',
}

export type AccountNavigationParams = {
  [AccountNavigationRoutes.Settings]: undefined;
  [AccountNavigationRoutes.EditProfile]: {
    userId: string;
  };
};
