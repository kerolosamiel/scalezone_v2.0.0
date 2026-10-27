import { Skeleton } from '../../skeleton';
import BaseSkeleton from '../BaseSkeleton';

export default function EventsSkeleton() {
  return (
    <BaseSkeleton>
      <ul className="grid grid-cols-3 gap-32 max-md:grid-cols-2 max-[570px]:grid-cols-1!">
        {Array.from({ length: 3 }, (_, i) => (
          <li key={`event-${i}`} className="flex justify-center items-center w-full">
            <Skeleton className="mb-8 h-450 w-390 max-sm:w-[90%]" />
          </li>
        ))}
      </ul>
    </BaseSkeleton>
  );
}
