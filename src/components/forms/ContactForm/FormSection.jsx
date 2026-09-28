import BaseFormSection from '../shared/BaseFormSection';
import BaseInformationSide from '../shared/BaseInformationSide';
import FormSide from './FormSide';

export default function FormSection({ zones, info }) {
  return (
    <BaseFormSection>
      <FormSide zones={zones} />
      <BaseInformationSide info={info} />
    </BaseFormSection>
  );
}
