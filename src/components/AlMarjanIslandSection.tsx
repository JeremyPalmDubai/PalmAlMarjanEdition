import React from 'react';
import { MapPin, Waves, Building2, Plane, Car, Ship, Star, Shield, Home, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface AlMarjanIslandSectionProps {
  currentLanguage: string;
}

export const AlMarjanIslandSection: React.FC<AlMarjanIslandSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <>
      {/* ===== TESLA HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="h-screen relative">
          <img
            src="https://palmdubai.fr/uploads/posts/2025-08/54b41babe6_2.webp"
            alt="Al Marjan Island aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-8 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl text-white">
                  {/* Tesla Badge Minimaliste */}
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 mb-8">
                    <span className="text-sm font-medium tracking-wider uppercase">Al Marjan Island</span>
                  </div>
                  
                  {/* GROS TITRE Tesla */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
                    The Crown Jewel<br />of Ras Al Khaimah
                  </h1>
                  
                  {/* SOUS-TITRE Tesla */}
                  <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed opacity-90 max-w-3xl">
                    Four interconnected coral islands spanning 2.7 million square meters of pristine coastline, 
                    designed for luxury living and world-class hospitality.
                  </p>
                  
                  {/* Tesla Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-light mb-2">4</div>
                      <div className="text-sm opacity-80 uppercase tracking-wide">Artificial Islands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-light mb-2">2.7M</div>
                      <div className="text-sm opacity-80 uppercase tracking-wide">Square Meters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-light mb-2">8km</div>
                      <div className="text-sm opacity-80 uppercase tracking-wide">Elite Beaches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-light mb-2">2027</div>
                      <div className="text-sm opacity-80 uppercase tracking-wide">Wynn Opening</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESLA ABOUT SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              {/* Tesla Section Badge */}
              <div className="inline-block bg-gray-100 px-4 py-2 mb-8">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">About District</span>
              </div>
              
              {/* GROS TITRE Tesla */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
                About District<br />Al Marjan Island
              </h2>
              
              {/* TEXT Tesla */}
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light mb-12">
                <p>
                  Connected by modern bridges, the four islands feature comprehensive infrastructure including 
                  parking and charging stations for electric vehicles. The district encompasses luxury hotels, 
                  exciting water parks, landscaped gardens, and world-class sports facilities.
                </p>
                <p>
                  With supermarkets, restaurants, and cafes integrated throughout, residents enjoy complete 
                  convenience. The total length of meticulously maintained beaches stretches 8 kilometers 
                  along pristine coastline.
                </p>
                <p>
                  Major developments including Wynn Al Marjan Island Resort, a state-of-the-art marina 
                  accommodating 300 yachts, and numerous luxury residential complexes are currently under 
                  construction.
                </p>
              </div>
              
              {/* Tesla Features Grid */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">EV Ready</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Charging Stations</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Mixed-Use</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Complete District</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Strategic</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">45min to Dubai</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://palmdubai.fr/uploads/posts/2025-08/5c6f6a92e6_1734349387_0248704.webp"
                alt="Al Marjan Island district overview"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESLA BENEFITS SECTION ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tesla Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white px-4 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Investment Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Enjoy the Exceptional<br />Benefits of Al Marjan Island
            </h2>
          </div>
          
          {/* Tesla Image + Content */}
          <div className="relative mb-20">
            <img
              src="https://palmdubai.fr/uploads/posts/2025-08/4e0ac26c71_1734349387_025459.webp"
              alt="Al Marjan Island benefits overview"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl p-8 lg:p-16 text-white">
                <h3 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">Key Investment Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-2 text-lg">Artificial Archipelago</div>
                      <div className="text-sm opacity-90">4 interconnected islands</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-2 text-lg">Five-Star Hotels</div>
                      <div className="text-sm opacity-90">High concentration luxury</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-2 text-lg">8km Elite Beaches</div>
                      <div className="text-sm opacity-90">Pristine white sand</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-2 text-lg">From $150,000</div>
                      <div className="text-sm opacity-90">Accessible luxury living</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tesla Highlight Badge */}
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 font-medium text-lg">
              <Star className="w-6 h-6 mr-3" />
              First Casino Resort in the UAE
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESLA HOUSING TYPES SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tesla Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-100 px-4 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Property Types</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Types of Housing<br />in Al Marjan Island
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Apartments, Villas, and Townhouses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
                You still have time to <strong>invest in off-plan properties in Al Marjan Island</strong> – 
                the archipelago continues to develop rapidly. However, there are also ready-made options 
                available for immediate occupancy and investment returns.
              </p>
              
              {/* Tesla Property Grid */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">Studios</h4>
                      <p className="text-sm text-gray-500">Compact luxury living</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-gray-900">$150,000</div>
                      <div className="text-sm text-gray-500">Starting from</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">2BR Apartments</h4>
                      <p className="text-sm text-gray-500">130-150 m², 3 bathrooms</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-gray-900">$340,000</div>
                      <div className="text-sm text-gray-500">Average price</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">Villas</h4>
                      <p className="text-sm text-gray-500">Private luxury homes</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-gray-900">$800K - $7.5M</div>
                      <div className="text-sm text-gray-500">Price range</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">Townhouses</h4>
                      <p className="text-sm text-gray-500">Family-oriented living</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-light text-gray-900">$740K - $2.8M</div>
                      <div className="text-sm text-gray-500">Price range</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tesla Investment Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-12">
              <h3 className="text-3xl font-light mb-8 tracking-tight">Investment Opportunity</h3>
              <p className="text-gray-300 mb-12 leading-relaxed font-light text-lg">
                <strong>Off-plan properties Al Marjan Island</strong> offer exceptional value with 
                flexible payment plans and guaranteed appreciation before completion.
              </p>
              <div className="grid grid-cols-2 gap-8 text-center mb-12">
                <div>
                  <div className="text-4xl font-light mb-3">10%</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Down Payment</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-3">5 Years</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Payment Plan</div>
                </div>
              </div>
              <button className="w-full bg-white text-black py-4 px-8 font-medium hover:bg-gray-100 transition-colors text-lg">
                Explore Payment Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESLA OWNERSHIP BENEFITS SECTION ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tesla Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white px-4 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Ownership Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Benefits of Owning Property<br />in Al Marjan Island
            </h2>
          </div>
          
          {/* Tesla Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="bg-white p-12">
              <div className="w-20 h-20 bg-yellow-100 flex items-center justify-center mb-8">
                <TrendingUp className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Wynn Resort Proximity</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                <strong>Properties near Wynn Resort in Al Marjan Island</strong> inevitably increase in price 
                with each passing day. After the 2027 opening, management plans to attract 5.5 million tourists by 2030.
              </p>
            </div>
            
            <div className="bg-white p-12">
              <div className="w-20 h-20 bg-green-100 flex items-center justify-center mb-8">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Freehold Ownership</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Foreign investors can <strong>buy Al Marjan Island property</strong> without restrictions. 
                This freehold zone has no taxes on personal income, maximizing your investment returns.
              </p>
            </div>
            
            <div className="bg-white p-12">
              <div className="w-20 h-20 bg-blue-100 flex items-center justify-center mb-8">
                <Home className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Family-Friendly Living</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                <strong>Al Marjan Island luxury homes</strong> occupy most of the coastline with first-class 
                infrastructure tailored for family vacations and year-round living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESLA WHY BUY SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tesla Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-100 px-4 py-2 mb-8">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Investment Reasons</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Why Buy a Property<br />in Al Marjan Island
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Choose <strong>high-ROI properties in Al Marjan Island</strong> for the area's developed resort infrastructure
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-12 tracking-tight">Resort Infrastructure</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-4 h-4 bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2 text-lg">Water park near Hilton hotel</div>
                    <div className="text-gray-600 font-light">Family entertainment facilities</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-4 h-4 bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2 text-lg">Water sports complexes</div>
                    <div className="text-gray-600 font-light">Marine activities and recreation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-4 h-4 bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2 text-lg">Green walking routes and parks</div>
                    <div className="text-gray-600 font-light">Landscaped outdoor spaces</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-4 h-4 bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2 text-lg">Bars, restaurants, cafes</div>
                    <div className="text-gray-600 font-light">Diverse dining and entertainment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-4 h-4 bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2 text-lg">8 km of well-maintained beaches</div>
                    <div className="text-gray-600 font-light">Pristine coastline access</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-12 tracking-tight">Upcoming Projects</h3>
              <div className="bg-gray-50 p-12 mb-12">
                <h4 className="text-2xl font-medium text-gray-900 mb-8">Major Developments</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg">Wynn Al Marjan Island Resort</span>
                    <span className="text-sm font-medium text-gray-900 bg-yellow-100 px-4 py-2">2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg">Marina for 300 yachts</span>
                    <span className="text-sm font-medium text-gray-900 bg-blue-100 px-4 py-2">2026</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black text-white p-12">
                <h4 className="text-2xl font-medium mb-6">Existing Amenities</h4>
                <p className="text-gray-300 leading-relaxed font-light text-lg">
                  Al Hamra Mall is an 8-minute drive away. The archipelago already has everything needed for life 
                  thanks to five-star hotels, including supermarkets, pharmacies, car rentals, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESLA INVESTMENT PROCESS SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tesla Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 mb-8">
              <span className="text-sm font-medium text-white/80 uppercase tracking-wide">Investment Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-tight">
              How to Invest in<br />Al Marjan Island Real Estate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Contact Palm Signature Real Estate to choose <strong>affordable waterfront housing in Al Marjan Island</strong>. 
              Our experienced specialists will accompany the transaction from beginning to end.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-medium mb-8">Our Investment Approach</h3>
              <div className="space-y-6 text-gray-300 font-light text-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white mt-3 flex-shrink-0"></div>
                  <p>Our main goal is not to sell real estate but to organize profitable investments for all clients</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white mt-3 flex-shrink-0"></div>
                  <p>We select properties carefully so apartments and villas bring high profits to their owners</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white mt-3 flex-shrink-0"></div>
                  <p>Full transaction support from property selection to ownership transfer</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-8">Additional Services</h3>
              <div className="space-y-6 text-gray-300 font-light text-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white mt-3 flex-shrink-0"></div>
                  <p>Relocation assistance and moving support</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white mt-3 flex-shrink-0"></div>
                  <p>UAE visa application guidance</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white mt-3 flex-shrink-0"></div>
                  <p>Bank account opening assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tesla CTA */}
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center bg-white text-black px-12 py-4 font-medium hover:bg-gray-100 transition-colors text-lg"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Investment Consultation CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Investment Consultation'
                  });
                }
              }}
            >
              Start Your Investment Journey
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};