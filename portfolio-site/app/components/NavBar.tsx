'use client';

import { useState } from 'react';
import Link from 'next/link';
// Inline SVG icons to avoid external dependencies

const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A1A1A] bg-opacity-90 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <p className="text-xl font-mono font-bold text-green-400">builtbybantan</p>

        <div className="hidden sm:flex space-x-6 font-mono">
          <Link href="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
          <Link href="/projects" className="text-gray-300 hover:text-green-400 transition">Projects</Link>
          <Link href="/contact" className="text-gray-300 hover:text-green-400 transition">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden flex flex-col items-center bg-[#1A1A1A] border-t border-gray-800 py-4 font-mono">
          <Link href="/" className="py-2 text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="py-2 text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="py-2 text-gray-300 hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
