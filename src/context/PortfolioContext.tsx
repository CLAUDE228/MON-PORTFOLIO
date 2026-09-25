import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, SkillCategory, ContactMessage, AboutMeData } from '../types';
import { projectsData, extraProjects, skillCategories } from '../data';

interface PortfolioContextType {
  aboutMe: AboutMeData;
  projects: Project[];
  skills: SkillCategory[];
  messages: ContactMessage[];
  isLoggedIn: boolean;
  isAdminPanelOpen: boolean;
  login: (pseudo: string, password: string) => boolean;
  logout: () => void;
  setAdminPanelOpen: (open: boolean) => void;
  updateAboutMe: (data: Partial<AboutMeData>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  deleteProject: (id: string) => void;
  addSkillToCategory: (categoryTitle: string, skill: string) => void;
  addSkillCategory: (title: string, icon: string) => void;
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'date'>) => void;
  deleteContactMessage: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const defaultAbout: AboutMeData = {
  fullname: "DOGBE KOMLA JEAN CLAUDE",
  title: "INFORMATICIEN - PROGRAMMEUR",
  description1: "Je m'appelle DOGBE KOMLA JEAN CLAUDE. Je suis étudiant en informatique à l'IAI-TOGO, passionné par le développement d'applications web et mobiles, les technologies modernes, la cybersécurité et les réseaux informatiques.",
  description2: "Étudiant rigoureux et engagé à l'IAI-TOGO, je combine une solide formation théorique en génie logiciel avec une curiosité inépuisable pour le code moderne, les architectures réseaux et la sécurité des systèmes d'information. Mon objectif est de concevoir des solutions applicatives performantes et d'une grande robustesse.",
  objective: "Concevoir des applications web et mobiles à fort impact, alliant architecture logicielle modulaire, bases de données optimisées et protocoles de communication hautement sécurisés. Je souhaite mettre mes compétences au service d'architectures modernes de pointe, tout en maintenant une veille technologique active sur la cryptographie, le cloud et les technologies d'avenir.",
  uni: "IAI-TOGO",
  cursus: "Licence Professionnelle en Analyse de Données (en cours d'obtention)",
  bac: "Série D scientifique à l'OPEM BAGUIDA",
  specialisation: "Génie Logiciel, Sécurité & Réseaux"
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from localStorage or use defaults
  const [aboutMe, setAboutMe] = useState<AboutMeData>(() => {
    const saved = localStorage.getItem('portfolio_about');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.fullname && parsed.fullname.toLowerCase() === "dogbe komla jean claude") {
          parsed.fullname = "DOGBE KOMLA JEAN CLAUDE";
        }
        if (parsed.title && (parsed.title.toLowerCase() === "informaticien-programmeur" || parsed.title.toLowerCase() === "informatique-programmeur")) {
          parsed.title = "INFORMATICIEN - PROGRAMMEUR";
        }
        if (parsed.description1 && (
          parsed.description1.includes("dogbe komla") || 
          parsed.description1.includes("informatique, passionne") || 
          parsed.description1.includes("etudiant en informatique") ||
          parsed.description1.startsWith("je m'appelle")
        )) {
          parsed.description1 = defaultAbout.description1;
          parsed.description2 = defaultAbout.description2;
          parsed.objective = defaultAbout.objective;
          parsed.cursus = defaultAbout.cursus;
          parsed.bac = defaultAbout.bac;
          parsed.specialisation = defaultAbout.specialisation;
          parsed.uni = defaultAbout.uni;
        }
        if (parsed.cursus && parsed.cursus.toLowerCase().includes("licence en analyse")) {
          parsed.cursus = defaultAbout.cursus;
        }
        if (!parsed.description1 || parsed.description1.includes("un informaticien-programmeur") || parsed.description1.includes("developpement d'applications web et mobiles")) {
          return { ...parsed, ...defaultAbout };
        }
        return parsed;
      } catch (e) {
        return defaultAbout;
      }
    }
    return defaultAbout;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('portfolio_projects');
    if (saved) return JSON.parse(saved);
    // Combine primary and extra projects for initial load
    return [...projectsData, ...extraProjects];
  });

  const [skills, setSkills] = useState<SkillCategory[]>(() => {
    const saved = localStorage.getItem('portfolio_skills');
    return saved ? JSON.parse(saved) : skillCategories;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('portfolio_messages');
    const initialSimulated: ContactMessage = {
      id: "simulated-msg-1",
      name: "david andjanga",
      email: "david.andjanga@example.com",
      subject: "proposition de collaboration design",
      message: "bonjour jean claude, j'ai vu votre portfolio d'ingénieur logiciel et cybersécurité. votre profil d'étudiant à l'iai-togo est très intéressant. j'aimerais collaborer avec vous sur un projet d'application mobile sécurisée. contactez-moi !",
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.length === 0) {
          return [initialSimulated];
        }
        return parsed;
      } catch (e) {
        return [initialSimulated];
      }
    }
    return [initialSimulated];
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('portfolio_is_logged') === 'true';
  });

  const [isAdminPanelOpen, setAdminPanelOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio_about', JSON.stringify(aboutMe));
  }, [aboutMe]);

  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));
  }, [messages]);

  const login = (pseudo: string, password: string): boolean => {
    const cleanPseudo = (pseudo || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    // Le pseudo et le mot de passe sont obligatoires
    if (!cleanPseudo || !cleanPassword) {
      return false;
    }

    // Le pseudo doit être bigy01
    const isPseudoValid = cleanPseudo === 'bigy01';

    // Seul le mot de passe olivier est accepté
    const isPasswordValid = cleanPassword === 'olivier';

    if (isPseudoValid && isPasswordValid) {
      setIsLoggedIn(true);
      localStorage.setItem('portfolio_is_logged', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('portfolio_is_logged');
  };

  const updateAboutMe = (data: Partial<AboutMeData>) => {
    setAboutMe(prev => ({ ...prev, ...data }));
  };

  const addProject = (proj: Omit<Project, 'id'>) => {
    const id = 'proj_' + Date.now();
    const newProj: Project = {
      ...proj,
      id,
      color: proj.color || '#3B82F6',
    };
    setProjects(prev => [newProj, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addSkillToCategory = (categoryTitle: string, skill: string) => {
    setSkills(prev => prev.map(cat => {
      if (cat.title === categoryTitle) {
        // Avoid duplicates
        if (cat.skills.includes(skill)) return cat;
        return {
          ...cat,
          skills: [...cat.skills, skill]
        };
      }
      return cat;
    }));
  };

  const addSkillCategory = (title: string, icon: string) => {
    setSkills(prev => {
      if (prev.some(cat => cat.title.toLowerCase() === title.toLowerCase())) return prev;
      return [...prev, { title, icon, skills: [] }];
    });
  };

  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'date'>) => {
    const id = 'msg_' + Date.now();
    const date = new Date().toLocaleDateString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    setMessages(prev => [{ ...msg, id, date }, ...prev]);
  };

  const deleteContactMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  return (
    <PortfolioContext.Provider value={{
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
      addSkillCategory,
      addContactMessage,
      deleteContactMessage,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
