import React from 'react';
import { CounterAnimation } from './CounterAnimation';
import { translations } from '../data/translations';

interface ROIMetricsSectionProps {
  currentLanguage: string;
}

export const ROIMetricsSection: React.FC<ROIMetricsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-fullscreen-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="ROI Metrics visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="tesla-container">
          <div className="max-w-2xl text-white">
            {/* Tesla-style heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter" id="roi-metrics">
              {t.roiMetrics.title}
            </h2>
            
            {/* Tesla-style description */}
            <p className="text-xl text-white/90 mb-16 leading-relaxed font-light max-w-xl">
              {t.roiMetrics.description}
            </p>
            
            {/* Tesla-style metrics */}
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div>
                <div className="text-5xl font-inter font-light text-white mb-2">
                  <CounterAnimation end={33} suffix="%" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase mb-2">
                  {t.roiMetrics.metrics.appreciation.title}
                </div>
                <div className="text-xs text-white/60">
                  {t.roiMetrics.metrics.appreciation.description}
                </div>
              </div>
              
              <div>
                <div className="text-5xl font-inter font-light text-white mb-2">
                  <CounterAnimation end={400} suffix="%" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase mb-2">
                  {t.roiMetrics.metrics.outperformance.title}
                </div>
                <div className="text-xs text-white/60">
                  {t.roiMetrics.metrics.outperformance.description}
                </div>
              </div>
              
              <div>
                <div className="text-5xl font-inter font-light text-white mb-2">
                  <CounterAnimation end={2027} suffix="" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase mb-2">
                  {t.roiMetrics.metrics.projection.title}
                </div>
                <div className="text-xs text-white/60">
                  {t.roiMetrics.metrics.projection.description}
                </div>
              </div>
              
              <div>
                <div className="text-5xl font-inter font-light text-white mb-2">
                  <CounterAnimation end={500} suffix="%" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase mb-2">
                  {t.roiMetrics.metrics.potential.title}
                </div>
                <div className="text-xs text-white/60">
                  {t.roiMetrics.metrics.potential.description}
                </div>
              </div>
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="tesla-btn-secondary-hero">
              Discover Investment Potential
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};