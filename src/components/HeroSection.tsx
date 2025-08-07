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
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop 800w,
                    https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop 1200w"
            sizes="100vw"
          />
          <source
            media="(min-width: 769px)"
            srcSet="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop 1600w,
                    https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=2000&h=1125&fit=crop 2000w,
                    https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=2400&h=1350&fit=crop 2400w"
            sizes="100vw"
          />
          <img
            src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Al Marjan Island luxury real estate aerial view with pristine beaches and resorts"
            title="Invest Al Marjan Island - Luxury Real Estate Investment Opportunity"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            data-seo-filename="invest-al-marjan-island-luxury-real-estate-aerial-view.webp"
          />
        </picture>
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
              className="tesla-btn-primary-hero w-full sm:w-auto group relative overflow-hidden"
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
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              Invest Al Marjan Island
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact" 
              className="tesla-btn-secondary-hero w-full sm:w-auto group"
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
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              {t.hero.cta.primary}
              </span>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/70 text-xs sm:text-sm px-4 sm:px-0 animate-fade-in-up">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              100% Freehold Ownership
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              0% Capital Gains Tax
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              5-Year Payment Plans
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};