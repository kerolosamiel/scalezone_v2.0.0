import { cn } from 'cn';

export default function State({ state, className }) {
  return (
    <div className={cn('flex flex-col justify-center items-center', className)}>
      <div className="max-lg:text-center">
        <h2 className="text-[3.8rem] text-primary mb-8">
          {state?.state}
          {state?.symbol}
        </h2>
        <p className="text-[1.6rem] text-muted-foreground">{state?.title}</p>
      </div>
    </div>
  );
}
