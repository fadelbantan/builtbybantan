'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50 text-base">
      <button
        onClick={() => setOpen(!open)}
        className="font-mono text-green-400 text-2xl hover:text-green-300 transition focus:outline-none"
      >
        {"///"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-1 bg-black/90 backdrop-blur-md shadow-lg rounded p-2 space-y-1"
          >
            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="block font-mono text-green-400 hover:text-green-300"
            >
              |-&gt;./Home
            </Link>
            <Link
              href="#projects"
              onClick={() => setOpen(false)}
              className="block font-mono text-green-400 hover:text-green-300"
            >
              |-&gt;./Projects
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block font-mono text-green-400 hover:text-green-300"
            >
              |-&gt;./Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
