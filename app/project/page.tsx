import Image from 'next/image';
import { PROJECTS } from '../data/projects';


export default function ProjectPage() {
  return (
    <div className="min-h-screen w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-8">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.title} className="bg-zinc-900 rounded-xl p-0 shadow-lg border border-zinc-800 flex flex-col overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover bg-zinc-800 rounded-t-xl"
                width={600}
                height={300}
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-white text-2xl font-semibold mb-2">{project.title}</div>
                <div className="text-gray-400 mb-4">{project.description}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-medium">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-auto">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 