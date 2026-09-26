import { cn } from 'cn';
import BaseInformationSide from '../shared/BaseInformationSide';
import FormSide from './FormSide';

export default function BaseFormSection({ children, className }) {
  return (
    <section className="p-64 max-md:p-0">
      <div className={cn('max-w-1440 mx-auto grid grid-cols-2 max-lg:grid-cols-1', className)}>
        {children}
      </div>
    </section>
  );
}
