export default function PricingCard({ data }) {
  return (
    <article className="p-32 bg-card border w-fit hover:border-accent transition-all min-w-400">
      <div className="text-center flex flex-col mb-[2.4rem]">
        <h2 className="mb-5 text-[1.4rem] text-primary tracking-[6%]">{data?.title}</h2>
        <h3 className="text-[4.4rem]">
          $
          {(data?.price ?? 0).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h3>
        <p className="text-[1.4rem] text-muted-foreground">{data?.description}</p>
      </div>

      <ul className="list-none p-0">
        {data?.features?.map((feature, index) => (
          <li key={`${feature}-${index}`} className="text-[1.6rem] text-muted-foreground">
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
