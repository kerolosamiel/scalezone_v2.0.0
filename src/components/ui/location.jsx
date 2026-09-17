import { MapPin } from 'lucide-react';

export default function Location({ children }) {
  return (
    <div className="flex gap-[1.2rem] items-center hover:text-accent transition-colors duration-300">
      <MapPin className="text-accent shrink-0" />
      {children}
    </div>
  );
}
