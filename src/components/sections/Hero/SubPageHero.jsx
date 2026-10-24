import BreadcrumbLinks from '@/components/shared/Breadcrumb';

export default function SubPageHero({ breadcrumbList = [], title, children }) {
  return (
    <section className="bg-card-gradient pt-75">
      <div className="py-64 px-80 max-w-1680 flex flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <BreadcrumbLinks breadcrumbs={breadcrumbList} />

        <h1 className="text-[6.2rem] tracking-[1%] leading-[115%] max-md:text-[4.4rem] max-sm:text-[3.6rem] max-[370px]:text-[3rem]! max-w-1200">
          {title}
        </h1>

        <div>{children}</div>
      </div>
    </section>
  );
}
