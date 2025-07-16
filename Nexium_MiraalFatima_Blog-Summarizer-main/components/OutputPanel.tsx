import { Button } from './ui/button';

type Props = {
  summary: string;
  translated: string;
};

export default function OutputPanel({ summary, translated }: Props) {
  if (!summary && !translated) {
    return <p className="text-center text-gray-400">⌛ Your summary will appear here...</p>;
  }

  return (
    <div className="bg-black border border-gray-700 p-6 rounded-lg font-mono">
      <h3 className="text-green-400 text-lg mb-2"> English Summary</h3>
      <pre className="whitespace-pre-wrap text-green-200 mb-6">{summary}</pre>

      <h3 className="text-cyan-400 text-lg mb-2"> Urdu Translation</h3>
      <pre className="whitespace-pre-wrap text-cyan-200">{translated}</pre>

      <div className="mt-4 flex gap-3">
        <Button variant="outline" onClick={() => navigator.clipboard.writeText(summary)}>📋 Copy</Button>
        <Button variant="outline" onClick={() => navigator.clipboard.writeText(translated)}>📋 Copy Urdu</Button>
      </div>
    </div>
  );
}
