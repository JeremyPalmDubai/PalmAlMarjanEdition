import React from 'react';
import { translations } from '../data/translations';

interface OpportunitySectionProps {
  currentLanguage: string;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="opportunity" className="section-minimal">
      <div className="container-minimal">
        {/* Tesla-style minimal header */}
        <div className="text-center mb-20">
          <div className="text-label text-[#86868b] mb-6">
            INVESTMENT OPPORTUNITY
          </div>
          <h2 className="text-display mb-8 animate-fade-in-up" id="investment-opportunity">
            {t.opportunity.title}
          </h2>
          <p className="text-body max-w-4xl mx-auto animate-fade-in-up">
            {t.opportunity.description}
          </p>
        </div>

        {/* Tesla-style simple grid */}
        <div className="grid-minimal grid-2 mb-32">
          <div className="card-minimal animate-slide-in">
            <div className="mb-8">
              <h3 className="text-title mb-4" id="strategic-location">{t.opportunity.features.strategic.title}</h3>
              <p className="text-body">{t.opportunity.features.strategic.description}</p>
            </div>
          </div>
          <div className="card-minimal animate-slide-in">
            <div className="mb-8">
              <h3 className="text-title mb-4" id="market-transformation">{t.opportunity.features.transformation.title}</h3>
              <p className="text-body">{t.opportunity.features.transformation.description}</p>
            </div>
          </div>
          <div className="card-minimal animate-slide-in">
            <div className="mb-8">
              <h3 className="text-title mb-4" id="world-class-infrastructure">{t.opportunity.features.infrastructure.title}</h3>
              <p className="text-body">{t.opportunity.features.infrastructure.description}</p>
            </div>
          </div>
          <div className="card-minimal animate-slide-in">
            <div className="mb-8">
              <h3 className="text-title mb-4" id="economic-growth">{t.opportunity.features.economy.title}</h3>
              <p className="text-body">{t.opportunity.features.economy.description}</p>
            </div>
          </div>
        </div>

        {/* Tesla-style metrics section */}
        <div className="glass-secondary px-8 py-16 lg:px-16 lg:py-24 rounded-3xl">
          <h3 className="text-headline text-center mb-16" id="investment-highlights">
            {t.opportunity.highlights.title}
          </h3>
          <div className="grid-minimal grid-3 text-center">
            <div className="animate-scale-in">
              <div className="text-display mb-4">{t.opportunity.highlights.freehold.stat}</div>
              <div className="text-label mb-2">{t.opportunity.highlights.freehold.title}</div>
              <div className="text-caption">{t.opportunity.highlights.freehold.description}</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-display mb-4">{t.opportunity.highlights.location.stat}</div>
              <div className="text-label mb-2">{t.opportunity.highlights.location.title}</div>
              <div className="text-caption">{t.opportunity.highlights.location.description}</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-display mb-4">{t.opportunity.highlights.vision.stat}</div>
              <div className="text-label mb-2">{t.opportunity.highlights.vision.title}</div>
              <div className="text-caption">{t.opportunity.highlights.vision.description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};