import React from 'react';
import { translations } from '../data/translations';

interface WynnEffectSectionProps {
  currentLanguage: string;
}

export const WynnEffectSection: React.FC<WynnEffectSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="wynn-effect" className="section-hero relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp"
          alt="Wynn Resort Al Marjan Island"
          className="w-full h-full object-cover image-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container-minimal">
          <div className="max-w-3xl">
            {/* Tesla-style badge */}
            <div className="inline-flex items-center glass-subtle px-4 py-2 rounded-xl mb-8">
              <span className="text-white text-label">
                INVEST NEAR WYNN CASINO • WYNN CASINO 2027
              </span>
            </div>
            
            {/* Tesla-style heading */}
            <h2 className="text-display text-white mb-8" id="invest-near-wynn-casino" itemProp="headline">
              {t.wynnEffect.title}
            </h2>
            
            {/* Tesla-style description */}
            <p className="text-body text-white/90 mb-12" itemProp="description">
              <strong>Invest near Wynn Casino</strong> on Al Marjan Island. The $3.9 billion Wynn Resort & Casino transforms 
              <strong>Al Marjan real estate</strong> into the Middle East's premier luxury destination. 
              <strong>Al Marjan Island real estate</strong> values will surge with the Wynn effect in 2027.
            </p>
            
            {/* Tesla-style metrics */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-display text-white mb-2">
                  {t.wynnEffect.resort.stats.investment}
                </div>
                <div className="text-label text-white/70">
                  {t.wynnEffect.resort.stats.investmentLabel}
                </div>
              </div>
              <div>
                <div className="text-display text-white mb-2">
                  {t.wynnEffect.resort.stats.opening}
                </div>
                <div className="text-label text-white/70">
                  {t.wynnEffect.resort.stats.openingLabel}
                </div>
              </div>
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="btn-hero-secondary" aria-label="Invest near Wynn Casino - Contact us">
              {t.wynnEffect.benefits.returns.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};