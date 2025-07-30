export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'QuickMind (4th Place Hackathon)',
    description: 'A mind-mapping app built for the Boot.dev Hackathon 2025. Built solo with Flask and JavaScript.',
    features: [
      'Drag-and-drop node system with visual connectors',
      'Keyboard shortcuts for fast idea entry',
      'Relationship building via linkable nodes',
      'Minimalist UX for distraction-free brainstorming'
    ],
    technologies: ['Flask', 'JavaScript', 'HTML/CSS', 'LeaderLine.js'],
    link: 'https://github.com/fadelbantan/quickmind',
  },
  {
    title: 'Mazerunner',
    description: 'A Python maze exploration tool built for search algorithms coursework.',
    features: [
      'Full support for BFS, DFS, Flood Fill and search visualizations',
      'Maze I/O from XML using ElementTree parsing',
      'Pathfinding accuracy verification & full log generation',
      'Statistics tracking: nodes visited, path length, exploration time',
    ],
    technologies: ['Python', 'Algorithms', 'BFS', 'DFS', 'XML Parsing', 'Search'],
    link: 'https://github.com/fadelbantan/ECS-Maze-Runner',
  },
  {
    title: 'Expense Tracker',
    description: 'A React Native personal finance app project designed for expense tracking.',
    features: [
      'Calculator-based transaction entry',
      'Balance validation with non-negative protection',
      'Scrollable history, statistics tab, and multi-tab navigation',
      'Clean component-based architecture ready for scaling',
    ],
    technologies: ['React Native', 'JavaScript', 'UI/UX', 'State Management', 'Mobile App'],
    link: 'https://github.com/fadelbantan/MoneyTracker',
  },
  {
    title: 'TetrECS',
    description: 'A fully-featured Tetris-inspired game built in Java & JavaFX.',
    features: [
      'Local multiplayer system with real-time lobbies and chat',
      'Dynamic scoring, levels, lives, combo multipliers, and piece storage',
      'JavaFX-based User Interface with animations, sound effects, transitions, and scene controllers',
      'Online leaderboard integration and file-based score persistence',
      'Built from provided skeleton code, then extended with custom components and architecture',
    ],
    technologies: ['Java', 'JavaFX', 'Maven', 'Multiplayer', 'Game Loop', 'Networking', 'OOP'],
    link: 'https://github.com/fadelbantan/TetrECS',
  },
  {
    title: 'Hangman',
    description: 'A terminal-based Java Hangman game developed for Object Oriented Programming coursework.',
    features: [
      'File I/O to load categorized word lists',
      'Custom class hierarchy using inheritance, interfaces, and polymorphism',
      'Dynamic difficulty scaling and word randomization',
      'Encapsulated game logic with error handling and state resets',
    ],
    technologies: ['Java', 'OOP', 'Inheritance', 'Polymorphism', 'File I/O', 'Interfaces'],
    link: 'https://github.com/fadelbantan/Hangman',
  },
];
