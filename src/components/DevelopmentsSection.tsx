import React from 'react';
import { translations } from '../data/translations';

interface DevelopmentsSectionProps {
  currentLanguage: string;
}

export const DevelopmentsSection: React.FC<DevelopmentsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  // Featured developments - shown first on mobile
  const featuredDevelopments = [
    {
      name: "Oystra Zaha Hadid",
      developer: "Richmind Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/7089d298f4_oystrazahahadid.webp",
      description: "Designed by Zaha Hadid. Iconic architecture with revolutionary design and luxury living, featuring the legendary architect's signature fluid forms and innovative spatial concepts.",
      price: "2,800,000 AED",
      availability: "Ready 2029",
      availabilityColor: "text-blue-600",
      featured: true
    },
    {
      name: "The Unexpected",
      developer: "The Unexpected Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/168ac67004_theunexpected.webp",
      description: "Extraordinary architectural masterpiece redefining luxury waterfront living.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      deliveryDate: currentLanguage === 'fr' ? "Livraison 2026" : 
                   currentLanguage === 'es' ? "Entrega 2026" :
                   currentLanguage === 'nl' ? "Oplevering 2026" : "Delivery 2026",
      profitBadge: currentLanguage === 'fr' ? "Clients ont fait x2 plus-value en 1 an" :
                   currentLanguage === 'es' ? "Clientes obtuvieron x2 plusvalía en 1 año" :
                   currentLanguage === 'nl' ? "Klanten maakten x2 winst in 1 jaar" : "Clients made x2 profit in 1 year",
      featured: true
    },
    {
      name: "La Mer by Elie Saab",
      developer: "Elie Saab",
      image: "https://palmdubai.fr/uploads/posts/2025-07/87baf2aac8_lamerbyeliesaab.webp",
      description: "Haute couture-inspired residences with unparalleled luxury and elegance.",
      price: null,
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600",
      featured: true
    }
  ];

  return (
    <section className="tesla-fullscreen-section relative overflow-hidden">
      {/* Tesla-style full-screen background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://palmdubai.fr/uploads/posts/2025-07/7089d298f4_oystrazahahadid.webp"
          alt="Luxury developments on Al Marjan Island"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>
      
      {/* Tesla-style content overlay */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="tesla-container">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Tesla-style heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light mb-8 tracking-tighter" id="developments">
              {t.developments.title}
            </h2>
            
            {/* Tesla-style description */}
            <p className="text-xl text-white/90 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              {t.developments.description}
            </p>
            
            {/* Tesla-style featured developments grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {featuredDevelopments.map((development, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 tesla-hover">
                  <div className="h-48 mb-4 overflow-hidden rounded">
                    <img
                      src={development.image}
                      alt={development.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-xs text-white/70 tracking-wider uppercase mb-2">
                    {development.developer}
                  </div>
                  <h3 className="text-xl font-inter font-light text-white mb-3">{development.name}</h3>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">{development.description}</p>
                  
                  {development.availability && (
                    <div className={`text-sm font-medium ${
                      development.availabilityColor === 'text-red-600' ? 'text-red-400' :
                      development.availabilityColor === 'text-orange-600' ? 'text-orange-400' :
                      development.availabilityColor === 'text-green-600' ? 'text-green-400' :
                      development.availabilityColor === 'text-blue-600' ? 'text-blue-400' :
                      'text-red-400'
                    }`}>
                      {development.availability}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tesla-style CTA */}
            <a href="#contact" className="tesla-btn-secondary-hero">
              Explore All Developments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};