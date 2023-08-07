import {commonStyles} from '@styles/index';

type SettingsPageProps = {
  onChooseNotification: () => void;
  onChooseSubscription: () => void;
};

export const SettingsPage = (props: SettingsPageProps) => {
  return (
    <div style={commonStyles}>
      <div>SettingsPage</div>

      <button onClick={props.onChooseNotification}>
        Go to Account Settings Notification Page
      </button>
      <button onClick={props.onChooseSubscription}>
        Go to Account Settings Subscription Page
      </button>
    </div>
  );
};
