import PartnersSkeleton from '@/components/ui/skeletons/Home/PartnersSkeleton';
import ServicesSkeleton from '@/components/ui/skeletons/ServicesSkeleton';
import MainHeroSkeleton from '@/components/ui/skeletons/MainHeroSkeleton';
import CompaniesSkeleton from '@/components/ui/skeletons/Home/CompaniesSkeleton';
import GrowthSkeleton from '@/components/ui/skeletons/GrowthSkeleton';

export default function Loading() {
  return (
    <>
      <MainHeroSkeleton />
      <PartnersSkeleton />
      <ServicesSkeleton />
      <CompaniesSkeleton />
      <GrowthSkeleton />
    </>
  );
}
