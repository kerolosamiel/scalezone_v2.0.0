import React from 'react';
import BaseSkeleton from './BaseSkeleton';
import RelatedCardSkeleton from './RelatedCardSkeleton';

export default function RelatedSkeleton() {
  return (
    <BaseSkeleton>
      <ul className="grid grid-cols-3 gap-32 max-lg:grid-cols-2 max-md:grid-cols-1! max-md:[&_article]:w-full">
        {Array.from({ length: 3 }, (_, i) => (
          <li key={`service-${i}`} className="w-full">
            <RelatedCardSkeleton />
          </li>
        ))}
      </ul>
    </BaseSkeleton>
  );
}
