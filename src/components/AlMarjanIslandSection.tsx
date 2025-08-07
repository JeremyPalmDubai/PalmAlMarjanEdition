import React from 'react';
import { MapPin, Waves, Building2, Plane, Car, Ship } from 'lucide-react';
import { translations } from '../data/translations';

interface AlMarjanIslandSectionProps {
  currentLanguage: string;
}

export const AlMarjanIslandSection: React.FC<AlMarjanIslandSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section className="tesla-section bg-white overflow-hidden">
      <div className="tesla-container">
        {/* Tesla-style minimal header */}
        <div className="text-center mb-20">
          <div className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-4">
            INVEST AL MARJAN ISLAND • AL MARJAN REAL ESTATE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8" id="al-marjan-real-estate" itemProp="name">
            {t.alMarjanIsland.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed" id="al-marjan-island-real-estate" itemProp="description">
            {t.alMarjanIsland.description}
          </p>
          
          {/* SEO-rich description */}
          <div className="mt-8 max-w-5xl mx-auto">
            <p className="text-lg tesla-subheading leading-relaxed">
              <strong>Invest Al Marjan Island</strong> in the UAE's most promising luxury destination. 
              <strong>Al Marjan real estate</strong> offers world-class developments by international brands. 
              <strong>Al Marjan Island real estate</strong> features pristine beaches, luxury amenities, and the upcoming 
              <strong>Wynn Casino</strong> opening in 2027. <strong>Invest near Wynn Casino</strong> for exceptional appreciation potential.
            </p>
          </div>
        </div>

        {/* Tesla-style hero image with overlay content */}
        <div className="relative mb-32">
          <div className="h-[70vh] min-h-[600px] relative overflow-hidden bg-black">
            <img
              src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
              alt="Al Marjan Island aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Tesla-style overlay content */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-8 lg:p-16">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-inter font-light text-white mb-6 tracking-tight">
                    Four Coral Islands Connected
                  </h3>
                  <p className="text-lg text-white/90 mb-8 font-light leading-relaxed">
                    Al Marjan Island consists of four man-made coral islands spanning 2.7 million square meters of pristine coastline in Ras Al Khaimah.
                  </p>
                  <div className="grid grid-cols-2 gap-6 text-white">
                    <div>
                      <div className="text-2xl font-light mb-1">2.7M</div>
                      <div className="text-sm text-white/70">Square Meters</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light mb-1">23km</div>
                      <div className="text-sm text-white/70">Coastline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style features grid */}
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          {/* Location & Connectivity */}
          <div className="animate-slide-in">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl tesla-heading" id="strategic-location">Strategic Location</h3>
            </div>
            <p className="tesla-subheading text-lg leading-relaxed mb-12">
              Perfectly positioned in Ras Al Khaimah, Al Marjan Island offers unparalleled access to the UAE's major business and leisure destinations.
            </p>
            
            {/* Tesla-style connectivity metrics */}
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="tesla-subheading">Dubai International Airport</span>
                </div>
                <span className="text-xl font-light">45 min</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="tesla-subheading">Dubai City Center</span>
                </div>
                <span className="text-xl font-light">45 min</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div className="flex items-center">
                  <Ship className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="tesla-subheading">Private Marina Access</span>
                </div>
                <span className="text-xl font-light">Direct</span>
              </div>
            </div>
          </div>

          {/* Island Features */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl tesla-heading" id="island-features">Island Features</h3>
            </div>
            <p className="tesla-subheading text-lg leading-relaxed mb-12">
              Four interconnected islands designed for luxury living, world-class hospitality, and premium entertainment experiences.
            </p>

            {/* Tesla-style feature list */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-black mb-3">Al Marjan Island 1</h4>
                <p className="tesla-subheading text-sm">Luxury hotels and resorts including Waldorf Astoria and DoubleTree by Hilton</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">Al Marjan Island 2</h4>
                <p className="tesla-subheading text-sm">Premium residential developments and the upcoming Wynn Resort & Casino</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">Al Marjan Island 3</h4>
                <p className="tesla-subheading text-sm">Mixed-use developments with retail, dining, and entertainment venues</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">Al Marjan Island 4</h4>
                <p className="tesla-subheading text-sm">Exclusive beachfront villas and luxury residential communities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style archipelago investment section */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl tesla-heading mb-8" id="artificial-archipelago">
              An Artificial Archipelago with Unique Investment Prospects
            </h3>
            <div className="text-lg tesla-subheading leading-relaxed space-y-6">
              <p>
                The Al Marjan Island archipelago, consisting of four artificial islands, is part of the Emirate of Ras Al Khaimah – a 45-minute drive from Dubai. It is an elite resort with plenty of entertainment facilities, impeccable white-sand beaches, and breathtaking views of the azure sea.
              </p>
              <p>
                However, the main reason <strong>investment properties in Al Marjan Island</strong> are in high demand among local and foreign buyers is the construction of <strong>Wynn Resorts</strong>, the first casino resort in the UAE. This groundbreaking development transforms <strong>Al Marjan real estate</strong> into the most sought-after investment destination in the region.
              </p>
              <p>
                <strong>Invest Al Marjan Island</strong> today to capitalize on this unprecedented opportunity. With <strong>Al Marjan Island real estate</strong> showing exceptional growth potential and the upcoming <strong>Wynn Casino opening in 2027</strong>, early investors are positioned for extraordinary returns.
              </p>
            </div>
            
            {/* Tesla-style key highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-black mb-2">Four Artificial Islands</h4>
                <p className="tesla-subheading text-sm">Interconnected coral islands spanning 2.7M sqm</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-black mb-2">Strategic Location</h4>
                <p className="tesla-subheading text-sm">45 minutes from Dubai, Ras Al Khaimah</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-black mb-2">First UAE Casino</h4>
                <p className="tesla-subheading text-sm">Wynn Resorts opening 2027</p>
              </div>
            </div>
            
            {/* Tesla-style CTA */}
            <div className="mt-16">
              <a 
                href="#contact" 
                className="tesla-btn-primary"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', { 
                      event_category: 'CTA',
                      event_label: 'Archipelago Investment CTA'
                    });
                  }
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'InitiateCheckout', {
                      content_name: 'Archipelago Investment'
                    });
                  }
                }}
              >
                Discover Investment Opportunities
              </a>
            </div>
          </div>
        </div>

        {/* Tesla-style vision section */}
        <div className="bg-black text-white px-8 py-16 lg:px-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl md:text-3xl font-inter font-light tracking-tight" id="master-plan">
                Master Plan Vision 2030
              </h3>
            </div>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Al Marjan Island's comprehensive master plan transforms the destination into the Middle East's premier luxury tourism and residential hub, anchored by world-class developments and the iconic Wynn Resort & Casino.
            </p>
            
            {/* Tesla-style stats grid */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2">50+</div>
                <div className="text-sm text-gray-300">Luxury Hotels & Resorts</div>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2">10,000+</div>
                <div className="text-sm text-gray-300">Residential Units</div>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2">200+</div>
                <div className="text-sm text-gray-300">Dining & Retail Outlets</div>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2">5M+</div>
                <div className="text-sm text-gray-300">Annual Visitors by 2030</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};