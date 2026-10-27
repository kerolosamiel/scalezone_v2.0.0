import { Skeleton } from '../../skeleton';
import BaseSkeleton from '../BaseSkeleton';

export default function ConferenceSkeleton() {
  return (
    <BaseSkeleton className="flex flex-col justify-center items-center">
      <Skeleton className="mb-8 h-430 w-[700] max-md:w-[80%] max-sm:w-[90%]" />
    </BaseSkeleton>
  );
}
