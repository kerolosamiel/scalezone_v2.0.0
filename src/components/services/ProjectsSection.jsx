import Link from 'next/link';
import BaseSections from '../sections/Common/BaseSections';
import GallaryImage from '../sections/Events/GallaryImage';
import EmptyState from '../ui/EmptyState';
import Chip from '../ui/chip';

export default function ProjectsSection({ gallery }) {
  if (!gallery) return null;
  const { title, subtitle, projects } = gallery;

  return (
    <BaseSections title={title} subtitle={subtitle}>
      <Chip className="bg-card text-primary mb-32">Portfolio</Chip>

      {!projects || projects?.length == 0 ? (
        <EmptyState
          className="py-64"
          title="No Projects Found"
          description="Our project portfolio and client case briefs are currently being updated. Check back soon!"
        />
      ) : (
        <ul className="grid grid-cols-3 gap-32 max-md:grid-cols-2 max-[570px]:grid-cols-1!">
          {projects.map((p, i) => (
            <li key={`project-${p.id || i}`} className="flex justify-center items-center w-full">
              <Link href={p?.link || '#'} className="w-full" target={p?.link ? '_blank' : '_self'}>
                <GallaryImage badge={p?.title} image={p?.image} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </BaseSections>
  );
}
