/// FILE: components/BlogForm.tsx
'use client';
import { useState } from 'react';

export default function BlogForm({ onSubmit }: { onSubmit: (url: string) => void }) {
  const [url, setUrl] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(url);
      }}
      className="flex gap-4 mb-6"
    >
      <input
        className="p-2 border rounded w-full"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste blog URL here"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Summarize
      </button>
    </form>
  );
}
