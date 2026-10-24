import BreadcrumbLinks from '../shared/Breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Chip from '../ui/chip';

export default function HeroSection({ hero, slug }) {
  const { title, description, chip, auther } = hero;

  const breadcrumbs = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/resources/blogs',
      text: 'blogs',
    },
    {
      href: `/services/${slug}`,
      text: slug
        .split('-')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' '),
    },
  ];

  return (
    <section className="bg-card-gradient pt-75">
      <div className="py-64 px-80 max-w-1680 flex items-center justify-center flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <BreadcrumbLinks breadcrumbs={breadcrumbs} />

        <Chip className="bg-card text-primary">{chip || 'Growth'}</Chip>

        <div className="text-center">
          <h1 className="text-[6.2rem] leading-[115%] tracking-[1%] mb-32 max-lg:text-[5.2rem] max-sm:text-[3.6rem] max-[400px]:text-[2.4rem]!">
            {title}
          </h1>
          <p className="text-[1.8rem] text-muted-foreground max-w-600 mx-auto max-sm:text-[1.6rem] max-[400px]:text-[1.4rem]!">
            {description}
          </p>
        </div>

        {auther && (
          <div className="flex gap-8 items-center">
            <Avatar className="size-30 rounded-full overflow-hidden max-[320px]:size-20!">
              <AvatarImage
                src={auther.avatar?.url || ''}
                alt={auther.avatar?.alt || 'Team Image'}
              />
              <AvatarFallback>SZ</AvatarFallback>
            </Avatar>

            <p className="text-[1.4rem] text-muted-foreground max-[320px]:text-[1.2rem]">
              {auther.name}
            </p>
            <span className="text-[1.4rem] text-muted-foreground max-[320px]:text-[1.2rem]">.</span>

            <p className="text-[1.4rem] text-muted-foreground max-[320px]:text-[1.2rem]">
              {new Date(auther.date).toDateString()}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
