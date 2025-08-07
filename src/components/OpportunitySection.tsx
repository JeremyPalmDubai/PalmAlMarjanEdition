import React from 'react';
import { translations } from '../data/translations';

interface OpportunitySectionProps {
  currentLanguage: string;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="opportunity" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header ultra-minimal */}
        <div className="text-center mb-24">
          <div className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-6">
            INVESTMENT OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black mb-8 tracking-tighter leading-tight" id="investment-opportunity">
            {t.opportunity.title}
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.opportunity.description}
          </p>
        </div>

        {/* Grille ultra-clean */}
        <div className="grid md:grid-cols-2 gap-20 lg:gap-32 mb-32">
          <div>
            <h3 className="text-2xl font-light text-black mb-6" id="strategic-location">
              {t.opportunity.features.strategic.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {t.opportunity.features.strategic.description}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light text-black mb-6" id="market-transformation">
              {t.opportunity.features.transformation.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {t.opportunity.features.transformation.description}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light text-black mb-6" id="world-class-infrastructure">
              {t.opportunity.features.infrastructure.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {t.opportunity.features.infrastructure.description}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light text-black mb-6" id="economic-growth">
              {t.opportunity.features.economy.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {t.opportunity.features.economy.description}
            </p>
          </div>
        </div>

        {/* Section métriques ultra-minimal */}
        <div className="bg-gray-50 py-24 px-8 lg:px-16">
          <h3 className="text-3xl md:text-4xl font-extralight text-center mb-20" id="investment-highlights">
            {t.opportunity.highlights.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-5xl font-extralight text-black mb-6 tracking-tighter">
                {t.opportunity.highlights.freehold.stat}
              </div>
              <div className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4">
                {t.opportunity.highlights.freehold.title}
              </div>
              <div className="text-gray-600 font-light text-sm leading-relaxed">
                {t.opportunity.highlights.freehold.description}
              </div>
            </div>
            <div>
              <div className="text-5xl font-extralight text-black mb-6 tracking-tighter">
                {t.opportunity.highlights.location.stat}
              </div>
              <div className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4">
                {t.opportunity.highlights.location.title}
              </div>
              <div className="text-gray-600 font-light text-sm leading-relaxed">
                {t.opportunity.highlights.location.description}
              </div>
            </div>
            <div>
              <div className="text-5xl font-extralight text-black mb-6 tracking-tighter">
                {t.opportunity.highlights.vision.stat}
              </div>
              <div className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-4">
                {t.opportunity.highlights.vision.title}
              </div>
              <div className="text-gray-600 font-light text-sm leading-relaxed">
                {t.opportunity.highlights.vision.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};