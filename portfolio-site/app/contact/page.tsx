'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        <p className="text-green-500 font-mono text-lg mb-2">$ contact --info</p>
        <h1 className="text-5xl font-bold mb-8">Let&apos;s Connect</h1>

        <div className="space-y-8 text-gray-300 text-lg">

          <div>
            <p className="text-green-500 mb-2">$ location --current</p>
            <p>Jeddah, Saudi Arabia</p>
            <p>Southampton, UK</p>
          </div>

          <div>
            <p className="text-green-500 mb-2">$ contact --email</p>
            <a
              href="mailto:fadelbantan1@gmail.com"
              className="text-green-400 underline text-xl"
            >
              fadelbantan1@gmail.com
            </a>
          </div>

          <div>
            <p className="text-green-500 mb-2">$ ls ./social-links</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/fadelbantan" target="_blank" className="hover:text-green-400">GitHub</a>
              <a href="#" className="hover:text-green-400">LinkedIn</a>
              <a href="#" className="hover:text-green-400">Other</a>
            </div>
          </div>

        </div>
      </motion.div>
    </main>
  );
}
