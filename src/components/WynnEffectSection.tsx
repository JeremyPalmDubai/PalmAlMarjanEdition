import React from 'react';
import { translations } from '../data/translations';

interface WynnEffectSectionProps {
  currentLanguage: string;
}

export const WynnEffectSection: React.FC<WynnEffectSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="wynn-effect" className="tesla-fullscreen-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp"
          alt="Wynn Resort Al Marjan Island"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="tesla-container text-center">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced badge with glow effect */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-md border border-yellow-400/30 rounded-full mb-8 shadow-2xl">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">
                INVEST NEAR WYNN CASINO • WYNN CASINO 2027
              </span>
            </div>
            
            {/* Redesigned heading with gradient */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-inter font-light text-white mb-8 tracking-tighter leading-tight" id="invest-near-wynn-casino" itemProp="headline">
              The <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Wynn</span> Effect
            </h2>
            
            {/* Enhanced description with better typography */}
            <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed font-light max-w-4xl mx-auto" itemProp="description">
              <strong>Invest near Wynn Casino</strong> on Al Marjan Island. The $3.9 billion Wynn Resort & Casino transforms 
              <strong className="text-yellow-400"> Al Marjan real estate</strong> into the Middle East's premier luxury destination. 
              <strong className="text-yellow-400"> Al Marjan Island real estate</strong> values will surge with the Wynn effect in 2027.
            </p>
            
            {/* Redesigned metrics with cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-inter font-light text-yellow-400 mb-4">
                  {t.wynnEffect.resort.stats.investment}
                </div>
                <div className="text-sm text-white/80 tracking-wide uppercase font-medium">
                  {t.wynnEffect.resort.stats.investmentLabel}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-inter font-light text-yellow-400 mb-4">
                  {t.wynnEffect.resort.stats.opening}
                </div>
                <div className="text-sm text-white/80 tracking-wide uppercase font-medium">
                  {t.wynnEffect.resort.stats.openingLabel}
                </div>
              </div>
            </div>

            {/* Enhanced CTA with glow effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-medium text-lg tracking-wide hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105" 
                aria-label="Invest near Wynn Casino - Contact us"
              >
                {t.wynnEffect.benefits.returns.title}
              </a>
              <a 
                href="#developments" 
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md"
              >
                View Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};