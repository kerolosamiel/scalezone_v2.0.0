import FormSideSkeleton from './FormSideSkeleton';
import { cn } from 'cn';
import InformationSideSkeleton from './InformationSideSkeleton';

export default function FormSkeleton({ className }) {
  return (
    <section className="p-64 max-md:p-0">
      <div className={cn('max-w-1440 mx-auto grid grid-cols-2 max-lg:grid-cols-1', className)}>
        <FormSideSkeleton />
        <InformationSideSkeleton />
      </div>
    </section>
  );
}
