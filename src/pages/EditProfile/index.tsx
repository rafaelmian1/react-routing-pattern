import {AccountNavigationParams} from '@navigation/Account/def';
import {commonStyles} from '@styles/index';

type EditProfilePageProps = AccountNavigationParams['EditProfile'];

export const EditProfilePage = (props: EditProfilePageProps) => {
  return (
    <div style={commonStyles}>
      <div>EditProfilePage: {props.userId}</div>

      <div style={commonStyles}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>

      <button onClick={() => props.onEdit?.()}>Edit</button>
    </div>
  );
};
