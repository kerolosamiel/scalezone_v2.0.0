import { cn } from 'cn';
import { MapPin, Phone, Mail, Check } from 'lucide-react';

export function Expect({ expect, className }) {
  return (
    <a
      className={cn(
        'flex gap-[1.2rem] items-center hover:text-accent transition-colors duration-300',
        className
      )}
    >
      <Check className="text-accent shrink-0" />
      {expect}
    </a>
  );
}

export function Location({ location, className, children }) {
  return (
    <a
      href={location}
      className={cn(
        'flex gap-[1.2rem] items-center hover:text-accent transition-colors duration-300',
        className
      )}
    >
      <MapPin className="text-accent shrink-0" />
      {children}
    </a>
  );
}

export function PhoneDirect({ phone, className, children }) {
  return (
    <a
      href={`tel:${phone}`}
      className={cn(
        'flex gap-[1.2rem] items-center hover:text-accent transition-colors duration-300',
        className
      )}
    >
      <Phone className="text-accent shrink-0" />
      {children}
    </a>
  );
}

export function MailDirect({ mail, className, children }) {
  return (
    <a
      href={`mailto:${mail}`}
      className={cn(
        'flex gap-[1.2rem] items-center hover:text-accent transition-colors duration-300',
        className
      )}
    >
      <Mail className="text-accent shrink-0" />
      {children}
    </a>
  );
}
