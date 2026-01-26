import React from 'react';
import { translations } from '../data/translations';

interface OpportunitySectionProps {
  currentLanguage: string;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="opportunity" className="tesla-section bg-white">
      <div className="tesla-container">
        {/* Tesla-style minimal header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
            INVESTMENT OPPORTUNITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tesla-heading mb-6 sm:mb-8 animate-fade-in-up px-4 sm:px-0" id="investment-opportunity">
            {t.opportunity.title}
          </h2>
          <p className="text-lg sm:text-xl tesla-subheading max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4 sm:px-0">
            {t.opportunity.description}
          </p>
        </div>

        {/* Tesla-style simple grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 mb-16 sm:mb-32">
          <div className="animate-slide-in px-4 sm:px-0">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl tesla-heading mb-3 sm:mb-4" id="strategic-location">{t.opportunity.features.strategic.title}</h3>
              <p className="tesla-subheading leading-relaxed text-base">{t.opportunity.features.strategic.description}</p>
            </div>
          </div>
          <div className="animate-slide-in px-4 sm:px-0">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl tesla-heading mb-3 sm:mb-4" id="market-transformation">{t.opportunity.features.transformation.title}</h3>
              <p className="tesla-subheading leading-relaxed text-base">{t.opportunity.features.transformation.description}</p>
            </div>
          </div>
          <div className="animate-slide-in px-4 sm:px-0">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl tesla-heading mb-3 sm:mb-4" id="world-class-infrastructure">{t.opportunity.features.infrastructure.title}</h3>
              <p className="tesla-subheading leading-relaxed text-base">{t.opportunity.features.infrastructure.description}</p>
            </div>
          </div>
          <div className="animate-slide-in px-4 sm:px-0">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl tesla-heading mb-3 sm:mb-4" id="economic-growth">{t.opportunity.features.economy.title}</h3>
              <p className="tesla-subheading leading-relaxed text-base">{t.opportunity.features.economy.description}</p>
            </div>
          </div>
        </div>

        {/* Tesla-style metrics section */}
        <div className="bg-gray-50 px-4 sm:px-8 py-12 sm:py-16 lg:px-16 lg:py-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl tesla-heading text-center mb-10 sm:mb-16" id="investment-highlights">
            {t.opportunity.highlights.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 text-center">
            <div className="animate-scale-in">
              <div className="tesla-metric mb-3 sm:mb-4">{t.opportunity.highlights.freehold.stat}</div>
              <div className="tesla-metric-label mb-2">{t.opportunity.highlights.freehold.title}</div>
              <div className="tesla-subheading text-sm leading-relaxed">{t.opportunity.highlights.freehold.description}</div>
            </div>
            <div className="animate-scale-in">
              <div className="tesla-metric mb-3 sm:mb-4">{t.opportunity.highlights.location.stat}</div>
              <div className="tesla-metric-label mb-2">{t.opportunity.highlights.location.title}</div>
              <div className="tesla-subheading text-sm leading-relaxed">{t.opportunity.highlights.location.description}</div>
            </div>
            <div className="animate-scale-in">
              <div className="tesla-metric mb-3 sm:mb-4">{t.opportunity.highlights.vision.stat}</div>
              <div className="tesla-metric-label mb-2">{t.opportunity.highlights.vision.title}</div>
              <div className="tesla-subheading text-sm leading-relaxed">{t.opportunity.highlights.vision.description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};