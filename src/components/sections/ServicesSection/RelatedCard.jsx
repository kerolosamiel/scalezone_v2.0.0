import Link from 'next/link';

export default function RelatedCard({ service }) {
  if (!service) return null;

  return (
    <article className="bg-card border border-border hover:border-accent transition-all duration-300">
      <Link
        href={`/services/${service.slug}`}
        className="px-[4.8rem] py-32 inline-flex flex-col gap-16 max-xl:px-24 max-[390px]:px-16!"
      >
        <h3 className="text-[1.6rem] text-muted-foreground">Related Service</h3>
        <div>
          <h2 className="text-[1.4rem] tracking-[6%] mb-8">{service.serviceName}</h2>
          <p className="text-[1.4rem] text-muted-foreground text-ellipsis line-clamp-2">
            {service.serviceDescription}
          </p>
        </div>
      </Link>
    </article>
  );
}
