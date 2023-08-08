import {commonStyles} from '@styles/index';

type SpecialityChooserPageProps = {
  onChoose: (specialityId: string) => void;
};

export const SpecialityChooserPage = (props: SpecialityChooserPageProps) => {
  return (
    <div style={commonStyles}>
      <div>SpecialityChooserPage</div>

      <button onClick={() => props.onChoose('42')}>Buy</button>
    </div>
  );
};
