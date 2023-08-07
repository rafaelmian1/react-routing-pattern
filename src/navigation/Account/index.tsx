import {RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from '@navigation/def';
import {AccountNavigationParams, AccountNavigationRoutes} from './def';
import {EditProfilePage} from '@pages/EditProfile';
import {RouteWrapper} from '../wrapper';
import {accountSettingsRoutes} from './Settings';
import {SettingsPage} from '@pages/Settings';
import {AccountSettingsNavigationRoutes} from './Settings/def';

export const accountRoutes: RouteObject[] = [
  {
    path: RootNavigationRoutes.Account,
    children: [
      {
        path: AccountNavigationRoutes.Settings,
        element: (
          <RouteWrapper>
            {({navigate}) => (
              <SettingsPage
                onChooseNotification={() =>
                  navigate(RootNavigationRoutes.Account, {
                    route: AccountNavigationRoutes.Settings,
                    params: {
                      route: AccountSettingsNavigationRoutes.Notifications,
                    },
                  })
                }
                onChooseSubscription={() =>
                  navigate(RootNavigationRoutes.Account, {
                    route: AccountNavigationRoutes.Settings,
                    params: {
                      route: AccountSettingsNavigationRoutes.Subsctiption,
                      params: {
                        userId: '12512322',
                        onBuy: () => navigate(RootNavigationRoutes.Home),
                      },
                    },
                  })
                }
              />
            )}
          </RouteWrapper>
        ),
        children: [...accountSettingsRoutes],
      },
      {
        path: AccountNavigationRoutes.EditProfile,
        element: (
          <RouteWrapper<
            AccountNavigationParams[AccountNavigationRoutes.EditProfile]
          >>
            {({params}) => <EditProfilePage {...params} />}
          </RouteWrapper>
        ),
      },
    ],
  },
];
