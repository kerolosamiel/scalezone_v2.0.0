import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSection({ cta = {} }) {
  const { title, description, cardTitle, button } = cta;

  return (
    <section className="relative bg-card after:absolute after:w-full after:h-full  after:bg-[url(/images/patterns_gray.webp)] after:bg-center after:left-0 after:top-0 after:bg-contain after:opacity-10 after:z-10">
      <div className="relative z-20 py-64 px-80 max-w-1680 flex flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16 text-center">
        <div>
          <h2 className="text-[6.2rem] leading-[115%] tracking-[1%] mb-48 max-sm:mb-32 max-sm:text-[3.6rem] max-[390px]:text-[3rem]!">
            {title || 'Where Growth Becomes Scale.'}
          </h2>
          <p className="text-[1.8rem] text-muted-foreground max-w-7xl mx-auto max-sm:[1.6rem] max-[390px]:text-[1.4rem]!">
            {description ||
              'Scalezone exists to turn random growth into a structured, measurable process — partnering with sellers who want systems that hold up at volume, not one-off wins.'}
          </p>
        </div>

        <div className="text-start py-64 bg-accent flex justify-between items-center px-128 max-xl:px-18 max-xl:py-48 flex-wrap gap-32 max-[870px]:text-center max-lg:justify-center">
          <h3 className="text-[4.4rem] tracking-[1%] max-w-500 leading-[115%] max-sm:text-[3.6rem] max-[390px]:text-[2.4rem]!">
            {cardTitle || 'Ready to build your growth plan?'}
          </h3>
          <Button
            asChild
            className="h-[unset] bg-background hover:bg-background hover:scale-[1.05] py-16 px-32 text-[1.6rem] max-[390px]:w-full"
          >
            <Link href="/appointment">{button || 'Book an Appointment'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
