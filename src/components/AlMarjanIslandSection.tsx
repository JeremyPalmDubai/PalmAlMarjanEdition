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
    {/* 1. INTRODUCTION - Al Marjan Island Overview */}
    <section className="tesla-section bg-gradient-to-b from-white to-[rgba(248,243,235,0.3)] overflow-hidden">
      <div className="tesla-container">
        {/* Tesla-style minimal header */}
        <div className="text-center mb-20">
          <div className="text-xs font-medium text-[rgb(44,44,44)] tracking-wider uppercase mb-4">
            INVEST AL MARJAN ISLAND • AL MARJAN REAL ESTATE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight" id="al-marjan-real-estate" itemProp="name">
            Al Marjan <span className="font-bold text-[#007aff]">Island</span>
          </h2>
          <p className="text-xl font-inter font-normal text-[rgb(44,44,44)] max-w-4xl mx-auto leading-relaxed" id="al-marjan-island-real-estate" itemProp="description">
            Discover the crown jewel of Ras Al Khaimah. Four interconnected <span className="font-bold text-[#007aff]">coral islands</span> spanning 2.7 million square meters of pristine coastline.
          </p>
          
          {/* SEO-rich description */}
          <div className="mt-8 max-w-5xl mx-auto">
            <p className="text-lg font-inter font-normal text-[rgb(44,44,44)] leading-relaxed">
              <span className="font-bold text-[#007aff]">Invest Al Marjan Island</span> in the UAE's most promising luxury destination. 
              World-class developments by international brands featuring pristine beaches, luxury amenities, and the upcoming 
              <span className="font-bold text-[#007aff]">Wynn Casino</span> opening in 2027.
            </p>
          </div>
        </div>

        {/* Tesla-style hero image with overlay content */}
        <div className="relative mb-32">
          <div className="h-[70vh] min-h-[600px] relative overflow-hidden bg-[rgb(44,44,44)] rounded-lg">
            <img
              src="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp"
              alt="Al Marjan Island aerial view"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(44,44,44)]/60 via-transparent to-transparent rounded-lg"></div>
            
            {/* Tesla-style overlay content */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-8 lg:p-16 backdrop-blur-sm bg-white/10 rounded-b-lg">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-inter font-light text-white mb-6 tracking-tight">
                    Four <span className="font-bold text-[rgba(248,243,235,1)]">Coral Islands</span> Connected
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
              <div className="w-12 h-12 bg-[#007aff] rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-inter font-light text-[rgb(44,44,44)]" id="strategic-location">Strategic <span className="font-bold text-[#007aff]">Location</span></h3>
            </div>
            <p className="font-inter font-normal text-[rgb(44,44,44)] text-lg leading-relaxed mb-12">
              Perfectly positioned in Ras Al Khaimah, Al Marjan Island offers unparalleled access to the UAE's major business and leisure destinations.
            </p>
            
            {/* Tesla-style connectivity metrics */}
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 text-[#007aff] mr-3" />
                  <span className="font-inter font-normal text-[rgb(44,44,44)]">Dubai International Airport</span>
                </div>
                <span className="text-xl font-light text-[#007aff] font-bold">45 min</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-[#007aff] mr-3" />
                  <span className="font-inter font-normal text-[rgb(44,44,44)]">Dubai City Center</span>
                </div>
                <span className="text-xl font-light text-[#007aff] font-bold">45 min</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                <div className="flex items-center">
                  <Ship className="w-5 h-5 text-[#007aff] mr-3" />
                  <span className="font-inter font-normal text-[rgb(44,44,44)]">Private Marina Access</span>
                </div>
                <span className="text-xl font-light text-[#007aff] font-bold">Direct</span>
              </div>
            </div>
          </div>

          {/* Island Features */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#007aff] rounded-lg flex items-center justify-center mr-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-inter font-light text-[rgb(44,44,44)]" id="island-features">Island <span className="font-bold text-[#007aff]">Features</span></h3>
            </div>
            <p className="font-inter font-normal text-[rgb(44,44,44)] text-lg leading-relaxed mb-12">
              Four interconnected islands designed for luxury living, world-class hospitality, and premium entertainment experiences.
            </p>

            {/* Tesla-style feature list */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-3">Al Marjan <span className="font-bold text-[#007aff]">Island 1</span></h4>
                <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Luxury hotels and resorts including Waldorf Astoria and DoubleTree by Hilton</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-3">Al Marjan <span className="font-bold text-[#007aff]">Island 2</span></h4>
                <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Premium residential developments and the upcoming <span className="font-bold text-[#007aff]">Wynn Resort & Casino</span></p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-3">Al Marjan <span className="font-bold text-[#007aff]">Island 3</span></h4>
                <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Mixed-use developments with retail, dining, and entertainment venues</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-3">Al Marjan <span className="font-bold text-[#007aff]">Island 4</span></h4>
                <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Exclusive beachfront villas and luxury residential communities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style vision section */}
        <div className="bg-gradient-to-r from-[rgb(44,44,44)] to-[rgb(44,44,44)]/90 text-white px-8 py-16 lg:px-16 lg:py-24 rounded-lg backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl md:text-3xl font-inter font-light tracking-tight" id="master-plan">
                Master Plan <span className="font-bold text-[rgba(248,243,235,1)]">Vision 2030</span>
              </h3>
            </div>
            <p className="text-lg text-white/80 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Al Marjan Island's comprehensive master plan transforms the destination into the Middle East's premier luxury tourism and residential hub, anchored by world-class developments and the iconic Wynn Resort & Casino.
            </p>
            
            {/* Tesla-style stats grid */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2 text-[rgba(248,243,235,1)]">50+</div>
                <div className="text-sm text-white/70">Luxury Hotels & Resorts</div>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2 text-[rgba(248,243,235,1)]">10,000+</div>
                <div className="text-sm text-white/70">Residential Units</div>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2 text-[rgba(248,243,235,1)]">200+</div>
                <div className="text-sm text-white/70">Dining & Retail Outlets</div>
              </div>
              <div className="animate-fade-in-up">
                <div className="text-3xl font-light mb-2 text-[rgba(248,243,235,1)]">5M+</div>
                <div className="text-sm text-white/70">Annual Visitors by 2030</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 2. EXCEPTIONAL BENEFITS - Key Advantages */}
    <section className="tesla-section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-08/4e0ac26c71_1734349387_025459.webp"
          alt="Al Marjan Island exceptional benefits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(44,44,44)]/80 via-[rgb(44,44,44)]/60 to-[rgb(44,44,44)]/40"></div>
      </div>
      
      <div className="relative z-10 tesla-container">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light text-white mb-12 tracking-tight" id="exceptional-benefits">
            Enjoy the <span className="font-bold text-[rgba(248,243,235,1)]">Exceptional Benefits</span> of Al Marjan Island
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Artificial Archipelago of <span className="font-bold text-[rgba(248,243,235,1)]">4 Islands</span></h3>
                <p className="text-white/80 text-sm">Interconnected coral islands with unique luxury living experiences</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">High Concentration of <span className="font-bold text-[rgba(248,243,235,1)]">Five-Star Hotels</span></h3>
                <p className="text-white/80 text-sm">World-renowned hospitality brands and luxury accommodations</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2"><span className="font-bold text-[rgba(248,243,235,1)]">8 km</span> of Elite Beaches</h3>
                <p className="text-white/80 text-sm">Pristine white-sand beaches with crystal-clear azure waters</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 backdrop-blur-sm bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Apartments Starting at <span className="font-bold text-[rgba(248,243,235,1)]">$150,000</span></h3>
                <p className="text-white/80 text-sm">Accessible luxury real estate with exceptional growth potential</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 md:col-span-2 backdrop-blur-sm bg-white/10 p-6 rounded-lg">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">The First <span className="font-bold text-[rgba(248,243,235,1)]">Casino Resort</span> in the UAE</h3>
                <p className="text-white/80 text-sm">Wynn Resorts $3.9 billion investment opening 2027 - transforming the region</p>
              </div>
            </div>
          </div>
          
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium text-sm tracking-wide border border-white/30 hover:bg-white hover:text-[rgb(44,44,44)] transition-all duration-300">
            Discover These Benefits
          </button>
        </div>
      </div>
    </section>

    {/* 3. ABOUT THE DISTRICT - Infrastructure & Connectivity */}
    <section className="tesla-section bg-gradient-to-b from-[rgba(248,243,235,0.3)] to-white">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight" id="about-district-al-marjan">
            About District <span className="font-bold text-[#007aff]">Al Marjan Island</span>
          </h2>
          <p className="text-xl font-inter font-normal text-[rgb(44,44,44)] max-w-4xl mx-auto leading-relaxed">
            Modern infrastructure connecting four artificial islands with world-class amenities
          </p>
        </div>

        {/* Tesla-style hero image with overlay content */}
        <div className="relative mb-32">
          <div className="h-[70vh] min-h-[600px] relative overflow-hidden bg-[rgb(44,44,44)] rounded-lg">
            <img
              src="https://palmdubai.fr/uploads/posts/2025-08/5c6f6a92e6_1734349387_0248704.webp"
              alt="Al Marjan Island district infrastructure"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(44,44,44)]/70 via-transparent to-transparent rounded-lg"></div>
            
            {/* Tesla-style overlay content */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-8 lg:p-16 backdrop-blur-sm bg-white/10 rounded-b-lg">
                <div className="max-w-4xl">
                  <h3 className="text-3xl md:text-4xl font-inter font-light text-white mb-6 tracking-tight">
                    Connected by <span className="font-bold text-[rgba(248,243,235,1)]">Modern Bridges</span>
                  </h3>
                  <p className="text-lg text-white/90 mb-8 font-light leading-relaxed max-w-3xl">
                    The four islands are seamlessly connected by modern bridges, featuring <span className="font-bold text-[rgba(248,243,235,1)]">EV charging stations</span>, 
                    comprehensive amenities and <span className="font-bold text-[rgba(248,243,235,1)]">8km</span> of pristine landscaped beaches. 
                    Direct access via Al Ittihad Road connects you to <span className="font-bold text-[rgba(248,243,235,1)]">Dubai in 45 minutes</span>.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                    <div>
                      <div className="text-2xl font-light mb-1 text-[rgba(248,243,235,1)]">8km</div>
                      <div className="text-sm text-white/70">Landscaped Beaches</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light mb-1 text-[rgba(248,243,235,1)]">300</div>
                      <div className="text-sm text-white/70">Yacht Marina</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light mb-1 text-[rgba(248,243,235,1)]">45min</div>
                      <div className="text-sm text-white/70">To Dubai</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light mb-1 text-[rgba(248,243,235,1)]">4</div>
                      <div className="text-sm text-white/70">Connected Islands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesla-style key features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007aff] rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-2"><span className="font-bold text-[#007aff]">EV</span> Ready</h4>
            <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Electric vehicle charging stations throughout the district</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007aff] rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-2"><span className="font-bold text-[#007aff]">Mixed-Use</span> Development</h4>
            <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Hotels, water parks, restaurants, supermarkets, and more</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007aff] rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-2"><span className="font-bold text-[#007aff]">Strategic</span> Connectivity</h4>
            <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm">Al Ittihad Road direct access to Dubai and UAE</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-[#007aff] text-white px-8 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-[#007aff]/90 transition-all duration-300">
            Explore District Opportunities
          </button>
        </div>
      </div>
    </section>

    {/* 4. INVESTMENT OPPORTUNITIES - Comprehensive Section */}
    <section className="tesla-section bg-white">
      <div className="tesla-container">
        {/* Types of Housing */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight" id="housing-types">
              Types of <span className="font-bold text-[#007aff]">Housing</span> in Al Marjan Island
            </h2>
            <p className="text-xl font-inter font-normal text-[rgb(44,44,44)] max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-[#007aff]">Apartments</span>, Villas, and Townhouses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-slide-in">
              <p className="text-lg font-inter font-normal text-[rgb(44,44,44)] leading-relaxed mb-8">
                You still have time to <span className="font-bold text-[#007aff]">invest in off-plan properties</span> in Al Marjan Island – the archipelago continues to develop. 
                But there are also ready-made options available for immediate investment.
              </p>
              
              {/* Tesla-style pricing grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Studios</span>
                    <div className="text-sm font-inter font-normal text-[rgb(44,44,44)]">Compact luxury living</div>
                  </div>
                  <span className="text-xl font-light text-[#007aff] font-bold">$150,000</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">2BR Apartments</span>
                    <div className="text-sm font-inter font-normal text-[rgb(44,44,44)]">130-150 m², 3 bathrooms</div>
                  </div>
                  <span className="text-xl font-light text-[#007aff] font-bold">$340,000</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Villas</span>
                    <div className="text-sm font-inter font-normal text-[rgb(44,44,44)]">Private luxury homes</div>
                  </div>
                  <span className="text-xl font-light text-[#007aff] font-bold">$800K - $7.5M</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-[rgba(248,243,235,0.8)]">
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Townhouses</span>
                    <div className="text-sm font-inter font-normal text-[rgb(44,44,44)]">Family-oriented living</div>
                  </div>
                  <span className="text-xl font-light text-[#007aff] font-bold">$740K - $2.8M</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-[rgb(44,44,44)] to-[rgb(44,44,44)]/90 text-white p-8 lg:p-12 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-inter font-light mb-6">Investment <span className="font-bold text-[rgba(248,243,235,1)]">Opportunity</span></h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  <span className="font-bold text-[rgba(248,243,235,1)]">Off-plan properties</span> Al Marjan Island offer the best value with flexible payment plans 
                  and guaranteed appreciation before completion.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-light mb-2 text-[rgba(248,243,235,1)]">10%</div>
                    <div className="text-sm text-white/70">Down Payment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-2 text-[rgba(248,243,235,1)]">5 Years</div>
                    <div className="text-sm text-white/70">Payment Plan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Owning Property */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight" id="property-benefits">
              Benefits of <span className="font-bold text-[#007aff]">Owning Property</span> in Al Marjan Island
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-[#007aff] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-inter font-light text-[rgb(44,44,44)] mb-4 text-center"><span className="font-bold text-[#007aff]">Wynn Resort</span> Proximity</h3>
              <p className="font-inter font-normal text-[rgb(44,44,44)] text-center leading-relaxed">
                <span className="font-bold text-[#007aff]">Properties near Wynn Resort</span> in Al Marjan Island inevitably increase in price with each passing day. 
                After the 2027 opening, management plans to attract 5.5 million tourists by 2030.
              </p>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-[#007aff] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-inter font-light text-[rgb(44,44,44)] mb-4 text-center"><span className="font-bold text-[#007aff]">Freehold</span> Ownership</h3>
              <p className="font-inter font-normal text-[rgb(44,44,44)] text-center leading-relaxed">
                Foreign investors can <span className="font-bold text-[#007aff]">buy Al Marjan Island property</span> without restrictions. 
                This freehold zone has no taxes on personal income, maximizing your investment returns.
              </p>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-[#007aff] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-inter font-light text-[rgb(44,44,44)] mb-4 text-center"><span className="font-bold text-[#007aff]">Family-Friendly</span> Living</h3>
              <p className="font-inter font-normal text-[rgb(44,44,44)] text-center leading-relaxed">
                <span className="font-bold text-[#007aff]">Al Marjan Island luxury homes</span> occupy most of the coastline with first-class infrastructure 
                tailored for family vacations and year-round living.
              </p>
            </div>
          </div>
        {/* Why Buy Property */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight" id="why-buy-property">
              Why Buy a <span className="font-bold text-[#007aff]">Property</span> in Al Marjan Island
            </h2>
            <p className="text-xl font-inter font-normal text-[rgb(44,44,44)] max-w-4xl mx-auto leading-relaxed">
              Choose <span className="font-bold text-[#007aff]">high-ROI properties</span> in Al Marjan Island for the area's developed resort infrastructure
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight">Resort <span className="font-bold text-[#007aff]">Infrastructure</span></h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#007aff] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Water park near <span className="font-bold text-[#007aff]">Hilton hotel</span></span>
                    <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm mt-1">Family entertainment facilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#007aff] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Water sports complexes</span>
                    <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm mt-1">Marine activities and recreation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#007aff] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Green walking routes and parks</span>
                    <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm mt-1">Landscaped outdoor spaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#007aff] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]">Bars, restaurants, cafes</span>
                    <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm mt-1">Diverse dining and entertainment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#007aff] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-[rgb(44,44,44)]"><span className="font-bold text-[#007aff]">8 km</span> of well-maintained beaches</span>
                    <p className="font-inter font-normal text-[rgb(44,44,44)] text-sm mt-1">Pristine coastline access</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-inter font-light text-[rgb(44,44,44)] mb-8 tracking-tight">Upcoming <span className="font-bold text-[#007aff]">Projects</span></h3>
              <div className="bg-[rgba(248,243,235,0.5)] backdrop-blur-sm p-8 mb-8 rounded-lg">
                <h4 className="text-lg font-medium text-[rgb(44,44,44)] mb-4">Major <span className="font-bold text-[#007aff]">Developments</span></h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-inter font-normal text-[rgb(44,44,44)]"><span className="font-bold text-[#007aff]">Wynn</span> Al Marjan Island Resort</span>
                    <span className="text-sm font-medium text-[#007aff]">2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-inter font-normal text-[rgb(44,44,44)]">Marina for <span className="font-bold text-[#007aff]">300 yachts</span></span>
                    <span className="text-sm font-medium text-[#007aff]">2026</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[rgb(44,44,44)] to-[rgb(44,44,44)]/90 text-white p-8 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-medium mb-4">Existing <span className="font-bold text-[rgba(248,243,235,1)]">Amenities</span></h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="font-bold text-[rgba(248,243,235,1)]">Al Hamra Mall</span> is an 8-minute drive away. The archipelago already has everything needed for life 
                  thanks to five-star hotels, including supermarkets, pharmacies, car rentals, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* How to Invest */}
        <div className="bg-gradient-to-r from-[rgb(44,44,44)] to-[rgb(44,44,44)]/90 text-white px-8 py-16 lg:px-16 lg:py-24 rounded-lg backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-inter font-light mb-8 tracking-tight" id="how-to-invest">
              How to <span className="font-bold text-[rgba(248,243,235,1)]">Invest</span> in Al Marjan Island Real Estate
            </h2>
            <p className="text-lg text-white/80 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Contact <span className="font-bold text-[rgba(248,243,235,1)]">Palm Signature Real Estate</span> to choose affordable waterfront housing in Al Marjan Island. 
              Our experienced specialists will accompany the transaction from beginning to end.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-6">Our <span className="font-bold text-[rgba(248,243,235,1)]">Investment Approach</span></h3>
                <div className="space-y-4 text-white/80">
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
                <h3 className="text-xl font-medium mb-6">Additional <span className="font-bold text-[rgba(248,243,235,1)]">Services</span></h3>
                <div className="space-y-4 text-white/80">
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
            
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium text-sm tracking-wide border border-white/30 hover:bg-white hover:text-[rgb(44,44,44)] transition-all duration-300">
              Start Your Investment Journey
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};