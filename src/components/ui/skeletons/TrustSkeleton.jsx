import { Skeleton } from '../skeleton';
import StateSkeleton from './StateSkeleton';

export default function TrustSkeleton() {
  return (
    <section className="border border-x-0">
      <div className="py-32 px-32 max-w-1680 mx-auto  grid grid-cols-4 gap-8 max-xl:px-48 max-lg:px-16 max-md:px-12 justify-center max-md:grid-cols-2 max-[370px]:grid-cols-1!">
        <StateSkeleton />
        <StateSkeleton />
        <StateSkeleton />
        <StateSkeleton className="border-r-0" />
      </div>
    </section>
  );
}
