import { Skeleton } from '../../skeleton';
import BaseSkeleton from '../BaseSkeleton';

export default function WhyZoneSkeleton() {
  return (
    <BaseSkeleton>
      <ul className="p-64 bg-card grid grid-cols-3 gap-48 max-lg:grid-cols-2 max-[470px]:grid-cols-1! max-sm:px-32">
        {Array.from({ length: 3 }, (_, i) => (
          <li key={`reason-${i}`} className="flex justify-center items-center w-full">
            <article className="w-full">
              <div className="mb-12 w-full">
                <Skeleton className="mb-2 size-40" />
              </div>

              <div className="w-full">
                <Skeleton className="mb-12 h-20 w-[60%]" />
                <Skeleton className="mb-2 h-10 w-[90%]" />
                <Skeleton className="mb-2 h-10 w-[80%]" />
                <Skeleton className="mb-2 h-10 w-[70%]" />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </BaseSkeleton>
  );
}
