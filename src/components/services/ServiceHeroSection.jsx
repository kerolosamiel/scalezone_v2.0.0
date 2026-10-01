import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import SubPageHero from '../sections/Hero/SubPageHero';

export default function ServiceHeroSection({ slug, hero = {} }) {
  const { title, description, button } = hero;

  const breadcrumbs = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '',
      text: 'services',
    },
    {
      href: `/services/${slug}`,
      text: slug
        .split('-')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' '),
    },
  ];
  return (
    <SubPageHero breadcrumbList={breadcrumbs} title={title}>
      <p className="text-[1.8rem] text-muted-foreground max-w-900 mb-32 max-[390px]:text-[1.4rem]! max-[540px]:text-[1.6rem]!">
        {description}
      </p>

      <Button asChild className="h-[unset] py-16 px-32 text-[1.6rem] ">
        <Link href="/appointment">{button}</Link>
      </Button>
    </SubPageHero>
  );
}
