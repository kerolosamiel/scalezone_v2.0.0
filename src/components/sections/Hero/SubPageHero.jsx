import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React, { Fragment } from 'react';

export default function SubPageHero({ breadcrumbList = [], title, children }) {
  return (
    <section className="bg-card-gradient">
      <div className="py-64 px-80 max-w-1680 flex flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        {breadcrumbList.length != 0 && (
          <Breadcrumb className="[&>ol]:gap-8">
            <BreadcrumbList>
              {breadcrumbList?.map((b, i) => (
                <Fragment key={`item-${i}`}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={b?.href || ''}
                      className={
                        i != breadcrumbList.length - 1
                          ? 'text-[1.4rem] text-muted-foreground max-[380px]:text-[1rem]!'
                          : 'text-[1.4rem] text-foreground max-[380px]:text-[1rem]!'
                      }
                    >
                      {b?.text}
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {i != breadcrumbList.length - 1 && (
                    <BreadcrumbSeparator className="[&>svg]:size-15" />
                  )}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        <h1 className="text-[6.2rem] tracking-[1%] leading-[115%] max-md:text-[4.4rem] max-sm:text-[3.6rem] max-[370px]:text-[3rem]! max-w-1200">
          {title}
        </h1>

        <div>{children}</div>
      </div>
    </section>
  );
}
