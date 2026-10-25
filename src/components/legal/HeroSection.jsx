import SubPageHero from '@/components/sections/Hero/SubPageHero';
import Chip from '../ui/chip';

export default function HeroSection({ hero, lastUpdate, slug }) {
  const { title, chip, description } = hero;

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
      <div className="flex gap-32 items-center my-32 flex-wrap">
        <p className="text-[1.6rem] text-primary">
          Last updated:{' '}
          {new Date(lastUpdate)?.toDateString() || new Date('7/18/2025').toDateString()}
        </p>
        <Chip className="bg-card text-primary">{chip}</Chip>
      </div>

      <p className="text-[1.8rem] text-muted-foreground max-w-900 mb-32 max-[390px]:text-[1.4rem]! max-[540px]:text-[1.6rem]!">
        {description}
      </p>
    </SubPageHero>
  );
}
