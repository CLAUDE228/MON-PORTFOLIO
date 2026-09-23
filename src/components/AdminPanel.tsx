import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Lock, Shield, Eye, Mail, Trash2, Plus, Edit3, Briefcase, Award, Check, User } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const AdminPanel: React.FC = () => {
  const {
    aboutMe,
    projects,
    skills,
    messages,
    isLoggedIn,
    isAdminPanelOpen,
    login,
    logout,
    setAdminPanelOpen,
    updateAboutMe,
    addProject,
    deleteProject,
    addSkillToCategory,
  } = usePortfolio();

  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'messages' | 'about' | 'skills' | 'projects'>('messages');

  // Form states
  const [aboutForm, setAboutForm] = useState({ ...aboutMe });
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    longDescription: '',
    url: '',
    tech: '',
    category: 'Full-Stack',
    backgroundImage: '',
  });
  const [newSkill, setNewSkill] = useState({
    categoryTitle: skills[0]?.title || '',
    name: '',
  });

  const [projectSuccess, setProjectSuccess] = useState(false);
  const [skillSuccess, setSkillSuccess] = useState(false);
  const [aboutSuccess, setAboutSuccess] = useState(false);

  if (!isAdminPanelOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pseudo.trim() || !password.trim()) {
      setLoginError("Veuillez obligatoirement renseigner votre pseudo et mot de passe.");
      return;
    }
    const success = login(pseudo, password);
    if (success) {
      setLoginError(null);
      setPseudo('');
      setPassword('');
      setAboutForm({ ...aboutMe });
    } else {
      setLoginError("Pseudo ou mot de passe incorrect.");
    }
  };

  const handleAboutUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateAboutMe(aboutForm);
    setAboutSuccess(true);
    setTimeout(() => setAboutSuccess(false), 3000);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) return;

    addProject({
      title: newProject.title,
      description: newProject.description,
      longDescription: newProject.longDescription,
      url: newProject.url || '#',
      tech: newProject.tech.split(',').map(t => t.trim()).filter(Boolean),
      category: newProject.category,
      color: '#ffffff',
      backgroundImage: newProject.backgroundImage || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    });

    setNewProject({
      title: '',
      description: '',
      longDescription: '',
      url: '',
      tech: '',
      category: 'Full-Stack',
      backgroundImage: '',
    });

    setProjectSuccess(true);
    setTimeout(() => setProjectSuccess(false), 3000);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.name || !newSkill.categoryTitle) return;

    addSkillToCategory(newSkill.categoryTitle, newSkill.name);
    setNewSkill(prev => ({ ...prev, name: '' }));
    setSkillSuccess(true);
    setTimeout(() => setSkillSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4 overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 p-6 shrink-0">
          <div className="flex items-center gap-3">
            <Shield className="text-white/80" size={18} />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white/90">
              espace privé -- administration
            </h2>
          </div>
          <button
            onClick={() => setAdminPanelOpen(false)}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center border border-white/5 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Not logged in */}
        {!isLoggedIn ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-14 max-w-md mx-auto text-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-1">
              <Lock size={22} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white lowercase">connexion requise</h3>
              <p className="text-xs text-white/40 mt-1.5 lowercase">
                veuillez entrer votre pseudo et votre mot de passe pour accéder à la messagerie et à l'espace privé.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="w-full space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5 ml-1">
                  Pseudo <span className="text-yellow-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    required
                    value={pseudo}
                    onChange={(e) => {
                      setPseudo(e.target.value);
                      if (loginError) setLoginError(null);
                    }}
                    placeholder="Entrez votre pseudo"
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5 ml-1">
                  Mot de passe <span className="text-yellow-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/30">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (loginError) setLoginError(null);
                    }}
                    placeholder="Entrez votre mot de passe"
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-light">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer mt-1"
              >
                s'authentifier
              </button>
            </form>
          </div>
        ) : (
          /* Logged In Dashboard */
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/5 p-4 shrink-0 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible">
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all text-left shrink-0 cursor-pointer ${
                  activeTab === 'messages'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Mail size={14} />
                <span className="lowercase">messages reçus ({messages.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('about')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all text-left shrink-0 cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Edit3 size={14} />
                <span className="lowercase">modifier à propos</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all text-left shrink-0 cursor-pointer ${
                  activeTab === 'skills'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Award size={14} />
                <span className="lowercase">compétences</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs transition-all text-left shrink-0 cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Briefcase size={14} />
                <span className="lowercase">publier un projet</span>
              </button>

              <div className="lg:mt-auto pt-4 lg:border-t lg:border-white/5 flex justify-between items-center w-full lg:px-2 shrink-0">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest hidden lg:inline">
                  ● session active
                </span>
                <button
                  onClick={logout}
                  className="text-[10px] font-mono text-red-400 hover:text-red-300 uppercase tracking-wider hover:underline focus:outline-none cursor-pointer pl-4 lg:pl-0"
                >
                  déconnexion
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-neutral-900/10">
              
              {/* Tab: Messages */}
              {activeTab === 'messages' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      messages transmis via le formulaire
                    </h3>
                    <span className="text-[10px] font-mono bg-white/5 px-2.5 py-1 rounded-full text-white/40 border border-white/5">
                      total: {messages.length}
                    </span>
                  </div>

                  {messages.length === 0 ? (
                    <div className="text-center py-16 border border-white/5 border-dashed rounded-2xl text-white/30 text-xs lowercase">
                      aucun message reçu pour le moment.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl flex items-start gap-4 hover:border-white/10 transition-colors"
                        >
                          <div className="flex-1 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                              <div>
                                <span className="font-semibold text-sm text-white block lowercase">
                                  {msg.name}
                                </span>
                                <span className="text-xs text-white/40 block">
                                  {msg.email}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-white/30">
                                {msg.date}
                              </span>
                            </div>
                            <div>
                              {msg.subject && (
                                <span className="text-xs font-medium text-white/80 block mb-1 lowercase">
                                  sujet: {msg.subject}
                                </span>
                              )}
                              <p className="text-xs sm:text-sm text-white/60 leading-relaxed whitespace-pre-line lowercase">
                                {msg.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab: Edit About */}
              {activeTab === 'about' && (
                <form onSubmit={handleAboutUpdate} className="space-y-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      informations générales
                    </h3>
                    {aboutSuccess && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <Check size={12} /> sauvegardé avec succès
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Nom complet</label>
                      <input
                        type="text"
                        value={aboutForm.fullname}
                        onChange={(e) => setAboutForm({ ...aboutForm, fullname: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Titre</label>
                      <input
                        type="text"
                        value={aboutForm.title}
                        onChange={(e) => setAboutForm({ ...aboutForm, title: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Présentation courte (Paragraphe 1)</label>
                    <textarea
                      rows={3}
                      value={aboutForm.description1}
                      onChange={(e) => setAboutForm({ ...aboutForm, description1: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20 resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Paragraphe 2 (Éducation & Objectif)</label>
                    <textarea
                      rows={3}
                      value={aboutForm.description2}
                      onChange={(e) => setAboutForm({ ...aboutForm, description2: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20 resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Objectif Professionnel complet</label>
                    <textarea
                      rows={3}
                      value={aboutForm.objective}
                      onChange={(e) => setAboutForm({ ...aboutForm, objective: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Cursus</label>
                      <input
                        type="text"
                        value={aboutForm.cursus}
                        onChange={(e) => setAboutForm({ ...aboutForm, cursus: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Baccalauréat</label>
                      <input
                        type="text"
                        value={aboutForm.bac}
                        onChange={(e) => setAboutForm({ ...aboutForm, bac: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white/20"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
                  >
                    enregistrer les modifications
                  </button>
                </form>
              )}

              {/* Tab: Edit Skills */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      enrichir la stack technique
                    </h3>
                    {skillSuccess && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <Check size={12} /> Compétence ajoutée !
                      </span>
                    )}
                  </div>

                  <form onSubmit={handleAddSkill} className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Catégorie cible</label>
                        <select
                          value={newSkill.categoryTitle}
                          onChange={(e) => setNewSkill({ ...newSkill, categoryTitle: e.target.value })}
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                        >
                          {skills.map((cat, i) => (
                            <option key={i} value={cat.title}>{cat.title.toLowerCase()}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Nom de la compétence</label>
                        <input
                          type="text"
                          required
                          value={newSkill.name}
                          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                          placeholder="ex: Docker, Go, Kubernetes"
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Plus size={14} />
                      <span>ajouter la compétence</span>
                    </button>
                  </form>

                  {/* Skills summary checklist */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">compétences enregistrées</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-1">
                      {skills.map((cat, idx) => (
                        <div key={idx} className="bg-neutral-950 border border-white/5 p-4 rounded-xl">
                          <span className="text-[10px] font-mono text-white/40 block mb-2">{cat.title.toLowerCase()}</span>
                          <div className="flex flex-wrap gap-1">
                            {cat.skills.map((s, sIdx) => (
                              <span key={sIdx} className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/5 text-white/60 rounded">
                                {s.toLowerCase()}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Edit Projects */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      publier une nouvelle réalisation
                    </h3>
                    {projectSuccess && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <Check size={12} /> Projet publié avec succès !
                      </span>
                    )}
                  </div>

                  <form onSubmit={handleAddProject} className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Titre du projet *</label>
                        <input
                          type="text"
                          required
                          value={newProject.title}
                          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                          placeholder="ex: CyberSentry DNS"
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Catégorie *</label>
                        <select
                          value={newProject.category}
                          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                        >
                          <option value="Full-Stack">full-stack</option>
                          <option value="Frontend">frontend</option>
                          <option value="Design">design</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Description succincte (Card text) *</label>
                      <input
                        type="text"
                        required
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        placeholder="ex: Analyseur de trames réseau et pare-feu d'apprentissage..."
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Description détaillée (Long description / Hover text)</label>
                      <textarea
                        rows={2}
                        value={newProject.longDescription}
                        onChange={(e) => setNewProject({ ...newProject, longDescription: e.target.value })}
                        placeholder="ex: Un projet d'étude complet simulant des attaques DNS Cache Poisoning..."
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Technologies (séparées par des virgules) *</label>
                        <input
                          type="text"
                          required
                          value={newProject.tech}
                          onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                          placeholder="ex: Python, Socket, Wireshark, RegEx"
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Image de fond (URL Unsplash)*</label>
                        <input
                          type="url"
                          value={newProject.backgroundImage}
                          onChange={(e) => setNewProject({ ...newProject, backgroundImage: e.target.value })}
                          placeholder="https://images.unsplash.com/photo-..."
                          className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">URL de démonstration (facultatif)</label>
                      <input
                        type="url"
                        value={newProject.url}
                        onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                        placeholder="https://..."
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Plus size={14} />
                      <span>publier la réalisation</span>
                    </button>
                  </form>

                  {/* Registered Projects listing */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">gestion des projets publiés ({projects.length})</h4>
                    <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                      {projects.map((proj) => (
                        <div key={proj.id} className="bg-neutral-950 border border-white/5 p-3 rounded-xl flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <span className="font-semibold text-xs text-white block truncate">{proj.title}</span>
                            <span className="text-[9px] font-mono text-white/40 lowercase">{proj.category}</span>
                          </div>
                          <button
                            onClick={() => deleteProject(proj.id)}
                            className="w-8 h-8 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 flex items-center justify-center border border-red-500/5 transition-all cursor-pointer"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
