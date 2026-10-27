import { Skeleton } from '../../skeleton';

export default function TeamSkeleton() {
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="text-center flex flex-col items-center gap-16 mb-48">
          <Skeleton className="mb-2 h-20 w-[20%] max-lg:w-[35%] max-sm:w-[45%]" />
          <Skeleton className="mb-2 h-20 w-[40%] max-lg:w-[55%] max-sm:w-[65%]" />
          <Skeleton className="mb-2 h-10 w-[25%] max-lg:w-[40%] max-sm:w-[50%]" />
        </div>

        <ul className="grid grid-cols-3 gap-24 justify-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          {Array.from({ length: 3 }, (_, i) => (
            <li key={`skeleton-${i}`} className="flex justify-center items-center w-full">
              <Skeleton className="mb-2 h-350 w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
