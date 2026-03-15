import React from 'react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLanguage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-hero-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop 800w,
                    https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop 1200w"
            sizes="100vw"
          />
          <source
            media="(min-width: 769px)"
            srcSet="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop 1600w,
                    https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=2000&h=1125&fit=crop 2000w,
                    https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=2400&h=1350&fit=crop 2400w"
            sizes="100vw"
          />
          <img
            src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Al Marjan Island luxury real estate aerial view with pristine beaches and resorts"
            title="Invest Al Marjan Island - Luxury Real Estate Investment Opportunity"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            data-seo-filename="invest-al-marjan-island-luxury-real-estate-aerial-view.webp"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20 sm:py-0">
        <div className="text-center max-w-3xl mx-auto px-5 sm:px-4">
          {/* Tesla-style badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 sm:mb-12">
            <span className="text-white text-xs sm:text-sm font-medium tracking-wider uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Tesla-style main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-light text-white mb-5 sm:mb-6 md:mb-8 tracking-tighter leading-tight" id="invest-al-marjan-island" itemProp="headline">
            {t.hero.title}
          </h1>

          {/* Tesla-style subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-light text-white/90 mb-6 sm:mb-8 md:mb-12 lg:mb-16 tracking-tight leading-tight" itemProp="description">
            {t.hero.subtitle}
          </p>

          {/* SEO-optimized description */}
          <p className="text-sm sm:text-base md:text-lg font-inter font-light text-white/80 mb-8 sm:mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            Discover luxury real estate investment opportunities on Al Marjan Island. Properties show 33.3% annual appreciation.
            The new Wynn Casino opens in 2027. Enjoy 100% freehold ownership with zero capital gains tax.
            Flexible 5-year payment plans available. Start your investment journey today.
          </p>
          
          {/* Tesla-style CTAs - Optimized for Conversions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <a
              href="#contact"
              className="tesla-btn-primary-hero w-full sm:w-auto group relative overflow-hidden active:scale-95 transform transition-transform"
              onClick={(e) => {
                e.preventDefault();
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'generate_lead', {
                    event_category: 'Lead Generation',
                    event_label: 'Hero Primary CTA - Contact Form',
                    value: 200000,
                    currency: 'AED'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Lead', {
                    content_name: 'Investment Interest - Hero CTA',
                    content_category: 'Real Estate Investment',
                    value: 200000,
                    currency: 'AED'
                  });
                }
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="relative z-10 flex items-center justify-center w-full font-bold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="hidden sm:inline">Get Investment Details</span>
                <span className="sm:hidden">Get Details</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a
              href="https://wa.me/971582474950?text=Hello%2C%20I%27m%20interested%20in%20Al%20Marjan%20Island%20properties.%20Can%20you%20provide%20more%20information%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="tesla-btn-secondary-hero w-full sm:w-auto group active:scale-95 transform transition-transform"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'generate_lead', {
                    event_category: 'Lead Generation',
                    event_label: 'Hero WhatsApp CTA',
                    value: 150000,
                    currency: 'AED'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Contact', {
                    content_name: 'WhatsApp Contact - Hero',
                    content_category: 'Instant Messaging'
                  });
                }
              }}
            >
              <span className="flex items-center justify-center w-full font-bold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp Us Now</span>
                <span className="sm:hidden">WhatsApp</span>
              </span>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/70 text-sm animate-fade-in-up">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2.5 animate-pulse"></span>
              <span className="font-medium">100% Freehold Ownership</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2.5 animate-pulse"></span>
              <span className="font-medium">0% Capital Gains Tax</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2.5 animate-pulse"></span>
              <span className="font-medium">5-Year Payment Plans</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};