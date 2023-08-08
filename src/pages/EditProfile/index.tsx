import {AccountNavigationParams} from '@navigation/Account/def';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {useNavigate} from '@navigation/hook';
import {commonStyles} from '@styles/index';

type EditProfilePageProps = AccountNavigationParams['EditProfile'];

export const EditProfilePage = (props: EditProfilePageProps) => {
  const navigate = useNavigate();
  return (
    <div style={commonStyles}>
      <div>EditProfilePage: {props.userId}</div>

      <div style={commonStyles}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>

      <button onClick={() => navigate(RootNavigationRoutes.Home)}>Edit</button>
    </div>
  );
};
