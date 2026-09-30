import { getServicePage } from '@/lib/wordpress/data-fetching/queries';

export default async function page({ params }) {
  const { slug } = await params;
  const page = await getServicePage(slug);

  console.log(page);
  return <div>{slug}</div>;
}
