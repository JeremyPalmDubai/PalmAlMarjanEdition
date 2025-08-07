import React from 'react';
import { translations } from '../data/translations';

interface LifestyleSectionProps {
  currentLanguage: string;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="lifestyle" className="section-minimal">
      <div className="container-minimal">
        <div className="text-center mb-20">
          <h2 className="text-display mb-8">
            {t.lifestyle.title}
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            {t.lifestyle.description}
          </p>
        </div>

        {/* Tesla-style split layout */}
        <div className="grid-minimal grid-2 items-center mb-24">
          <div className="card-minimal animate-slide-in">
            <img
              src="https://palmalmarjan.com/public/assets/img/wrapper-bg.png"
              alt="Paradise beaches of Al Marjan Island"
              className="w-full h-96 lg:h-[500px] object-cover image-minimal"
            />
          </div>
          <div className="card-minimal animate-fade-in-up">
            <h3 className="text-headline mb-8">
              {t.lifestyle.paradise.title}
            </h3>
            <p className="text-body mb-12">
              {t.lifestyle.paradise.description}
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-body font-semibold text-[#1d1d1f] mb-2">{t.lifestyle.amenities.beaches.title}</h4>
                <p className="text-caption">{t.lifestyle.amenities.beaches.description}</p>
              </div>
              <div>
                <h4 className="text-body font-semibold text-[#1d1d1f] mb-2">{t.lifestyle.amenities.dining.title}</h4>
                <p className="text-caption">{t.lifestyle.amenities.dining.description}</p>
              </div>
              <div>
                <h4 className="text-body font-semibold text-[#1d1d1f] mb-2">{t.lifestyle.amenities.leisure.title}</h4>
                <p className="text-caption">{t.lifestyle.amenities.leisure.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style connectivity section */}
        <div className="card-dark text-center">
          <div className="container-narrow">
            <h3 className="text-headline text-white mb-12">
              {t.lifestyle.connectivity.title}
            </h3>
            <p className="text-body text-white/80 mb-16">
              {t.lifestyle.connectivity.description}
            </p>
            
            <div className="grid-minimal grid-2 text-center">
              <div className="animate-fade-in-up">
                <div className="text-display text-white mb-4">{t.lifestyle.connectivity.dubai.time}</div>
                <div className="text-body font-semibold text-white mb-2">{t.lifestyle.connectivity.dubai.title}</div>
                <div className="text-caption text-white/70">{t.lifestyle.connectivity.dubai.description}</div>
              </div>
              
              <div className="animate-fade-in-up">
                <div className="text-display text-white mb-4">{t.lifestyle.connectivity.flyingTaxi.time}</div>
                <div className="text-body font-semibold text-white mb-2">{t.lifestyle.connectivity.flyingTaxi.title}</div>
                <div className="text-caption text-white/70">{t.lifestyle.connectivity.flyingTaxi.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};