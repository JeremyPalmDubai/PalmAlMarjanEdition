import React from 'react';
import { translations } from '../data/translations';

interface WynnEffectSectionProps {
  currentLanguage: string;
}

export const WynnEffectSection: React.FC<WynnEffectSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="wynn-effect" className="tesla-section bg-black text-white">
      <div className="tesla-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="animate-slide-in">
            <img
              src="https://images.pexels.com/photos/1134181/pexels-photo-1134181.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wynn Resort Al Marjan Island"
              className="w-full h-96 lg:h-[500px] object-cover tesla-shadow"
            />
          </div>
          
          {/* Content side */}
          <div className="animate-fade-in-up">
            <div className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
              {t.wynnEffect.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter">
              {t.wynnEffect.title}
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
              {t.wynnEffect.description}
            </p>
            
            {/* Tesla-style metrics */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-3xl font-light mb-2">{t.wynnEffect.resort.stats.investment}</div>
                <div className="text-sm text-gray-400 tracking-wide">{t.wynnEffect.resort.stats.investmentLabel}</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">{t.wynnEffect.resort.stats.opening}</div>
                <div className="text-sm text-gray-400 tracking-wide">{t.wynnEffect.resort.stats.openingLabel}</div>
              </div>
            </div>

            <a href="#contact" className="tesla-btn-secondary-white">
              {t.wynnEffect.benefits.returns.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};