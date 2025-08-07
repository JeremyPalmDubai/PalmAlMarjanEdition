import React from 'react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLanguage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="section-hero relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
          alt="Al Marjan Island luxury development"
          className="w-full h-full object-cover image-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Tesla-style badge */}
          <div className="inline-flex items-center glass-subtle px-4 py-2 rounded-xl mb-12">
            <span className="text-white text-label">
              {t.hero.badge} • INVEST AL MARJAN
            </span>
          </div>

          {/* Tesla-style main heading */}
          <h1 className="text-display text-white mb-8" id="invest-al-marjan-island" itemProp="headline">
            {t.hero.title}
          </h1>
          
          {/* Tesla-style subtitle */}
          <p className="text-headline text-white/90 mb-12" itemProp="description">
            {t.hero.subtitle}
          </p>
          
          {/* SEO-optimized description */}
          <p className="text-body text-white/80 mb-16 max-w-5xl mx-auto">
            Invest Al Marjan Island luxury real estate with 33.3% appreciation. Al Marjan real estate near Wynn Casino opening 2027. 
            100% freehold ownership, 0% capital gains tax, 5-year payment plans. Invest near Wynn Casino for maximum ROI.
          </p>
          
          {/* Tesla-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="#contact" 
              className="btn-hero-primary w-full sm:w-auto"
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
              className="btn-hero-secondary w-full sm:w-auto"
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              <span className="text-caption">100% Freehold Ownership</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              <span className="text-caption">0% Capital Gains Tax</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              <span className="text-caption">5-Year Payment Plans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};