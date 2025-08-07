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
              {t.hero.badge} • INVEST AL MARJAN
            </span>
          </div>

          {/* Tesla-style main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-light text-white mb-8 tracking-tighter leading-tight" id="invest-al-marjan-island" itemProp="headline">
            Invest <span className="text-blue-400 font-medium">Al Marjan Island</span><br />
            Near <span className="text-yellow-400 font-bold">Wynn Casino</span>
          </h1>
          
          {/* Tesla-style subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-light text-white/90 mb-12 tracking-tight leading-tight" itemProp="description">
            <span className="text-green-400 font-bold">33.3%</span> Annual Appreciation • <span className="text-blue-400 font-bold">$3.9B</span> Wynn Investment • <span className="text-yellow-400 font-bold">2027</span> Opening
          </p>
          
          {/* SEO-optimized description */}
          <p className="text-base sm:text-lg md:text-xl font-inter font-light text-white/80 mb-16 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0">
            The <span className="text-yellow-400 font-bold">world's largest casino resort</span> opens in 2027. 
            <span className="text-green-400 font-bold">Secure your investment</span> in luxury beachfront properties with 
            <span className="text-blue-400 font-bold">5-year payment plans</span> and <span className="text-green-400 font-bold">0% taxes</span>.
          </p>
          
          {/* Tesla-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 sm:px-0">
            <a 
              href="#contact" 
              className="tesla-btn-primary-hero w-full sm:w-auto text-lg px-16 py-5"
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
              🏝️ Secure Your Investment Now
            </a>
            <a
              href="#contact" 
              className="tesla-btn-secondary-hero w-full sm:w-auto text-lg px-16 py-5"
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
              📊 View Investment Details
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/70 text-xs sm:text-sm px-4 sm:px-0">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="font-bold text-green-400">100%</span> Freehold Ownership
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="font-bold text-green-400">0%</span> Capital Gains Tax
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="font-bold text-blue-400">5-Year</span> Payment Plans
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};