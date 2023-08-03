export enum AccountNavigationRoutes {
  EditProfile = 'EditProfile',
  Settings = 'Settings',
  Dashboard = 'Dashboard',
}

export type AccountNavigationParams = {
  [AccountNavigationRoutes.Settings]: undefined;
  [AccountNavigationRoutes.EditProfile]: {
    userId: string;
  };
};
