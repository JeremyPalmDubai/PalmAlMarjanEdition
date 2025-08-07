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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-light text-white mb-6 sm:mb-8 tracking-tighter leading-tight" id="invest-al-marjan-island" itemProp="headline">
            {t.hero.title}
          </h1>
          
          {/* Tesla-style subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-light text-white/90 mb-8 sm:mb-12 md:mb-16 tracking-tight leading-tight" itemProp="description">
            {t.hero.subtitle}
          </p>
          
          {/* SEO-optimized description */}
          <p className="text-sm sm:text-base md:text-lg font-inter font-light text-white/80 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover luxury real estate investment opportunities on Al Marjan Island. Properties show 33.3% annual appreciation. 
            The new Wynn Casino opens in 2027. Enjoy 100% freehold ownership with zero capital gains tax. 
            Flexible 5-year payment plans available. Start your investment journey today.
          </p>
          
          {/* Tesla-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <a 
              href="#contact" 
              className="tesla-btn-primary-hero w-full sm:w-auto"
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
            </a>
            <a
              href="#contact" 
              className="tesla-btn-secondary-hero w-full sm:w-auto"
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
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/70 text-xs sm:text-sm px-4 sm:px-0">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              100% Freehold Ownership
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              0% Capital Gains Tax
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              5-Year Payment Plans
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};