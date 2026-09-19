import { Separator } from '@/components/ui/separator';

export default function InformationBlock({ title, sep = true, children }) {
  return (
    <>
      <div>
        <h3 className="mb-12 text-primary text-[1.4rem] tracking-[6%]">{title}</h3>

        {children}
      </div>
      {sep ? <Separator className="h-1" /> : ''}
    </>
  );
}
