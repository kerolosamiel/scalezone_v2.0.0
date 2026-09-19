import * as React from 'react';
import { cn } from 'cn';

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-fit px-16 py-12 w-[unset] min-w-0 rounded-lg border border-input bg-transparent text-[1.4rem] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-accent aria-invalid:ring-3 aria-invalid:ring-accent/20  dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-accent/50 dark:aria-invalid:ring-accent/40',
        className
      )}
      {...props}
    />
  );
}

export { Input };
