import React from 'react';
import { GraduationCap, Calendar, Compass, ShieldCheck, Terminal, Cpu, Network } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { coursesData } from '../data';
import { Scroll3D } from './Scroll3D';

export const EducationSection: React.FC = () => {
  return (
    <Scroll3D 
      id="education" 
      className="bg-black py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-xs font-medium tracking-widest text-white/40 uppercase block mb-3">
              02 / parcours académique
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white lowercase">
              mon parcours
            </h2>
          </div>
          <div className="text-xs text-white/40 font-mono uppercase tracking-widest bg-neutral-900/50 border border-white/5 px-4 py-2 rounded-full self-start md:self-auto backdrop-blur">
            formation d'élite iai-togo
          </div>
        </div>

        {/* Elegant Grid Layout to utilize all space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Timeline Card (5 Columns) */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1} y={20} className="bg-neutral-900/30 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center border border-white/10 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                      cursus scolaire
                    </span>
                    <span className="text-sm text-white/90 lowercase font-medium">
                      diplômes et certifications
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-8 border-l border-white/10 pl-6 ml-4 text-left">
                  
                  {/* Item 1 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-yellow-500 border-4 border-black ring-1 ring-yellow-500/30" />
                    <span className="text-xs font-mono text-white/40 block mb-1">
                      2023 – en cours
                    </span>
                    <h4 className="text-base font-semibold text-white lowercase tracking-tight">
                      licence professionnelle en analyse de données (en cours)
                    </h4>
                    <p className="text-xs text-white/60 lowercase mt-0.5 font-light">
                      institut africain d'informatique (iai-togo)
                    </p>
                    <span className="inline-block text-[9px] uppercase tracking-wider font-mono bg-white/5 text-white/40 px-2.5 py-0.5 rounded border border-white/5 mt-2">
                      lomé, togo
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-white/40 border-4 border-black" />
                    <span className="text-xs font-mono text-white/40 block mb-1">
                      2023
                    </span>
                    <h4 className="text-base font-semibold text-white/90 lowercase tracking-tight">
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
              </div>

              {/* Bottom Quick Stats */}
              <div className="border-t border-white/5 pt-6 mt-8 space-y-3.5 text-xs font-light text-white/60">
                <div className="flex items-center gap-3">
                  <Calendar size={13} className="text-white/30 shrink-0" />
                  <span className="lowercase">licence professionnelle 2023 - en cours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass size={13} className="text-white/30 shrink-0" />
                  <span className="lowercase">institut panafricain d'élite</span>
                </div>
              </div>

            </FadeIn>
          </div>

          {/* Right Column: Academic Modules & Topics (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Render Academic Specializations dynamically from coursesData */}
            {coursesData.filter(c => c.title !== "Formations Initiales d'Élite").map((course, idx) => (
              <FadeIn key={idx} delay={0.15 + idx * 0.1} y={20} className="bg-neutral-900/20 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-yellow-500 flex items-center justify-center border border-white/10 shrink-0">
                      {course.title.includes('Réseaux') ? <Network size={18} /> : <Cpu size={18} />}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                        spécialisation académique
                      </span>
                      <h3 className="text-base font-semibold text-white lowercase tracking-tight">
                        {course.title.toLowerCase()}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4 text-left">
                    {course.topics.map((topic, tIdx) => {
                      const parts = topic.split(':');
                      const title = parts[0];
                      const detail = parts[1] || '';
                      
                      return (
                        <li key={tIdx} className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 mt-1.5 shrink-0 group-hover:bg-yellow-500 transition-colors" />
                          <div className="text-sm">
                            <span className="text-white/90 font-medium lowercase">
                              {title}
                            </span>
                            {detail && (
                              <span className="text-white/60 font-light lowercase">
                                : {detail}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeIn>
            ))}

            {/* Bottom Accent Quote */}
            <div className="text-xs text-white/30 leading-relaxed font-light text-center sm:text-left bg-neutral-950/40 border border-white/5 p-4 rounded-2xl">
              "l'iai-togo forme des cadres informaticiens qualifiés pour concevoir, développer, et sécuriser les technologies modernes."
            </div>

          </div>

        </div>

      </div>
    </Scroll3D>
  );
};
