'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InputPanel from '@/components/InputPanel';
import OutputPanel from '@/components/OutputPanel';
import Loader from '@/components/Loader';
import './globals.css';
export default function HomePage() {
  const [summary, setSummary] = useState('');
  const [translated, setTranslated] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSummarize(content: string, type: 'url' | 'text') {
    setLoading(true);
    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [type]: content }),
      });
      const { summary } = await res.json();
      setSummary(summary);

      const tRes = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: summary }),
      });
      const { translatedText } = await tRes.json();
      setTranslated(translatedText);
    } catch (error) {
      console.error('Error:', error);
      setSummary('❌ Failed to summarize content.');
      setTranslated('');
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f1d] via-[#111827] to-[#1e1e2f] text-gray-100 font-mono">
      <Navbar />
      <HeroSection />
      <section className="max-w-5xl mx-auto mt-8 p-6 sm:p-10 rounded-2xl backdrop-blur-lg border border-white/10 bg-white/5 shadow-[0_0_20px_#1e90ff40] transition duration-300">
        <InputPanel onSubmit={handleSummarize} />
        <div className="mt-8">
          {loading ? <Loader /> : <OutputPanel summary={summary} translated={translated} />}
        </div>
      </section>
      <footer className="mt-24 text-center text-gray-500 text-sm pb-8">
        <p>🚀 Built using NLP + Next.js + Tailwind CSS</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:underline text-blue-400">Privacy</a>
          <a href="/features" className="hover:underline text-blue-400">Terms</a>
          <a href="/contact" className="hover:underline text-blue-400">Support</a>
        </div>
      </footer>
    </main>
  );
}
