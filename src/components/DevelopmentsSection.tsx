import React, { useState } from 'react';
import { translations } from '../data/translations';
import { MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';

interface DevelopmentsSectionProps {
  currentLanguage: string;
}

export const DevelopmentsSection: React.FC<DevelopmentsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];
  const [activeTab, setActiveTab] = useState('all');

  // Featured developments with images (shown in grid)
  const featuredDevelopments = [
    {
      name: "MONDRIAN by ELEVATE",
      developer: "ELEVATE Properties",
      image: "https://www.mondrian-almarjan.com/images/mondrian-hero-render.webp",
      description: "Beachfront luxury living with private access and world-class amenities, just 5 minutes from the upcoming Wynn Casino.",
      price: "From AED 2,500,000",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2028",
      paymentPlan: "60/40",
      wynnDistance: "5 min",
      websiteUrl: "https://www.mondrian-almarjan.com/",
      category: "available"
    },
    {
      name: "JW Marriott Al Marjan Island",
      developer: "Marriott International",
      image: "https://www.jwmarriot-almarjan.com/VueCielJWetCasinoenface.jpeg",
      description: "Luxury beachfront resort with world-class amenities and stunning Arabian Gulf views, just minutes from the upcoming Wynn Casino.",
      price: "From AED 2,900,000",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2028",
      wynnDistance: "5 min",
      websiteUrl: "https://www.jwmarriot-almarjan.com/en",
      category: "available"
    },
    {
      name: "UNO LUXE by WOW",
      developer: "WOW Development",
      image: "https://www.unoluxe-almarjan.com/images/uno-luxe-exterior.jpg",
      description: "UNO-LUXE offers investment tools and lifestyle infrastructure to build, develop and secure a faster and more personalized future.",
      price: "From AED 2,000,000",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2027",
      websiteUrl: "https://www.unoluxe-almarjan.com/",
      wynnDistance: "8 min",
      category: "available"
    },
    {
      name: "Oystra Zaha Hadid",
      developer: "Richmind Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/7089d298f4_oystrazahahadid.webp",
      description: "Designed by Zaha Hadid. Iconic architecture with revolutionary design and luxury living, featuring the legendary architect's signature fluid forms.",
      price: "From AED 2,800,000",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: "2029",
      websiteUrl: "https://www.oystrabyrichmind.com/",
      wynnDistance: "5 min",
      category: "available"
    },
    {
      name: "La Mer by Elie Saab",
      developer: "Elie Saab",
      image: "https://palmdubai.fr/uploads/posts/2025-07/87baf2aac8_lamerbyeliesaab.webp",
      description: "Haute couture-inspired residences with unparalleled luxury and elegance.",
      price: "Price on Request",
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600",
      deliveryDate: "2028",
      websiteUrl: "https://lamerbyeliesaab.com/",
      wynnDistance: "5 min",
      category: "available"
    },
    {
      name: "The Unexpected",
      developer: "The Unexpected Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/168ac67004_theunexpected.webp",
      description: "Extraordinary architectural masterpiece redefining luxury waterfront living.",
      price: "Was from AED 1,500,000",
      availability: "SOLD OUT",
      availabilityColor: "text-red-600",
      deliveryDate: "2027",
      profitBadge: currentLanguage === 'fr' ? "Clients ont fait x2 plus-value en 1 an" :
                   currentLanguage === 'es' ? "Clientes obtuvieron x2 plusvalía en 1 año" :
                   currentLanguage === 'nl' ? "Klanten maakten x2 winst in 1 jaar" : "Clients made x2 profit in 1 year",
      wynnDistance: "1 min",
      category: "sold-out"
    }
  ];

  // Other developments in compact list format (without images)
  const otherDevelopments = [
    { name: "W Al Marjan Island", developer: "Marriott International", availability: "Available", availabilityColor: "text-green-600", wynnDistance: "5 min", category: "available" },
    { name: "Hilton Al Marjan Island", developer: "Hilton Worldwide", availability: "Available", availabilityColor: "text-green-600", wynnDistance: "5 min", category: "available" },
    { name: "Playa Viva", developer: "Viva Development", availability: "Phase 2 On Sale", availabilityColor: "text-green-600", wynnDistance: "5 min", category: "available" },
    { name: "Clé d'Or by Arthouse", developer: "Arthouse Residences", availability: "Available", availabilityColor: "text-green-600", wynnDistance: "8 min", category: "available" },
    { name: "La Mazzoni", developer: "Mazzoni Development", availability: "Almost Sold Out", availabilityColor: "text-orange-600", wynnDistance: "8 min", category: "available" },
    { name: "Manta Bay Residences", developer: "Manta Bay Development", availability: "Almost Sold Out", availabilityColor: "text-orange-600", wynnDistance: "8 min", category: "available" },
    { name: "Trio Isle Octa", developer: "Trio Development", availability: "Available", availabilityColor: "text-green-600", wynnDistance: "7 min", category: "available" },
    { name: "Ola Residences", developer: "Ola Development", availability: "Available", availabilityColor: "text-green-600", wynnDistance: "8 min", category: "available" },
    { name: "Park Beach Residences", developer: "Park Beach Development", availability: "SOLD OUT", availabilityColor: "text-red-600", wynnDistance: "10 min", category: "sold-out" },
    { name: "Babolex Residences", developer: "Babolex Development", availability: "SOLD OUT", availabilityColor: "text-red-600", wynnDistance: "8 min", category: "sold-out" },
    { name: "Costa Mare by Ellington", developer: "Ellington Properties", availability: "SOLD OUT", availabilityColor: "text-red-600", wynnDistance: "8 min", category: "sold-out" },
    { name: "Emaar Address Residences", developer: "Emaar Properties", availability: "SOLD OUT", availabilityColor: "text-red-600", wynnDistance: "8 min", category: "sold-out" }
  ];

  const getFilteredFeatured = () => {
    if (activeTab === 'all') return featuredDevelopments;
    return featuredDevelopments.filter(dev => dev.category === activeTab);
  };

  const getFilteredOther = () => {
    if (activeTab === 'all') return otherDevelopments;
    return otherDevelopments.filter(dev => dev.category === activeTab);
  };

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

  const listTitle = currentLanguage === 'fr' ? 'Autres Developpements' :
                   currentLanguage === 'es' ? 'Otros Desarrollos' :
                   currentLanguage === 'nl' ? 'Andere Ontwikkelingen' : 'Other Developments';

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
          <div className="bg-gray-100 p-1 rounded-full inline-flex" role="tablist" aria-label="Development categories">
            <button
              onClick={() => setActiveTab('all')}
              role="tab"
              aria-selected={activeTab === 'all'}
              aria-controls="developments-panel"
              id="tab-all"
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                activeTab === 'all'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tabLabels.all}
            </button>
            <button
              onClick={() => setActiveTab('available')}
              role="tab"
              aria-selected={activeTab === 'available'}
              aria-controls="developments-panel"
              id="tab-available"
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                activeTab === 'available'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tabLabels.available}
            </button>
            <button
              onClick={() => setActiveTab('sold-out')}
              role="tab"
              aria-selected={activeTab === 'sold-out'}
              aria-controls="developments-panel"
              id="tab-sold-out"
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                activeTab === 'sold-out'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tabLabels.soldOut}
            </button>
          </div>
        </div>

        {/* Featured Projects Grid with Images */}
        <div
          id="developments-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {getFilteredFeatured().map((development, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-black ${
                development.category === 'sold-out' ? 'opacity-75' : ''
              }`}
              role="article"
            >
              {/* Image Container with Badges */}
              <div className="relative h-80 overflow-hidden">
                {development.profitBadge && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {development.profitBadge}
                    </div>
                  </div>
                )}

                {development.availability && (
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    development.availabilityColor === 'text-red-600' ? 'bg-red-100/90 text-red-600' :
                    development.availabilityColor === 'text-orange-600' ? 'bg-orange-100/90 text-orange-600' :
                    'bg-green-100/90 text-green-600'
                  }`}>
                    {development.availability}
                  </div>
                )}

                <img
                  src={development.image}
                  alt={`${development.name} Al Marjan Island ${development.category === 'available' ? 'investment opportunity' : 'project'} near Wynn Casino`}
                  className={`w-full h-full object-cover ${
                    development.category === 'sold-out' ? 'grayscale' : ''
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">{development.developer}</div>
                <h3 className={`text-xl font-bold mb-3 ${
                  development.category === 'sold-out' ? 'text-gray-600' : 'text-gray-900'
                }`}>
                  {development.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{development.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Price</span>
                    <div className={`font-semibold ${development.category === 'sold-out' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                      {development.price}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Handover</span>
                    <div className="font-semibold text-gray-900">{development.deliveryDate}</div>
                  </div>
                  {development.paymentPlan && development.category !== 'sold-out' && (
                    <div>
                      <span className="text-gray-500">Payment</span>
                      <div className="font-semibold text-gray-900">{development.paymentPlan}</div>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-500">Wynn Casino</span>
                    <div className="font-semibold text-gray-900">{development.wynnDistance}</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  {development.availability === "SOLD OUT" ? (
                    <button className="flex-1 bg-gray-400 text-white px-6 py-3 font-medium cursor-not-allowed">
                      SOLD OUT
                    </button>
                  ) : (
                    <a
                      href="#contact"
                      className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 font-medium transition-all duration-300 text-center"
                    >
                      Get Details
                    </a>
                  )}
                  {development.websiteUrl && (
                    <a
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-gray-300 hover:border-black bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Developments - Compact List without Images */}
        {getFilteredOther().length > 0 && (
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">{listTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getFilteredOther().map((dev, index) => (
                <div
                  key={index}
                  className={`p-4 border border-gray-200 hover:border-black transition-colors ${
                    dev.category === 'sold-out' ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className={`font-semibold ${
                        dev.category === 'sold-out' ? 'text-gray-500' : 'text-gray-900'
                      }`}>{dev.name}</h4>
                      <p className="text-xs text-gray-500">{dev.developer}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      dev.availabilityColor === 'text-red-600' ? 'bg-red-100 text-red-600' :
                      dev.availabilityColor === 'text-orange-600' ? 'bg-orange-100 text-orange-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {dev.availability}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Wynn Casino: {dev.wynnDistance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Developer logos */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl tesla-heading mb-16">{t.developments.trustedPartners}</h3>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Development Companies */}
            <div className="bg-white p-8 border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
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