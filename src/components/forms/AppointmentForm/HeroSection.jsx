import CompactHero from '@/components/sections/Hero/CompactHero';
import { FileText } from 'lucide-react';

export default function HeroSection({ hero }) {
  if (!hero) return null;

  console.log(hero);
  return (
    <CompactHero hero={hero} className="max-[450px]:[&>h1]:text-[3.2rem] max-[450px]:px-16!">
      <div className="flex gap-48 flex-wrap max-md:justify-center max-md:gap-32">
        <p className="flex gap-12 items-center text-[1.6rem] max-[365px]:text-[1.4rem]">
          <FileText className="text-accent" />
          {hero.highlights?.firstBadge || 'Quick account analysis'}
        </p>
        <p className="flex gap-12 items-center text-[1.6rem] max-[365px]:text-[1.4rem]">
          <FileText className="text-accent" />
          {hero.highlights?.secondBadge || 'Quick account analysis'}
        </p>
      </div>
    </CompactHero>
  );
}
