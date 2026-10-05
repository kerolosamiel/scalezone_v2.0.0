import { notFound } from 'next/navigation';
import React from 'react';

export default function page() {
  notFound();
  return <h1>Appointment</h1>;
}
