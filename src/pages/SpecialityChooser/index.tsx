import {AppointmentBookingNavigationParams} from '@navigation/AppointmentBooking/def';
import {commonStyles} from '@styles/index';

type SpecialityChooserPageProps =
  AppointmentBookingNavigationParams['SpecialityChooser'] & {
    onChoose: (specialityId: string) => void;
  };

export const SpecialityChooserPage = (props: SpecialityChooserPageProps) => {
  return (
    <div style={commonStyles}>
      <div>SpecialityChooserPage: {props.patientId}</div>

      <button onClick={() => props.onChoose('42')}>Choose speciality</button>
    </div>
  );
};
