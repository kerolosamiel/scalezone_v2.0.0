import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

export default function BreadcrumbLinks({ breadcrumbs }) {
  if (!breadcrumbs) return null;
  return (
    <>
      {breadcrumbs.length != 0 && (
        <Breadcrumb className="[&>ol]:gap-8">
          <BreadcrumbList>
            {breadcrumbs?.map((b, i) => (
              <Fragment key={`item-${i}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={b?.href || ''}
                    className={
                      i != breadcrumbs.length - 1
                        ? 'text-[1.4rem] text-muted-foreground max-[400px]:text-[1rem]!'
                        : 'text-[1.4rem] text-foreground max-[400px]:text-[1rem]!'
                    }
                  >
                    {b?.text}
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {i != breadcrumbs.length - 1 && <BreadcrumbSeparator className="[&>svg]:size-15" />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}
