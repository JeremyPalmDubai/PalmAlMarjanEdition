import React from 'react';
import { Star, Shield, Zap, Globe } from 'lucide-react';
import { translations } from '../data/translations';

interface WhyAlMarjanProps {
  currentLanguage: string;
}

export const WhyAlMarjan: React.FC<WhyAlMarjanProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const features = [
    {
      icon: Star,
      title: t.whyAlMarjan.features.exclusive.title,
      description: t.whyAlMarjan.features.exclusive.description,
      color: 'bg-yellow-400'
    },
    {
      icon: Shield,
      title: t.whyAlMarjan.features.secure.title,
      description: t.whyAlMarjan.features.secure.description,
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: t.whyAlMarjan.features.growth.title,
      description: t.whyAlMarjan.features.growth.description,
      color: 'bg-green-500'
    },
    {
      icon: Globe,
      title: t.whyAlMarjan.features.lifestyle.title,
      description: t.whyAlMarjan.features.lifestyle.description,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="why-al-marjan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.whyAlMarjan.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.whyAlMarjan.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Wynn Casino Spotlight */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t.whyAlMarjan.wynncasino.title}
            </h3>
            <p className="text-lg md:text-xl text-black/80 mb-8">
              {t.whyAlMarjan.wynncasino.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-black">
              <div>
                <div className="text-2xl font-bold mb-2">{t.whyAlMarjan.wynncasino.stats.opening}</div>
                <div className="text-sm opacity-80">{t.whyAlMarjan.wynncasino.stats.openingLabel}</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">{t.whyAlMarjan.wynncasino.stats.size}</div>
                <div className="text-sm opacity-80">{t.whyAlMarjan.wynncasino.stats.sizeLabel}</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">{t.whyAlMarjan.wynncasino.stats.impact}</div>
                <div className="text-sm opacity-80">{t.whyAlMarjan.wynncasino.stats.impactLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};