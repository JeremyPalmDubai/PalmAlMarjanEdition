import React from 'react';
import { MapPin, Waves, Building2, Plane, Car, Ship, Star, Shield, Home, TrendingUp } from 'lucide-react';
import { translations } from '../data/translations';

interface AlMarjanIslandSectionProps {
  currentLanguage: string;
}

export const AlMarjanIslandSection: React.FC<AlMarjanIslandSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <>
      {/* Hero Section with Large Image */}
      <section className="relative overflow-hidden">
        <div className="h-[80vh] relative">
          <img
            src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
            alt="Al Marjan Island aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-8 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl text-white">
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <span className="text-sm font-medium">INVEST AL MARJAN ISLAND • AL MARJAN REAL ESTATE</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                    {t.alMarjanIsland.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed opacity-90">
                    {t.alMarjanIsland.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-light mb-1">4</div>
                      <div className="text-sm opacity-80">Artificial Islands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-light mb-1">2.7M</div>
                      <div className="text-sm opacity-80">Square Meters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-light mb-1">8km</div>
                      <div className="text-sm opacity-80">Elite Beaches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-light mb-1">2027</div>
                      <div className="text-sm opacity-80">Wynn Opening</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About District Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">About District</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
                About District Al Marjan Island
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-6">
                  Connected by modern bridges, the four islands feature comprehensive infrastructure including 
                  parking and charging stations for electric vehicles. The district encompasses luxury hotels, 
                  exciting water parks, landscaped gardens, and world-class sports facilities.
                </p>
                <p className="mb-6">
                  With supermarkets, restaurants, and cafes integrated throughout, residents enjoy complete 
                  convenience. The total length of meticulously maintained beaches stretches 8 kilometers 
                  along pristine coastline.
                </p>
                <p>
                  Major developments including Wynn Al Marjan Island Resort, a state-of-the-art marina 
                  accommodating 300 yachts, and numerous luxury residential complexes are currently under 
                  construction. Direct access via Al Ittihad Road connects you to Dubai in just 45 minutes.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Car className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">EV Ready</div>
                  <div className="text-xs text-gray-500">Charging Stations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Mixed-Use</div>
                  <div className="text-xs text-gray-500">Complete District</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Strategic</div>
                  <div className="text-xs text-gray-500">45min to Dubai</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://palmdubai.fr/uploads/posts/2025-08/5c6f6a92e6_1734349387_0248704.webp"
                alt="Al Marjan Island district overview"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Investment Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Enjoy the Exceptional Benefits of Al Marjan Island
            </h2>
          </div>
          
          <div className="relative mb-16">
            <img
              src="https://palmdubai.fr/uploads/posts/2025-08/4e0ac26c71_1734349387_025459.webp"
              alt="Al Marjan Island benefits overview"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-2xl"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl p-8 lg:p-16 text-white">
                <h3 className="text-2xl md:text-3xl font-light mb-8">Key Investment Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Artificial Archipelago</div>
                      <div className="text-sm opacity-90">4 interconnected islands</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Five-Star Hotels</div>
                      <div className="text-sm opacity-90">High concentration luxury</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">8km Elite Beaches</div>
                      <div className="text-sm opacity-90">Pristine white sand</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">From $150,000</div>
                      <div className="text-sm opacity-90">Accessible luxury living</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-medium">
              <Star className="w-5 h-5 mr-2" />
              First Casino Resort in the UAE
            </div>
          </div>
        </div>
      </section>

      {/* Housing Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Property Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Types of Housing in Al Marjan Island
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apartments, Villas, and Townhouses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                You still have time to <strong>invest in off-plan properties in Al Marjan Island</strong> – 
                the archipelago continues to develop rapidly. However, there are also ready-made options 
                available for immediate occupancy and investment returns.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Studios</h4>
                      <p className="text-sm text-gray-500">Compact luxury living</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">$150,000</div>
                      <div className="text-sm text-gray-500">Starting from</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">2BR Apartments</h4>
                      <p className="text-sm text-gray-500">130-150 m², 3 bathrooms</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">$340,000</div>
                      <div className="text-sm text-gray-500">Average price</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Villas</h4>
                      <p className="text-sm text-gray-500">Private luxury homes</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">$800K - $7.5M</div>
                      <div className="text-sm text-gray-500">Price range</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
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
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 lg:p-12 rounded-2xl">
              <h3 className="text-2xl font-light mb-6">Investment Opportunity</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong>Off-plan properties Al Marjan Island</strong> offer exceptional value with 
                flexible payment plans and guaranteed appreciation before completion.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center mb-8">
                <div>
                  <div className="text-3xl font-light mb-2">10%</div>
                  <div className="text-sm text-gray-300">Down Payment</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-2">5 Years</div>
                  <div className="text-sm text-gray-300">Payment Plan</div>
                </div>
              </div>
              <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Explore Payment Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Ownership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Ownership Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Benefits of Owning Property in Al Marjan Island
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Wynn Resort Proximity</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Properties near Wynn Resort in Al Marjan Island</strong> inevitably increase in price 
                with each passing day. After the 2027 opening, management plans to attract 5.5 million tourists by 2030.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Freehold Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                Foreign investors can <strong>buy Al Marjan Island property</strong> without restrictions. 
                This freehold zone has no taxes on personal income, maximizing your investment returns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Family-Friendly Living</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Al Marjan Island luxury homes</strong> occupy most of the coastline with first-class 
                infrastructure tailored for family vacations and year-round living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Property */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Investment Reasons</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Why Buy a Property in Al Marjan Island
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose <strong>high-ROI properties in Al Marjan Island</strong> for the area's developed resort infrastructure
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">Resort Infrastructure</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Water park near Hilton hotel</div>
                    <div className="text-sm text-gray-600">Family entertainment facilities</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Water sports complexes</div>
                    <div className="text-sm text-gray-600">Marine activities and recreation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Green walking routes and parks</div>
                    <div className="text-sm text-gray-600">Landscaped outdoor spaces</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Bars, restaurants, cafes</div>
                    <div className="text-sm text-gray-600">Diverse dining and entertainment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">8 km of well-maintained beaches</div>
                    <div className="text-sm text-gray-600">Pristine coastline access</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">Upcoming Projects</h3>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h4 className="text-lg font-medium text-gray-900 mb-6">Major Developments</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Wynn Al Marjan Island Resort</span>
                    <span className="text-sm font-medium text-gray-900 bg-yellow-100 px-3 py-1 rounded-full">2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Marina for 300 yachts</span>
                    <span className="text-sm font-medium text-gray-900 bg-blue-100 px-3 py-1 rounded-full">2026</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl">
                <h4 className="text-lg font-medium mb-4">Existing Amenities</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Al Hamra Mall is an 8-minute drive away. The archipelago already has everything needed for life 
                  thanks to five-star hotels, including supermarkets, pharmacies, car rentals, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Invest */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-white/80 uppercase tracking-wide">Investment Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
              How to Invest in Al Marjan Island Real Estate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact Palm Signature Real Estate to choose <strong>affordable waterfront housing in Al Marjan Island</strong>. 
              Our experienced specialists will accompany the transaction from beginning to end.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Our Investment Approach</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Our main goal is not to sell real estate but to organize profitable investments for all clients</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>We select properties carefully so apartments and villas bring high profits to their owners</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Full transaction support from property selection to ownership transfer</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6">Additional Services</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Relocation assistance and moving support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>UAE visa application guidance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Bank account opening assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
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
            </a>
          </div>
        </div>
      </section>
    </>
  );
};