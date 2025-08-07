import React from 'react';
import { CounterAnimation } from './CounterAnimation';
import { translations } from '../data/translations';

interface ROIMetricsSectionProps {
  currentLanguage: string;
}

export const ROIMetricsSection: React.FC<ROIMetricsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="roi-metrics" className="section-minimal">
      <div className="container-minimal">
        <div className="text-center mb-20">
          <h2 className="text-display mb-8" id="roi-metrics">
            {t.roiMetrics.title}
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            {t.roiMetrics.description}
          </p>
        </div>

        {/* Tesla-style metrics grid */}
        <div className="grid-minimal grid-4 mb-24">
          <div className="card-minimal text-center animate-scale-in">
            <div className="text-display text-[#1d1d1f] mb-4">
              <CounterAnimation end={33} suffix="%" />
            </div>
            <div className="text-label mb-2">{t.roiMetrics.metrics.appreciation.title}</div>
            <div className="text-caption">{t.roiMetrics.metrics.appreciation.description}</div>
          </div>
          <div className="card-minimal text-center animate-scale-in">
            <div className="text-display text-[#1d1d1f] mb-4">
              <CounterAnimation end={400} suffix="%" />
            </div>
            <div className="text-label mb-2">{t.roiMetrics.metrics.outperformance.title}</div>
            <div className="text-caption">{t.roiMetrics.metrics.outperformance.description}</div>
          </div>
          <div className="card-minimal text-center animate-scale-in">
            <div className="text-display text-[#1d1d1f] mb-4">
              <CounterAnimation end={2027} suffix="" />
            </div>
            <div className="text-label mb-2">{t.roiMetrics.metrics.projection.title}</div>
            <div className="text-caption">{t.roiMetrics.metrics.projection.description}</div>
          </div>
          <div className="card-minimal text-center animate-scale-in">
            <div className="text-display text-[#1d1d1f] mb-4">
              <CounterAnimation end={500} suffix="%" />
            </div>
            <div className="text-label mb-2">{t.roiMetrics.metrics.potential.title}</div>
            <div className="text-caption">{t.roiMetrics.metrics.potential.description}</div>
          </div>
        </div>

        {/* Tesla-style comparison section */}
        <div className="glass-secondary px-8 py-16 lg:px-16 lg:py-24 rounded-3xl">
          <h3 className="text-headline text-center mb-16" id="global-comparison">
            {t.roiMetrics.comparison.title}
          </h3>
          <div className="grid-minimal grid-4 text-center">
            <div className="animate-fade-in-up">
              <div className="text-title text-[#1d1d1f] mb-2">{t.roiMetrics.comparison.almarjan.yield}</div>
              <div className="text-label mb-2">{t.roiMetrics.comparison.almarjan.location}</div>
              <div className="text-caption">{t.roiMetrics.comparison.almarjan.note}</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-title text-[#86868b] mb-2">{t.roiMetrics.comparison.london.yield}</div>
              <div className="text-label mb-2">{t.roiMetrics.comparison.london.location}</div>
              <div className="text-caption">{t.roiMetrics.comparison.london.note}</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-title text-[#86868b] mb-2">{t.roiMetrics.comparison.newyork.yield}</div>
              <div className="text-label mb-2">{t.roiMetrics.comparison.newyork.location}</div>
              <div className="text-caption">{t.roiMetrics.comparison.newyork.note}</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-title text-[#86868b] mb-2">{t.roiMetrics.comparison.paris.yield}</div>
              <div className="text-label mb-2">{t.roiMetrics.comparison.paris.location}</div>
              <div className="text-caption">{t.roiMetrics.comparison.paris.note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};