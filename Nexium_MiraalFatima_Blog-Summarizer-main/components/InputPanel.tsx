'use client';
import { useState } from 'react';
import { Button } from './ui/button';

type Props = {
  onSubmit: (input: string, type: 'url' | 'text') => void;
};

export default function InputPanel({ onSubmit }: Props) {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'url' | 'text'>('url');

  return (
    <div id="summarizer">
      <div className="flex mb-4 space-x-2">
        <button
          onClick={() => setMode('url')}
          className={`px-4 py-2 rounded-lg border ${
            mode === 'url'
              ? 'bg-blue-500 text-white shadow-blue-400 shadow-md'
              : 'border-gray-600 text-gray-400'
          } transition-all`}
        >
          🌐 URL Mode
        </button>
        <button
          onClick={() => setMode('text')}
          className={`px-4 py-2 rounded-lg border ${
            mode === 'text'
              ? 'bg-green-500 text-white shadow-green-400 shadow-md'
              : 'border-gray-600 text-gray-400'
          } transition-all`}
        >
          📝 Text Mode
        </button>
      </div>

      {mode === 'url' ? (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https://example.com"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <textarea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste blog content here..."
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      )}

      <div className="mt-4">
        <Button
          onClick={() => onSubmit(input, mode)}
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition"
        >
          🚀 Summarize {mode === 'url' ? 'URL' : 'Text'}
        </Button>
      </div>
    </div>
  );
}
