import React from 'react';
import { ArrowRight, MapPin, Star, TrendingUp } from 'lucide-react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLanguage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-hero-section relative overflow-hidden bg-gradient-to-br from-deep-gray via-deep-gray to-gray-800">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
          alt="Invest Al Marjan Island - Luxury real estate investment opportunity"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-gray/60 via-transparent to-deep-gray/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="tesla-container">
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="tesla-badge mb-8 animate-fade-in-up">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="font-medium tracking-widest">
                {t.hero.badge} • LUXURY INVESTMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-light text-white mb-8 tracking-tighter leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
              id="invest-al-marjan-island"
              itemProp="headline"
            >
              Unlock <span className="text-premium-blue font-medium">Exponential</span>
              <br />
              Returns
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl md:text-3xl font-inter font-light text-white/90 mb-6 tracking-tight leading-relaxed animate-fade-in-up max-w-4xl mx-auto"
              style={{ animationDelay: '0.4s' }}
              itemProp="description"
            >
              {t.hero.subtitle}
            </p>

            {/* SEO-optimized short pitch */}
            <p className="text-sm sm:text-base md:text-lg font-inter font-light text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Invest Al Marjan Island luxury real estate with 33.3% appreciation. Al Marjan real estate near Wynn Casino opening 2027.
              100% freehold ownership, 0% capital gains tax, 5-year payment plans. Invest near Wynn Casino for maximum ROI.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="tesla-card-glass px-4 py-2 text-white text-sm font-medium">
                <TrendingUp className="w-4 h-4 inline mr-2" />
                <span className="tesla-accent">33.3%</span> Appreciation
              </div>
              <div className="tesla-card-glass px-4 py-2 text-white text-sm font-medium">
                <Star className="w-4 h-4 inline mr-2" />
                <span className="tesla-accent">0%</span> Tax
              </div>
              <div className="tesla-card-glass px-4 py-2 text-white text-sm font-medium">
                <MapPin className="w-4 h-4 inline mr-2" />
                <span className="tesla-accent">Wynn Casino</span> 2027
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a
                href="#contact"
                className="tesla-btn-primary group w-full sm:w-auto"
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
                <span>Invest Al Marjan Island</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#opportunity"
                className="tesla-btn-glass w-full sm:w-auto"
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

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-premium-blue rounded-full mr-3"></div>
                <span className="font-medium">100% Freehold Ownership</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-premium-blue rounded-full mr-3"></div>
                <span className="font-medium">5-Year Payment Plans</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-premium-blue rounded-full mr-3"></div>
                <span className="font-medium">RERA Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};