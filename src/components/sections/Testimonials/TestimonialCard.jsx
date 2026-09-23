import Image from 'next/image';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="px-[2.4rem] py-32 border w-full flex flex-col gap-32 bg-card-gradient justify-between">
      <div className="head flex items-center gap-[1.2rem]">
        <Avatar className="w-55 h-55 rounded-full overflow-hidden">
          <AvatarImage src={testimonial?.clientImage?.url} />
          <AvatarFallback className="text-[1.8rem]">
            {testimonial?.clientName?.slice(0, 2)?.toUpperCase() || 'CN'}
          </AvatarFallback>
        </Avatar>

        <div className="title">
          <h3 className="text-[1.8rem] tracking-[6%]">
            {testimonial?.clientName?.trim() || 'Client Name'}
          </h3>
          <p className="text-[1.6rem] text-muted-foreground mt-1.5">
            {testimonial?.clientCountry?.trim() || 'Client Country'}
          </p>
        </div>
      </div>

      <p className="text-[1.6rem]">
        &#34;{testimonial?.feedback?.trim() || 'No feedback available.'}&#34;
      </p>

      <div className="stars flex gap-8">
        {Array.from({ length: 5 }, (_, index) => {
          const isFilled = index < (testimonial?.starCounter || 5);
          return (
            <Star
              key={index}
              className={
                isFilled
                  ? 'text-accent fill-accent'
                  : 'text-muted-foreground/30 fill-muted-foreground/20'
              }
            />
          );
        })}
      </div>
    </article>
  );
}
