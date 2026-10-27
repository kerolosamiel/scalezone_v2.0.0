import { Skeleton } from '../../skeleton';

export default function MediaItemsSkeleton() {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-24 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {Array.from({ length: 6 }, (_, i) => (
          <li key={`Media-${i}`}>
            <div className="bg-card">
              <div>
                <Skeleton className="w-full h-220" />
              </div>

              <div className="flex flex-col items-start gap-12 py-16 px-24 justify-between">
                <Skeleton className="mb-2 h-10 w-60" />

                <Skeleton className="mb-2 h-50 w-[85%]" />

                <div className="w-full">
                  <Skeleton className="mb-8 h-10 w-[90%]" />
                  <Skeleton className="mb-8 h-10 w-[80%]" />
                  <Skeleton className="h-10 w-[70%]" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
