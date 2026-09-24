import { cn } from 'cn';
import { Fragment } from 'react';

export default function BaseCard({ data, className = '' }) {
  const title = data?.title ? data.title.split(' ') : [];
  return (
    <div className={cn('py-48 px-24', className)}>
      <div className="mb-32">
        <h3 className="text-[1.2rem] tracking-[6%] text-primary">{data?.subtitle}</h3>
        <h2 className="text-[3rem] leading-[115%] tracking-[6%] max-lg:text-[2.4rem]">
          {title.map((t, i) =>
            i != title.length - 1 ? (
              <Fragment key={i}>{t} </Fragment>
            ) : (
              <span key={i} className="text-primary">
                {t}
              </span>
            )
          )}
        </h2>
      </div>

      <p className="text-[1.8rem] text-muted-foreground max-[390px]:text-[1.6rem]">
        {data?.description}
      </p>
    </div>
  );
}
