import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    if (secret !== process.env.REVALIDATION_SECRET_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const { tag } = await request.json();

    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({
        revalidated: true,
        tag,
        now: Date.now(),
      });
    }

    return NextResponse.json({ message: 'Missing tag in body' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
