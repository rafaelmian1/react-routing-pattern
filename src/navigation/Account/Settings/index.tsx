import {RouteObject} from 'react-router-dom';
import {
  AccountSettingsNavigationParams,
  AccountSettingsNavigationRoutes,
} from './def';
import {NotificationPage} from '@pages/Settings/Notification';
import {RouteWrapper} from '@navigation/wrapper';
import {SubscriptionPage} from '@pages/Settings/Subscription';
import {RootNavigationRoutes} from '@navigation/Root/def';

export const accountSettingsRoutes: RouteObject[] = [
  {
    path: AccountSettingsNavigationRoutes.Notifications,
    element: <NotificationPage />,
  },
  {
    path: AccountSettingsNavigationRoutes.Subscription,
    element: (
      <RouteWrapper<
        AccountSettingsNavigationParams[AccountSettingsNavigationRoutes.Subscription]
      >>
        {({params, navigate}) => (
          <SubscriptionPage
            {...params}
            onBuy={() => navigate(RootNavigationRoutes.Home)}
          />
        )}
      </RouteWrapper>
    ),
  },
];
