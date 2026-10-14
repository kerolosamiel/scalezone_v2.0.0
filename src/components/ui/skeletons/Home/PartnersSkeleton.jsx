import React from 'react';
import { Skeleton } from '../../skeleton';

export default function PartnersSkeleton() {
  return (
    <section className="py-32 px-64 border border-x-0 flex gap-128 flex-wrap justify-center max-xl:gap-48 max-lg:px-32">
      <Skeleton className="mb-2 w-xs h-100" />
      <Skeleton className="mb-2 w-xs h-100" />
      <Skeleton className="mb-2 w-xs h-100" />
      <Skeleton className="mb-2 w-xs h-100" />
    </section>
  );
}
