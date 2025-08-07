import React from 'react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLanguage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-hero-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
          alt="Al Marjan Island luxury development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* Tesla-style badge */}
          <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-12">
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Tesla-style main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-inter font-light text-white mb-8 tracking-tighter leading-tight" id="invest-al-marjan-island">
            {t.hero.title}
          </h1>
          
          {/* Tesla-style subtitle */}
          <p className="text-2xl sm:text-3xl font-inter font-light text-white/90 mb-16 tracking-tight leading-tight">
            {t.hero.subtitle}
          </p>
          
          {/* Tesla-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#al-marjan-island" 
              className="tesla-btn-primary-hero"
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
              Discover Al Marjan Island
            </a>
            <a
              href="#contact" 
              className="tesla-btn-secondary-hero"
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
            </a>
          </div>
        </div>
      </div>

      {/* Tesla-style scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};