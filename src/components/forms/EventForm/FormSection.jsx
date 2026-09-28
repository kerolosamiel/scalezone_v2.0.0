import BaseFormSection from '../shared/BaseFormSection';
import BaseInformationSide from '../shared/BaseInformationSide';
import FormSide from './FormSide';

export default function FormSection() {
  return (
    <BaseFormSection className="items-center">
      <FormSide />
      <BaseInformationSide />
    </BaseFormSection>
  );
}
