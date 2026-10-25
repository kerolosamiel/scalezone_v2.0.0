import SubPageHero from '@/components/sections/Hero/SubPageHero';
import Chip from '../ui/chip';

export default function HeroSection({ title, description, lastUpdate, slug }) {
  const breadcrumbs = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '',
      text: 'legal',
    },
    {
      href: `/legal/${slug}`,
      text: slug
        .split('-')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' '),
    },
  ];

  return (
    <SubPageHero breadcrumbList={breadcrumbs} title={title}>
      <div className="flex gap-32 items-center my-32">
        <p className="text-[1.6rem] text-primary">
          Last updated: {lastUpdate?.toDateString() || new Date('7/18/2025').toDateString()}
        </p>
        <Chip className="bg-card text-primary">Draft — pending legal review</Chip>
      </div>

      <p className="text-[1.8rem] text-muted-foreground max-w-900 mb-32 max-[390px]:text-[1.4rem]! max-[540px]:text-[1.6rem]!">
        {description}
      </p>
    </SubPageHero>
  );
}
