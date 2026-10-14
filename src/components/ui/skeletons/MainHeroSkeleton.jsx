import React from 'react';
import { Skeleton } from '../skeleton';

export default function MainHeroSkeleton() {
  return (
    <section className="bg-card-gradient pt-75">
      <div className="py-64 px-80 max-w-1680 grid grid-cols-2 gap-128 mx-auto max-xl:gap-64 max-xl:px-48 max-lg:flex max-lg:flex-col-reverse max-lg:px-32 max-lg:gap-32 max-md:px-16">
        <div className="flex flex-col gap-32 justify-center">
          <Skeleton className="mb-2 h-90 w-full" />

          <Skeleton className="mb-2 h-20 w-[90%]" />

          <div className="flex gap-22 flex-wrap">
            <Skeleton className="mb-2 h-50 w-[40%]" />
            <Skeleton className="mb-2 h-50 w-[40%]" />
          </div>
        </div>

        <div className="flex justify-end max-lg:justify-center">
          <Skeleton className="mb-2 h-580 w-503" />
        </div>
      </div>
    </section>
  );
}
