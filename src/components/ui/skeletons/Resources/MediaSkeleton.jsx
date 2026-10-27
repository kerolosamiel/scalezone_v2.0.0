import { Skeleton } from '../../skeleton';
import FeaturedSkeleton from './FeaturedSkeleton';
import MediaItemsSkeleton from './MediaItemsSkeleton';

export default function MediaSkeleton() {
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="flex gap-32 mb-64 max-[500px]:gap-12 max-[420px]:flex-col">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={`media-${i}`} className="mb-8 h-50 w-110" />
          ))}
        </div>

        <div className="flex flex-col gap-64">
          <FeaturedSkeleton />
          <MediaItemsSkeleton />
        </div>
      </div>
    </section>
  );
}
