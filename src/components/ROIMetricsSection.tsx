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
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8" id="roi-metrics">
            {t.roiMetrics.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            Al Marjan Island delivers superior investment returns compared to traditional global markets. 
            Properties consistently outperform international real estate benchmarks. 
            The upcoming Wynn Casino development enhances long-term appreciation potential.
          </p>
        </div>

        {/* Tesla-style metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 p-6 rounded-lg hover:bg-gray-50 hover:shadow-lg">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={33} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-2 group-hover:text-black transition-colors">{t.roiMetrics.metrics.appreciation.title}</div>
            <div className="tesla-subheading text-sm group-hover:text-gray-800 transition-colors">{t.roiMetrics.metrics.appreciation.description}</div>
          </div>
          <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 p-6 rounded-lg hover:bg-gray-50 hover:shadow-lg">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={400} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-2 group-hover:text-black transition-colors">{t.roiMetrics.metrics.outperformance.title}</div>
            <div className="tesla-subheading text-sm group-hover:text-gray-800 transition-colors">{t.roiMetrics.metrics.outperformance.description}</div>
          </div>
          <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 p-6 rounded-lg hover:bg-gray-50 hover:shadow-lg">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={2027} suffix="" />
            </div>
            <div className="tesla-metric-label mb-2 group-hover:text-black transition-colors">{t.roiMetrics.metrics.projection.title}</div>
            <div className="tesla-subheading text-sm group-hover:text-gray-800 transition-colors">{t.roiMetrics.metrics.projection.description}</div>
          </div>
          <div className="text-center animate-scale-in group hover:scale-105 transition-all duration-300 p-6 rounded-lg hover:bg-gray-50 hover:shadow-lg">
            <div className="tesla-metric text-black mb-4">
              <CounterAnimation end={500} suffix="%" />
            </div>
            <div className="tesla-metric-label mb-2 group-hover:text-black transition-colors">{t.roiMetrics.metrics.potential.title}</div>
            <div className="tesla-subheading text-sm group-hover:text-gray-800 transition-colors">{t.roiMetrics.metrics.potential.description}</div>
          </div>
        </div>

        {/* Tesla-style comparison section */}
        <div className="bg-gray-50 px-8 py-16 lg:px-16 lg:py-24">
          <h3 className="text-3xl md:text-4xl tesla-heading text-center mb-16" id="global-comparison">
            {t.roiMetrics.comparison.title}
          </h3>
          
          {/* Graphique de comparaison visuel */}
          <div className="mb-12 bg-white p-8 rounded-lg tesla-shadow border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Al Marjan Island</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse shadow-lg shadow-green-400/30" style={{ width: '100%' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full animate-pulse"></div>
                  </div>
                </div>
                <span className="font-bold text-green-600 animate-pulse">12-15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">London</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 rounded-full transition-all duration-1000 hover:bg-gray-500" style={{ width: '25%' }}></div>
                </div>
                <span className="font-medium text-gray-600">3-4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">New York</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <span className="font-medium text-gray-600">4-5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">Paris</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <span className="font-medium text-gray-600">2-3%</span>
              </div>
            </div>
          </div>
          
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