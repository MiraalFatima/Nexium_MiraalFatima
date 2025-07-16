/// FILE: app/api/translate/route.ts
import { NextResponse } from 'next/server';
import { translateToUrdu } from '@/lib/translate';

export async function POST(req: Request) {
  const { text } = await req.json();
  const translatedText = await translateToUrdu(text);
  return NextResponse.json({ translatedText });
}