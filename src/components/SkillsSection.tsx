import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Layout, Server, Database, Shield, Binary, TrendingUp, ChevronRight,
  Smartphone, Globe, Layers, Cpu, Workflow, GitFork, Network, Lock,
  KeyRound, Cloud, RefreshCw, Hash, FileText, Table, Presentation,
  Palette, Github, Package, Languages, HelpCircle, BookOpen, Terminal
} from 'lucide-react';
import { Scroll3D } from './Scroll3D';

export const SkillsSection: React.FC = () => {
  const { skills } = usePortfolio();
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName: string, size = 18) => {
    switch (iconName) {
      case 'Layout': return <Layout size={size} />;
      case 'Server': return <Server size={size} />;
      case 'Database': return <Database size={size} />;
      case 'Shield': return <Shield size={size} />;
      case 'Binary': return <Binary size={size} />;
      case 'TrendingUp': return <TrendingUp size={size} />;
      default: return <Layout size={size} />;
    }
  };

  // Dedicated high-fidelity brand/skill logo mapper
  const getSkillLogo = (skill: string) => {
    const s = skill.toLowerCase();
    
    // Programming Languages & Tech
    if (s.includes('python')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.95 2C6.44 2 6.57 4.38 6.57 4.38l.01 1.83h5.45v.77H6.58C4.33 7 4.35 11.23 4.35 11.23s0 2.27 2.22 2.27h1.33v-1.84c0-2.27 2.23-2.27 2.23-2.27h5.42s2.21 0 2.21-2.23V5.42S17.76 2 11.95 2zM9.4 3.7c.4 0 .73.33.73.73s-.33.73-.73.73-.73-.33-.73-.73.33-.73.73-.73zm2.65 6.77s-2.22 0-2.22 2.23v1.83H4.37s-2.22 0-2.22 2.22 2.16 2.28 2.16 2.28h1.83V17.2h5.44v-.77H6.17s2.23.01 2.23-2.26v-1.34s0-2.23 2.22-2.23h5.43s2.22-.11 2.22-2.22l-.01-1.83H12.05zm3.17 9.83c-.4 0-.73-.33-.73-.73s.33-.73.73-.73c.4 0 .73.33.73.73s-.33.73-.73.73z"/>
        </svg>
      );
    }
    if (s.includes('c#')) {
      return <Hash className="w-5 h-5 text-purple-400" />;
    }
    if (s.includes('programmation web') || s.includes('html5') || s.includes('css3')) {
      return <Globe className="w-5 h-5 text-emerald-400" />;
    }
    if (s.includes('programmation mobile')) {
      return <Smartphone className="w-5 h-5 text-blue-400" />;
    }
    if (s.includes('laravel')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.433 2.181a.545.545 0 0 0-.545.545v14.183c0 .3.245.545.545.545H17.8c.3 0 .545-.245.545-.545V2.726a.545.545 0 0 0-.545-.545zm0-.545H17.8c.6 0 1.09.49 1.09 1.09v14.183c0 .6-.49 1.09-1.09 1.09H5.433c-.6 0-1.09-.49-1.09-1.09V2.726c0-.6.49-1.09 1.09-1.09zM8.7 13.08h6.54v1.09H8.7zm0-3.27h6.54v1.09H8.7zm0-3.27h6.54v1.09H8.7z"/>
        </svg>
      );
    }
    if (s.includes('spring boot') || s.includes('java')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-3.13-.25-5.68-2.8-5.93-5.93H13v5.93zm0-7.93H7.07c.25-3.13 2.8-5.68 5.93-5.93V10zm2-3.93c3.13.25 5.68 2.8 5.93 5.93H15V6.07zm0 7.93h5.93c-.25 3.13-2.8 5.68-5.93 5.93V14z"/>
        </svg>
      );
    }
    if (s.includes('vue.js') || s.includes('vue')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-400 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21L1.75 3h4.25L12 13.5 18 3h4.25zm0-6.25L7 6h3.25L12 9.5 13.75 6H17z"/>
        </svg>
      );
    }
    if (s.includes('react')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-cyan-400 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" className="fill-current" />
        </svg>
      );
    }
    if (s.includes('tailwind')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-300 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.036c-2.348 0-3.52.88-3.519 2.64h.01c.73-.393 1.41-.532 2.036-.416.717.133 1.229.655 1.796 1.261.925.986 1.998 2.133 4.381 2.133 2.348 0 3.52-.88 3.519-2.64h-.01c-.73.393-1.41.532-2.036.416-.717-.133-1.229-.655-1.796-1.261-.925-.986-1.998-2.133-4.381-2.133zm-7.619 5.28c-2.348 0-3.52.88-3.519 2.64h.01c.73-.393 1.41-.532 2.036-.416.717.133 1.229.655 1.796 1.261.925.986 1.998 2.133 4.381 2.133 2.348 0 3.52-.88 3.519-2.64h-.01c-.73.393-1.41.532-2.036.416-.717-.133-1.229-.655-1.796-1.261-.925-.986-1.998-2.133-4.381-2.133z"/>
        </svg>
      );
    }
    if (s.includes('typescript') || s.includes('vite') || s.includes('axios')) {
      return <Terminal className="w-5 h-5 text-amber-400" size={16} />;
    }

    // Databases & Design Models
    if (s.includes('conception') || s.includes('implémentation') || s.includes('gestion de bases')) {
      return <Database className="w-5 h-5 text-blue-400" />;
    }
    if (s.includes('merise') || s.includes('uml')) {
      return <Workflow className="w-5 h-5 text-teal-400" />;
    }
    if (s.includes('mysql')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3z"/>
          <path d="M4 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6"/>
          <path d="M4 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      );
    }
    if (s.includes('sqlite')) {
      return <Database className="w-5 h-5 text-sky-600" />;
    }

    // Networking & Security
    if (s.includes('cisco ccna 2')) {
      return <Network className="w-5 h-5 text-blue-500" />;
    }
    if (s.includes('cryptographie') || s.includes('rsa') || s.includes('affine')) {
      return <KeyRound className="w-5 h-5 text-amber-500" />;
    }
    if (s.includes('sécurité informatique') || s.includes('sécurisation')) {
      return <Lock className="w-5 h-5 text-red-400" />;
    }
    if (s.includes('cloud computing')) {
      return <Cloud className="w-5 h-5 text-sky-400" />;
    }
    if (s.includes('modèle osi')) {
      return <Layers className="w-5 h-5 text-indigo-400" />;
    }
    if (s.includes('routage')) {
      return <GitFork className="w-5 h-5 text-purple-400" />;
    }

    // Project management & Methods
    if (s.includes('agiles')) {
      return <RefreshCw className="w-5 h-5 text-yellow-500 animate-spin" />;
    }
    if (s.includes('systémique')) {
      return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
    if (s.includes('génie logiciel')) {
      return <Terminal className="w-5 h-5 text-pink-400" size={16} />;
    }

    // Tools & Office
    if (s.includes('word')) {
      return <FileText className="w-5 h-5 text-blue-600" />;
    }
    if (s.includes('powerpoint')) {
      return <Presentation className="w-5 h-5 text-orange-500" />;
    }
    if (s.includes('excel')) {
      return <Table className="w-5 h-5 text-emerald-600" />;
    }
    if (s.includes('canva')) {
      return <Palette className="w-5 h-5 text-purple-500" />;
    }
    if (s.includes('git')) {
      return <Github className="w-5 h-5 text-white" />;
    }
    if (s.includes('docker')) {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.775c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .102.084.186.186.186zm-2.95.002h2.118c.103 0 .186-.083.186-.186V8.777c0-.103-.083-.186-.186-.186H11.033c-.103 0-.186.083-.186.186v2.117c0 .103.083.186.186.186zm-2.949 0h2.117c.103 0 .187-.083.187-.186V8.777c0-.103-.084-.186-.187-.186H8.084c-.103 0-.187.083-.187.186v2.117c0 .103.084.186.187.186zm-2.949 0h2.116c.102 0 .186-.083.186-.186V8.777c0-.103-.084-.186-.186-.186H5.135c-.102 0-.186.083-.186.186v2.117c0 .103.084.186.186.186zm-2.001-.37h2.117c.102 0 .186-.083.186-.186V8.407c0-.103-.084-.186-.186-.186H1.133c-.102 0-.186.083-.186.186v2.117c0 .101.084.184.186.184zm11.002-3.111h2.119c.102 0 .186-.083.186-.185V5.297c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.117c0 .101.084.184.186.184zm-2.95 0h2.118c.103 0 .186-.083.186-.185V5.297c0-.102-.083-.186-.186-.186H9.133c-.103 0-.186.084-.186.186v2.117c0 .101.083.184.186.184zm-2.949 0h2.117c.103 0 .187-.083.187-.185V5.297c0-.102-.084-.186-.187-.186H6.184c-.103 0-.187.084-.187.186v2.117c0 .101.084.184.187.184zM6.184 4.397h2.117c.103 0 .187-.083.187-.186V2.097c0-.103-.084-.186-.187-.186H6.184c-.103 0-.187.083-.187.186v2.114c0 .103.084.186.187.186zm16.516 7.42h-3.64c-.102 0-.186.083-.186.186v1.493H2.001c.145-2.072 2.052-3.646 4.331-3.646h13.2c1.724 0 3.195.918 3.844 2.153a.187.187 0 0 0 .16-.101c.216-.411.332-.865.332-1.339 0-3.32-3.32-6-7.4-6-.408 0-.809.027-1.2.078a.186.186 0 0 0-.158.147l-.146 1.09c-.015.1.066.191.168.188a8.21 8.21 0 0 1 1.336-.113c3.48 0 6.3 2.24 6.3 5s-2.82 5-6.3 5H12c-.103 0-.186.083-.186.186v1.493a3 3 0 0 1-5.12 2.12c-.754-.754-1.2-1.76-1.2-2.82v-1.493c0-.103-.083-.186-.186-.186H1.14c-.382 0-.69.308-.69.69 0 4.14 3.36 7.5 7.5 7.5 3.3 0 6.13-2.14 7.08-5.12a.186.186 0 0 0-.18-.242h-.372a.186.186 0 0 0-.182.203c-.562 1.631-2.119 2.766-3.906 2.766-2.07 0-3.79-1.52-4.08-3.52h16.29c.38 0 .69-.31.69-.69 0-.38-.31-.69-.69-.69z"/>
        </svg>
      );
    }
    if (s.includes('composer') || s.includes('package')) {
      return <Package className="w-5 h-5 text-orange-400" />;
    }

    // Languages & Hobbies
    if (s.includes('français') || s.includes('anglais')) {
      return <Languages className="w-5 h-5 text-emerald-400" />;
    }
    if (s.includes('football')) {
      return (
        <span className="text-lg" role="img" aria-label="football">
          ⚽
        </span>
      );
    }
    if (s.includes('basket-ball')) {
      return (
        <span className="text-lg" role="img" aria-label="basketball">
          🏀
        </span>
      );
    }
    if (s.includes('lecture')) {
      return <BookOpen className="w-5 h-5 text-sky-400" />;
    }

    return <HelpCircle className="w-5 h-5 text-white/40" />;
  };

  if (!skills || skills.length === 0) return null;

  return (
    <Scroll3D 
      id="skills" 
      className="bg-black text-white py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-xs font-medium tracking-widest text-white/40 uppercase block mb-3">
              03 / expertise technique
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white lowercase">
              mes compétences
            </h2>
          </div>
          
          <div className="text-xs text-white/40 font-mono uppercase tracking-widest bg-neutral-900/50 border border-white/5 px-4 py-2 rounded-full self-start md:self-auto backdrop-blur">
            expertises validées à l'iai-togo
          </div>
        </div>

        {/* Tabbed Skills Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          
          {/* Navigation Tabs - Left Column */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 border-b border-neutral-900 lg:border-b-0 lg:border-r lg:border-neutral-900 pr-0 lg:pr-6 snap-x">
            {skills.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-left text-xs transition-all duration-200 cursor-pointer focus:outline-none shrink-0 snap-align-start ${
                  activeTab === index
                    ? 'bg-white text-black font-medium'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                {getCategoryIcon(category.icon, 14)}
                <span className="truncate lowercase">{category.title.toLowerCase()}</span>
                <ChevronRight size={13} className={`ml-auto hidden lg:block transition-transform duration-200 ${
                  activeTab === index ? 'rotate-90' : ''
                }`} />
              </button>
            ))}
          </div>

          {/* Tab Content - Right Column */}
          <div className="bg-neutral-900/20 border border-white/5 rounded-3xl p-6 sm:p-8 min-h-[300px] flex flex-col justify-between backdrop-blur">
            <div>
              <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10">
                  {getCategoryIcon(skills[activeTab]?.icon || 'Layout', 18)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white lowercase tracking-tight">
                    {skills[activeTab]?.title.toLowerCase()}
                  </h3>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">
                    domaines d'application certifiés
                  </span>
                </div>
              </div>

              {/* Skills Tags Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {skills[activeTab]?.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-neutral-900/30 border border-white/5 p-4 rounded-2xl transition-all duration-200 hover:border-white/20 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform shrink-0">
                      {getSkillLogo(skill)}
                    </div>
                    <div>
                      <span className="text-sm font-light text-white/90 lowercase block leading-tight">
                        {skill.toLowerCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
              <span className="font-mono uppercase tracking-wider">
                iai-togo &bull; cursus licence professionnelle 2023 - en cours
              </span>
              <span className="text-white/60 lowercase font-light">
                * logos intégrés dynamiquement d'après les compétences réelles
              </span>
            </div>

          </div>

        </div>

      </div>
    </Scroll3D>
  );
};
