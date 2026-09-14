import { cn } from 'cn';

export default function FormChip({ className, children }) {
  return (
    <div
      className={cn(
        'px-16 py-10 border w-fit text-[1.6rem] hover:border-accent transition-all cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
