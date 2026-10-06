import React, { useState } from 'react';
import { 
  GraduationCap, Calendar, Compass, ShieldCheck, Terminal, Cpu, Network,
  Database, Code2, Brain, MessageSquare, Scale, Layers, CheckCircle2,
  Award, Sparkles, Car, Bike, BookOpen, Layers3, ChevronRight, Check,
  Eye, Copy, X, FileCheck, ExternalLink
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { semestersData, coursesData, ciscoCertificate } from '../data';
import { Scroll3D } from './Scroll3D';

export const EducationSection: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<'all' | 5 | 6 | 'diplomas'>('all');
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [copiedCertId, setCopiedCertId] = useState(false);

  const getUeIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Database': return <Database size={17} className="text-blue-400" />;
      case 'Code': return <Code2 size={17} className="text-yellow-400" />;
      case 'Shield': return <ShieldCheck size={17} className="text-emerald-400" />;
      case 'Brain': return <Brain size={17} className="text-purple-400" />;
      case 'MessageSquare': return <MessageSquare size={17} className="text-pink-400" />;
      case 'Scale': return <Scale size={17} className="text-amber-400" />;
      case 'Layers': return <Layers size={17} className="text-cyan-400" />;
      case 'CheckCircle': return <CheckCircle2 size={17} className="text-emerald-400" />;
      case 'Award': return <Award size={17} className="text-orange-400" />;
      case 'Sparkles': return <Sparkles size={17} className="text-yellow-400" />;
      default: return <Cpu size={17} className="text-yellow-500" />;
    }
  };

  const handleCopyCertId = () => {
    navigator.clipboard.writeText(ciscoCertificate.certId);
    setCopiedCertId(true);
    setTimeout(() => setCopiedCertId(false), 2500);
  };

  const filteredSemesters = selectedSemester === 'all' 
    ? semestersData 
    : semestersData.filter(s => s.number === selectedSemester);

  return (
    <Scroll3D 
      id="education" 
      className="bg-black py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs font-medium tracking-widest text-white/40 uppercase block mb-3 font-mono">
              02 / parcours académique & cursus
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white lowercase">
              3<sup>ème</sup> année glsi
            </h2>
            <p className="text-sm sm:text-base text-white/60 lowercase font-light mt-2 max-w-xl">
              génie logiciel & systèmes d'information — institut africain d'informatique (iai-togo)
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-yellow-500 font-mono uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-3.5 py-1.5 rounded-full backdrop-blur">
              semestres 5 & 6
            </span>
            <span className="text-xs text-white/40 font-mono uppercase tracking-widest bg-neutral-900/60 border border-white/5 px-3.5 py-1.5 rounded-full backdrop-blur">
              formation d'élite
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5">
          <button
            onClick={() => setSelectedSemester('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selectedSemester === 'all'
                ? 'bg-white text-black font-semibold shadow-lg'
                : 'bg-neutral-900/60 text-white/60 hover:text-white hover:bg-neutral-800'
            }`}
          >
            programme complet (s5 & s6)
          </button>
          <button
            onClick={() => setSelectedSemester(5)}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selectedSemester === 5
                ? 'bg-yellow-500 text-black font-semibold shadow-lg'
                : 'bg-neutral-900/60 text-white/60 hover:text-white hover:bg-neutral-800'
            }`}
          >
            semestre 5 (s5)
          </button>
          <button
            onClick={() => setSelectedSemester(6)}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selectedSemester === 6
                ? 'bg-yellow-500 text-black font-semibold shadow-lg'
                : 'bg-neutral-900/60 text-white/60 hover:text-white hover:bg-neutral-800'
            }`}
          >
            semestre 6 (s6)
          </button>
          <button
            onClick={() => setSelectedSemester('diplomas')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selectedSemester === 'diplomas'
                ? 'bg-white text-black font-semibold shadow-lg'
                : 'bg-neutral-900/60 text-white/60 hover:text-white hover:bg-neutral-800'
            }`}
          >
            diplômes, certificat cisco & permis a/b
          </button>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Credentials, Timeline, Cisco Certificate & Driving License (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Timeline Card */}
            <FadeIn delay={0.1} y={20} className="bg-neutral-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-yellow-500 flex items-center justify-center border border-white/10 shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                    cursus académique
                  </span>
                  <span className="text-sm text-white/95 lowercase font-medium">
                    licence informatique glsi
                  </span>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-6 border-l border-white/10 pl-5 ml-2 text-left">
                {/* 3ème Année GLSI: 2024 - 2026 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full bg-yellow-500 border-4 border-black ring-1 ring-yellow-500/40 animate-pulse" />
                  <span className="text-xs font-mono text-yellow-500/90 block mb-0.5 font-medium">
                    2024 – 2026 (3<sup>ème</sup> année)
                  </span>
                  <h4 className="text-sm font-semibold text-white lowercase tracking-tight">
                    licence en informatique (option glsi)
                  </h4>
                  <p className="text-xs text-white/60 lowercase mt-0.5 font-light">
                    génie logiciel & systèmes d'information
                  </p>
                  <p className="text-[11px] text-white/40 lowercase font-light mt-0.5">
                    iai-togo (institut africain d'informatique)
                  </p>
                  <span className="inline-block text-[9px] uppercase tracking-wider font-mono bg-yellow-500/10 text-yellow-400 px-2.5 py-0.5 rounded border border-yellow-500/20 mt-2">
                    lomé, togo
                  </span>
                </div>

                {/* Baccalauréat 2023 */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full bg-white/40 border-4 border-black" />
                  <span className="text-xs font-mono text-white/40 block mb-0.5">
                    2023
                  </span>
                  <h4 className="text-sm font-semibold text-white/90 lowercase tracking-tight">
                    baccalauréat série d (scientifique)
                  </h4>
                  <p className="text-xs text-white/60 lowercase mt-0.5 font-light">
                    opem baguida
                  </p>
                  <span className="inline-block text-[9px] uppercase tracking-wider font-mono bg-white/5 text-white/40 px-2.5 py-0.5 rounded border border-white/5 mt-2">
                    baguida, togo
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Official Cisco Certificate Card */}
            <FadeIn delay={0.15} y={20} className="bg-gradient-to-br from-neutral-900/90 via-neutral-950 to-blue-950/20 border border-blue-500/20 hover:border-blue-500/40 rounded-3xl p-6 backdrop-blur shadow-xl relative overflow-hidden group transition-all duration-300">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <FileCheck size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400 block font-semibold">
                      certification officielle
                    </span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      cisco networking academy
                    </h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                  vérifié
                </span>
              </div>

              {/* Certificate Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-white/50 lowercase font-light">cours réussi :</span>
                  <span className="text-xs font-semibold text-white lowercase bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {ciscoCertificate.courseName}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-[11px]">
                  <span className="text-white/40">décerné à :</span>
                  <span className="text-white/90 font-medium">{ciscoCertificate.recipient}</span>
                </div>
                <div className="flex items-baseline justify-between text-[11px]">
                  <span className="text-white/40">date d'achèvement :</span>
                  <span className="text-white/90 font-mono">{ciscoCertificate.dateFormatted}</span>
                </div>
                <div className="flex items-baseline justify-between text-[11px]">
                  <span className="text-white/40">instructeur :</span>
                  <span className="text-white/80">{ciscoCertificate.instructor}</span>
                </div>
              </div>

              {/* Certificate Thumbnail Preview */}
              <div 
                onClick={() => setIsCertModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-blue-400/50 cursor-pointer shadow-md bg-black/40 aspect-[3/2]"
              >
                <img 
                  src={ciscoCertificate.image} 
                  alt="Certificat Cisco Networking Academy ITE 7.02" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white backdrop-blur-[2px]">
                  <Eye size={16} className="text-blue-400" />
                  <span>voir le certificat</span>
                </div>
              </div>
            </FadeIn>

            {/* Permis de Conduire Card */}
            <FadeIn delay={0.2} y={20} className="bg-gradient-to-br from-neutral-900/70 to-neutral-950/80 border border-white/10 rounded-3xl p-6 backdrop-blur shadow-lg">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <Car size={17} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block">
                      qualification civile
                    </span>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      permis de conduire
                    </h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                  titulaire
                </span>
              </div>

              <div className="space-y-3">
                {/* Catégorie A */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Bike size={16} className="text-yellow-500" />
                    <div>
                      <span className="text-xs font-semibold text-white">Catégorie A</span>
                      <span className="text-[10px] text-white/40 block font-light">Motos et deux-roues motorisés</span>
                    </div>
                  </div>
                  <Check size={14} className="text-emerald-400" />
                </div>

                {/* Catégorie B */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Car size={16} className="text-yellow-500" />
                    <div>
                      <span className="text-xs font-semibold text-white">Catégorie B</span>
                      <span className="text-[10px] text-white/40 block font-light">Véhicules légers & automobiles</span>
                    </div>
                  </div>
                  <Check size={14} className="text-emerald-400" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-white/50 font-light lowercase">
                mobilité autonome & permis officiels validés.
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Teaching Units (UE) & Elements (EC) (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {selectedSemester === 'diplomas' ? (
              /* Diplomas View */
              <div className="space-y-6">
                
                {/* Featured Cisco Certificate Showcase */}
                <FadeIn delay={0.1} y={20} className="bg-gradient-to-r from-neutral-900/80 via-blue-950/20 to-neutral-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-xl">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div 
                      onClick={() => setIsCertModalOpen(true)}
                      className="w-full md:w-5/12 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/60 transition-all cursor-pointer shadow-lg group relative shrink-0 aspect-[3/2]"
                    >
                      <img 
                        src={ciscoCertificate.image} 
                        alt="Certificat Cisco Networking Academy ITE 7.02" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white">
                        <Eye size={16} /> Agrandir
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 uppercase font-semibold">
                          certificat officiel cisco
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <Check size={12} /> vérifié
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {ciscoCertificate.title}
                      </h3>
                      
                      <p className="text-xs text-white/70 font-light leading-relaxed">
                        Délivré à <strong className="text-white font-medium">{ciscoCertificate.recipient}</strong> par l'Institut Internationale des Sciences et des Arts du Numérique dans le cadre du programme prestigieux <strong className="text-white font-medium">Cisco Networking Academy</strong>.
                      </p>

                      <div className="pt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-white/40 block text-[9px] uppercase">achèvement :</span>
                          <span className="text-white/90">{ciscoCertificate.dateFormatted}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-white/40 block text-[9px] uppercase">instructeur :</span>
                          <span className="text-white/90 truncate block">{ciscoCertificate.instructor}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => setIsCertModalOpen(true)}
                          className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <Eye size={14} /> Voir l'attestation complète
                        </button>
                        <button
                          onClick={handleCopyCertId}
                          className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-mono text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <Copy size={13} />
                          <span>{copiedCertId ? 'ID copié !' : 'Copier Cert ID'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {coursesData.map((course, idx) => (
                  <FadeIn key={idx} delay={0.15 + idx * 0.1} y={20} className="bg-neutral-900/30 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 text-yellow-500 flex items-center justify-center border border-white/10 shrink-0">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                          certifications & cursus
                        </span>
                        <h3 className="text-base font-semibold text-white lowercase tracking-tight">
                          {course.title.toLowerCase()}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-3.5 text-left">
                      {course.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0" />
                          <span className="text-sm text-white/80 font-light lowercase">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                ))}
              </div>
            ) : (
              /* Semesters View (S5, S6, or All) */
              filteredSemesters.map((semester) => (
                <div key={semester.number} className="space-y-4">
                  
                  {/* Semester Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-yellow-500 text-black uppercase">
                          {semester.name}
                        </span>
                        <span className="text-xs text-white/40 font-mono uppercase tracking-wider">
                          {semester.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mt-1 lowercase">
                        {semester.title}
                      </h3>
                    </div>
                    <span className="text-xs text-white/50 font-mono shrink-0">
                      {semester.units.length} unités d'enseignement (ue)
                    </span>
                  </div>

                  {/* Units (UE) Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {semester.units.map((unit) => (
                      <FadeIn 
                        key={unit.id} 
                        delay={0.1} 
                        y={15}
                        className="bg-neutral-950/70 border border-white/5 hover:border-white/15 transition-all duration-300 rounded-2xl p-5 backdrop-blur flex flex-col justify-between group"
                      >
                        <div>
                          {/* Unit Header */}
                          <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                {getUeIcon(unit.icon)}
                              </div>
                              <div className="min-w-0">
                                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block truncate">
                                  ue • {unit.categoryName}
                                </span>
                                <h4 className="text-sm font-semibold text-white tracking-tight truncate lowercase">
                                  {unit.name}
                                </h4>
                              </div>
                            </div>
                          </div>

                          {/* Unit Constituent Elements (EC) */}
                          <div className="space-y-2 mt-2">
                            <span className="text-[9px] font-mono tracking-widest text-yellow-500/80 uppercase block">
                              éléments constitutifs (ec) :
                            </span>
                            <ul className="space-y-2">
                              {unit.elements.map((element, eIdx) => (
                                <li key={eIdx} className="flex items-start gap-2.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70 mt-1.5 shrink-0 group-hover:bg-yellow-400 transition-colors" />
                                  <span className="text-xs text-white/80 font-light leading-snug lowercase">
                                    {element}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Subtle Footer indicator */}
                        <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30">
                          <span>formation validée</span>
                          <span className="text-yellow-500/70">iai-togo</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>

                </div>
              ))
            )}

            {/* Bottom Quote Banner */}
            <div className="text-xs text-white/40 leading-relaxed font-light text-center sm:text-left bg-neutral-950/60 border border-white/5 p-4 rounded-2xl flex items-center gap-3">
              <span className="text-yellow-500 text-lg">💡</span>
              <span>
                "le parcours glsi de l'iai-togo forme des ingénieurs aptes à concevoir des architectures logicielles industrielles, administrer des infrastructures critiques et conduire des projets numériques d'envergure."
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Cisco Certificate Full View Modal */}
      {isCertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-neutral-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-900/60">
              <div className="flex items-center gap-3">
                <FileCheck size={20} className="text-blue-400" />
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Certificat Officiel Cisco Networking Academy
                  </h3>
                  <p className="text-[11px] font-mono text-white/50">
                    ITE 7.02 French — Komla Jean-claude DOGBE
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
                title="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Certificate Image Display */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/60">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl max-w-full">
                <img 
                  src={ciscoCertificate.image} 
                  alt="Attestation Cisco Networking Academy ITE 7.02 French"
                  className="max-h-[65vh] w-auto object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Modal Footer with Verification Details */}
            <div className="px-6 py-4 border-t border-white/10 bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-white/60">
                <span>Cert ID: <strong className="text-white font-mono">{ciscoCertificate.certId}</strong></span>
                <span>•</span>
                <span>Date: {ciscoCertificate.dateFormatted}</span>
                <span>•</span>
                <span>Instructeur: {ciscoCertificate.instructor}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCertId}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy size={13} />
                  <span>{copiedCertId ? 'ID copié !' : 'Copier Cert ID'}</span>
                </button>
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="px-4 py-1.5 rounded-xl bg-white text-black font-semibold text-xs transition-colors cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </Scroll3D>
  );
};
