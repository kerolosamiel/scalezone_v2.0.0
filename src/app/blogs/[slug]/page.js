import { getBlogPage } from '@/lib/wordpress/data-fetching/queries';

export default async function page({ params }) {
  const { slug } = await params;
  const data = await getBlogPage(slug);

  console.log(data);
  return <div>page</div>;
}
