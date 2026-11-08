import parse from 'html-react-parser';

export default function PricingCard({ data }) {
  if (!data) return null;
  const { title, subtitle, price, features } = data;
  return (
    <article className="p-32 bg-card border hover:border-accent transition-all w-full">
      <div className="text-center flex flex-col mb-[2.4rem]">
        <h2 className="mb-5 text-[1.4rem] text-primary tracking-[6%]">{title}</h2>
        <h3 className="text-[4.4rem]">
          $
          {(price ?? 0).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h3>
        <p className="text-[1.4rem] text-muted-foreground">{subtitle}</p>
      </div>

      <div className="[&>ul>li]:text-[1.6rem] [&>ul>li]:text-muted-foreground [&>ul>li]:mb-8 [&>*:not(ul)]:hidden">
        {parse(features ?? '')}
      </div>
    </article>
  );
}
