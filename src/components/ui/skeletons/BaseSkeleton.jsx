import { Skeleton } from '../skeleton';

export default function BaseSkeleton({ children }) {
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="mb-64 w-full">
          <Skeleton className="mb-8 h-20 w-[20%] max-lg:w-[35%] max-sm:w-[45%]" />
          <Skeleton className="mb-2 h-30 w-[40%] max-lg:w-[65%] max-sm:w-[85%]" />
        </div>
        {children}
      </div>
    </section>
  );
}
