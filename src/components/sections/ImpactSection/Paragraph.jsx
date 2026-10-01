import { cn } from 'cn';

export default function Paragraph({ parag = '', className = '' }) {
  return (
    <p
      className={cn(
        'text-[1.8rem] text-muted-foreground max-w-700 max-sm:text-[1.6rem] max-[390px]:text-[1.4rem]!',
        className
      )}
    >
      {parag}
    </p>
  );
}
