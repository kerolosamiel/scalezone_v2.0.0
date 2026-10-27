import CtaSkeleton from '@/components/ui/skeletons/CtaSkeleton';
import GrowthSkeleton from '@/components/ui/skeletons/GrowthSkeleton';
import ServicesSkeleton from '@/components/ui/skeletons/ServicesSkeleton';
import SubHeroSkeleton from '@/components/ui/skeletons/SubHeroSkeleton';
import WhyZoneSkeleton from '@/components/ui/skeletons/Zones/WhyZoneSkeleton';
import ProofSkeleton from '@/components/ui/skeletons/ProofSkeleton';

export default function loading() {
  return (
    <>
      <SubHeroSkeleton />
      <ServicesSkeleton />
      <WhyZoneSkeleton />
      <GrowthSkeleton />
      <ProofSkeleton />
      <CtaSkeleton />
    </>
  );
}
