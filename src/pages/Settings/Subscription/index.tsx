import {AccountSettingsNavigationParams} from '@navigation/Account/Settings/def';
import {commonStyles} from '@styles/index';

type SubscriptionPageProps = AccountSettingsNavigationParams['Subsctiption'];

export const SubscriptionPage = (props: SubscriptionPageProps) => {
  return (
    <div style={commonStyles}>
      <div>SubscriptionPage: {props.userId}</div>

      <button onClick={() => props.onBuy?.('diamond')}>Buy</button>
    </div>
  );
};
