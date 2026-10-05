import { notFound } from 'next/navigation';

export default function page() {
  notFound();
  return <h1>Case Studies</h1>;
}
