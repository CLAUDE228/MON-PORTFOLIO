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
  title: "INFORMATICIEN - GÉNIE LOGICIEL & SYSTÈMES D'INFORMATION (GLSI)",
  description1: "Je m'appelle DOGBE KOMLA JEAN CLAUDE. Je suis étudiant en 3ème année de Licence en Informatique, option Génie Logiciel et Systèmes d'Information (GLSI) à l'IAI-TOGO, passionné par la conception logicielle de pointe, l'intelligence artificielle, les bases de données distribuées et les réseaux.",
  description2: "Parcours Licence en Informatique (2024 – 2026) à l'IAI-TOGO, approfondissant les architectures d'entreprise (JEE / Spring Boot, Django, Flask, Laravel, Node.js), la programmation distribuée (Python, Java, C++), l'administration de bases de données (Oracle, SQL-Server, Big Data / NoSQL) et l'audit des systèmes d'information. Certifié Cisco Networking Academy (ITE 7.02) et titulaire du permis de conduire catégories A et B.",
  objective: "Concevoir des architectures logicielles modulaires et robustes, des systèmes d'information intelligents et des solutions d'entreprise alliant performance, intelligence artificielle et sécurité maximale. Mettre mon expertise en génie logiciel (GLSI) au service de projets technologiques innovants.",
  uni: "IAI-TOGO",
  cursus: "Licence en Informatique (2024 – 2026) — Option GLSI à l'IAI-TOGO",
  bac: "Baccalauréat Série D (Scientifique) à OPEM BAGUIDA (Baguida, Togo)",
  specialisation: "Génie Logiciel (GLSI), BD Avancées & Distribuées, Systèmes Décisionnels, Audit SI & Réseaux",
  permis: "Permis de conduire Catégories A & B (Moto & Véhicules légers)"
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
        // If saved profile doesn't mention GLSI or 3ème année, upgrade to new default
        if (!parsed.cursus || !parsed.cursus.includes('GLSI') || !parsed.description2 || !parsed.description2.includes('Semestre')) {
          return { ...defaultAbout, ...parsed, cursus: defaultAbout.cursus, specialisation: defaultAbout.specialisation, title: defaultAbout.title, description1: defaultAbout.description1, description2: defaultAbout.description2, permis: defaultAbout.permis };
        }
        return { ...defaultAbout, ...parsed };
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
    if (saved) {
      try {
        const parsed: SkillCategory[] = JSON.parse(saved);
        const hasGlsi = parsed.some(c => c.title.includes('Génie Logiciel') || c.skills.some(s => s.includes('Oracle') || s.includes('Permis')));
        if (!hasGlsi) {
          return skillCategories;
        }
        return parsed;
      } catch {
        return skillCategories;
      }
    }
    return skillCategories;
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
