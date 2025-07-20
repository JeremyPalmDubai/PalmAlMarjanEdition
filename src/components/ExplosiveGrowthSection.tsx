import React from 'react';
import { TrendingUp, Users, Building, Calendar, Target, ArrowRight } from 'lucide-react';
import { CounterAnimation } from './CounterAnimation';
import { translations } from '../data/translations';

interface ExplosiveGrowthSectionProps {
  currentLanguage: string;
}

export const ExplosiveGrowthSection: React.FC<ExplosiveGrowthSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-fullscreen-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
          alt="Al Marjan Island explosive growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="tesla-container">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Tesla-style heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter" id="explosive-growth">
              {t.explosiveGrowth.title}
            </h2>
            
            {/* Tesla-style subtitle */}
            <p className="text-xl md:text-2xl font-inter font-light text-white/90 mb-16 tracking-tight leading-tight max-w-3xl mx-auto">
              {t.explosiveGrowth.subtitle}
            </p>
            
            {/* Tesla-style metrics grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-inter font-light mb-2">
                  <CounterAnimation end={10500} suffix="+" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.explosiveGrowth.metrics.visitors.label}
                </div>
              </div>
              
              <div className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-inter font-light mb-2">
                  <CounterAnimation end={7000} suffix="+" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.explosiveGrowth.metrics.rooms.label}
                </div>
              </div>
              
              <div className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-inter font-light mb-2">
                  <CounterAnimation end={300} suffix="%" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.explosiveGrowth.metrics.growth.label}
                </div>
              </div>
              
              <div className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-inter font-light mb-2">
                  <CounterAnimation end={2027} suffix="" />
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.explosiveGrowth.metrics.opening.label}
                </div>
              </div>
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="tesla-btn-secondary-hero">
              {t.explosiveGrowth.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};