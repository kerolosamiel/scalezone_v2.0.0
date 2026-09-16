import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Scalezone',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main>
      <section className="h-[calc(100dvh-6.4rem)] px-16 flex flex-col justify-center items-center my-32 gap-32 text-center">
        <div>
          <h1 className="text-[21rem] max-sm:text-[14rem] tracking-[6%] text-primary">404</h1>
          <h2 className="text-[1.6rem] tracking-[6%]">Page Not Found</h2>
        </div>

        <div>
          <p className="text-[1.6rem] max-sm:text-[1.4rem] max-w-650 mb-24 text-muted-foreground">
            Sorry&#x2c; the page you are looking for doesn't exist or has been moved.
          </p>
          <Button
            asChild
            className="text-[1.6rem] h-fit w-fit py-16 px-30 hover:bg-button-hover-gradient hover:scale-[1.1] transition-all duration-500"
          >
            <Link href="/">Back To Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
