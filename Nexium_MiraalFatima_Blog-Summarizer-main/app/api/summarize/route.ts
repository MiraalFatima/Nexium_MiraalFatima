import { NextResponse } from 'next/server';
import { scrapeBlogContent } from '@/lib/scrape';
import { generateSummary } from '@/lib/summarize';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let content = '';
    let title = '';

    if (body.url) {
      const blog = await scrapeBlogContent(body.url);
      content = blog.content;
      title = blog.title;
    } else if (body.text) {
      content = body.text;
      title = body.title || 'Untitled'; // If user pasted content manually
    } else {
      return NextResponse.json({ error: 'No content provided.' }, { status: 400 });
    }

    const summary = generateSummary(content, title);
    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Summarization error:', error);
    return NextResponse.json({ error: 'Failed to summarize.' }, { status: 500 });
  }
}
