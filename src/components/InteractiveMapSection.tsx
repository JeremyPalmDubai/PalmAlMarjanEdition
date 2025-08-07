import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Car, Plane } from 'lucide-react';

interface InteractiveMapSectionProps {
  currentLanguage: string;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ currentLanguage }) => {
  const [selectedLocation, setSelectedLocation] = useState('wynn');

  const locations = [
    {
      id: 'wynn',
      name: 'Wynn Casino',
      description: 'Resort & Casino de $3.9B',
      distance: '0 min',
      icon: '🎰',
      color: 'bg-yellow-500',
      position: { top: '45%', left: '60%' }
    },
    {
      id: 'mondrian',
      name: 'MONDRIAN',
      description: 'Développement de luxe',
      distance: '2 min',
      icon: '🏢',
      color: 'bg-blue-500',
      position: { top: '35%', left: '45%' }
    },
    {
      id: 'marriott',
      name: 'JW Marriott',
      description: 'Resort 5 étoiles',
      distance: '3 min',
      icon: '🏨',
      color: 'bg-green-500',
      position: { top: '55%', left: '40%' }
    },
    {
      id: 'marina',
      name: 'Marina',
      description: 'Port de plaisance privé',
      distance: '1 min',
      icon: '⛵',
      color: 'bg-cyan-500',
      position: { top: '40%', left: '70%' }
    },
    {
      id: 'beach',
      name: 'Plages Privées',
      description: '8km de côte immaculée',
      distance: '0 min',
      icon: '🏖️',
      color: 'bg-orange-500',
      position: { top: '65%', left: '55%' }
    }
  ];

  const transportOptions = [
    {
      destination: 'Dubai International',
      time: '45 min',
      icon: Plane,
      method: 'Voiture'
    },
    {
      destination: 'Dubai Marina',
      time: '40 min',
      icon: Car,
      method: 'Voiture'
    },
    {
      destination: 'Dubai Mall',
      time: '50 min',
      icon: Car,
      method: 'Voiture'
    },
    {
      destination: 'Dubai (Taxi Volant)',
      time: '30 min',
      icon: Navigation,
      method: 'Dès 2026'
    }
  ];

  const selectedLoc = locations.find(loc => loc.id === selectedLocation);

  return (
    <section className="tesla-section bg-white">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            Emplacement Stratégique
          </h2>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto">
            Découvrez la position privilégiée d'Al Marjan Island et sa proximité avec les attractions majeures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 h-96 relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Al Marjan Island map view"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Location Pins */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 hover:scale-125 ${
                    selectedLocation === location.id ? 'scale-125 ring-4 ring-white' : ''
                  } ${location.color}`}
                  style={{ top: location.position.top, left: location.position.left }}
                  aria-label={`Sélectionner ${location.name}`}
                >
                  <span className="text-xs">{location.icon}</span>
                </button>
              ))}
              
              {/* Selected Location Info */}
              {selectedLoc && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mr-3 ${selectedLoc.color}`}>
                      <span>{selectedLoc.icon}</span>
                    </div>
                    <div>
                      <div className="font-medium text-black">{selectedLoc.name}</div>
                      <div className="text-sm text-gray-600">{selectedLoc.description}</div>
                      <div className="text-xs text-gray-500">Distance: {selectedLoc.distance}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Transport & Connectivity */}
          <div>
            <h3 className="text-2xl tesla-heading mb-8">Connectivité Exceptionnelle</h3>
            
            <div className="space-y-4 mb-8">
              {transportOptions.map((transport, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4">
                      <transport.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">{transport.destination}</div>
                      <div className="text-sm text-gray-600">{transport.method}</div>
                    </div>
                  </div>
                  <div className="text-lg font-light text-black">{transport.time}</div>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="bg-black text-white p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-4">Avantages Géographiques</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Accès direct aux plages privées
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  À 5 minutes du futur Wynn Casino
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Infrastructure complète sur l'île
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Connexion rapide à Dubai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};