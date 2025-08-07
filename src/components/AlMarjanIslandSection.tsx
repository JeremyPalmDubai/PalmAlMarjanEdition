import React from 'react';
import { MapPin, Waves, Building2, Plane, Car, Ship } from 'lucide-react';
import { translations } from '../data/translations';

interface AlMarjanIslandSectionProps {
  currentLanguage: string;
}

export const AlMarjanIslandSection: React.FC<AlMarjanIslandSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <>
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
              src="https://palmdubai.fr/uploads/posts/2025-08/5c6f6a92e6_1734349387_0248704.webp"
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

      {/* Tesla-style comprehensive investment section */}
      <section className="tesla-section bg-gray-50">
      <div className="tesla-container">
        {/* Types of Housing */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8" id="housing-types">
              Types of Housing in Al Marjan Island
            </h2>
            <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
              Apartments, Villas, and Townhouses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-slide-in">
              <p className="text-lg tesla-subheading leading-relaxed mb-8">
                You still have time to <strong>invest in off-plan properties in Al Marjan Island</strong> – the archipelago continues to develop. 
                But there are also ready-made options available for immediate investment.
              </p>
              
              {/* Tesla-style pricing grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <span className="font-medium text-black">Studios</span>
                    <div className="text-sm tesla-subheading">Compact luxury living</div>
                  </div>
                  <span className="text-xl font-light">$150,000</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <span className="font-medium text-black">2BR Apartments</span>
                    <div className="text-sm tesla-subheading">130-150 m², 3 bathrooms</div>
                  </div>
                  <span className="text-xl font-light">$340,000</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <span className="font-medium text-black">Villas</span>
                    <div className="text-sm tesla-subheading">Private luxury homes</div>
                  </div>
                  <span className="text-xl font-light">$800K - $7.5M</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <span className="font-medium text-black">Townhouses</span>
                    <div className="text-sm tesla-subheading">Family-oriented living</div>
                  </div>
                  <span className="text-xl font-light">$740K - $2.8M</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="bg-black text-white p-8 lg:p-12">
                <h3 className="text-2xl font-inter font-light mb-6">Investment Opportunity</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  <strong>Off-plan properties Al Marjan Island</strong> offer the best value with flexible payment plans 
                  and guaranteed appreciation before completion.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-light mb-2">10%</div>
                    <div className="text-sm text-gray-300">Down Payment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-2">5 Years</div>
                    <div className="text-sm text-gray-300">Payment Plan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Owning Property */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl tesla-heading mb-8" id="property-benefits">
              Benefits of Owning Property in Al Marjan Island
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl tesla-heading mb-4 text-center">Wynn Resort Proximity</h3>
              <p className="tesla-subheading text-center leading-relaxed">
                <strong>Properties near Wynn Resort in Al Marjan Island</strong> inevitably increase in price with each passing day. 
                After the 2027 opening, management plans to attract 5.5 million tourists by 2030.
              </p>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl tesla-heading mb-4 text-center">Freehold Ownership</h3>
              <p className="tesla-subheading text-center leading-relaxed">
                Foreign investors can <strong>buy Al Marjan Island property</strong> without restrictions. 
                This freehold zone has no taxes on personal income, maximizing your investment returns.
              </p>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl tesla-heading mb-4 text-center">Family-Friendly Living</h3>
              <p className="tesla-subheading text-center leading-relaxed">
                <strong>Al Marjan Island luxury homes</strong> occupy most of the coastline with first-class infrastructure 
                tailored for family vacations and year-round living.
              </p>
            </div>
          </div>
        {/* Why Buy Property */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl tesla-heading mb-8" id="why-buy-property">
              Why Buy a Property in Al Marjan Island
            </h2>
            <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
              Choose <strong>high-ROI properties in Al Marjan Island</strong> for the area's developed resort infrastructure
            </p>
          </div>
          
          {/* Tesla-style 3-column benefits grid */}
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl tesla-heading mb-4">Wynn Resort Proximity</h3>
              <p className="tesla-subheading leading-relaxed">
                <strong>Properties near Wynn Resort in Al Marjan Island</strong> inevitably increase in price with each passing day. 
                After the 2027 opening, management plans to attract 5.5 million tourists by 2030.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl tesla-heading mb-4">Freehold Ownership</h3>
              <p className="tesla-subheading leading-relaxed">
                Foreign investors can <strong>buy Al Marjan Island property</strong> without restrictions. 
                This freehold zone has no taxes on personal income, maximizing your investment returns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl tesla-heading mb-4">Family-Friendly Living</h3>
              <p className="tesla-subheading leading-relaxed">
                <strong>Al Marjan Island luxury homes</strong> occupy most of the coastline with first-class infrastructure 
                tailored for family vacations and year-round living.
              </p>
            </div>
          </div>
          
          {/* Tesla-style infrastructure section */}
          <div className="text-center mb-20">
            <h3 className="text-2xl tesla-heading mb-12">Choose <strong>high-ROI properties in Al Marjan Island</strong> for the area's developed resort infrastructure</h3>
          </div>
          
          {/* Tesla-style clean grid */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <div className="font-medium text-black mb-2">Family entertainment facilities</div>
                  <div className="tesla-subheading text-sm">Water park near Hilton hotel</div>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <div className="font-medium text-black mb-2">Marine activities and recreation</div>
                  <div className="tesla-subheading text-sm">Water sports complexes</div>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <div className="font-medium text-black mb-2">Landscaped outdoor spaces</div>
                  <div className="tesla-subheading text-sm">Green walking routes and parks</div>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <div className="font-medium text-black mb-2">Diverse dining and entertainment</div>
                  <div className="tesla-subheading text-sm">Bars, restaurants, cafes</div>
                </div>
                <div>
                  <div className="font-medium text-black mb-2">Pristine coastline access</div>
                  <div className="tesla-subheading text-sm">8 km of well-maintained beaches</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 mb-8">
                <h4 className="text-lg font-medium text-black mb-6">Major Developments</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="tesla-subheading">Wynn Al Marjan Island Resort</span>
                    <span className="text-sm font-medium text-black">2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="tesla-subheading">Marina for 300 yachts</span>
                    <span className="text-sm font-medium text-black">2026</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black text-white p-8">
                <h4 className="text-lg font-medium mb-4">Existing Amenities</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Al Hamra Mall is an 8-minute drive away. The archipelago already has everything needed for life 
                  thanks to five-star hotels, including supermarkets, pharmacies, car rentals, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* How to Invest */}
        <div className="bg-black text-white px-8 py-16 lg:px-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-inter font-light mb-8" id="how-to-invest">
              How to Invest in Al Marjan Island Real Estate
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Contact Palm Signature Real Estate to choose <strong>affordable waterfront housing in Al Marjan Island</strong>. 
              Our experienced specialists will accompany the transaction from beginning to end.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-6">Our Investment Approach</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Our main goal is not to sell real estate but to organize profitable investments for all clients
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    We select properties carefully so apartments and villas bring high profits to their owners
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Full transaction support from property selection to ownership transfer
                  </p>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-medium mb-6">Additional Services</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Relocation assistance and moving support
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    UAE visa application guidance
                  </p>
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Bank account opening assistance
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="tesla-btn-secondary-white"
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
      </div>
      </section>
    </>
  );
};