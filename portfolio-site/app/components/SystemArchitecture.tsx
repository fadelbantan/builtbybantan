'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
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

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

					{/* TetrECS */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
					>
						<h3 className="text-2xl font-bold mb-4">TetrECS</h3>
						<p className="text-gray-400 mb-6">
							A fully-featured Tetris-inspired game built in Java & JavaFX.
						</p>
						<div className="mb-6">
							<h4 className="text-lg font-semibold mb-2">Key Features:</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>Local multiplayer system with real-time lobbies and chat</li>
								<li>Dynamic scoring, levels, lives, combo multipliers, and piece storage</li>
								<li>JavaFX-based User Interface with animations, sound effects, transitions, and scene controllers</li>
								<li>Online leaderboard integration and file-based score persistence</li>
								<li>Built from provided skeleton code, then extended with custom components and architecture</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{['Java', 'JavaFX', 'Maven', 'Multiplayer', 'Game Loop', 'Networking', 'OOP'].map((tech, i) => (
								<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
									{tech}
								</span>
							))}
						</div>
						<div className="flex gap-4">
							<a
								href="https://github.com/fadelbantan/TetrECS"
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-400 underline hover:text-green-300"
							>
								View on GitHub
							</a>
						</div>
					</motion.div>

					{/* Hangman */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
					>
						<h3 className="text-2xl font-bold mb-4">Hangman</h3>
						<p className="text-gray-400 mb-6">
							A terminal-based Java Hangman game developed for Object Oriented Programming coursework.
						</p>
						<div className="mb-6">
							<h4 className="text-lg font-semibold mb-2">Key Features:</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>File I/O to load categorized word lists</li>
								<li>Custom class hierarchy using inheritance, interfaces, and polymorphism</li>
								<li>Dynamic difficulty scaling and word randomization</li>
								<li>Encapsulated game logic with error handling and state resets</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{['Java', 'OOP', 'Inheritance', 'Polymorphism', 'File I/O', 'Interfaces'].map((tech, i) => (
								<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
									{tech}
								</span>
							))}
						</div>
						<div className="flex gap-4">
							<a
								href="https://github.com/fadelbantan/Hangman"
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-400 underline hover:text-green-300"
							>
								View on GitHub
							</a>
						</div>
					</motion.div>

					{/* Mazerunner */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
					>
						<h3 className="text-2xl font-bold mb-4">Mazerunner</h3>
						<p className="text-gray-400 mb-6">
							A Python maze exploration tool built for search algorithms coursework.
						</p>
						<div className="mb-6">
							<h4 className="text-lg font-semibold mb-2">Key Features:</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>Full support for BFS, DFS, Flood Fill and search visualizations</li>
								<li>Maze I/O from XML using ElementTree parsing</li>
								<li>Pathfinding accuracy verification & full log generation</li>
								<li>Statistics tracking: nodes visited, path length, exploration time</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{['Python', 'Algorithms', 'BFS', 'DFS', 'XML Parsing', 'Search'].map((tech, i) => (
								<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
									{tech}
								</span>
							))}
						</div>
						<div className="flex gap-4">
							<a
								href="https://github.com/fadelbantan/ECS-Maze-Runner"
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-400 underline hover:text-green-300"
							>
								View on GitHub
							</a>
						</div>
					</motion.div>

					{/* Money Tracker App */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
					>
						<h3 className="text-2xl font-bold mb-4">Expense Tracker</h3>
						<p className="text-gray-400 mb-6">
							A React Native personal finance app project designed for expense tracking.
						</p>
						<div className="mb-6">
							<h4 className="text-lg font-semibold mb-2">Key Features:</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>Calculator-based transaction entry</li>
								<li>Balance validation with non-negative protection</li>
								<li>Scrollable history, statistics tab, and multi-tab navigation</li>
								<li>Clean component-based architecture ready for scaling</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{['React Native', 'JavaScript', 'UI/UX', 'State Management', 'Mobile App'].map((tech, i) => (
								<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
									{tech}
								</span>
							))}
						</div>
						<div className="flex gap-4">
							<a
								href="https://github.com/fadelbantan/MoneyTracker"
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-400 underline hover:text-green-300"
							>
								View on GitHub
							</a>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
