'use client';

import * as React from 'react';
import { cn } from 'cn';
import { Switch as SwitchPrimitive } from 'radix-ui';

function Switch({ className, size = 'default', ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        'peer group/switch relative inline-flex min-w-46 min-h-26 p-[3px] border border-border shrink-0 items-center rounded-full transition-all outline-none group-has-focus-visible/field-label:border-transparent group-has-focus-visible/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-20 data-[size=sm]:h-8.75 data-[size=sm]:w-15 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none bg-primary block rounded-full ring-0 transition-transform group-data-[size=default]/switch:size-20 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-[state=checked]:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-[state=checked]:translate-x-[calc(100%-2px)] dark:data-[state=checked]:bg-primary group-data-[size=default]/switch:data-[state=unchecked]:translate-x-0 group-data-[size=sm]/switch:data-[state=unchecked]:translate-x-0 dark:data-[state=unchecked]:bg-primary"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
