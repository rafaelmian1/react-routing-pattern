import {AccountNavigationRoutes} from '@navigation/Account/def';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {useNavigateOnAuthorized} from '@navigation/hook';

export const HomePage = () => {
  const navigate = useNavigateOnAuthorized();
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
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