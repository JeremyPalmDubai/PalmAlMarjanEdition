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
    },
    {
      title: t.whyPalmSignature.benefits.multilingual.title,
      description: t.whyPalmSignature.benefits.multilingual.description,
    },
    {
      title: t.whyPalmSignature.benefits.market.title,
      description: t.whyPalmSignature.benefits.market.description,
    },
    {
      title: t.whyPalmSignature.benefits.service.title,
      description: t.whyPalmSignature.benefits.service.description,
    }
  ];

  return (
    <section className="tesla-fullscreen-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Palm Signature Real Estate expertise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="tesla-container">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Tesla-style heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter" id="why-palm-signature">
              {t.whyPalmSignature.title}
            </h2>
            
            {/* Tesla-style description */}
            <p className="text-xl text-white/90 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              {t.whyPalmSignature.description}
            </p>
            
            {/* Tesla-style benefits grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-left">
                  <h3 className="text-xl font-inter font-medium text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="tesla-btn-secondary-hero">
              {t.contact.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};