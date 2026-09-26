import SubPageHero from '../sections/Hero/SubPageHero';

export default function ZoneHeroSection({ slug, hero = {} }) {
  const {
    title = 'Everything You Need to Win',
    description = 'For sellers who want one team handling account health, ads, content, and strategy — not five different vendors.',
  } = hero;

  const breadcrumbs = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '',
      text: 'Zones',
    },
    {
      href: `/zones/${slug}`,
      text: slug
        .split('-')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' '),
    },
  ];
  return (
    <SubPageHero breadcrumbList={breadcrumbs} title={title}>
      <p className="text-[1.8rem] text-muted-foreground max-w-600 max-[440px]:text-[1.6rem]!">
        {description}
      </p>
    </SubPageHero>
  );
}
