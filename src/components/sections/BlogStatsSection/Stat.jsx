import { cn } from 'cn';
import React from 'react';

export default function Stat({ stat, className }) {
  if (!stat) return null;
  return (
    <div className={cn('text-center relative', className)}>
      <h3 className="text-[3.6rem] text-primary mb-12">{stat.value}</h3>
      <p className="text-[1.6rem] text-muted-foreground">{stat.label}</p>
    </div>
  );
}
