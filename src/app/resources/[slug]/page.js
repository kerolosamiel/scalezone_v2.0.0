import { getResourcePage } from '@/lib/wordpress/data-fetching/queries';
import React from 'react';

export default async function page() {
  const page = await getResourcePage();
  console.log(page);
  return <div>page</div>;
}
