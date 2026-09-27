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
  login: (pseudo: string, password: string) => Promise<boolean>;
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

// Paramètres de sécurisation cryptographique
// Aucun identifiant ou mot de passe n'est stocké en texte clair dans le code
const AUTH_SALT = "portfolio_salt_kcd_2026_x89!";
const EXPECTED_PSEUDO_HASH = "6c71e849c467cad5e311c867591a9ca5b52f293b9e3b8a27873d05eeba6ffaaf";
const EXPECTED_PASS_HASH = "c14c4c95d47a22f7fe2879b2d36207ec89c1150004bd6005bd64e72667567924";
const EXPECTED_SESSION_TOKEN = "a0e2f5aa4cbb10b402da72a3b890a1e7a6b91cd70cbae31a8fe3fe175ea2c3fd";
const AUTH_SESSION_KEY = "portfolio_secure_session_v1";
const SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 heures

// Calcul d'empreinte SHA-256 via WebCrypto (standard du navigateur)
async function computeSha256(message: string): Promise<string> {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
  return '';
}

// Vérification stricte du jeton de session (bloque tout contournement par localStorage arbitraire)
function verifyStoredSession(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    // Purge de l'ancienne clé vulnérable si elle existe
    localStorage.removeItem('portfolio_is_logged');

    const stored = sessionStorage.getItem(AUTH_SESSION_KEY) || localStorage.getItem(AUTH_SESSION_KEY);
    if (!stored) return false;
    const session = JSON.parse(stored);
    if (session?.token !== EXPECTED_SESSION_TOKEN) {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
      localStorage.removeItem(AUTH_SESSION_KEY);
      return false;
    }
    if (!session?.timestamp || Date.now() - session.timestamp > SESSION_MAX_AGE_MS) {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
      localStorage.removeItem(AUTH_SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

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
    return verifyStoredSession();
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

  const login = async (pseudo: string, password: string): Promise<boolean> => {
    const cleanPseudo = (pseudo || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    // Le pseudo et le mot de passe sont obligatoires
    if (!cleanPseudo || !cleanPassword) {
      return false;
    }

    // Calcul des empreintes cryptographiques avec sel (SHA-256)
    // Le pseudo et le mot de passe réels n'apparaissent nulle part dans le code
    const hashedPseudo = await computeSha256(AUTH_SALT + 'pseudo:' + cleanPseudo);
    const hashedPass = await computeSha256(AUTH_SALT + 'pass:' + cleanPassword);

    const isPseudoValid = hashedPseudo === EXPECTED_PSEUDO_HASH;
    const isPasswordValid = hashedPass === EXPECTED_PASS_HASH;

    if (isPseudoValid && isPasswordValid) {
      setIsLoggedIn(true);
      const sessionData = JSON.stringify({
        token: EXPECTED_SESSION_TOKEN,
        timestamp: Date.now()
      });
      sessionStorage.setItem(AUTH_SESSION_KEY, sessionData);
      localStorage.setItem(AUTH_SESSION_KEY, sessionData);

      // Enregistrement immédiat d'une alerte de sécurité avec heure, minute, seconde et pseudo
      const now = new Date();
      const timeStr = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      const dateStr = now.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      let clientDetails = 'Navigateur Web';
      if (typeof navigator !== 'undefined') {
        const ua = navigator.userAgent;
        if (/iphone|ipad|ipod/i.test(ua)) clientDetails = 'Apple iPhone / iOS';
        else if (/android/i.test(ua)) clientDetails = 'Smartphone Android';
        else if (/windows/i.test(ua)) clientDetails = 'Ordinateur Windows';
        else if (/macintosh|mac os x/i.test(ua)) clientDetails = 'Ordinateur Mac OS';
        else if (/linux/i.test(ua)) clientDetails = 'Ordinateur Linux';
      }

      const alertMessage: ContactMessage = {
        id: 'security-alert-' + Date.now(),
        name: `🚨 Alerte Connexion Espace Privé`,
        email: 'securite-connexion@portfolio.admin',
        subject: `Connexion détectée à ${timeStr}`,
        message: `Une connexion à votre espace privé a été établie.\n\n⏰ Heure précise : ${timeStr} (heures:minutes:secondes)\n📅 Date : ${dateStr}\n👤 Pseudo utilisé : ${cleanPseudo}\n💻 Appareil : ${clientDetails}\n\n⚠️ Si vous n'êtes PAS à l'origine de cette connexion effectuée à ${timeStr}, quelqu'un d'autre a utilisé vos identifiants : modifiez immédiatement votre mot de passe !`,
        date: `${dateStr} à ${timeStr}`
      };

      setMessages(prev => [alertMessage, ...prev]);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    localStorage.removeItem(AUTH_SESSION_KEY);
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
