import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f1d] via-[#111827] to-[#1e1e2f] text-white font-mono">
      <Navbar />
      <section className="max-w-4xl mx-auto py-20 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_20px_#7f00ff40]">
        <h1 className="text-4xl font-bold mb-10 text-purple-400">🔍 Features</h1>
        <ul className="space-y-6 text-md text-gray-200">
          <li>○ Summarize blogs by URL or pasted text.</li>
          <li>○ Real-time multilingual translation (Urdu supported).</li>
          <li>○ Copy and download summaries instantly.</li>
          <li>○ GPT-based summarization engine using NLP.</li>
          <li>○ Mobile-optimized and responsive design.</li>
        </ul>
        <Link href="/" className="mt-6 inline-block text-purple-400 hover:underline">← Back to Home</Link>
      </section>
    </main>
  );
}
