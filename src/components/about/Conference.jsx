import Image from 'next/image';
import Link from 'next/link';
import { FaCirclePlay } from 'react-icons/fa6';

export default function Conference({ conference = {} }) {
  const {
    title = 'Live from the conference floor.',
    subtitle = 'In The Field',
    videoURL = '#',
    posterImage = {},
  } = conference;
  return (
    <section>
      <div className=" flex flex-col justify-center items-center py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="mb-64 w-full">
          <h3 className="text-[2rem] tracking-[1%] text-primary">{subtitle}</h3>
          <h2 className="text-[4.4rem] tracking-[1%] max-w-700 leading-[115%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
            {title}
          </h2>
        </div>

        <Link
          href={videoURL}
          target="_blank"
          className="relative brightness-80 hover:brightness-100! inline-flex"
        >
          <Image
            src={posterImage?.url}
            alt={posterImage?.alt || 'Youtube poster'}
            width={770}
            height={430}
            loading="lazy"
            className="[clip-path:polygon(8%_0%,100%_0%,100%_30%,100%_88%,92%_100%,30%_100%,0%_100%,0%_12%)]"
          />

          <FaCirclePlay className="absolute size-90 text-accent left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 max-[450px]:size-60" />
        </Link>
      </div>
    </section>
  );
}
