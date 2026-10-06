import { notFound } from 'next/navigation';

export default function page() {
  notFound();
  return <h1>get-started</h1>;
}
