import React, { useState } from 'react';
import { MapPin, Clock, Car, Plane, Building2, Waves } from 'lucide-react';

interface InteractiveMapSectionProps {
  currentLanguage: string;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ currentLanguage }) => {
  const [activePin, setActivePin] = useState<string | null>(null);

  const mapPoints = [
    {
      id: 'wynn-casino',
      name: 'Wynn Casino',
      description: '$3.9B Resort Opening 2027',
      icon: Building2,
      position: { x: 45, y: 35 },
      color: 'bg-yellow-500',
      details: 'First casino resort in UAE'
    },
    {
      id: 'marina',
      name: 'Al Marjan Marina',
      description: '300 Yacht Berths',
      icon: Waves,
      position: { x: 60, y: 50 },
      color: 'bg-blue-500',
      details: 'World-class marina facilities'
    },
    {
      id: 'developments',
      name: 'Luxury Developments',
      description: '15+ Premium Projects',
      icon: Building2,
      position: { x: 30, y: 60 },
      color: 'bg-green-500',
      details: 'International developer projects'
    },
    {
      id: 'beaches',
      name: 'Private Beaches',
      description: '8km Pristine Coastline',
      icon: Waves,
      position: { x: 70, y: 25 },
      color: 'bg-cyan-500',
      details: 'Crystal clear waters'
    }
  ];

  const connectivityData = [
    {
      destination: 'Dubai International Airport',
      time: '45 min',
      method: 'Car',
      icon: Plane,
      color: 'text-blue-600'
    },
    {
      destination: 'Dubai City Center',
      time: '45 min',
      method: 'Car',
      icon: Car,
      color: 'text-green-600'
    },
    {
      destination: 'Dubai via Flying Taxi',
      time: '30 min',
      method: 'Air',
      icon: Plane,
      color: 'text-purple-600'
    },
    {
      destination: 'RAK Airport',
      time: '15 min',
      method: 'Car',
      icon: Car,
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="tesla-section bg-gray-50">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            Explore Al Marjan Island
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            Discover the strategic location and world-class amenities that make Al Marjan Island the premier investment destination
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Interactive Map */}
          <div className="animate-slide-in">
            <div className="bg-white p-8 tesla-shadow relative overflow-hidden">
              <h3 className="text-2xl tesla-heading mb-8 text-center">Interactive Location Map</h3>
              
              {/* Map Container */}
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                {/* Background Island Shape */}
                <div className="absolute inset-4 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-60"></div>
                
                {/* Interactive Pins */}
                {mapPoints.map((point) => (
                  <div key={point.id} className="absolute">
                    <button
                      className={`absolute w-8 h-8 ${point.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-10`}
                      style={{ 
                        left: `${point.position.x}%`, 
                        top: `${point.position.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => setActivePin(activePin === point.id ? null : point.id)}
                      onMouseEnter={() => setActivePin(point.id)}
                      onMouseLeave={() => setActivePin(null)}
                    >
                      <point.icon className="w-4 h-4 text-white" />
                    </button>
                    
                    {/* Pin Info Popup */}
                    {activePin === point.id && (
                      <div 
                        className="absolute bg-white p-4 rounded-lg shadow-xl border border-gray-200 z-20 min-w-48"
                        style={{ 
                          left: `${point.position.x}%`, 
                          top: `${point.position.y - 15}%`,
                          transform: 'translate(-50%, -100%)'
                        }}
                      >
                        <div className="text-sm font-medium text-black mb-1">{point.name}</div>
                        <div className="text-xs text-gray-600 mb-2">{point.description}</div>
                        <div className="text-xs text-gray-500">{point.details}</div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  <div className="text-xs font-medium text-gray-700 mb-2">Al Marjan Island</div>
                  <div className="text-xs text-gray-500">Click pins to explore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connectivity Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl tesla-heading mb-8">Strategic Connectivity</h3>
            <p className="tesla-subheading text-lg leading-relaxed mb-8">
              Al Marjan Island offers unparalleled connectivity to major UAE destinations, making it perfect for both investment and lifestyle.
            </p>
            
            <div className="space-y-6">
              {connectivityData.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg tesla-shadow hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-black">{item.destination}</div>
                        <div className="text-sm text-gray-500">via {item.method}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-black">{item.time}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Travel Time</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Advantage */}
            <div className="mt-8 bg-black text-white p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Investment Advantage</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                This strategic location provides easy access to Dubai's business district while offering 
                the tranquility of island living. The upcoming Wynn Casino will further enhance connectivity 
                with private helicopter transfers and luxury transportation options.
              </p>
            </div>
          </div>
        </div>

        {/* Tesla-style CTA */}
        <div className="text-center">
          <a 
            href="#contact" 
            className="tesla-btn-primary"
          >
            Explore Investment Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};