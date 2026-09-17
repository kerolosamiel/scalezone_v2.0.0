import { SearchX } from 'lucide-react';

export default function EmptyState({
  title = 'No content found',
  description = 'There are no items available right now. Please check back later.',
  icon: Icon = SearchX,
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border p-8 text-center bg-card/50">
      <div className="flex size-30 items-center justify-center rounded-full border-dashed border mb-4">
        <Icon className="size-15  text-muted-foreground" />
      </div>
      <h3 className="text-[1.6rem] tracking-[6%] font-semibold text-primary mb-[1.2rem]">
        {title}
      </h3>
      <p className="mt-1 text-[1.2rem] text-muted-foreground max-w-md">{description}</p>
    </div>
  );
}
