import React from 'react';
import { translations } from '../data/translations';

interface WynnEffectSectionProps {
  currentLanguage: string;
}

export const WynnEffectSection: React.FC<WynnEffectSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="wynn-effect" className="tesla-section bg-white">
      <div className="tesla-container">
        {/* Tesla-style minimal header */}
        <div className="text-center mb-20">
          <div className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
            INVEST NEAR WYNN CASINO • WYNN CASINO 2027
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8" id="invest-near-wynn-casino" itemProp="headline">
            {t.wynnEffect.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed" itemProp="description">
            The upcoming Wynn Resort & Casino will transform Al Marjan Island into the Middle East's premier luxury destination. 
            This $3.9 billion investment will drive unprecedented property value appreciation. Early investors benefit from maximum growth potential.
          </p>
        </div>

        {/* Tesla-style hero image with overlay content */}
        <div className="relative mb-32">
          <div className="h-[70vh] min-h-[600px] relative overflow-hidden bg-black">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop 800w,
                        https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop 1200w"
                sizes="100vw"
              />
              <source
                media="(min-width: 769px)"
                srcSet="https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop 1600w,
                        https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp?auto=compress&cs=tinysrgb&w=2000&h=1125&fit=crop 2000w"
                sizes="100vw"
              />
              <img
                src="https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                alt="Wynn Resort Al Marjan Island aerial view showing luxury marina estates development"
                title="Wynn Casino Al Marjan Island - $3.9B Resort Opening 2027"
                className="w-full h-full object-cover"
                width="1920"
                height="1080"
                loading="lazy"
                decoding="async"
                data-seo-filename="wynn-resort-casino-al-marjan-island-aerial-marina-estates.webp"
              />
            </picture>
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Tesla-style overlay content */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-8 lg:p-16">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-inter font-light text-white mb-6 tracking-tight">
                    $3.9 Billion Investment Transforming Al Marjan Island
                  </h3>
                  <p className="text-lg text-white/90 mb-8 font-light leading-relaxed">
                    The Wynn Resort & Casino will be the first casino resort in the UAE, creating unprecedented demand for Al Marjan Island real estate.
                  </p>
                  <div className="grid grid-cols-2 gap-6 text-white">
                    <div>
                      <div className="text-2xl font-light mb-1">{t.wynnEffect.resort.stats.investment}</div>
                      <div className="text-sm text-white/70">{t.wynnEffect.resort.stats.investmentLabel}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light mb-1">{t.wynnEffect.resort.stats.opening}</div>
                      <div className="text-sm text-white/70">{t.wynnEffect.resort.stats.openingLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style features grid */}
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          {/* Wynn Impact */}
          <div className="animate-slide-in">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl tesla-heading">The Wynn Effect on Property Values</h3>
            </div>
            <p className="tesla-subheading text-lg leading-relaxed mb-12">
              Historical data shows that luxury casino resorts create significant property appreciation in surrounding areas. The Wynn brand is synonymous with ultra-luxury and exclusivity.
            </p>
            
            {/* Tesla-style impact metrics */}
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="tesla-subheading">Expected Property Appreciation</span>
                </div>
                <span className="text-xl font-light">500%+</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="tesla-subheading">Annual Visitors by 2030</span>
                </div>
                <span className="text-xl font-light">5.5M</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="tesla-subheading">Hotel Rooms & Suites</span>
                </div>
                <span className="text-xl font-light">1,500+</span>
              </div>
            </div>
          </div>

          {/* Investment Opportunity */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl tesla-heading">Investment Window</h3>
            </div>
            <p className="tesla-subheading text-lg leading-relaxed mb-12">
              Invest now before the Wynn Casino opens in 2027. Early investors will benefit from the maximum appreciation potential as the resort approaches completion.
            </p>
            {/* Tesla-style timeline */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-black mb-3">2025-2026: Construction Phase</h4>
                <p className="tesla-subheading text-sm">Optimal investment window with pre-opening pricing</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">2027: Grand Opening</h4>
                <p className="tesla-subheading text-sm">First casino resort in UAE begins operations</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">2028-2030: Market Maturation</h4>
                <p className="tesla-subheading text-sm">Property values reach peak appreciation levels</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style CTA section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="tesla-btn-primary"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Wynn Investment CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Wynn Investment'
                  });
                }
              }}
            >
              {t.wynnEffect.benefits.returns.title}
            </a>
            <a 
              href="#developments" 
              className="tesla-btn-secondary"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'View Properties CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'ViewContent', {
                    content_name: 'Properties'
                  });
                }
              }}
            >
              View Properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};