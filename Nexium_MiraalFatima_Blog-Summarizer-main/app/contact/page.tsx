import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f1d] via-[#111827] to-[#1e1e2f] text-white font-mono">
      <Navbar />
      <section className="max-w-3xl mx-auto py-20 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_20px_#00f7ff40]">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">📬 Contact Us</h1>
        <p className="text-md mb-8 text-gray-300">
          We'd love to hear from you. Drop your message below.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-300">Name</label>
            <input
              type="text"
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-300">Email</label>
            <input
              type="email"
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-300">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            🚀 Send Message
          </button>
        </form>
        <Link href="/" className="mt-6 inline-block text-blue-400 hover:underline">← Back to Home</Link>
      </section>
    </main>
  );
}
