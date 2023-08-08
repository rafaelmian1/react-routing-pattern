import {
  AccountSettingsNavigationParams,
  Subscription,
} from '@navigation/Account/Settings/def';
import {commonStyles} from '@styles/index';

type SubscriptionPageProps = AccountSettingsNavigationParams['Subscription'] & {
  onBuy?: (subscription: Subscription) => void;
};

export const SubscriptionPage = (props: SubscriptionPageProps) => {
  return (
    <div style={commonStyles}>
      <div>SubscriptionPage: {props.userId}</div>

      <button onClick={() => props.onBuy?.('diamond')}>Buy</button>
    </div>
  );
};
