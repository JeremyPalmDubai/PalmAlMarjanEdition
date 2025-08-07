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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>

      {/* Contenu ultra-minimaliste */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Badge iOS style */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-12">
            <span className="text-white text-sm font-light tracking-wide">
              {t.hero.badge} • INVEST AL MARJAN
            </span>
          </div>

          {/* Titre ultra-large Apple style */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tighter leading-none" id="invest-al-marjan-island" itemProp="headline">
            {t.hero.title}
          </h1>
          
          {/* Sous-titre élégant */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 mb-12 tracking-tight leading-tight max-w-3xl mx-auto" itemProp="description">
            {t.hero.subtitle}
          </p>
          
          {/* Description SEO */}
          <p className="text-base sm:text-lg font-light text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed">
            Invest Al Marjan Island luxury real estate with 33.3% appreciation. Al Marjan real estate near Wynn Casino opening 2027. 
            100% freehold ownership, 0% capital gains tax, 5-year payment plans. Invest near Wynn Casino for maximum ROI.
          </p>
          
          {/* CTA ultra-minimal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Hero Primary CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Investment Interest',
                    value: 200000,
                    currency: 'USD'
                  });
                }
              }}
            >
              Invest Al Marjan Island
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('opportunity');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent text-white border border-white/40 px-8 py-4 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Hero Secondary CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'ViewContent', {
                    content_name: 'Investment Opportunity'
                  });
                }
              }}
            >
              {t.hero.cta.primary}
            </button>
          </div>
          
          {/* Indicateurs de confiance minimalistes */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
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