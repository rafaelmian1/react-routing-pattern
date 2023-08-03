import {RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {AccountNavigationParams, AccountNavigationRoutes} from './def';
import {EditProfilePage} from '@pages/EditProfile';
import {SettingsPage} from '@pages/Settings';
import {RouteWrapper} from '@navigation/wrapper';

export const accountRoutes: RouteObject[] = [
  {
    path: RootNavigationRoutes.Account,
    children: [
      {path: AccountNavigationRoutes.Settings, element: <SettingsPage />},
      {
        path: AccountNavigationRoutes.EditProfile,
        element: (
          <RouteWrapper<
            AccountNavigationParams[AccountNavigationRoutes.EditProfile]
          >>
            {(props) => <EditProfilePage {...props} />}
          </RouteWrapper>
        ),
      },
    ],
  },
];
