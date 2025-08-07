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
      name: "MONDRIAN by ELEVATE",
      developer: "ELEVATE Properties",
      image: "https://www.mondrian-almarjan.com/images/mondrian-hero-render.webp",
      description: "Beachfront luxury living with private access and world-class amenities, just 5 minutes from the upcoming Wynn Casino.",
      price: "2,500,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: currentLanguage === 'fr' ? "Livraison 2028" : 
                   currentLanguage === 'es' ? "Entrega 2028" :
                   currentLanguage === 'nl' ? "Oplevering 2028" : "Handover 2028",
      paymentPlan: "60/40",
      wynnDistance: currentLanguage === 'fr' ? "5 min du Wynn Casino" :
                   currentLanguage === 'es' ? "5 min del Wynn Casino" :
                   currentLanguage === 'nl' ? "5 min van Wynn Casino" : "5 mins from Wynn Casino",
      websiteUrl: "https://www.mondrian-almarjan.com/",
      featured: true
    },
    {
      name: "Oystra Zaha Hadid",
      developer: "Richmind Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/7089d298f4_oystrazahahadid.webp",
      description: "Designed by Zaha Hadid. Iconic architecture with revolutionary design and luxury living, featuring the legendary architect's signature fluid forms and innovative spatial concepts.",
      price: "2,800,000 AED",
      availability: "Ready 2029",
      availabilityColor: "text-blue-600",
      websiteUrl: "https://www.oystrabyrichmind.com/",
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

  const developments = [
    {
      name: "JW Marriott Al Marjan Island",
      developer: "Marriott International",
      image: "https://www.jwmarriot-almarjan.com/VueCielJWetCasinoenface.jpeg",
      description: "Luxury beachfront resort with world-class amenities and stunning Arabian Gulf views, just minutes from the upcoming Wynn Casino.",
      price: "2,900,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: currentLanguage === 'fr' ? "Livraison 2028" : 
                   currentLanguage === 'es' ? "Entrega 2028" :
                   currentLanguage === 'nl' ? "Oplevering 2028" : "Handover 2028",
      wynnDistance: currentLanguage === 'fr' ? "5 min du Wynn Casino" :
                   currentLanguage === 'es' ? "5 min del Wynn Casino" :
                   currentLanguage === 'nl' ? "5 min van Wynn Casino" : "5 mins from Wynn Casino",
      websiteUrl: "https://www.jwmarriot-almarjan.com/en"
    },
    {
      name: "W Al Marjan Island",
      developer: "Marriott International",
      image: "https://palmdubai.fr/uploads/posts/2025-07/1178d03d12_w.webp",
      description: "Luxury beachfront resort with world-class amenities and stunning Arabian Gulf views.",
      price: null,
      availability: null
    },
    {
      name: "Hilton Al Marjan Island",
      developer: "Hilton Worldwide",
      image: "https://palmdubai.fr/uploads/posts/2025-07/f2b6bf1feb_hilton.webp",
      description: "Premium hospitality experience with exceptional service and luxury accommodations.",
      price: null,
      availability: null
    },
    {
      name: "La Mazzoni",
      developer: "Mazzoni Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/52e2ed0048_lamazzoni.webp",
      description: "Sophisticated waterfront residences with Italian-inspired luxury and contemporary design.",
      price: null,
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600"
    },
    {
      name: "Playa Viva",
      developer: "Viva Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/c5791afbd9_playaviva.webp",
      description: "Vibrant beachfront living with modern amenities and stunning ocean views.",
      price: "800,000 AED",
      availability: "Phase 2 On Sale",
      availabilityColor: "text-green-600"
    },
    {
      name: "Clé d'Or by Arthouse",
      developer: "Arthouse Residences",
      image: "https://palmdubai.fr/uploads/posts/2025-07/f8834d1461_cledorbyarthouse.webp",
      description: "Artistic luxury residences with innovative architecture and premium finishes.",
      price: "925,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: currentLanguage === 'fr' ? "Livraison 2028" : 
                   currentLanguage === 'es' ? "Entrega 2028" :
                   currentLanguage === 'nl' ? "Oplevering 2028" : "Handover 2028",
      websiteUrl: "https://www.arthouse-almarjan.com/"
    },
    {
      name: "UNO LUXE by WOW",
      developer: "WOW Development",
      image: "https://www.unoluxe-almarjan.com/images/uno-luxe-exterior.jpg",
      description: "UNO-LUXE offers investment tools and lifestyle infrastructure to build, develop and secure a faster and more personalized future.",
      price: "2,000,000 AED",
      availability: "Available Now",
      availabilityColor: "text-green-600",
      deliveryDate: currentLanguage === 'fr' ? "Livraison 2027" : 
                   currentLanguage === 'es' ? "Entrega 2027" :
                   currentLanguage === 'nl' ? "Oplevering 2027" : "Handover 2027",
      websiteUrl: "https://www.unoluxe-almarjan.com/"
    },
    {
      name: "Babolex Residences",
      developer: "Babolex Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/cb748b46fa_babolex.webp",
      description: "Contemporary living spaces with innovative design and premium finishes.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600"
    },
    {
      name: "Manta Bay Residences",
      developer: "Manta Bay Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/0384c0f122_mantabay.webp",
      description: "Waterfront luxury living with panoramic views and exclusive amenities.",
      price: "1,200,000 AED",
      availability: "Almost Sold Out",
      availabilityColor: "text-orange-600"
    },
    {
      name: "Trio Isle Octa",
      developer: "Trio Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/90007331f0_trioisleocta.webp",
      description: "Innovative architectural design with premium coastal living experiences.",
      price: "1,000,000 AED",
      availability: null
    },
    {
      name: "Park Beach Residences",
      developer: "Park Beach Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/e5ce326e37_parkbeach.webp",
      description: "Beachfront luxury with pristine white sand beaches and crystal-clear waters.",
      price: "1,000,000 AED",
      availability: "SOLD OUT",
      availabilityColor: "text-red-600"
    },
    {
      name: "Ola Residences",
      developer: "Ola Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/a9d4e40639_ola.webp",
      description: "Modern waterfront living with sophisticated design and premium amenities.",
      price: null,
      availability: null
    },
    {
      name: "Costa Mare by Ellington",
      developer: "Ellington Properties",
      image: "https://palmdubai.fr/uploads/posts/2025-07/b1ea8562fb_costamareellington.webp",
      description: "Elegant coastal residences with contemporary design and luxury finishes.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600"
    },
    {
      name: "Emaar Address Residences",
      developer: "Emaar Properties",
      image: "https://palmdubai.fr/uploads/posts/2025-07/38a4475d18_emaaraddressresidences.webp",
      description: "Premium residences with Emaar's signature luxury and world-class amenities.",
      price: null,
      availability: "SOLD OUT",
      availabilityColor: "text-red-600"
    }
  ];

  return (
    <section id="developments" className="tesla-section bg-gray-50">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            {t.developments.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed">
            {t.developments.description}
          </p>
        </div>

        {/* Featured Developments - Priority on Mobile */}
        <div className="mb-16">
          {/* Enhanced Featured Projects Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-full mb-6 font-medium text-sm tracking-wider uppercase shadow-lg">
              ◆ Premium Selection
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl tesla-heading mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <p className="text-lg tesla-subheading max-w-3xl mx-auto leading-relaxed">
              Exclusive luxury developments curated for discerning investors seeking exceptional returns
            </p>
          </div>
          
          {/* Enhanced Featured Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {featuredDevelopments.map((development, index) => (
            <div key={index} className="bg-white tesla-hover animate-fade-in-up relative overflow-hidden border border-gray-100 hover:border-black transition-all duration-500 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl">
              {/* Premium Badge */}
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-black to-gray-800 text-white px-3 py-1 rounded-sm text-xs font-bold shadow-lg tracking-wider uppercase">
                ◆ Premium
              </div>
              
              {/* Special badge for profit achievement */}
              {development.profitBadge && (
                <div className="absolute top-16 left-4 z-10 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-2 py-1 rounded-sm text-xs font-bold shadow-lg">
                    🚀 {development.profitBadge}
                </div>
              )}
              
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative">
                {development.availability && (
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    development.availabilityColor === 'text-red-600' ? 'bg-red-100 text-red-600' :
                    development.availabilityColor === 'text-orange-600' ? 'bg-orange-100 text-orange-600' :
                    development.availabilityColor === 'text-green-600' ? 'bg-green-100 text-green-600' :
                    development.availabilityColor === 'text-blue-600' ? 'bg-blue-100 text-blue-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {development.availability}
                  </div>
                )}
                  <img
                    src={development.image}
                    alt={development.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8 bg-white">
                <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                    {development.developer}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl tesla-heading mb-3 sm:mb-4 line-clamp-2 font-medium">{development.name}</h3>
                <p className="tesla-subheading text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">{development.description}</p>
                  
                {/* Pricing and Info */}
                {(development.price || development.deliveryDate || development.wynnDistance) && (
                  <div className="mb-4 sm:mb-6 space-y-2 bg-gray-50 p-4 border-l-4 border-black">
                      {development.price && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">From:</span>
                          <span className="text-sm sm:text-lg font-semibold text-black">{development.price}</span>
                        </div>
                      )}
                      {development.paymentPlan && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">Payment:</span>
                          <span className="text-sm font-medium text-black">{development.paymentPlan}</span>
                        </div>
                      )}
                      {development.deliveryDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-700 tracking-wider uppercase">Handover:</span>
                          <span className="text-sm font-medium text-gray-700">{development.deliveryDate}</span>
                        </div>
                      )}
                      {development.wynnDistance && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-black tracking-wider uppercase">Wynn:</span>
                          <span className="text-sm font-medium text-black font-semibold">{development.wynnDistance}</span>
                        </div>
                      )}
                  </div>
                )}
                  
                <div className="flex gap-2">
                      {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                        <div className="flex-1 bg-gray-400 text-white px-4 py-2 text-xs sm:text-sm text-center font-medium cursor-not-allowed">
                          SOLD OUT
                        </div>
                      ) : development.availabilityColor === 'text-orange-600' ? (
                        <a href="#contact" className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 text-xs sm:text-sm text-center font-medium transition-all duration-300">
                          {t.developments.lastUnits}
                        </a>
                      ) : development.availabilityColor === 'text-green-600' ? (
                        <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-2 text-xs sm:text-sm text-center font-medium transition-all duration-300">
                          {t.developments.learnMore}
                        </a>
                      ) : development.availabilityColor === 'text-blue-600' ? (
                        <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-2 text-xs sm:text-sm text-center font-medium transition-all duration-300">
                          {t.developments.learnMore}
                        </a>
                      ) : (
                        <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-2 text-xs sm:text-sm text-center font-medium transition-all duration-300">
                          {t.developments.learnMore}
                        </a>
                      )}
                      
                      {development.websiteUrl && (
                        <a 
                          href={development.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 sm:w-14 md:w-16 border border-gray-300 hover:border-black bg-white hover:bg-gray-50 text-xs sm:text-sm py-2 flex items-center justify-center transition-all duration-300"
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
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* All Other Developments - Now Always Visible */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl tesla-heading mb-4 text-gray-700">
            All Projects
            </h3>
            <p className="text-base tesla-subheading max-w-xl mx-auto">
              Complete portfolio of luxury developments
            </p>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {developments.map((development, index) => (
            <div key={index} className="bg-white tesla-hover animate-fade-in-up">
              {/* Status badge */}
              {development.availability && (
                <div className={`absolute top-2 right-2 z-10 px-2 py-1 rounded-full text-xs font-bold ${
                  development.availabilityColor === 'text-red-600' ? 'bg-red-100 text-red-600' :
                  development.availabilityColor === 'text-orange-600' ? 'bg-orange-100 text-orange-600' :
                  development.availabilityColor === 'text-green-600' ? 'bg-green-100 text-green-600' :
                  development.availabilityColor === 'text-blue-600' ? 'bg-blue-100 text-blue-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  {development.availability}
                </div>
              )}
              
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={development.image}
                  alt={development.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                  {development.developer}
                </div>
                <h3 className="text-lg sm:text-xl tesla-heading mb-3 sm:mb-4 line-clamp-2">{development.name}</h3>
                <p className="tesla-subheading text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">{development.description}</p>
                
                {/* Pricing and Availability */}
                {(development.price || development.deliveryDate || development.paymentPlan) && (
                  <div className="mb-4 sm:mb-6 space-y-2">
                    {development.price && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">From:</span>
                        <span className="text-sm sm:text-lg font-semibold text-black">{development.price}</span>
                      </div>
                    )}
                    {development.paymentPlan && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">Payment:</span>
                        <span className="text-sm font-medium text-black">{development.paymentPlan}</span>
                      </div>
                    )}
                    {development.deliveryDate && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-blue-600 tracking-wider uppercase">Handover:</span>
                        <span className="text-sm font-medium text-blue-600">{development.deliveryDate}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex gap-2">
                  {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                    <div className="flex-1 tesla-btn-primary opacity-50 cursor-not-allowed text-xs sm:text-sm py-2 text-center">
                      SOLD OUT
                    </div>
                  ) : development.availabilityColor === 'text-orange-600' ? (
                    <a href="#contact" className="flex-1 tesla-btn-primary bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm py-2 text-center">
                      {t.developments.lastUnits}
                    </a>
                  ) : development.availabilityColor === 'text-green-600' ? (
                    <a href="#contact" className="flex-1 tesla-btn-primary bg-green-600 hover:bg-green-700 text-xs sm:text-sm py-2 text-center">
                      {t.developments.learnMore}
                    </a>
                  ) : (
                    <a href="#contact" className="flex-1 tesla-btn-primary text-xs sm:text-sm py-2 text-center">
                      {t.developments.learnMore}
                    </a>
                  )}
                  
                  {development.websiteUrl && (
                    <a 
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 sm:w-14 md:w-16 border border-gray-300 hover:border-black bg-white hover:bg-gray-50 text-xs sm:text-sm py-2 flex items-center justify-center transition-all duration-300"
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
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Tesla-style developer logos */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl tesla-heading mb-16">{t.developments.trustedPartners}</h3>
          
          {/* Tesla-style grid layout for partners */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Development Companies */}
            <div className="bg-white p-8 tesla-shadow tesla-hover">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl tesla-heading">Development Partners</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">EMAAR</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Premium Developer</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">DECA</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Luxury Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">DAMAC</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Iconic Developments</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">ELLINGTON</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Coastal Living</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">RICHMIND</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Innovative Design</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-lg font-medium text-gray-800 mb-1">BABOLEX</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Contemporary Style</div>
                </div>
              </div>
            </div>
            
            {/* Prestige Brands */}
            <div className="bg-black text-white p-8 tesla-shadow tesla-hover">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-inter font-light">Prestige Brands</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">MARRIOTT</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">W Hotels</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">HILTON</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Luxury Hospitality</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">ELIE SAAB</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Haute Couture</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">WYNN</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Casino Resort</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="text-lg font-medium text-white mb-1">NIKKI BEACH</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">Beach Club</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
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