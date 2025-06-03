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

				<div className="grid grid-cols-1 gap-8">
					{/* TetrECS Project */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
					>
						<h3 className="text-2xl font-bold mb-4">TetrECS</h3>
						<p className="text-gray-400 mb-6">
							A fast-paced, multiplayer Tetris-style game with rich JavaFX graphics, sound effects, live scoring, and networked gameplay.
						</p>
						<div className="mb-6">
							<h4 className="text-lg font-semibold mb-2">Key Features:</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>Multiplayer system with lobbies and chat</li>
								<li>Scoring, levels, lives, and combo multipliers</li>
								<li>JavaFX-based UI with sound, animation, and custom components</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{['Java', 'JavaFX', 'Maven', 'OOP', 'Multiplayer', 'Game Loop'].map((tech, i) => (
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

					{/* Add more projects below like this 👇 */}
					{/* <motion.div>...</motion.div> */}
				</div>
			</div>
		</section>
	);
}
