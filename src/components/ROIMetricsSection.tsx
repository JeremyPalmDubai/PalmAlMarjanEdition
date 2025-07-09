import React from 'react';
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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            {t.roiMetrics.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            {t.roiMetrics.description}
          </p>
        </div>

        {/* Tesla-style metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center animate-scale-in">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={33} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-2">{t.roiMetrics.metrics.appreciation.title}</div>
            <div className="tesla-subheading text-sm">{t.roiMetrics.metrics.appreciation.description}</div>
          </div>
          <div className="text-center animate-scale-in">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={400} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-2">{t.roiMetrics.metrics.outperformance.title}</div>
            <div className="tesla-subheading text-sm">{t.roiMetrics.metrics.outperformance.description}</div>
          </div>
          <div className="text-center animate-scale-in">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={2027} suffix="" />
            </div>
            <div className="tesla-metric-label mb-2">{t.roiMetrics.metrics.projection.title}</div>
            <div className="tesla-subheading text-sm">{t.roiMetrics.metrics.projection.description}</div>
          </div>
          <div className="text-center animate-scale-in">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={500} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-2">{t.roiMetrics.metrics.potential.title}</div>
            <div className="tesla-subheading text-sm">{t.roiMetrics.metrics.potential.description}</div>
          </div>
        </div>

        {/* Tesla-style comparison section */}
        <div className="bg-gray-50 px-8 py-16 lg:px-16 lg:py-24">
          <h3 className="text-3xl md:text-4xl tesla-heading text-center mb-16">
            {t.roiMetrics.comparison.title}
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-2xl font-light text-black mb-2">{t.roiMetrics.comparison.almarjan.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.almarjan.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.almarjan.note}</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-2xl font-light text-gray-500 mb-2">{t.roiMetrics.comparison.london.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.london.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.london.note}</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-2xl font-light text-gray-500 mb-2">{t.roiMetrics.comparison.newyork.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.newyork.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.newyork.note}</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-2xl font-light text-gray-500 mb-2">{t.roiMetrics.comparison.paris.yield}</div>
              <div className="tesla-metric-label mb-2">{t.roiMetrics.comparison.paris.location}</div>
              <div className="tesla-subheading text-sm">{t.roiMetrics.comparison.paris.note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};