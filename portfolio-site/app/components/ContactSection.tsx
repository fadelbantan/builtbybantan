'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section id="contact" className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
					<div className="relative z-10">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div className="font-mono">
							<p className="text-green-500 mb-2">$ contact --info</p>
							<h2 className="text-3xl font-bold mb-8 text-gray-200">Say Hi! I&apos;m Always Online</h2>
							<p className="text-green-500 mb-2">$ location --current</p>
							<div className="text-gray-300 space-y-1">
								<div className="flex items-center gap-2">
									<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<span>Jeddah, Saudi Arabia</span>
								</div>
							</div>

							<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
							<motion.a
								href="mailto:fadelbantan1@gmail.com"
								whileHover={{ scale: 1.02 }}
								className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								fadelbantan1@gmail.com
							</motion.a>
							<p className="text-green-500 mt-8 mb-2">$ cat resume.pdf</p>
							<motion.a
								href="/Fadils-CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								</svg>
								<span>Resume Here</span>
							</motion.a>
							<p className="text-green-500 mb-4">$ ls ./social-links</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{/* GitHub */}
								<motion.a
									href="https://github.com/fadelbantan"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">GitHub</p>
										<p className="text-sm text-gray-400">@fadelbantan</p>
									</div>
								</motion.a>

								{/* LinkedIn */}
								<motion.a
									href="https://www.linkedin.com/in/fadil-bantan"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">LinkedIn</p>
										<p className="text-sm text-gray-400">Fadil Bantan</p>
									</div>
								</motion.a>

								{/* Discord */}
								<motion.a
									href="https://discord.com/users/YOUR_DISCORD_ID"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
								>
									<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
										<svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
											<path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.075.035 13.815 13.815 0 00-.611 1.255 19.736 19.736 0 00-5.498 0 13.822 13.822 0 00-.617-1.255.07.07 0 00-.075-.035 19.736 19.736 0 00-4.885 1.515.064.064 0 00-.03.027C2.217 9.045 1.64 13.58 2.01 18.057a.082.082 0 00.031.056 19.978 19.978 0 005.993 3.044.07.07 0 00.075-.027c.462-.63.873-1.295 1.226-1.993a.07.07 0 00-.038-.098 13.138 13.138 0 01-1.872-.894.07.07 0 01-.007-.117c.126-.095.252-.192.374-.291a.07.07 0 01.073-.01c3.927 1.788 8.18 1.788 12.061 0a.07.07 0 01.073.009c.122.099.248.196.375.291a.07.07 0 01-.006.118 12.612 12.612 0 01-1.873.893.07.07 0 00-.038.099c.36.698.771 1.362 1.225 1.993a.07.07 0 00.075.028 19.958 19.958 0 006.001-3.044.082.082 0 00.03-.056c.37-4.477-.207-9.012-2.654-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-200">Discord</p>
										<p className="text-sm text-gray-400">m7roo8</p>
									</div>
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
