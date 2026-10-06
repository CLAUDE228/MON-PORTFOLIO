import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MessageSquareCode, CheckCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Scroll3D } from './Scroll3D';

export const ContactSection: React.FC = () => {
  const { addContactMessage } = usePortfolio();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Save contact message dynamically in our context state
    setTimeout(() => {
      addContactMessage({
        name: formState.name,
        email: formState.email,
        subject: formState.subject || 'sans sujet',
        message: formState.message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  const contactLinks = [
    {
      label: 'email professionnel',
      value: 'komlajeanclaudedogbe@gmail.com',
      icon: <Mail className="text-red-400" size={16} />,
      href: 'mailto:komlajeanclaudedogbe@gmail.com',
    },
    {
      label: 'téléphone & whatsapp',
      value: '+228 91 20 27 26',
      icon: <Phone className="text-emerald-400" size={16} />,
      href: 'tel:+22891202726',
    },
    {
      label: 'profil linkedin',
      value: 'komla-jean-claude-dogbe-929292300',
      icon: <Linkedin className="text-blue-400" size={16} />,
      href: 'https://www.linkedin.com/in/komla-jean-claude-dogbe-929292300/',
    },
    {
      label: 'compte github',
      value: 'github.com/CLAUDE228',
      icon: <Github className="text-white" size={16} />,
      href: 'https://github.com/CLAUDE228',
    },
  ];

  return (
    <Scroll3D 
      id="contact" 
      className="bg-black text-white py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-medium tracking-widest text-white/40 uppercase block mb-3">
            05 / contact
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white lowercase">
            parlons de vos projets
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-white/80 font-light">
              <span className="text-xs font-medium tracking-widest text-white/40 uppercase block">
                disponible pour missions & stages
              </span>
              <p className="text-sm sm:text-base leading-relaxed lowercase">
                vous avez un projet innovant à concevoir en afrique ou à l'international ? un besoin de renfort d'ingénierie sur vos architectures laravel, spring boot ou react ? contactez-moi directement ou envoyez-moi un message ci-contre !
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-neutral-900/30 hover:bg-neutral-900/55 border border-white/5 hover:border-white/20 p-4 rounded-2xl transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block leading-none font-mono">
                      {link.label}
                    </span>
                    <span className="text-xs sm:text-sm text-white/90 mt-2 block truncate font-light">
                      {link.value}
                    </span>
                  </div>
                  <div className="text-white/20 group-hover:text-white transition-colors pl-2 shrink-0">
                    <Send size={11} className="transform rotate-45" />
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-neutral-900/10 border border-white/5 p-5 rounded-2xl flex items-center gap-4">
              <MessageSquareCode className="text-white/40 shrink-0" size={20} />
              <p className="text-xs text-white/50 leading-relaxed font-light lowercase">
                <strong>garantie de réponse :</strong> je consulte ma messagerie plusieurs fois par jour et réponds sous 24h ouvrées.
              </p>
            </div>
          </div>

          {/* Right Column: Contact form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/20 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                formulaire de messagerie
              </h3>
              <span className="text-[9px] font-mono text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                secure gateway
              </span>
            </div>

            {isSuccess && (
              <div className="bg-white/5 border border-white/10 text-white p-4 rounded-2xl flex items-start gap-3 mb-6 animate-fade-in">
                <CheckCircle className="shrink-0 mt-0.5 text-white/70" size={16} />
                <div>
                  <h4 className="font-medium text-sm lowercase">message transmis avec succès !</h4>
                  <p className="text-xs text-white/60 mt-1 leading-normal lowercase">
                    le message a été transmis et sauvegardé dans l'espace d'administration.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                    votre nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="ex: jean dupont"
                    className="w-full bg-neutral-900/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors lowercase"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                    votre adresse email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="ex: dupont@gmail.com"
                    className="w-full bg-neutral-900/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors lowercase"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  sujet du message
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="ex: proposition de stage ou de projet"
                  className="w-full bg-neutral-900/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors lowercase"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  votre message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="rédigez votre message ici..."
                  className="w-full bg-neutral-900/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none lowercase"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-neutral-200 text-black font-medium text-xs uppercase tracking-wider py-4 rounded-full transition-all duration-200 cursor-pointer focus:outline-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>transmission...</span>
                  </>
                ) : (
                  <>
                    <Send size={11} className="transform rotate-45" />
                    <span>envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </Scroll3D>
  );
};
