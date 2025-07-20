import React from 'react';
import { translations } from '../data/translations';

interface LifestyleSectionProps {
  currentLanguage: string;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-fullscreen-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmalmarjan.com/public/assets/img/wrapper-bg.png"
          alt="Paradise beaches of Al Marjan Island"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="tesla-container">
          <div className="max-w-2xl text-white">
            {/* Tesla-style heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter" id="lifestyle">
              {t.lifestyle.title}
            </h2>
            
            {/* Tesla-style description */}
            <p className="text-xl text-white/90 mb-16 leading-relaxed font-light max-w-xl">
              {t.lifestyle.description}
            </p>
            
            {/* Tesla-style amenities */}
            <div className="space-y-8 mb-16">
              <div>
                <h4 className="text-lg font-inter font-medium text-white mb-2">{t.lifestyle.amenities.beaches.title}</h4>
                <p className="text-white/70 text-sm">{t.lifestyle.amenities.beaches.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-inter font-medium text-white mb-2">{t.lifestyle.amenities.dining.title}</h4>
                <p className="text-white/70 text-sm">{t.lifestyle.amenities.dining.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-inter font-medium text-white mb-2">{t.lifestyle.amenities.leisure.title}</h4>
                <p className="text-white/70 text-sm">{t.lifestyle.amenities.leisure.description}</p>
              </div>
            </div>
            
            {/* Tesla-style connectivity metrics */}
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div>
                <div className="text-4xl font-inter font-light text-white mb-2">
                  {t.lifestyle.connectivity.dubai.time}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.lifestyle.connectivity.dubai.title}
                </div>
              </div>
              
              <div>
                <div className="text-4xl font-inter font-light text-white mb-2">
                  {t.lifestyle.connectivity.flyingTaxi.time}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.lifestyle.connectivity.flyingTaxi.title}
                </div>
              </div>
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="tesla-btn-secondary-hero">
              Experience Luxury Living
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};