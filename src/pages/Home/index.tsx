import {AccountSettingsNavigationRoutes} from '@navigation/Account/Settings/def';
import {AccountNavigationRoutes} from '@navigation/Account/def';
import {RootNavigationRoutes} from '@navigation/def';
import {useNavigate} from '@navigation/hook';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Account, {
            route: AccountNavigationRoutes.Settings,
            params: {
              route: AccountSettingsNavigationRoutes.Notifications,
            },
          })
        }
      >
        Go to Account Settings Page
      </button>

      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Account, {
            route: AccountNavigationRoutes.EditProfile,
            params: {
              userId: '12512312',
              onEdit: () => navigate(RootNavigationRoutes.Home),
            },
          })
        }
      >
        Go to Account Edit Profile Page
      </button>
    </div>
  );
};
