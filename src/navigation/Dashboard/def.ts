export enum DashboardNavigationRoutes {
  Users = 'Users',
  Posts = 'Posts',
}

export type DashboardNavigationParams = {
  [DashboardNavigationRoutes.Users]: undefined;
  [DashboardNavigationRoutes.Posts]: {
    userId: string;
    dateFrom?: Date;
  };
};
