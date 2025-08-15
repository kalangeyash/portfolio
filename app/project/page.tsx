import Image from 'next/image';
import { PROJECTS } from '../data/projects';
import { ExternalLink } from 'lucide-react';

export default function ProjectPage() {
  return (
    <div className="min-h-screen w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
          All <span className="text-emerald-400">Projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <div key={project.title} className="bg-zinc-900 rounded-xl sm:rounded-2xl p-0 shadow-lg border border-zinc-800 flex flex-col overflow-hidden hover:border-emerald-100/50 transition-all duration-500 hover:shadow-emerald-500/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={500}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover bg-zinc-800 rounded-t-xl sm:rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </div>
                <div className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 flex-1 leading-relaxed">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-emerald-900/50 text-emerald-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border border-emerald-800/50 hover:bg-emerald-800/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 hover:underline mt-auto text-sm sm:text-base font-medium flex items-center gap-1.5 sm:gap-2 group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 