import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function MissionSection({ mission = {} }) {
  const { title = '', subtitle = '', description = '', button = '', image } = mission;
  return (
    <section className="relative bg-card-gradient after:absolute after:w-full after:h-full after:bg-[url(/images/logo/logox02.webp)] after:bg-center after:left-0 after:top-0 after:bg-cover after:opacity-5 after:z-10">
      <div className="relative z-20 py-64 px-80 grid grid-cols-2 gap-24 items-center max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="flex flex-col gap-32 items-start max-lg:col-span-full">
          <div>
            <h3 className="text-[3.6rem] text-primary tracking-[1%] max-sm:text-[2.4rem] max-[360px]:text-[1.6rem]!">
              {subtitle || 'OUR MISSION'}
            </h3>
            <h2 className="text-[4.4rem] leading-[115%] tracking-[1%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
              {title || 'Built to Scale, Driven by Results.'}
            </h2>
          </div>

          <p className="text-[1.8rem] text-muted-foreground max-[450px]:text-[1.6rem] max-[330px]:text-[1.4rem]!">
            {description ||
              "Our mission is to empower Amazon sellers with the expertise, tools, and creative strategies they need to thrive in today's competitive marketplace. We exist to: Simplify every stage of the Amazon selling journey Craft tailored strategies that turn products into bestsellers Deliver real, scalable results - from launch to global growth. We don't offer generic solutions. We build Amazon success stories - one brand at a time."}
          </p>

          <Button asChild className="py-16 px-32 text-[1.6rem] h-[unset] hover:scale-[1.05]">
            <Link href="/about">{button || 'More About Us'}</Link>
          </Button>
        </div>

        {image?.url ? (
          <div className="flex justify-end max-lg:justify-center max-lg:hidden">
            <Image
              src={image?.url}
              alt={image?.alt || 'Mission Image'}
              width={503}
              height={580}
              loading="eager"
              className="relative! h-auto w-auto [clip-path:polygon(12%_0%,100%_0%,100%_30%,100%_88%,88%_100%,30%_100%,0%_100%,0%_12%)]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
