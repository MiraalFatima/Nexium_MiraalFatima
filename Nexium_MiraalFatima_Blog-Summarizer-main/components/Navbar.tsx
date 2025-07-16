'use client';
import Link from 'next/link';


export default function Navbar() {


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center transition">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        <Link href="/">🧠 BlogSummarize.AI</Link>
      </h1>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><Link href="/" className="hover:underline text-gray-700 dark:text-gray-200">Home</Link></li>
        <li><Link href="/about" className="hover:underline text-gray-700 dark:text-gray-200">About</Link></li>
        <li><Link href="/features" className="hover:underline text-gray-700 dark:text-gray-200">Features</Link></li>
        <li><Link href="/contact" className="hover:underline text-gray-700 dark:text-gray-200">Contact</Link></li>
      </ul>
    </nav>
  );
}
