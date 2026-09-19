import BaseInformationSide from '../shared/BaseInformationSide';
import FormSide from './FormSide';

export default function FormSection() {
  return (
    <section className="p-64 max-md:p-0">
      <div className="max-w-1440 mx-auto grid grid-cols-2 max-lg:grid-cols-1">
        <FormSide />
        <BaseInformationSide />
      </div>
    </section>
  );
}
