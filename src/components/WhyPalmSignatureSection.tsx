import React from 'react';
import { translations } from '../data/translations';

interface WhyPalmSignatureSectionProps {
  currentLanguage: string;
}

export const WhyPalmSignatureSection: React.FC<WhyPalmSignatureSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const benefits = [
    {
      title: t.whyPalmSignature.benefits.exclusive.title,
      description: t.whyPalmSignature.benefits.exclusive.description,
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
    {
      title: t.whyPalmSignature.benefits.multilingual.title,
      description: t.whyPalmSignature.benefits.multilingual.description,
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      title: t.whyPalmSignature.benefits.market.title,
      description: t.whyPalmSignature.benefits.market.description,
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t.whyPalmSignature.benefits.service.title,
      description: t.whyPalmSignature.benefits.service.description,
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="tesla-section bg-gray-50">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            {t.whyPalmSignature.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            {t.whyPalmSignature.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-6 animate-fade-in-up">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center tesla-shadow">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl tesla-heading mb-4">{benefit.title}</h3>
                <p className="tesla-subheading leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="tesla-btn-primary">
            {t.contact.title}
          </a>
        </div>
      </div>
    </section>
  );
};