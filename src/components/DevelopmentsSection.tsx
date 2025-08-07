import React, { useState } from 'react';
import { translations } from '../data/translations';

interface DevelopmentsSectionProps {
  currentLanguage: string;
}

export const DevelopmentsSection: React.FC<DevelopmentsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];
  const [activeTab, setActiveTab] = useState('all');

  // All developments organized by status
  const allDevelopments = [
    // PREMIUM PROJECTS (Available/Ready)
    {
      name: "MONDRIAN by ELEVATE",
      developer: "ELEVATE Properties",
      image: "https://www.mondrian-almarjan.com/images/mondrian-hero-render.webp",
      description: "Beachfront luxury living with private access and world-class amenities, just 5 minutes from the upcoming Wynn Casino.",
      price: "2,500,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2028",
      paymentPlan: "60/40",
      wynnDistance: "5 min",
      websiteUrl: "https://www.mondrian-almarjan.com/",
      featured: true,
      category: "available"
    },
    {
      name: "Oystra Zaha Hadid",
      developer: "Richmind Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/7089d298f4_oystrazahahadid.webp",
      description: "Designed by Zaha Hadid. Iconic architecture with revolutionary design and luxury living, featuring the legendary architect's signature fluid forms and innovative spatial concepts.",
      price: "2,800,000 AED",
      availability: "Ready 2029",
      availabilityColor: "text-blue-600",
      deliveryDate: "2029",
      websiteUrl: "https://www.oystrabyrichmind.com/",
      wynnDistance: "5 min",
      featured: true,
      category: "available"
    },
    {
      name: "La Mer by Elie Saab",
      developer: "Elie Saab",
      image: "https://palmdubai.fr/uploads/posts/2025-07/87baf2aac8_lamerbyeliesaab.webp",
      description: "Haute couture-inspired residences with unparalleled luxury and elegance.",
      price: null,
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600",
      deliveryDate: "2028",
      wynnDistance: "5 min",
      featured: true,
      category: "available"
    },
    {
      name: "JW Marriott Al Marjan Island",
      developer: "Marriott International",
      image: "https://www.jwmarriot-almarjan.com/VueCielJWetCasinoenface.jpeg",
      description: "Luxury beachfront resort with world-class amenities and stunning Arabian Gulf views, just minutes from the upcoming Wynn Casino.",
      price: "2,900,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2028",
      wynnDistance: "5 min",
      websiteUrl: "https://www.jwmarriot-almarjan.com/en",
      featured: true,
      category: "available"
    },
    
    // NORMAL PROJECTS (Available)
    {
      name: "W Al Marjan Island",
      developer: "Marriott International",
      image: "https://palmdubai.fr/uploads/posts/2025-07/1178d03d12_w.webp",
      description: "Luxury beachfront resort with world-class amenities and stunning Arabian Gulf views.",
      price: null,
      availability: null,
      wynnDistance: "5 min",
      category: "available"
    },
    {
      name: "Hilton Al Marjan Island",
      developer: "Hilton Worldwide",
      image: "https://palmdubai.fr/uploads/posts/2025-07/f2b6bf1feb_hilton.webp",
      description: "Premium hospitality experience with exceptional service and luxury accommodations.",
      price: null,
      availability: null,
      wynnDistance: "5 min",
      category: "available"
    },
    {
      name: "Playa Viva",
      developer: "Viva Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/c5791afbd9_playaviva.webp",
      description: "Vibrant beachfront living with modern amenities and stunning ocean views.",
      price: "800,000 AED",
      availability: "Phase 2 On Sale",
      availabilityColor: "text-green-600",
      wynnDistance: "7 min",
      category: "available"
    },
    {
      name: "Clé d'Or by Arthouse",
      developer: "Arthouse Residences",
      image: "https://palmdubai.fr/uploads/posts/2025-07/f8834d1461_cledorbyarthouse.webp",
      description: "Artistic luxury residences with innovative architecture and premium finishes.",
      price: "925,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2028",
      websiteUrl: "https://www.arthouse-almarjan.com/",
      wynnDistance: "6 min",
      category: "available"
    },
    {
      name: "UNO LUXE by WOW",
      developer: "WOW Development",
      image: "https://www.unoluxe-almarjan.com/images/uno-luxe-exterior.jpg",
      description: "UNO-LUXE offers investment tools and lifestyle infrastructure to build, develop and secure a faster and more personalized future.",
      price: "2,000,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2027",
      websiteUrl: "https://www.unoluxe-almarjan.com/",
      wynnDistance: "5 min",
      category: "available"
    },
    {
      name: "La Mazzoni",
      developer: "Mazzoni Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/52e2ed0048_lamazzoni.webp",
      description: "Sophisticated waterfront residences with Italian-inspired luxury and contemporary design.",
      price: null,
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600",
      wynnDistance: "6 min",
      category: "available"
    },
    {
      name: "Manta Bay Residences",
      developer: "Manta Bay Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/0384c0f122_mantabay.webp",
      description: "Waterfront luxury living with panoramic views and exclusive amenities.",
      price: "1,200,000 AED",
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600",
      wynnDistance: "8 min",
      category: "available"
    },
    {
      name: "Trio Isle Octa",
      developer: "Trio Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/90007331f0_trioisleocta.webp",
      description: "Innovative architectural design with premium coastal living experiences.",
      price: "1,000,000 AED",
      availability: null,
      wynnDistance: "7 min",
      category: "available"
    },
    {
      name: "Ola Residences",
      developer: "Ola Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/a9d4e40639_ola.webp",
      description: "Modern waterfront living with sophisticated design and premium amenities.",
      price: null,
      availability: null,
      wynnDistance: "6 min",
      category: "available"
    },
    
    // SOLD OUT PROJECTS
    {
      name: "The Unexpected",
      developer: "The Unexpected Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/168ac67004_theunexpected.webp",
      description: "Extraordinary architectural masterpiece redefining luxury waterfront living.",
      price: "1,500,000 AED",
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      deliveryDate: "2027",
      profitBadge: currentLanguage === 'fr' ? "Clients ont fait x2 plus-value en 1 an" :
                   currentLanguage === 'es' ? "Clientes obtuvieron x2 plusvalía en 1 año" :
                   currentLanguage === 'nl' ? "Klanten maakten x2 winst in 1 jaar" : "Clients made x2 profit in 1 year",
      wynnDistance: "1 min",
      featured: true,
      category: "sold-out"
    },
    {
      name: "Park Beach Residences",
      developer: "Park Beach Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/e5ce326e37_parkbeach.webp",
      description: "Beachfront luxury with pristine white sand beaches and crystal-clear waters.",
      price: "900,000 AED",
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      deliveryDate: "2027",
      wynnDistance: "10 min",
      category: "sold-out"
    },
    {
      name: "Babolex Residences",
      developer: "Babolex Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/cb748b46fa_babolex.webp",
      description: "Contemporary living spaces with innovative design and premium finishes.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      wynnDistance: "8 min",
      category: "sold-out"
    },
    {
      name: "Costa Mare by Ellington",
      developer: "Ellington Properties",
      image: "https://palmdubai.fr/uploads/posts/2025-07/b1ea8562fb_costamareellington.webp",
      description: "Elegant coastal residences with contemporary design and luxury finishes.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      wynnDistance: "7 min",
      category: "sold-out"
    },
    {
      name: "Emaar Address Residences",
      developer: "Emaar Properties",
      image: "https://palmdubai.fr/uploads/posts/2025-07/38a4475d18_emaaraddressresidences.webp",
      description: "Premium residences with Emaar's signature luxury and world-class amenities.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      wynnDistance: "6 min",
      category: "sold-out"
    }
  ];

  // Filter developments based on active tab
  const getFilteredDevelopments = () => {
    switch (activeTab) {
      case 'available':
        return allDevelopments.filter(dev => dev.category === 'available');
      case 'sold-out':
        return allDevelopments.filter(dev => dev.category === 'sold-out');
      default:
        return allDevelopments;
    }
  };

  const filteredDevelopments = getFilteredDevelopments();

  // Tab labels based on language
  const getTabLabels = () => {
    switch (currentLanguage) {
      case 'fr':
        return {
          all: 'Tout',
          available: 'Disponible',
          soldOut: 'Épuisé'
        };
      case 'es':
        return {
          all: 'Todo',
          available: 'Disponible',
          soldOut: 'Agotado'
        };
      case 'nl':
        return {
          all: 'Alles',
          available: 'Beschikbaar',
          soldOut: 'Uitverkocht'
        };
      default:
        return {
          all: 'All',
          available: 'Available',
          soldOut: 'Sold Out'
        };
    }
  };

  const tabLabels = getTabLabels();

  return (
    <section id="developments" className="tesla-section bg-white">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            {t.developments.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            {t.developments.description}
          </p>
        </div>

        {/* iOS-style Tesla Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tabLabels.all}
            </button>
            <button
              onClick={() => setActiveTab('available')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'available'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tabLabels.available}
            </button>
            <button
              onClick={() => setActiveTab('sold-out')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'sold-out'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tabLabels.soldOut}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDevelopments.map((development, index) => (
            <div 
              key={index} 
              className={`bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-black ${
                development.category === 'sold-out' ? 'opacity-75' : ''
              }`}
            >
              {/* Image Container with Badges */}
              <div className="relative h-80 overflow-hidden">
                {/* Badges on Image */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {development.featured && development.category !== 'sold-out' && (
                    <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      ◆ Premium
                    </div>
                  )}
                  {development.profitBadge && (
                    <div className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      🚀 {development.profitBadge}
                    </div>
                  )}
                </div>
                
                {/* Status Badge */}
                {development.availability && (
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    development.availabilityColor === 'text-red-600' ? 'bg-red-100/90 text-red-600' :
                    development.availabilityColor === 'text-orange-600' ? 'bg-orange-100/90 text-orange-600' :
                    development.availabilityColor === 'text-green-600' ? 'bg-green-100/90 text-green-600' :
                    development.availabilityColor === 'text-blue-600' ? 'bg-blue-100/90 text-blue-600' :
                    'bg-red-100/90 text-red-600'
                  }`}>
                    {development.availability}
                  </div>
                )}
                
                <img
                  src={development.image}
                  alt={development.name}
                  className={`w-full h-full object-cover ${
                    development.category === 'sold-out' ? 'grayscale' : ''
                  }`}
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                  <div className={`text-sm font-medium mb-1 ${
                    development.category === 'sold-out' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {development.developer}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    development.category === 'sold-out' ? 'text-gray-600' : 'text-gray-900'
                  }`}>
                    {development.name}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-2 ${
                    development.category === 'sold-out' ? 'text-gray-500' : 'text-gray-600'
                  }`}>
                    {development.description}
                  </p>
                </div>
                
                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6 text-sm">
                  {development.price && (
                    <div>
                      <div className={`mb-1 ${
                        development.category === 'sold-out' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {development.category === 'sold-out' ? 'Was from' : 'Starting price'}
                      </div>
                      <div className={`font-semibold ${
                        development.category === 'sold-out' ? 'text-gray-500 line-through' : 'text-gray-900'
                      }`}>
                        {development.price}
                      </div>
                    </div>
                  )}
                  {development.deliveryDate && (
                    <div>
                      <div className={`mb-1 ${
                        development.category === 'sold-out' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {development.category === 'sold-out' ? 'Delivered' : 'Handover'}
                      </div>
                      <div className={`font-semibold ${
                        development.category === 'sold-out' ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {development.deliveryDate}
                      </div>
                    </div>
                  )}
                  {development.paymentPlan && development.category !== 'sold-out' && (
                    <div>
                      <div className="text-gray-500 mb-1">Payment Plan</div>
                      <div className="font-semibold text-gray-900">{development.paymentPlan}</div>
                    </div>
                  )}
                  {development.wynnDistance && (
                    <div>
                      <div className={`mb-1 ${
                        development.category === 'sold-out' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Wynn Casino
                      </div>
                      <div className={`font-semibold ${
                        development.category === 'sold-out' ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {development.wynnDistance}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action Button */}
                <div className="flex gap-3">
                  {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                    <button className="flex-1 bg-gray-400 text-white px-6 py-3 font-medium cursor-not-allowed">
                      SOLD OUT
                    </button>
                  ) : (
                    <a 
                      href="#contact" 
                      className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 font-medium transition-all duration-300 text-center"
                    >
                      Get the details
                    </a>
                  )}
                  
                  {development.websiteUrl && (
                    <a 
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-gray-300 hover:border-black bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
                      onClick={() => {
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'click', { 
                            event_category: 'External Link',
                            event_label: development.name + ' Website'
                          });
                        }
                        if (typeof fbq !== 'undefined') {
                          fbq('track', 'ViewContent', {
                            content_name: development.name + ' Website'
                          });
                        }
                      }}
                    >
                      <svg className="w-4 h-4 text-gray-600 hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tesla-style developer logos */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl tesla-heading mb-16">{t.developments.trustedPartners}</h3>
          
          {/* Tesla-style grid layout for partners */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Development Companies */}
            <div className="bg-white p-8 border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl tesla-heading">Development Partners</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">EMAAR</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Premium Developer</div>
                </div>
                <div className="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">DECA</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Luxury Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">DAMAC</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Iconic Developments</div>
                </div>
                <div className="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">ELLINGTON</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Coastal Living</div>
                </div>
                <div className="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">RICHMIND</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Innovative Design</div>
                </div>
                <div className="text-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">BABOLEX</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Contemporary Style</div>
                </div>
              </div>
            </div>
            
            {/* Prestige Brands */}
            <div className="bg-black text-white p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-white flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-inter font-light">Prestige Brands</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">MARRIOTT</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">W Hotels</div>
                </div>
                <div className="text-center p-4 bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">HILTON</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Luxury Hospitality</div>
                </div>
                <div className="text-center p-4 bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">ELIE SAAB</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Haute Couture</div>
                </div>
                <div className="text-center p-4 bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">WYNN</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Casino Resort</div>
                </div>
                <div className="text-center p-4 bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">NIKKI BEACH</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Beach Club</div>
                </div>
                <div className="text-center p-4 bg-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">NOBU</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Fine Dining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};