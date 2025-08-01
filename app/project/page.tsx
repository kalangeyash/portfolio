import Image from 'next/image';
import { PROJECTS } from '../data/projects';

export default function ProjectPage() {
  return (
    <div className="min-h-screen w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-8">All Projects</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.title} className="bg-zinc-900  rounded-xl p-0 shadow-lg border border-zinc-800 flex flex-col overflow-hidden hover:border-blue-100/50 transition-all duration-500 hover:shadow-grey -500/20 hover:shadow-2xl hover:-translate-y-2">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={500}
                className="w-full h-78 object-cover bg-zinc-800 rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-white text-2xl font-semibold mb-2">{project.title}</div>
                <div className="text-gray-400 mb-4">{project.description}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full text-xs font-medium border border-blue-800/50 hover:bg-blue-800/50 transition-colors duration-200">{tech}</span>
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