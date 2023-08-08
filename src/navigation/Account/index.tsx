import {RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from '@navigation/Root/def';
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
        children: [
          {
            index: true,
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
                          route: AccountSettingsNavigationRoutes.Subscription,
                          params: {
                            userId: '12512322',
                          },
                        },
                      })
                    }
                  />
                )}
              </RouteWrapper>
            ),
          },
          ...accountSettingsRoutes,
        ],
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
