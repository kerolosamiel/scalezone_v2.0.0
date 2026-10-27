import { Fragment } from 'react';
import { Skeleton } from '../skeleton';

export default function FormSideSkeleton() {
  return (
    <div className="p-48 max-md:p-32 max-sm:px-24 bg-card ">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-32 grid-wrap">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={`input-skeleton-${i}`}>
            <Skeleton className="mb-8 h-10 w-[60%]" />
            <Skeleton className="h-50 w-full" />
          </div>
        ))}

        <div className="col-start-1 col-end-3 mb-32 max-lg:col-end-2">
          <Skeleton className="mb-8 h-10 w-[60%]" />
          <div className="flex flex-wrap gap-12 max-[450px]:[&_div]:w-full">
            {Array.from({ length: 4 }, (_, i) => (
              <Skeleton key={`zone-skeleton-${i}`} className="h-50 w-150" />
            ))}
          </div>
        </div>
      </div>

      <Skeleton className="mb-16 h-50 w-[40%]" />

      <Skeleton className="mb-2 h-10 w-[90%]" />
      <Skeleton className="mb-2 h-10 w-[80%]" />
    </div>
  );
}
