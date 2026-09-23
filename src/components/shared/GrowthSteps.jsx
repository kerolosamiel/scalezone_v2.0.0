import { cn } from 'cn';

export default function GrowthSteps({ className }) {
  return (
    <div
      className={cn(
        'flex relative w-fit mx-auto gap-64 after:absolute after:w-[calc(100%-120px)] after:z-10 after:h-2 after:bg-muted-foreground after:left-[50%] after:top-30 after:translate-x-[-50%]  max-[350px]:gap-24',
        className
      )}
    >
      <div className="flex flex-col items-center gap-16 relative z-20">
        <div className="flex size-60 items-center justify-center rounded-full bg-[#0000001A] backdrop-blur-[5px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.5)]">
          <p className="text-[1.8rem] relative z-10">1</p>
        </div>
        <h3 className="text-[1.4rem] tracking-[6%] text-muted-foreground max-[400px]:text-[1.2rem]">
          ANSWER
        </h3>
      </div>
      <div className="flex flex-col items-center gap-16 relative z-20">
        <div className="flex size-60 items-center justify-center rounded-full bg-primary shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.5)]">
          <p className="text-[1.8rem] relative z-10">2</p>
        </div>
        <h3 className="text-[1.4rem] tracking-[6%] text-muted-foreground max-[400px]:text-[1.2rem]">
          Get Matched
        </h3>
      </div>
      <div className="flex flex-col items-center gap-16 relative z-20">
        <div className="flex size-60 items-center justify-center rounded-full bg-[#0000001A] backdrop-blur-[5px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.5)]">
          <p className="text-[1.8rem] relative z-10">3</p>
        </div>
        <h3 className="text-[1.4rem] tracking-[6%] text-muted-foreground max-[400px]:text-[1.2rem]">
          BOOK
        </h3>
      </div>
    </div>
  );
}
