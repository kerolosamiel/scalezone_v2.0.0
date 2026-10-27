import { Skeleton } from '../skeleton';
import ServiceCardSkeleton from './ServiceCardSkeleton';

export default function ServicesSkeleton() {
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <Skeleton className="h-90 w-500 mb-48 max-sm:w-[80%]" />

        <div className="grid grid-cols-3 items-start gap-24 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
        </div>
      </div>
    </section>
  );
}
