'use client';

import ContactSection from './components/ContactSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        <p className="text-green-500 font-mono text-lg mb-2">$ whoami</p>
        <h1 className="text-5xl font-bold mb-4">Fadil Bantan</h1>
        <p className="text-xl text-gray-400 mb-8">Software Engineer & Data Analyst</p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Python', 'Java', 'C', 'SQL', 'Firebase', 'Linux', 'React Native', 'Data Analytics'].map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
              {skill}
            </span>
          ))}
        </div>

        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-4 bg-green-500/20 text-green-300 rounded-lg border border-green-500/20 hover:bg-green-500/30 transition"
        >
          View My Projects →
        </motion.a>

        <div className="mt-12 text-gray-400">
          <p>📍 Jeddah, Saudi Arabia | Southampton, UK</p>
          <p className="mt-2">
            <a href="mailto:fadelbantan1@gmail.com" className="text-green-400 underline">
              fadelbantan1@gmail.com
            </a>
          </p>
        </div>
      </motion.div>

      <div className="mt-20 w-full">
        <ContactSection />
      </div>
    </main>
  );
}
