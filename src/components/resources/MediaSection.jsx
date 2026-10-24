'use client';
import { FileText, MicSignal, Video } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function MediaSection({ children }) {
  const path = usePathname();
  // const [previousIndex, setPreviousIndex] = useState(null);
  // const [move, setMove] = useState('right');
  // const [previousMove, setPreviousMove] = useState(null);

  const chips = [
    {
      href: '/resources/blogs',
      title: 'Blogs',
      icon: <FileText />,
    },
    {
      href: '/resources/videos',
      title: 'Videos',
      icon: <Video />,
    },
    {
      href: '/resources/podcasts',
      title: 'Podcasts',
      icon: <MicSignal />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(chips.findIndex((chip) => chip.href === path));

  const after =
    'after:absolute after:size-full after:z-20 after:bg-button-gradient after:left-0 after:transition-all after:duration-500 after:ease-in-out';

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="flex gap-32 mb-64 max-[500px]:gap-12 max-[420px]:flex-col">
          {chips.map((chip, index) => {
            const isActive = index === activeIndex;

            let afterClass = isActive ? 'after:opacity-100' : 'after:opacity-0';

            return (
              <Button
                key={`chip-${index}`}
                asChild
                className={`overflow-hidden h-[unset] py-12 px-16 bg-card hover:bg-card text-[1.6rem] [&_svg]:size-20! hover:scale-[1.05] relative  ${after} ${afterClass} max-[500px]:px-12! max-[420px]:w-full`}
                onClick={(e) => handleClick(index)}
              >
                <Link href={chip.href} scroll={false} prefetch={true}>
                  <span className="relative z-30 inline-flex gap-12">
                    {chip.icon} {chip.title}
                  </span>
                </Link>
              </Button>
            );
          })}
        </div>

        {children}
      </div>
    </section>
  );
}
