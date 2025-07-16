/// FILE: components/SummaryCard.tsx
'use client';
import { motion } from 'framer-motion';

export default function SummaryCard({ summary, translated }: { summary: string; translated: string }) {
  if (!summary) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 p-4 bg-white shadow-md rounded-xl"
    >
      <h2 className="text-xl font-semibold mb-2">English Summary</h2>
      <p className="text-gray-700 whitespace-pre-line">{summary}</p>
      <hr className="my-4" />
      <h2 className="text-xl font-semibold mb-2">Urdu Translation</h2>
      <p className="text-gray-700 whitespace-pre-line urdu-font">{translated}</p>
    </motion.div>
  );
}