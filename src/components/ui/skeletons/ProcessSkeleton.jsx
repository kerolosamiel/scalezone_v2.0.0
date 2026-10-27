import React from 'react';
import BaseSkeleton from './BaseSkeleton';
import { Skeleton } from '../skeleton';

export default function ProcessSkeleton() {
  return (
    <BaseSkeleton>
      <ul className="grid grid-cols-4 gap-48 max-lg:grid-cols-2 max-[470px]:grid-cols-1!">
        {Array.from({ length: 4 }, (_, i) => (
          <li
            key={`event-${i}`}
            className="flex justify-center items-center w-full max-lg:nth-2:[&>article]:after:hidden max-[470px]:[&>article]:after:hidden"
          >
            <div className="w-full">
              <Skeleton className="mb-24 size-55" />

              <div>
                <Skeleton className="mb-12 h-20 w-[60%]" />
                <Skeleton className="mb-4 h-10 w-full" />
                <Skeleton className="mb-4 h-10 w-[90%]" />
                <Skeleton className="mb-4 h-10 w-[80%]" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </BaseSkeleton>
  );
}
