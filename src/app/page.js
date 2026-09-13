import { getAboutPage } from '@/lib/wordpress/data-fetching/queries';

export default async function Home() {
  const data = await getAboutPage();
  console.log(data);
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
