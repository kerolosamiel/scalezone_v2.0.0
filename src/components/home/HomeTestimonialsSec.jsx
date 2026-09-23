import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import TestimonialCard from '../sections/Testimonials/TestimonialCard';
import EmptyState from '../ui/EmptyState';

export default function HomeTestimonials({ testimonials }) {
  const global = testimonials?.global?.testimonials;
  const arabic = testimonials?.arabic?.testimonials;

  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <h2 className="text-[4.4rem] tracking-[6%] mb-48 max-w-550 leading-[115%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
          {testimonials?.title || 'Sellers who scaled with structure.'}
        </h2>

        <div className="mb-48">
          <div className="p-12 border w-fit mb-48">
            <h3 className="text-[1.4rem] tracking-[6%] text-primary leading-20">
              {testimonials?.global?.market || 'EUROPE MARKET'}
            </h3>
          </div>

          {!global || global?.length === 0 ? (
            <EmptyState
              className="py-64"
              title="No Testimonials Yet"
              description="Collecting international client reviews. Check back soon!"
            />
          ) : (
            <Carousel>
              <CarouselContent className="gap-24 max-sm:gap-16">
                {global?.map((t, i) => (
                  <CarouselItem
                    key={`testimonial-${t?.id || i}`}
                    className="basis-1/4 items-stretch flex max-xl:basis-1/3 max-lg:basis-1/2 max-sm:basis-[calc(100%-5rem)]"
                  >
                    <TestimonialCard testimonial={t} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>

        <div className="mb-48">
          <div className="p-12 border w-fit mb-48">
            <h3 className="text-[1.4rem] tracking-[6%] text-primary leading-20">
              {testimonials?.arabic?.market || 'ARABIC MARKET'}
            </h3>
          </div>
          {!arabic || arabic?.length === 0 ? (
            <EmptyState
              className="py-64"
              title="No Testimonials Yet"
              description="Documenting client success stories across the MENA region. Stay tuned!"
            />
          ) : (
            <Carousel>
              <CarouselContent className="gap-24 max-sm:gap-16">
                {arabic?.map((t, i) => (
                  <CarouselItem
                    key={`testimonial-${t?.id || i}`}
                    className="basis-1/4 items-stretch flex max-xl:basis-1/3 max-lg:basis-1/2 max-sm:basis-[calc(100%-5rem)]"
                  >
                    <TestimonialCard testimonial={t} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
