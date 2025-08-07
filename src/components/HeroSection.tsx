import React from 'react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLanguage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="relative overflow-hidden">
      {/* Image de fond ultra-clean */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
          alt="Al Marjan Island luxury development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Contenu ultra-minimaliste */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl mx-auto px-6">
          {/* Badge iOS style */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 mb-16">
            <span className="text-white text-sm font-light tracking-wide">
              {t.hero.badge} • INVEST AL MARJAN
            </span>
          </div>

          {/* Titre ultra-large Apple style */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-white mb-12 tracking-tighter leading-none" id="invest-al-marjan-island" itemProp="headline">
            {t.hero.title}
          </h1>
          
          {/* Sous-titre élégant */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white/90 mb-16 tracking-tight leading-tight max-w-4xl mx-auto" itemProp="description">
            {t.hero.subtitle}
          </p>
          
          {/* Description SEO */}
          <p className="text-lg sm:text-xl font-light text-white/70 mb-20 max-w-4xl mx-auto leading-relaxed">
            Invest Al Marjan Island luxury real estate with 33.3% appreciation. Al Marjan real estate near Wynn Casino opening 2027. 
            100% freehold ownership, 0% capital gains tax, 5-year payment plans.
          </p>
          
          {/* CTA ultra-minimal */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-12 py-4 text-sm font-light hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
            >
              Invest Al Marjan Island
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('opportunity');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent text-white border border-white/40 px-12 py-4 text-sm font-light hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              {t.hero.cta.primary}
            </button>
          </div>
          
          {/* Indicateurs de confiance minimalistes */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 mr-3"></div>
              100% Freehold Ownership
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 mr-3"></div>
              0% Capital Gains Tax
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 mr-3"></div>
              5-Year Payment Plans
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};