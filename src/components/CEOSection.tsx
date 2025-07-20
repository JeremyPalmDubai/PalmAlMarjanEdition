import React from 'react';
import { translations } from '../data/translations';

interface CEOSectionProps {
  currentLanguage: string;
}

export const CEOSection: React.FC<CEOSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-section bg-black text-white">
      <div className="tesla-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div className="animate-fade-in-up">
            <div className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
              {t.ceoSection.title}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter" id="ceo-leadership">
              {t.ceoSection.subtitle}
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
              {t.ceoSection.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="tesla-btn-secondary-white"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', { 
                      event_category: 'CTA',
                      event_label: 'CEO Schedule Consultation'
                    });
                  }
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'Schedule', {
                      content_name: 'CEO Consultation'
                    });
                  }
                }}
              >
                {t.ceoSection.cta}
              </a>
              <a 
                href="https://www.instagram.com/invest.dubai_property/"
                target="_blank"
                rel="noopener noreferrer"
                className="tesla-btn-secondary-white flex items-center justify-center"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', { 
                      event_category: 'Social',
                      event_label: 'Instagram Follow'
                    });
                  }
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'ViewContent', {
                      content_name: 'Instagram Profile'
                    });
                  }
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="animate-slide-in">
            <div className="relative">
              <img
                src="https://palmdubai.fr/uploads/posts/2025-07/dfa9bb9dcd_6d99d58d-001f-4bbd-99fb-f407b9b5504c_173848103.webp"
                alt="Gabriella Magalhaes, CEO & Founder of Palm Signature Real Estate"
                className="w-full h-96 lg:h-[600px] object-contain object-center tesla-shadow bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};