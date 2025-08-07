import React from 'react';
import { MapPin, Waves, Building2, Star, Shield, Home, TrendingUp, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface AlMarjanIslandSectionProps {
  currentLanguage: string;
}

export const AlMarjanIslandSection: React.FC<AlMarjanIslandSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <>
      {/* Ultra-Minimal Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="h-screen relative">
          <img
            src="https://palmdubai.fr/uploads/posts/2025-08/54b41babe6_2.webp"
            alt="Al Marjan Island aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              {/* Minimal Badge */}
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-8">
                <span className="text-sm font-medium">Al Marjan Island</span>
              </div>
              
              {/* Ultra-Large Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 tracking-tight">
                The Crown Jewel
              </h1>
              
              {/* Clean Subtitle */}
              <p className="text-xl md:text-2xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
                Four interconnected coral islands designed for luxury living and world-class hospitality
              </p>
              
              {/* Minimal Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">4</div>
                  <div className="text-sm opacity-80">Islands</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">2.7M</div>
                  <div className="text-sm opacity-80">Sq Meters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">8km</div>
                  <div className="text-sm opacity-80">Beaches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">2027</div>
                  <div className="text-sm opacity-80">Wynn Opening</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Clean About Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              {/* Minimal Section Label */}
              <div className="text-sm font-medium text-gray-400 mb-4 tracking-wider">
                ABOUT
              </div>
              
              {/* Large Clean Title */}
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                About District<br />Al Marjan Island
              </h2>
              
              {/* Clean Text Blocks */}
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light mb-12">
                <p>
                  Connected by modern bridges, the four islands feature comprehensive infrastructure including 
                  parking and charging stations for electric vehicles.
                </p>
                <p>
                  The district encompasses luxury hotels, exciting water parks, landscaped gardens, 
                  and world-class sports facilities with complete convenience.
                </p>
              </div>
              
              {/* Minimal Feature Grid */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Mixed-Use</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Strategic</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <Waves className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Waterfront</div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://palmdubai.fr/uploads/posts/2025-08/5c6f6a92e6_1734349387_0248704.webp"
                alt="Al Marjan Island district overview"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Clean Header */}
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-gray-400 mb-4 tracking-wider">
              INVESTMENT BENEFITS
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
              Exceptional Benefits
            </h2>
          </div>
          
          {/* Clean Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Wynn Resort Proximity</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Properties near Wynn Resort inevitably increase in price with each passing day. 
                Opening 2027 with 5.5M tourists by 2030.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Freehold Ownership</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Foreign investors can buy Al Marjan Island property without restrictions. 
                Freehold zone with no taxes on personal income.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Family-Friendly Living</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Luxury homes occupy most of the coastline with first-class infrastructure 
                tailored for family vacations and year-round living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Clean Housing Types */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Clean Header */}
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-gray-400 mb-4 tracking-wider">
              PROPERTY TYPES
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
              Types of Housing
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Apartments, Villas, and Townhouses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
                You still have time to invest in off-plan properties in Al Marjan Island. 
                The archipelago continues to develop rapidly with ready-made options available.
              </p>
              
              {/* Clean Property Grid */}
              <div className="space-y-1">
                <div className="bg-gray-50 p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Studios</h4>
                    <p className="text-sm text-gray-500">Compact luxury living</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-900">$150,000</div>
                    <div className="text-sm text-gray-500">Starting from</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">2BR Apartments</h4>
                    <p className="text-sm text-gray-500">130-150 m², 3 bathrooms</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-900">$340,000</div>
                    <div className="text-sm text-gray-500">Average price</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Villas</h4>
                    <p className="text-sm text-gray-500">Private luxury homes</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-900">$800K - $7.5M</div>
                    <div className="text-sm text-gray-500">Price range</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Townhouses</h4>
                    <p className="text-sm text-gray-500">Family-oriented living</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gray-900">$740K - $2.8M</div>
                    <div className="text-sm text-gray-500">Price range</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minimal Investment Card */}
            <div className="bg-gray-900 text-white p-12">
              <h3 className="text-2xl font-light mb-6 tracking-tight">Investment Opportunity</h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-light">
                Off-plan properties Al Marjan Island offer exceptional value with 
                flexible payment plans and guaranteed appreciation before completion.
              </p>
              <div className="grid grid-cols-2 gap-8 text-center mb-8">
                <div>
                  <div className="text-3xl font-light mb-2">10%</div>
                  <div className="text-sm text-gray-300">Down Payment</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-2">5 Years</div>
                  <div className="text-sm text-gray-300">Payment Plan</div>
                </div>
              </div>
              <button className="w-full bg-white text-black py-3 px-6 font-medium hover:bg-gray-100 transition-colors">
                Explore Payment Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Investment Process */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Clean Header */}
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-gray-400 mb-4 tracking-wider">
              INVESTMENT PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
              How to Invest in<br />Al Marjan Island Real Estate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Contact Palm Signature Real Estate to choose affordable waterfront housing in Al Marjan Island. 
              Our experienced specialists will accompany the transaction from beginning to end.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-6">Our Investment Approach</h3>
              <div className="space-y-4 text-gray-300 font-light">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0"></div>
                  <p>Our main goal is not to sell real estate but to organize profitable investments for all clients</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0"></div>
                  <p>We select properties carefully so apartments and villas bring high profits to their owners</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0"></div>
                  <p>Full transaction support from property selection to ownership transfer</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">Additional Services</h3>
              <div className="space-y-4 text-gray-300 font-light">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0"></div>
                  <p>Relocation assistance and moving support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0"></div>
                  <p>UAE visa application guidance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white mt-2 flex-shrink-0"></div>
                  <p>Bank account opening assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Minimal CTA */}
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your Investment Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};