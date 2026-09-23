export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  tech: string[];
  category: string;
  color: string;
  videoSrc?: string;
  stats?: string;
  backgroundImage?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Course {
  title: string;
  category: 'Sciences' | 'Technique' | 'Gestion';
  topics: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface AboutMeData {
  fullname: string;
  title: string;
  description1: string;
  description2: string;
  objective: string;
  uni: string;
  cursus: string;
  bac: string;
  specialisation: string;
}
