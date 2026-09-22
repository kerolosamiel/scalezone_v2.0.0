import { cn } from 'cn';
import { SearchX } from 'lucide-react';

export default function EmptyState({
  title = 'No content found',
  description = 'There are no items available right now. Please check back later.',
  icon: Icon = SearchX,
  className = '',
}) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center border border-dashed border-border p-8 text-center bg-card/50',
        className
      )}
    >
      <div className="flex size-60 items-center justify-center rounded-full border-dashed border mb-12">
        <Icon className="size-30  text-muted-foreground" />
      </div>
      <h3 className="text-[3rem] tracking-[6%] font-semibold text-primary mb-[1.2rem]">{title}</h3>
      <p className="mt-1 text-[1.8rem] text-muted-foreground max-w-3xl">{description}</p>
    </div>
  );
}
