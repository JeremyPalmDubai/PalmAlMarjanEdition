import React from 'react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLanguage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
          alt="Al Marjan Island luxury development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content - Tesla-style minimal and centered */}
      <div className="relative z-10 tesla-container text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-light text-white mb-4 sm:mb-6 md:mb-8 tracking-tighter animate-fade-in-up leading-tight" id="main-heading">
            {t.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-light text-white mb-6 sm:mb-8 md:mb-12 tracking-tight animate-fade-in-up opacity-90 leading-tight" role="banner">
            {t.hero.subtitle}
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-inter font-light animate-fade-in-up px-4">
            {t.hero.description}
          </p>
          
          {/* Key Benefits - Improved for SEO */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm sm:text-base">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <span>✓ 0% Tax on Capital Gains</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <span>✓ 100% Freehold Ownership</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <span>✓ Wynn Casino 2027</span>
              </div>
            </div>
          </div>
          
          {/* Pricing and Payment Plan */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-8 sm:mb-12 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20">
              <div className="text-white text-sm sm:text-base lg:text-lg font-medium">From $200,000</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/20">
              <div className="text-white text-sm sm:text-base lg:text-lg font-medium">Payment plan up to 5 years</div>
            </div>
          </div>

          {/* Tesla-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4">
            <a 
              href="#al-marjan-island" 
              className="tesla-btn-primary w-full sm:w-auto text-center"
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
              className="tesla-btn-secondary-white w-full sm:w-auto text-center"
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center opacity-60">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};