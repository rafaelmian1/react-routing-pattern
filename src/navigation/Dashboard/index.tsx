import {RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {DashboardNavigationParams, DashboardNavigationRoutes} from './def';
import {PostsPage} from '@pages/Posts';
import {UsersPage} from '@pages/Users';
import {RouteWrapper} from '@navigation/wrapper';

export const dashboardRoutes: RouteObject[] = [
  {
    path: RootNavigationRoutes.Dashboard,
    children: [
      {
        path: DashboardNavigationRoutes.Posts,
        element: (
          <RouteWrapper<
            DashboardNavigationParams[DashboardNavigationRoutes.Posts]
          >>
            {(props) => <PostsPage {...props} />}
          </RouteWrapper>
        ),
      },
      {path: DashboardNavigationRoutes.Users, element: <UsersPage />},
    ],
  },
];
