import React from 'react';
import { Star, TrendingUp, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface WynnEffectSectionProps {
  currentLanguage: string;
}

export const WynnEffectSection: React.FC<WynnEffectSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="wynn-effect" className="tesla-section relative overflow-hidden bg-gradient-to-br from-deep-gray to-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp"
          alt="Invest near Wynn Casino - Al Marjan Island $3.9B resort opening 2027"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-gray/80 via-deep-gray/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 tesla-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            {/* Badge */}
            <div className="tesla-badge mb-8">
              <Star className="w-4 h-4 mr-2" />
              <span className="tracking-widest">WYNN RESORTS • INVEST NEAR WYNN CASINO</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light text-white mb-8 tracking-tighter leading-tight">
              The <span className="text-premium-blue font-medium">Wynn Effect</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl text-pretty">
              The $3.9 billion <strong className="tesla-accent">Wynn Resort & Casino</strong> transforms 
              Al Marjan Island into the Middle East's premier luxury destination. 
              <strong className="tesla-accent">Invest near Wynn Casino</strong> for unprecedented property appreciation.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="tesla-card-glass p-6 text-center">
                <div className="text-3xl font-inter font-light text-premium-blue mb-2">
                  {t.wynnEffect.resort.stats.investment}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase font-medium">
                  {t.wynnEffect.resort.stats.investmentLabel}
                </div>
              </div>
              <div className="tesla-card-glass p-6 text-center">
                <div className="text-3xl font-inter font-light text-premium-blue mb-2">
                  {t.wynnEffect.resort.stats.opening}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase font-medium">
                  {t.wynnEffect.resort.stats.openingLabel}
                </div>
              </div>
            </div>

            {/* CTA */}
            <a 
              href="#contact" 
              className="tesla-btn-glass group"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Wynn Effect CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Wynn Effect Investment'
                  });
                }
              }}
            >
              <span>{t.wynnEffect.benefits.returns.title}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Right Content - Impact Metrics */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="tesla-card-glass p-8 lg:p-12">
              <h3 className="text-2xl font-inter font-light text-white mb-8 text-center">
                Wynn Casino Impact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-premium-blue mr-3" />
                    <span className="text-white font-medium">Property Appreciation</span>
                  </div>
                  <span className="text-2xl font-light text-premium-blue">+500%</span>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-premium-blue mr-3" />
                    <span className="text-white font-medium">Annual Visitors by 2030</span>
                  </div>
                  <span className="text-2xl font-light text-premium-blue">5.5M</span>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-premium-blue mr-3" />
                    <span className="text-white font-medium">Investment Multiplier</span>
                  </div>
                  <span className="text-2xl font-light text-premium-blue">3-5x</span>
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-premium-blue mr-3" />
                    <span className="text-white font-medium">Market Position</span>
                  </div>
                  <span className="text-lg font-light text-premium-blue">#1 UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tesla-container">
          <div className="max-w-2xl">
            {/* Tesla-style badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-white text-xs font-medium tracking-wider uppercase">
                INVEST NEAR WYNN CASINO • WYNN CASINO 2027
              </span>
            </div>
            
            {/* Tesla-style heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light text-white mb-8 tracking-tighter" id="invest-near-wynn-casino" itemProp="headline">
              {t.wynnEffect.title}
            </h2>
            
            {/* Tesla-style description */}
            <p className="text-xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl" itemProp="description">
              <strong>Invest near Wynn Casino</strong> on Al Marjan Island. The $3.9 billion Wynn Resort & Casino transforms 
              <strong>Al Marjan real estate</strong> into the Middle East's premier luxury destination. 
              <strong>Al Marjan Island real estate</strong> values will surge with the Wynn effect in 2027.
            </p>
            
            {/* Tesla-style metrics */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-4xl font-inter font-light text-white mb-2">
                  {t.wynnEffect.resort.stats.investment}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.wynnEffect.resort.stats.investmentLabel}
                </div>
              </div>
              <div>
                <div className="text-4xl font-inter font-light text-white mb-2">
                  {t.wynnEffect.resort.stats.opening}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {t.wynnEffect.resort.stats.openingLabel}
                </div>
              </div>
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="tesla-btn-secondary-hero" aria-label="Invest near Wynn Casino - Contact us">
              {t.wynnEffect.benefits.returns.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};