import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f1d] via-[#111827] to-[#1e1e2f] text-white font-mono">
      <Navbar />
      <section className="max-w-4xl mx-auto py-20 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_20px_#00ff8840]">
        <h1 className="text-4xl font-bold mb-6 text-emerald-400">🤖 About BlogSummarize.AI</h1>
        <p className="text-gray-300 mb-6 text-md">
          Summarize smarter. Read faster. Understand better!
          <p>This AI-Powered Blog Summarizer intelligently extracts and condenses key insights from any blog URL in seconds. Built with Next.js 14, React, and TypeScript, it leverages Cheerio for content scraping and a custom AI-driven scoring algorithm for generating meaningful summaries. The app also features real-time Urdu translation using the MyMemory API, enhancing accessibility for multilingual users. A sleek, animated interface—powered by Tailwind CSS and Framer Motion—ensures a modern, responsive experience across all devices. With secure backend services through Supabase and MongoDB, the system ensures efficient data flow and storage. Whether you're researching, skimming, or learning, this tool helps you save time and focus on what truly matters.</p>
        </p>
        <p className="text-gray-400 text-sm">
          Built with ❤️ using GPT technology, Next.js, and TailwindCSS.
        </p>
        <Link href="/" className="mt-6 inline-block text-emerald-400 hover:underline">← Back to Home</Link>
      </section>
    </main>
  );
}
