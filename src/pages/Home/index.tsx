import {AccountNavigationRoutes} from '@navigation/Account/def';
import {DashboardNavigationRoutes} from '@navigation/Dashboard/def';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {useNavigateOnAuthorized} from '@navigation/hook';

export const HomePage = () => {
  const navigate = useNavigateOnAuthorized();
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Dashboard, {
            route: DashboardNavigationRoutes.Posts,
            params: {userId: '214512312'},
          })
        }
      >
        Go to Users Dashboard Page
      </button>

      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Dashboard, {
            route: DashboardNavigationRoutes.Posts,
            params: {userId: '21321124'},
          })
        }
      >
        Go to Posts Dashboard Page
      </button>

      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Account, {
            route: AccountNavigationRoutes.Settings,
          })
        }
      >
        Go to Account Settings Page
      </button>

      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Account, {
            route: AccountNavigationRoutes.EditProfile,
            params: {userId: '12512312'},
          })
        }
      >
        Go to Account Edit Profile Page
      </button>
    </div>
  );
};
