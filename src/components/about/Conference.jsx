import Image from 'next/image';
import Link from 'next/link';
import { FaCirclePlay } from 'react-icons/fa6';
import BaseAboutSections from '../sections/Common/BaseAboutSections';
import EmptyState from '../ui/EmptyState';

export default function Conference({ conference = {} }) {
  const {
    title = 'Live from the conference floor.',
    subtitle = 'In The Field',
    videoURL = '#',
    posterImage = {},
  } = conference;
  return (
    <BaseAboutSections
      title={title}
      subtitle={subtitle}
      className="flex flex-col justify-center items-center"
    >
      {!posterImage?.url ? (
        <EmptyState
          className="py-64"
          title="No Video Found"
          description="Our conference coverage video is currently being updated. Check back soon!"
        />
      ) : (
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
      )}
    </BaseAboutSections>
  );
}
