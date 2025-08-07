import React from 'react';
import { TrendingUp, Users, Building, Calendar, Target, ArrowRight } from 'lucide-react';
import { CounterAnimation } from './CounterAnimation';
import { translations } from '../data/translations';

interface ExplosiveGrowthSectionProps {
  currentLanguage: string;
}

export const ExplosiveGrowthSection: React.FC<ExplosiveGrowthSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const metrics = [
    {
      icon: Users,
      value: 10500,
      suffix: '+',
      label: t.explosiveGrowth.metrics.visitors.label,
      color: 'text-black'
    },
    {
      icon: Building,
      value: 7000,
      suffix: '+',
      label: t.explosiveGrowth.metrics.rooms.label,
      color: 'text-black'
    },
    {
      icon: TrendingUp,
      value: 300,
      suffix: '%',
      label: t.explosiveGrowth.metrics.growth.label,
      color: 'text-black'
    },
    {
      icon: Calendar,
      value: 2027,
      suffix: '',
      label: t.explosiveGrowth.metrics.opening.label,
      color: 'text-black'
    }
  ];

  return (
    <section className="section-minimal">
      <div className="container-minimal">
        {/* Tesla-style header */}
        <div className="text-center mb-20">
          <h2 className="text-display mb-8 animate-fade-in-up" id="explosive-growth">
            {t.explosiveGrowth.title}
          </h2>
          <p className="text-body max-w-4xl mx-auto animate-fade-in-up">
            {t.explosiveGrowth.subtitle}
          </p>
        </div>

        {/* Tesla-style metrics grid */}
        <div className="grid-minimal grid-4 mb-24">
          {metrics.map((metric, index) => (
            <div key={index} className="card-minimal text-center animate-scale-in">
              <div className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-display text-[#1d1d1f] mb-4">
                <CounterAnimation end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-label mb-2">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tesla-style comparison section */}
        <div className="card-dark mb-24">
          <div className="container-narrow text-center">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white mr-3" />
              <h3 className="text-title text-white" id="growth-trajectory">
                {t.explosiveGrowth.metrics.trajectory.title}
              </h3>
            </div>
            <p className="text-body text-white/80 mb-12">
              Following the success story of Palm Jumeirah, which saw property values increase by 400% over the past decade, Al Marjan Island is positioned to deliver similar exceptional returns to early investors.
            </p>
            
            {/* Tesla-style comparison metrics */}
            <div className="grid-minimal grid-2 text-center">
              <div className="animate-fade-in-up">
                <div className="text-display text-white mb-4">400%</div>
                <div className="text-body font-semibold text-white mb-2">Palm Jumeirah Growth</div>
                <div className="text-caption text-white/70">Historical performance (2014-2024)</div>
              </div>
              
              <div className="animate-fade-in-up">
                <div className="text-display text-white mb-4">500%</div>
                <div className="text-body font-semibold text-white mb-2">Al Marjan Projection</div>
                <div className="text-caption text-white/70">Expected growth with Wynn effect</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style CTA section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Secure Investment CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Secure Investment',
                    value: 200000,
                    currency: 'USD'
                  });
                }
              }}
            >
              Secure Your Investment
            </a>
            <a 
              href="#contact"
              className="btn-secondary"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Contact Form CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'ViewContent', {
                    content_name: 'Contact Form'
                  });
                }
              }}
            >
              Get Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};