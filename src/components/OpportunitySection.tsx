import React from 'react';
import { MapPin, TrendingUp, Building2, Globe, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface OpportunitySectionProps {
  currentLanguage: string;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="opportunity" className="tesla-section tesla-section-beige">
      <div className="tesla-container">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="tesla-badge-solid mb-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="tracking-widest">INVESTMENT OPPORTUNITY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8 animate-fade-in-up text-balance">
            {t.opportunity.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed animate-fade-in-up text-pretty">
            {t.opportunity.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div className="tesla-card hover-lift p-8 animate-slide-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-premium-blue rounded-tesla flex items-center justify-center mr-4">
                <MapPin className="tesla-icon-white" />
              </div>
              <h3 className="text-2xl tesla-heading">{t.opportunity.features.strategic.title}</h3>
            </div>
            <p className="tesla-subheading leading-relaxed text-pretty">{t.opportunity.features.strategic.description}</p>
          </div>
          
          <div className="tesla-card hover-lift p-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-premium-blue rounded-tesla flex items-center justify-center mr-4">
                <TrendingUp className="tesla-icon-white" />
              </div>
              <h3 className="text-2xl tesla-heading">{t.opportunity.features.transformation.title}</h3>
            </div>
            <p className="tesla-subheading leading-relaxed text-pretty">{t.opportunity.features.transformation.description}</p>
          </div>
          
          <div className="tesla-card hover-lift p-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-premium-blue rounded-tesla flex items-center justify-center mr-4">
                <Building2 className="tesla-icon-white" />
              </div>
              <h3 className="text-2xl tesla-heading">{t.opportunity.features.infrastructure.title}</h3>
            </div>
            <p className="tesla-subheading leading-relaxed text-pretty">{t.opportunity.features.infrastructure.description}</p>
          </div>
          
          <div className="tesla-card hover-lift p-8 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-premium-blue rounded-tesla flex items-center justify-center mr-4">
                <Globe className="tesla-icon-white" />
              </div>
              <h3 className="text-2xl tesla-heading">{t.opportunity.features.economy.title}</h3>
            </div>
            <p className="tesla-subheading leading-relaxed text-pretty">{t.opportunity.features.economy.description}</p>
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="bg-deep-gray rounded-tesla-lg p-12 lg:p-16 text-white">
          <h3 className="text-3xl md:text-4xl font-inter font-light text-center mb-16 text-white">
            {t.opportunity.highlights.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-12 text-center text-white">
            <div className="animate-scale-in">
              <div className="tesla-metric text-premium-blue mb-4">{t.opportunity.highlights.freehold.stat}</div>
              <div className="tesla-metric-label mb-2 text-white/80">{t.opportunity.highlights.freehold.title}</div>
              <div className="text-sm text-white/70 leading-relaxed">{t.opportunity.highlights.freehold.description}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="tesla-metric text-premium-blue mb-4">{t.opportunity.highlights.location.stat}</div>
              <div className="tesla-metric-label mb-2 text-white/80">{t.opportunity.highlights.location.title}</div>
              <div className="text-sm text-white/70 leading-relaxed">{t.opportunity.highlights.location.description}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="tesla-metric text-premium-blue mb-4">{t.opportunity.highlights.vision.stat}</div>
              <div className="tesla-metric-label mb-2 text-white/80">{t.opportunity.highlights.vision.title}</div>
              <div className="text-sm text-white/70 leading-relaxed">{t.opportunity.highlights.vision.description}</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="tesla-btn-glass group"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Opportunity CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Investment Opportunity'
                  });
                }
              }}
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};