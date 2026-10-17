import { Skeleton } from '../skeleton';
import { Carousel, CarouselContent, CarouselItem } from '../carousel';
import TestimonialCardSkeleton from './TestimonialCardSkeleton';

export default function TestimonialsSkeleton() {
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <Skeleton className="h-90 w-500  mb-48" />

        <div className="mb-48">
          <Skeleton className="h-50 w-100 border mb-48" />

          <Carousel>
            <CarouselContent className="gap-24 max-sm:gap-16">
              {Array.from({ length: 6 }, (_, i) => (
                <CarouselItem
                  key={`item-${i}`}
                  className="basis-1/4 items-stretch flex max-xl:basis-1/3 max-lg:basis-1/2 max-sm:basis-[calc(100%-5rem)]"
                >
                  <TestimonialCardSkeleton />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
