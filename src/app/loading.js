import PartnersSkeleton from '@/components/ui/skeletons/Home/PartnersSkeleton';
import MainHeroSkeleton from '@/components/ui/skeletons/MainHeroSkeleton';

export default function Loading() {
  return (
    <>
      <MainHeroSkeleton />
      <PartnersSkeleton />
    </>
  );
}
