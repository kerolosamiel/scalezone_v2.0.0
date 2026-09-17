import { cn } from 'cn';
import { Loader2Icon } from 'lucide-react';

function Spinner({ className, ...props }) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn('size-16 animate-spin text-accent', className)}
      {...props}
    />
  );
}

export { Spinner };
