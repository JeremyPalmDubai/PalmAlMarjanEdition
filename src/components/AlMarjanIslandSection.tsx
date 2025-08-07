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