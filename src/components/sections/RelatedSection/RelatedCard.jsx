import Link from 'next/link';

export default function RelatedCard({ data }) {
  if (!data) return null;

  return (
    <article className="bg-card border border-border w-fit hover:border-accent transition-all duration-300">
      <Link href={data.slug} className="px-[4.8rem] py-32 inline-flex flex-col gap-16">
        <h3 className="text-[1.6rem] text-muted-foreground">{data.subtitle}</h3>
        <div>
          <h2 className="text-[1.4rem] tracking-[6%] mb-8">{data.title}</h2>
          <p className="text-[1.4rem] text-muted-foreground">{data.description}</p>
        </div>
      </Link>
    </article>
  );
}
