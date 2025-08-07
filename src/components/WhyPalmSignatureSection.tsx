import React from 'react';
import { translations } from '../data/translations';

interface WhyPalmSignatureSectionProps {
  currentLanguage: string;
}

export const WhyPalmSignatureSection: React.FC<WhyPalmSignatureSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="bg-black text-white py-32">
      <div className="tesla-container">
        {/* Tesla-style header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light tracking-tighter text-white mb-8">
            {t.whyPalmSignature.title}
          </h2>
          <p className="text-lg md:text-xl font-inter font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.whyPalmSignature.description}
          </p>
        </div>

        {/* Tesla-style 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-inter font-light mb-4 tracking-tight text-white">
                {t.whyPalmSignature.benefits.exclusive.title}
              </h3>
              <p className="text-gray-300 font-inter font-light leading-relaxed">
                {t.whyPalmSignature.benefits.exclusive.description}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-inter font-light mb-4 tracking-tight text-white">
                {t.whyPalmSignature.benefits.multilingual.title}
              </h3>
              <p className="text-gray-300 font-inter font-light leading-relaxed">
                {t.whyPalmSignature.benefits.multilingual.description}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-inter font-light mb-4 tracking-tight text-white">
                {t.whyPalmSignature.benefits.market.title}
              </h3>
              <p className="text-gray-300 font-inter font-light leading-relaxed">
                {t.whyPalmSignature.benefits.market.description}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-inter font-light mb-4 tracking-tight text-white">
                {t.whyPalmSignature.benefits.service.title}
              </h3>
              <p className="text-gray-300 font-inter font-light leading-relaxed">
                {t.whyPalmSignature.benefits.service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tesla-style CTA */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-block bg-white text-black px-12 py-4 font-inter font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'click', { 
                  event_category: 'CTA',
                  event_label: 'Why Palm Signature CTA'
                });
              }
              if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout', {
                  content_name: 'Palm Signature Consultation'
                });
              }
            }}
          >
            {t.contact.title}
          </a>
        </div>
      </div>
    </section>
  );
};