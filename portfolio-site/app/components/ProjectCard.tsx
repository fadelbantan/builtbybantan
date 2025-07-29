import { motion } from 'framer-motion';
import type { Project } from './projectData';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
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
          {project.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline hover:text-green-300"
          >
            View on GitHub
          </a>
        </div>
      )}
    </motion.div>
  );
}
