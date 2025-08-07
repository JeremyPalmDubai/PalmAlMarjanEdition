import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Shield, Award, CheckCircle } from 'lucide-react';

interface ComparisonSectionProps {
  currentLanguage: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ currentLanguage }) => {
  const [activeComparison, setActiveComparison] = useState('roi');

  const comparisons = {
    roi: {
      title: 'Return on Investment',
      subtitle: 'Annual ROI Comparison',
      data: [
        { location: 'Al Marjan Island', value: 33.3, color: 'bg-green-500', note: 'With Wynn effect' },
        { location: 'Palm Jumeirah', value: 12.5, color: 'bg-blue-400', note: 'Established market' },
        { location: 'Downtown Dubai', value: 8.2, color: 'bg-gray-400', note: 'Mature market' },
        { location: 'London', value: 3.4, color: 'bg-gray-300', note: 'Traditional market' },
        { location: 'New York', value: 4.1, color: 'bg-gray-300', note: 'Stable market' }
      ]
    },
    features: {
      title: 'Investment Features',
      subtitle: 'Al Marjan vs Other Destinations',
      data: [
        { feature: 'Freehold Ownership', almarjan: true, dubai: true, london: false, newyork: false },
        { feature: 'Zero Capital Gains Tax', almarjan: true, dubai: true, london: false, newyork: false },
        { feature: 'Casino Resort Proximity', almarjan: true, dubai: false, london: false, newyork: false },
        { feature: 'Beachfront Access', almarjan: true, dubai: true, london: false, newyork: false },
        { feature: '5-Year Payment Plans', almarjan: true, dubai: true, london: false, newyork: false },
        { feature: 'Pre-Launch Pricing', almarjan: true, dubai: false, london: false, newyork: false }
      ]
    },
    timeline: {
      title: 'Investment Timeline',
      subtitle: 'Value Appreciation Projection',
      data: [
        { year: '2025', value: 100, milestone: 'Current Entry Point' },
        { year: '2026', value: 133, milestone: 'Pre-Casino Development' },
        { year: '2027', value: 200, milestone: 'Wynn Casino Opens' },
        { year: '2028', value: 300, milestone: 'Market Maturation' },
        { year: '2030', value: 500, milestone: 'Peak Appreciation' }
      ]
    }
  };

  const activeData = comparisons[activeComparison as keyof typeof comparisons];

  return (
    <section className="tesla-section bg-white">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            Investment Comparison
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            See how Al Marjan Island outperforms traditional investment markets worldwide
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveComparison('roi')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeComparison === 'roi'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              ROI Comparison
            </button>
            <button
              onClick={() => setActiveComparison('features')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeComparison === 'features'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Award className="w-4 h-4 inline mr-2" />
              Features
            </button>
            <button
              onClick={() => setActiveComparison('timeline')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeComparison === 'timeline'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Clock className="w-4 h-4 inline mr-2" />
              Timeline
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="bg-white tesla-shadow p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl tesla-heading mb-4">{activeData.title}</h3>
            <p className="tesla-subheading">{activeData.subtitle}</p>
          </div>

          {/* ROI Comparison */}
          {activeComparison === 'roi' && (
            <div className="space-y-6">
              {(activeData.data as any[]).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center flex-1">
                    <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: item.color.replace('bg-', '').replace('-500', '') === 'green' ? '#10b981' : item.color.replace('bg-', '').replace('-400', '') === 'blue' ? '#3b82f6' : '#6b7280' }}></div>
                    <div>
                      <div className="font-medium text-black">{item.location}</div>
                      <div className="text-sm text-gray-500">{item.note}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-64 bg-gray-200 rounded-full h-3 mr-4 overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${(item.value / 35) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xl font-light text-black min-w-16 text-right">{item.value}%</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Features Comparison */}
          {activeComparison === 'features' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 font-medium text-black">Feature</th>
                    <th className="text-center py-4 font-medium text-black">Al Marjan</th>
                    <th className="text-center py-4 font-medium text-gray-600">Dubai</th>
                    <th className="text-center py-4 font-medium text-gray-600">London</th>
                    <th className="text-center py-4 font-medium text-gray-600">New York</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeData.data as any[]).map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 font-medium text-black">{row.feature}</td>
                      <td className="text-center py-4">
                        {row.almarjan ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="text-center py-4">
                        {row.dubai ? (
                          <CheckCircle className="w-5 h-5 text-blue-500 mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="text-center py-4">
                        {row.london ? (
                          <CheckCircle className="w-5 h-5 text-gray-500 mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="text-center py-4">
                        {row.newyork ? (
                          <CheckCircle className="w-5 h-5 text-gray-500 mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Timeline Comparison */}
          {activeComparison === 'timeline' && (
            <div className="space-y-8">
              {(activeData.data as any[]).map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 text-center">
                    <div className="text-lg font-medium text-black">{item.year}</div>
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-1000 ease-out"
                          style={{ width: `${(item.value / 500) * 100}%` }}
                        ></div>
                      </div>
                      <div className="absolute right-0 top-0 transform translate-x-full -translate-y-1/2">
                        <div className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                          {item.value}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-48 text-right">
                    <div className="text-sm font-medium text-black">{item.milestone}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Connectivity Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {connectivityData.map((item, index) => (
            <div key={index} className="text-center bg-white p-6 tesla-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <div className="text-2xl font-light text-black mb-2">{item.time}</div>
              <div className="text-sm font-medium text-black mb-1">{item.destination}</div>
              <div className="text-xs text-gray-500">via {item.method}</div>
            </div>
          ))}
        </div>

        {/* Investment Summary */}
        <div className="bg-black text-white p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-inter font-light mb-6">
            The Clear Investment Choice
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Al Marjan Island combines the best of all worlds: exceptional ROI potential, strategic location, 
            luxury amenities, and the upcoming Wynn Casino effect. No other destination offers this unique combination.
          </p>
          <a 
            href="#contact" 
            className="tesla-btn-secondary-white"
          >
            Start Your Investment Journey
          </a>
        </div>
      </div>
    </section>
  );
};