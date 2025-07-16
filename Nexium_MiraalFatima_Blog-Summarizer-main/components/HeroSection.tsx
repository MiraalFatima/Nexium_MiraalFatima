/// FILE: components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="text-center py-16 px-4 sm:px-8 bg-gradient-to-r from-blue-100 to-blue-50">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Summarize Any Blog in Seconds</h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Just paste a link or text, and get concise, AI-powered summaries instantly.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#summarizer" className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">Start Summarizing</a>
        <a href="/about" className="px-6 py-3 border border-blue-700 text-blue-700 rounded-xl hover:bg-blue-100">Learn More</a>
      </div>
    </section>
  );
}
