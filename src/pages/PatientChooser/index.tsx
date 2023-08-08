import {commonStyles} from '@styles/index';

type PatientChooserPageProps = {
  onChoose: (patientId: string) => void;
};

export const PatientChooserPage = (props: PatientChooserPageProps) => {
  return (
    <div style={commonStyles}>
      <div>PatientChooserPage</div>

      <button onClick={() => props.onChoose('121241231')}>
        Choose patient
      </button>
    </div>
  );
};
