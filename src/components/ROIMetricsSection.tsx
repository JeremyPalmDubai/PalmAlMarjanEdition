import React from 'react';
import { TrendingUp, BarChart3, Target, Globe, ArrowRight } from 'lucide-react';
import { CounterAnimation } from './CounterAnimation';
import { translations } from '../data/translations';

interface ROIMetricsSectionProps {
  currentLanguage: string;
}

export const ROIMetricsSection: React.FC<ROIMetricsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="roi-metrics" className="tesla-section bg-white">
      <div className="tesla-container">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="tesla-badge-accent mb-8">
            <BarChart3 className="w-4 h-4 mr-2" />
            <span className="tracking-widest">ROI METRICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8 text-balance">
            {t.roiMetrics.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed text-pretty">
            {t.roiMetrics.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          <div className="tesla-card hover-lift p-8 text-center animate-scale-in">
            <div className="w-16 h-16 bg-premium-blue rounded-tesla flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="tesla-icon-white w-8 h-8" />
            </div>
            <div className="tesla-metric tesla-metric-accent mb-4">
              <CounterAnimation end={33} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-3">{t.roiMetrics.metrics.appreciation.title}</div>
            <div className="tesla-subheading text-sm leading-relaxed">{t.roiMetrics.metrics.appreciation.description}</div>
          </div>
          
          <div className="tesla-card hover-lift p-8 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-premium-blue rounded-tesla flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="tesla-icon-white w-8 h-8" />
            </div>
            <div className="tesla-metric tesla-metric-accent mb-4">
              <CounterAnimation end={400} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-3">{t.roiMetrics.metrics.outperformance.title}</div>
            <div className="tesla-subheading text-sm leading-relaxed">{t.roiMetrics.metrics.outperformance.description}</div>
          </div>
          
          <div className="tesla-card hover-lift p-8 text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-premium-blue rounded-tesla flex items-center justify-center mx-auto mb-6">
              <Target className="tesla-icon-white w-8 h-8" />
            </div>
            <div className="tesla-metric tesla-metric-accent mb-4">
              <CounterAnimation end={2027} suffix="" />
            </div>
            <div className="tesla-metric-label mb-3">{t.roiMetrics.metrics.projection.title}</div>
            <div className="tesla-subheading text-sm leading-relaxed">{t.roiMetrics.metrics.projection.description}</div>
          </div>
          
          <div className="tesla-card hover-lift p-8 text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-premium-blue rounded-tesla flex items-center justify-center mx-auto mb-6">
              <Globe className="tesla-icon-white w-8 h-8" />
            </div>
            <div className="tesla-metric tesla-metric-accent mb-4">
              <CounterAnimation end={500} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-3">{t.roiMetrics.metrics.potential.title}</div>
            <div className="tesla-subheading text-sm leading-relaxed">{t.roiMetrics.metrics.potential.description}</div>
          </div>
        </div>

        {/* Global Comparison */}
        <div className="tesla-section-beige rounded-tesla-lg p-12 lg:p-16">
          <h3 className="text-3xl md:text-4xl tesla-heading text-center mb-16">
            {t.roiMetrics.comparison.title}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="tesla-card hover-lift p-6 text-center animate-fade-in-up border-premium-blue border-2">
              <div className="text-3xl font-light text-premium-blue mb-3">{t.roiMetrics.comparison.almarjan.yield}</div>
              <div className="tesla-metric-label mb-2 text-premium-blue">{t.roiMetrics.comparison.almarjan.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.almarjan.note}</div>
            </div>
            <div className="tesla-card hover-lift p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-light text-deep-gray mb-3">{t.roiMetrics.comparison.london.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.london.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.london.note}</div>
            </div>
            <div className="tesla-card hover-lift p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-light text-deep-gray mb-3">{t.roiMetrics.comparison.newyork.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.newyork.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.newyork.note}</div>
            </div>
            <div className="tesla-card hover-lift p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-light text-deep-gray mb-3">{t.roiMetrics.comparison.paris.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.paris.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.paris.note}</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="tesla-btn-primary group"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'ROI Metrics CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'ROI Analysis'
                  });
                }
              }}
            >
              <span>Get ROI Analysis</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};