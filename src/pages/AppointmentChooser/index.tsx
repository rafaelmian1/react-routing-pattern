import {AppointmentBookingNavigationParams} from '@navigation/AppointmentBooking/def';
import {commonStyles} from '@styles/index';

type AppointmentChooserPageProps =
  AppointmentBookingNavigationParams['AppointmentChooser'] & {
    onChoose: (appointment: {date: Date; professionalId: number}) => void;
  };

export const AppointmentChooserPage = (props: AppointmentChooserPageProps) => {
  return (
    <div style={commonStyles}>
      <div>
        AppointmentChooserPage: {props.patientId} {props.specialityId}
      </div>

      <button
        onClick={() => props.onChoose({date: new Date(), professionalId: 242})}
      >
        Choose appointment
      </button>
    </div>
  );
};
