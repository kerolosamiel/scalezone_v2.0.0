import CtaSkeleton from '@/components/ui/skeletons/CtaSkeleton';
import GrowthSkeleton from '@/components/ui/skeletons/GrowthSkeleton';
import ServicesSkeleton from '@/components/ui/skeletons/ServicesSkeleton';
import SubHeroSkeleton from '@/components/ui/skeletons/SubHeroSkeleton';

export default function loading() {
  return (
    <>
      <SubHeroSkeleton />
      <ServicesSkeleton />
      <GrowthSkeleton />
      <CtaSkeleton />
    </>
  );
}
