import { Fragment } from 'react';
import { Skeleton } from '../skeleton';
import { Separator } from '../separator';

export default function InformationSideSkeleton() {
  return (
    <div className="p-48 max-md:p-32 max-sm:px-24 flex flex-col gap-32">
      <div>
        <Skeleton className="mb-16 h-10 w-[60%]" />
        <Skeleton className="mb-16 h-50 w-[40%]" />
      </div>

      <Separator className="h-2 animate-pulse" />

      {Array.from({ length: 3 }, (_, i) => (
        <Fragment key={`info-skeleton-${i}`}>
          <div>
            <Skeleton className="mb-16 h-10 w-[60%]" />

            <div className="flex gap-8 items-center">
              <Skeleton className="mb-8 h-10 size-40" />
              <Skeleton className="mb-8 h-10 w-[80%]" />
            </div>
          </div>

          {i < 2 && <Separator className="h-2 animate-pulse" />}
        </Fragment>
      ))}
    </div>
  );
}
