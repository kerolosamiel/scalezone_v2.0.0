import CompactHeroSkeleton from '@/components/ui/skeletons/CompactHeroSkeleton';
import FaqsSkeleton from '@/components/ui/skeletons/FaqsSkeleton';

export default function loading() {
  return (
    <>
      <CompactHeroSkeleton />
      <FaqsSkeleton />
    </>
  );
}
