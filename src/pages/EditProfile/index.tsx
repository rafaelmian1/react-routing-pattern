import {AccountNavigationParams} from '@navigation/Account/def';

type EditProfilePageProps = AccountNavigationParams['EditProfile'] & {
  otherProp?: unknown;
};
export const EditProfilePage = (props: EditProfilePageProps) => {
  return <div>EditProfilePage: {JSON.stringify(props)}</div>;
};
