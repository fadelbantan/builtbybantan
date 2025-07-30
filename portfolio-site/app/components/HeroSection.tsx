'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Fadil Bantan</h1>
						<p className="text-gray-400 mb-2">Software Engineer and Data Analyst</p>

						<p className="text-green-500 mt-4">$ skills --frontend 💻 </p>
						<div className="flex flex-wrap gap-2 mt-2">
							{['React', 'React Native', 'JavaScript', 'TypeScript', 'UI/UX', "Tailwind"].map((skill) => (
								<span key={skill} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
									{skill}
								</span>
							))}
						</div>

						<p className="text-green-500 mt-4">$ skills --backend 🛠️ </p>
						<div className="flex flex-wrap gap-2 mt-2">
							{['Python', 'Java', 'Firebase', 'Flask', "Node.js"].map((skill) => (
								<span key={skill} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
									{skill}
								</span>
							))}
						</div>

						<p className="text-green-500 mt-4">$ skills --tools 🧰</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{["Docker", 'Git', 'GitHub', 'Linux', "Markdown"].map((skill) => (
								<span key={skill} className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
									{skill}
								</span>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
