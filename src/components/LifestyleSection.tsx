import React from 'react';
import { translations } from '../data/translations';

interface LifestyleSectionProps {
  currentLanguage: string;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="lifestyle" className="tesla-section bg-white">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            {t.lifestyle.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            {t.lifestyle.description}
          </p>
        </div>

        {/* Tesla-style split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slide-in">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop 800w"
                sizes="100vw"
              />
              <source
                media="(min-width: 769px)"
                srcSet="https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop 1200w,
                        https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=1600&h=1067&fit=crop 1600w"
                sizes="50vw"
              />
              <img
                src="https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                srcSet="https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop 600w,
                        https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop 1200w,
                        https://palmalmarjan.com/public/assets/img/wrapper-bg.png?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop 1800w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Al Marjan Island paradise beaches with crystal clear waters and luxury resorts"
                title="Al Marjan Island Paradise Beaches - Luxury Lifestyle"
                className="w-full h-96 lg:h-[500px] object-cover tesla-shadow"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                data-seo-filename="al-marjan-island-paradise-beaches-crystal-clear-waters-luxury-resorts.webp"
              />
            </picture>
          </div>
          <div className="animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl tesla-heading mb-8">
              {t.lifestyle.paradise.title}
            </h3>
            <p className="text-lg tesla-subheading mb-12 leading-relaxed">
              {t.lifestyle.paradise.description}
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-black mb-2">{t.lifestyle.amenities.beaches.title}</h4>
                <p className="tesla-subheading text-sm">{t.lifestyle.amenities.beaches.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">{t.lifestyle.amenities.dining.title}</h4>
                <p className="tesla-subheading text-sm">{t.lifestyle.amenities.dining.description}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-2">{t.lifestyle.amenities.leisure.title}</h4>
                <p className="tesla-subheading text-sm">{t.lifestyle.amenities.leisure.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style connectivity section */}
        <div className="bg-black text-white px-8 py-16 lg:px-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-inter font-light text-center mb-12">
              {t.lifestyle.connectivity.title}
            </h3>
            <p className="text-lg text-gray-300 text-center mb-16 leading-relaxed font-light">
              {t.lifestyle.connectivity.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-light mb-4">{t.lifestyle.connectivity.dubai.time}</div>
                <div className="text-lg font-medium mb-2">{t.lifestyle.connectivity.dubai.title}</div>
                <div className="text-sm text-gray-300">{t.lifestyle.connectivity.dubai.description}</div>
              </div>
              
              <div className="animate-fade-in-up">
                <div className="text-4xl font-light mb-4">{t.lifestyle.connectivity.flyingTaxi.time}</div>
                <div className="text-lg font-medium mb-2">{t.lifestyle.connectivity.flyingTaxi.title}</div>
                <div className="text-sm text-gray-300">{t.lifestyle.connectivity.flyingTaxi.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};