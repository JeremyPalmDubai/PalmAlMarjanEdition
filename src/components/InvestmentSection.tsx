import React from 'react';
import { CreditCard, FileText, Globe as Globe2 } from 'lucide-react';
import { translations } from '../data/translations';

interface InvestmentSectionProps {
  currentLanguage: string;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const benefits = [
    {
      icon: CreditCard,
      title: t.investment.benefits.payment.title,
      description: t.investment.benefits.payment.description
    },
    {
      icon: FileText,
      title: t.investment.benefits.documentation.title,
      description: t.investment.benefits.documentation.description
    },
    {
      icon: Globe2,
      title: t.investment.benefits.taxes.title,
      description: t.investment.benefits.taxes.description
    }
  ];

  const steps = [
    {
      number: "01",
      title: t.investment.process.step1.title,
      description: t.investment.process.step1.description
    },
    {
      number: "02",
      title: t.investment.process.step2.title,
      description: t.investment.process.step2.description
    },
    {
      number: "03",
      title: t.investment.process.step3.title,
      description: t.investment.process.step3.description
    },
    {
      number: "04",
      title: t.investment.process.step4.title,
      description: t.investment.process.step4.description
    }
  ];

  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.investment.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.investment.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Investment Process */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.investment.processTitle}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">{step.number}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t.investment.location.title}
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {t.investment.location.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">{t.investment.location.dubai.title}</h4>
                <p className="opacity-90">{t.investment.location.dubai.description}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">{t.investment.location.flyingTaxi.title}</h4>
                <p className="opacity-90">{t.investment.location.flyingTaxi.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};