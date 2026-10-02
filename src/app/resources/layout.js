import CompactHero from '@/components/sections/Hero/CompactHero';
import { getResourcePage } from '@/lib/wordpress/data-fetching/queries';

export default async function layout({ children }) {
  const page = await getResourcePage();

  if (!page) return notFound();
  return (
    <main>
      <CompactHero hero={page.hero} />
      {children}
    </main>
  );
}
