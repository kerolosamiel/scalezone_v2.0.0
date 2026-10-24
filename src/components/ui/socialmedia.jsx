import { cn } from 'cn';

export default function SocialMedia({ href, icon, className }) {
  return (
    <a href={href} className={cn('border border-accent p-10', className)} target="_blank">
      {icon}
    </a>
  );
}
