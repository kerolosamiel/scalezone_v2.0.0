import React from 'react';

export default function PreferenceItem({ label, children }) {
  return (
    <div className="flex gap-12 justify-between">
      <h3 className="text-[1.2rem] tracking-6% text-muted-foreground">{label}</h3>
      {children}
    </div>
  );
}
