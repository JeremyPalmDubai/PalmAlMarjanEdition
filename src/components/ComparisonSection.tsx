import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';

interface ComparisonSectionProps {
  currentLanguage: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ currentLanguage }) => {
  const [activeComparison, setActiveComparison] = useState('roi');

  const comparisons = {
    roi: {
      title: 'Rendement sur Investissement',
      data: [
        { location: 'Al Marjan Island', value: '12-15%', color: 'bg-green-500', note: 'Croissance explosive' },
        { location: 'Palm Jumeirah', value: '8-10%', color: 'bg-blue-400', note: 'Marché mature' },
        { location: 'London', value: '3-4%', color: 'bg-gray-400', note: 'Marché traditionnel' },
        { location: 'Paris', value: '2-3%', color: 'bg-gray-300', note: 'Marché stable' }
      ]
    },
    appreciation: {
      title: 'Appréciation Annuelle',
      data: [
        { location: 'Al Marjan Island', value: '33.3%', color: 'bg-green-500', note: 'Effet Wynn Casino' },
        { location: 'Dubai Marina', value: '12%', color: 'bg-blue-400', note: 'Zone établie' },
        { location: 'Abu Dhabi', value: '8%', color: 'bg-gray-400', note: 'Croissance stable' },
        { location: 'Sharjah', value: '6%', color: 'bg-gray-300', note: 'Marché émergent' }
      ]
    },
    taxes: {
      title: 'Avantages Fiscaux',
      data: [
        { location: 'Al Marjan Island', value: '0%', color: 'bg-green-500', note: 'Aucune taxe' },
        { location: 'France', value: '34.5%', color: 'bg-red-400', note: 'Taxes élevées' },
        { location: 'UK', value: '28%', color: 'bg-red-300', note: 'Capital gains tax' },
        { location: 'Germany', value: '26.4%', color: 'bg-red-200', note: 'Taxes sur plus-values' }
      ]
    }
  };

  const comparisonTabs = [
    { id: 'roi', label: 'ROI', icon: TrendingUp },
    { id: 'appreciation', label: 'Appréciation', icon: DollarSign },
    { id: 'taxes', label: 'Fiscalité', icon: Shield }
  ];

  const activeData = comparisons[activeComparison as keyof typeof comparisons];

  return (
    <section className="tesla-section bg-gray-50">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            Comparaison Mondiale
          </h2>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto">
            Al Marjan Island surpasse tous les marchés immobiliers internationaux
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full inline-flex shadow-lg">
            {comparisonTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveComparison(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeComparison === tab.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white rounded-lg tesla-shadow p-8 mb-12">
          <h3 className="text-2xl tesla-heading text-center mb-8">{activeData.title}</h3>
          
          <div className="space-y-6">
            {activeData.data.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.location}</span>
                  <div className="flex items-center">
                    <span className="text-lg font-bold mr-2">{item.value}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {item.note}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ 
                      width: index === 0 ? '100%' : 
                             index === 1 ? '60%' : 
                             index === 2 ? '30%' : '20%' 
                    }}
                  >
                    {index === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-medium text-green-800 mb-2">Performance Supérieure</h4>
            <p className="text-sm text-green-700">Al Marjan Island surpasse tous les marchés traditionnels</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-medium text-blue-800 mb-2">Timing Optimal</h4>
            <p className="text-sm text-blue-700">Investissez avant l'ouverture du Wynn Casino en 2027</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-medium text-purple-800 mb-2">Sécurité Fiscale</h4>
            <p className="text-sm text-purple-700">0% d'impôt sur les plus-values, propriété 100% freehold</p>
          </div>
        </div>
      </div>
    </section>
  );
};