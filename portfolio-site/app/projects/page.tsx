'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'TetrECS',
    description: 'A fully-featured Tetris-inspired game built in Java & JavaFX.',
    features: [
      'Local multiplayer system with real-time lobbies and chat',
      'Dynamic scoring, levels, lives, combo multipliers, and piece storage',
      'JavaFX-based User Interface with animations, sound effects, transitions, and scene controllers',
      'Online leaderboard integration and file-based score persistence',
      'Built from provided skeleton code, then extended with custom components and architecture'
    ],
    tech: ['Java', 'JavaFX', 'Maven', 'Multiplayer', 'Game Loop', 'Networking', 'OOP'],
    github: 'https://github.com/fadelbantan/TetrECS',
  },
  {
    title: 'Hangman',
    description: 'A terminal-based Java Hangman game developed for Object Oriented Programming coursework.',
    features: [
      'File I/O to load categorized word lists',
      'Custom class hierarchy using inheritance, interfaces, and polymorphism',
      'Dynamic difficulty scaling and word randomization',
      'Encapsulated game logic with error handling and state resets'
    ],
    tech: ['Java', 'OOP', 'Inheritance', 'Polymorphism', 'File I/O', 'Interfaces'],
    github: 'https://github.com/fadelbantan/Hangman',
  },
  {
    title: 'Mazerunner',
    description: 'A Python maze exploration tool built for search algorithms coursework.',
    features: [
      'Full support for BFS, DFS, Flood Fill and search visualizations',
      'Maze I/O from XML using ElementTree parsing',
      'Pathfinding accuracy verification & full log generation',
      'Statistics tracking: nodes visited, path length, exploration time'
    ],
    tech: ['Python', 'Algorithms', 'BFS', 'DFS', 'XML Parsing', 'Search'],
    github: 'https://github.com/fadelbantan/ECS-Maze-Runner',
  },
  {
    title: 'Expense Tracker',
    description: 'A React Native personal finance app project designed for expense tracking.',
    features: [
      'Calculator-based transaction entry',
      'Balance validation with non-negative protection',
      'Scrollable history, statistics tab, and multi-tab navigation',
      'Clean component-based architecture ready for scaling'
    ],
    tech: ['React Native', 'JavaScript', 'UI/UX', 'State Management', 'Mobile App'],
    github: 'https://github.com/fadelbantan/MoneyTracker',
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
