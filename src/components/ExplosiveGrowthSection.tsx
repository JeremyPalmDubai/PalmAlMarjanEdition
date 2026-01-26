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
    <section className="tesla-section bg-white">
      <div className="tesla-container">
        {/* Tesla-style header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8 animate-fade-in-up" id="explosive-growth">
            {t.explosiveGrowth.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            {t.explosiveGrowth.subtitle}
          </p>
        </div>

        {/* Tesla-style metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center animate-scale-in bg-gray-50 p-8 tesla-hover">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`tesla-metric ${metric.color} mb-4`}>
                <CounterAnimation end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="tesla-metric-label mb-2">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tesla-style comparison section */}
        <div className="bg-black text-white px-8 py-16 lg:px-16 lg:py-24 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl md:text-3xl font-inter font-light tracking-tight" id="growth-trajectory">
                {t.explosiveGrowth.metrics.trajectory.title}
              </h3>
            </div>
            <p className="text-lg text-gray-300 text-center mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Following the success story of Palm Jumeirah, which saw property values increase by 400% over the past decade, Al Marjan Island is positioned to deliver similar exceptional returns to early investors.
            </p>
            
            {/* Tesla-style comparison metrics */}
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-light mb-4">400%</div>
                <div className="text-lg font-medium mb-2">Palm Jumeirah Growth</div>
                <div className="text-sm text-gray-300">Historical performance (2014-2024)</div>
              </div>
              
              <div className="animate-fade-in-up">
                <div className="text-4xl font-light mb-4">500%</div>
                <div className="text-lg font-medium mb-2">Al Marjan Projection</div>
                <div className="text-sm text-gray-300">Expected growth with Wynn effect</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style CTA section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <a
              href="#contact"
              className="tesla-btn-primary w-full sm:w-auto flex items-center justify-center"
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
              <span className="text-center">Secure Your Investment</span>
            </a>
            <a
              href="#contact"
              className="tesla-btn-secondary w-full sm:w-auto flex items-center justify-center"
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
              <span className="text-center">Get Information</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};