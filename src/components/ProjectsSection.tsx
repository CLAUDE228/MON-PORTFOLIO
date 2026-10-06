import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ExternalLink, Layers, Terminal, Sparkles, Database } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Scroll3D } from './Scroll3D';

export const ProjectsSection: React.FC = () => {
  const { projects } = usePortfolio();
  const [filter, setFilter] = useState<'tous' | 'full-stack' | 'frontend' | 'design'>('tous');

  const filteredProjects = projects.filter(project => {
    if (filter === 'tous') return true;
    return project.category.toLowerCase() === filter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'full-stack': return <Database size={14} className="text-white/60" />;
      case 'frontend': return <Terminal size={14} className="text-white/60" />;
      case 'design': return <Sparkles size={14} className="text-white/60" />;
      default: return <Layers size={14} className="text-white/60" />;
    }
  };

  return (
    <Scroll3D 
      id="projects" 
      className="bg-black text-white py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-xs font-medium tracking-widest text-white/40 uppercase block mb-3">
              04 / réalisations
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white lowercase">
              projets étudiés & réalisés
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-900/80 p-1.5 rounded-full border border-white/5 backdrop-blur shrink-0 self-start md:self-end">
            {(['tous', 'full-stack', 'frontend', 'design'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs transition-colors cursor-pointer focus:outline-none ${
                  filter === cat
                    ? 'bg-white text-black font-medium'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <FadeIn 
              key={project.id}
              delay={idx * 0.05}
              y={20}
              className="group relative bg-neutral-950 border border-white/5 rounded-3xl h-[400px] overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              {/* Background image container with hover zoom */}
              {project.backgroundImage && (
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105 opacity-65"
                  style={{ backgroundImage: `url(${project.backgroundImage})` }}
                />
              )}

              {/* Dark Gradient Overlay for optimal typographic contrast and readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/35 z-0" />

              {/* Foreground Card Content */}
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
                
                {/* Top Row with Category Badge & Link */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/80 rounded-full border border-white/10 backdrop-blur-sm">
                      {getCategoryIcon(project.category)}
                      <span className="text-[10px] font-mono text-white/70 lowercase">
                        {project.category}
                      </span>
                    </div>
                    
                    {project.url && project.url !== '#' && (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all backdrop-blur-sm"
                        title="Visiter le site"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white lowercase tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-4 lowercase">
                    {project.description}
                  </p>

                  {/* Hover Detailed Description (stretches or transitions beautifully) */}
                  <p className="text-xs text-white/50 font-light leading-relaxed lowercase max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    {project.longDescription}
                  </p>
                </div>

                {/* Bottom Row: Tech Stack */}
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 bg-black/70 border border-white/5 rounded text-white/70 lowercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </Scroll3D>
  );
};
