import { Fragment } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection({ hero }) {
  const { title, description, image, primaryButton, secondaryButton } = hero;

  const finalTitle = title.split(' ');
  return (
    <section className="bg-card-gradient">
      <div className="py-64 px-80 max-w-1440 grid grid-cols-2 gap-128 mx-auto max-xl:gap-64 max-xl:px-48 max-lg:flex max-lg:flex-col-reverse max-lg:px-32 max-lg:gap-32 max-md:px-16">
        <div className="flex flex-col gap-32 justify-center">
          <h1 className="text-[6.2rem] tracking-[1%] leading-[115%] max-sm:text-[4.4rem]">
            {finalTitle.map((t, i) =>
              i != finalTitle.length - 1 ? (
                <Fragment key={i}>{t} </Fragment>
              ) : (
                <span key={i} className="text-primary">
                  {t}
                </span>
              )
            )}
          </h1>

          <p className="text-[1.8rem] text-muted-foreground">{description}</p>

          <div className="flex gap-22 flex-wrap">
            <Button
              asChild
              className="h-[unset] py-16 px-32 text-[1.6rem] hover:scale-[1.05] max-sm:w-full"
            >
              <Link href="/get-started">{primaryButton}</Link>
            </Button>
            <Button
              asChild
              className="h-[unset] py-16 px-32 text-[1.6rem] border-accent border bg-background hover:scale-[1.05] max-sm:w-full"
            >
              <Link href="/appointment">{secondaryButton}</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-end max-lg:justify-center">
          <Image
            src={image?.url}
            alt={image?.alt}
            width="503"
            height="580"
            loading="eager"
            className="relative! h-auto w-auto [clip-path:polygon(12%_0%,100%_0%,100%_30%,100%_88%,88%_100%,30%_100%,0%_100%,0%_12%)]"
          />
        </div>
      </div>
    </section>
  );
}
