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
      deliveryDate: currentLanguage === 'fr' ? "2028" : 
                   currentLanguage === 'es' ? "2028" :
                   currentLanguage === 'nl' ? "2028" : "2028",
      paymentPlan: "60/40",
      wynnDistance: currentLanguage === 'fr' ? "5 min " :
                   currentLanguage === 'es' ? "5 min " :
                   currentLanguage === 'nl' ? "5 min " : "5 mins ",
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
      deliveryDate: currentLanguage === 'fr' ? "2029" : 
                   currentLanguage === 'es' ? "2029" :
                   currentLanguage === 'nl' ? "2029" : "2029",
      websiteUrl: "https://www.oystrabyrichmind.com/",
      wynnDistance: currentLanguage === 'fr' ? "5 min " :
                   currentLanguage === 'es' ? "5 min" :
                   currentLanguage === 'nl' ? "5 min" : "5 mins ",
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
      deliveryDate: currentLanguage === 'fr' ? "2026" : 
                   currentLanguage === 'es' ? "2026" :
                   currentLanguage === 'nl' ? "2026" : "2026",
      profitBadge: currentLanguage === 'fr' ? "Clients ont fait x2 plus-value en 1 an" :
                   currentLanguage === 'es' ? "Clientes obtuvieron x2 plusvalía en 1 año" :
                   currentLanguage === 'nl' ? "Klanten maakten x2 winst in 1 jaar" : "Clients made x2 profit in 1 year",
      wynnDistance: currentLanguage === 'fr' ? "5 min" :
                   currentLanguage === 'es' ? "5 min " :
                   currentLanguage === 'nl' ? "5 min" : "5 mins ",
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
      deliveryDate: currentLanguage === 'fr' ? "2028" : 
                   currentLanguage === 'es' ? "2028" :
                   currentLanguage === 'nl' ? "2028" : "2028",
      wynnDistance: currentLanguage === 'fr' ? "5 min " :
                   currentLanguage === 'es' ? "5 min d" :
                   currentLanguage === 'nl' ? "5 min " : "5 mins ",
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
      deliveryDate: currentLanguage === 'fr' ? "2028" : 
                   currentLanguage === 'es' ? "2028" :
                   currentLanguage === 'nl' ? "2028" : "2028",
      wynnDistance: currentLanguage === 'fr' ? "5 min " :
                   currentLanguage === 'es' ? "5 min " :
                   currentLanguage === 'nl' ? "5 min " : "5 mins",
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
      deliveryDate: currentLanguage === 'fr' ? " 2028" : 
                   currentLanguage === 'es' ? " 2028" :
                   currentLanguage === 'nl' ? " 2028" : " 2028",
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
      deliveryDate: currentLanguage === 'fr' ? "2027" : 
                   currentLanguage === 'es' ? "2027" :
                   currentLanguage === 'nl' ? "2027" : "2027",
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
            <div className="inline-flex items-center px-6 py-3 bg-black text-white mb-6 font-medium text-sm tracking-wider uppercase">
              ◆ Premium Selection
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-inter font-light text-black mb-6 tracking-tight">
              Featured Projects
            </h3>
            <p className="text-lg font-inter font-normal text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exclusive luxury developments curated for discerning investors seeking exceptional returns
            </p>
          </div>
          
          {/* Enhanced Featured Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredDevelopments.map((development, index) => (
            <div key={index} className="bg-white relative overflow-hidden border border-gray-100 hover:border-black transition-colors duration-300">
              {/* Premium Badge */}
              <div className="absolute top-3 left-3 z-20 bg-black text-white px-2 py-1 text-xs font-medium tracking-wider uppercase">
                ◆ Premium
              </div>
              
              {/* Special badge for profit achievement */}
              {development.profitBadge && (
                <div className="absolute top-12 left-3 z-10 bg-green-600 text-white px-2 py-1 text-xs font-medium">
                    🚀 {development.profitBadge}
                </div>
              )}
              
              <div className="h-48 overflow-hidden relative">
                {development.availability && (
                  <div className={`absolute top-3 right-3 z-10 px-2 py-1 text-xs font-medium ${
                    development.availabilityColor === 'text-red-600' ? 'bg-red-50 text-red-600 border border-red-200' :
                    development.availabilityColor === 'text-orange-600' ? 'bg-orange-50 text-orange-600 border border-orange-200' :
                    development.availabilityColor === 'text-green-600' ? 'bg-green-50 text-green-600 border border-green-200' :
                    development.availabilityColor === 'text-blue-600' ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                    'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {development.availability}
                  </div>
                )}
                  <img
                    src={development.image}
                    alt={development.name}
                    className="w-full h-full object-cover"
                  />
              </div>
              
              <div className="p-4 bg-white">
                <div className="text-xs font-normal text-gray-400 tracking-wide uppercase mb-2">
                    {development.developer}
                </div>
                <h3 className="text-lg font-inter font-light text-black mb-3 tracking-tight">{development.name}</h3>
                <p className="font-inter font-normal text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{development.description}</p>
                  
                {/* Pricing and Info */}
                {(development.price || development.deliveryDate || development.wynnDistance) && (
                  <div className="mb-4 space-y-2 border-t border-gray-100 pt-3">
                      {development.price && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">From</span>
                          <span className="text-sm font-light text-black">{development.price}</span>
                        </div>
                      )}
                      {development.paymentPlan && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">Payment</span>
                          <span className="text-xs font-light text-black">{development.paymentPlan}</span>
                        </div>
                      )}
                      {development.deliveryDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">Handover</span>
                          <span className="text-xs font-light text-black">{development.deliveryDate}</span>
                        </div>
                      )}
                      {development.wynnDistance && (
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">Wynn</span>
                          <span className="text-xs font-medium text-black">{development.wynnDistance}</span>
                        </div>
                      )}
                  </div>
                )}
                  
                <div className="flex gap-2">
                      {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                        <div className="flex-1 bg-gray-100 text-gray-500 px-3 py-2 text-xs text-center font-medium cursor-not-allowed">
                          SOLD OUT
                        </div>
                      ) : development.availabilityColor === 'text-orange-600' ? (
                        <a href="#contact" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                          {t.developments.lastUnits}
                        </a>
                      ) : development.availabilityColor === 'text-green-600' ? (
                        <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                          {t.developments.learnMore}
                        </a>
                      ) : development.availabilityColor === 'text-blue-600' ? (
                        <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                          {t.developments.learnMore}
                        </a>
                      ) : (
                        <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                          {t.developments.learnMore}
                        </a>
                      )}
                      
                      {development.websiteUrl && (
                        <a 
                          href={development.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 border border-gray-200 hover:border-black bg-white hover:bg-gray-50 py-2 flex items-center justify-center transition-colors duration-300"
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
                          <svg className="w-3 h-3 text-gray-400 hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
            <h3 className="text-2xl md:text-3xl font-inter font-light text-gray-700 mb-4 tracking-tight">
            All Projects
            </h3>
            <p className="text-base font-inter font-normal text-gray-600 max-w-xl mx-auto">
              Complete portfolio of luxury developments
            </p>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {developments.map((development, index) => (
            <div key={index} className="bg-white border border-gray-100 hover:border-black transition-colors duration-300">
              {/* Status badge */}
              {development.availability && (
                <div className={`absolute top-3 right-3 z-10 px-2 py-1 text-xs font-medium ${
                  development.availabilityColor === 'text-red-600' ? 'bg-red-50 text-red-600 border border-red-200' :
                  development.availabilityColor === 'text-orange-600' ? 'bg-orange-50 text-orange-600 border border-orange-200' :
                  development.availabilityColor === 'text-green-600' ? 'bg-green-50 text-green-600 border border-green-200' :
                  development.availabilityColor === 'text-blue-600' ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                  'bg-red-50 text-red-600 border border-red-200'
                }`}>
                  {development.availability}
                </div>
              )}
              
              <div className="h-48 overflow-hidden relative">
                <img
                  src={development.image}
                  alt={development.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="text-xs font-normal text-gray-400 tracking-wide uppercase mb-2">
                  {development.developer}
                </div>
                <h3 className="text-lg font-inter font-light text-black mb-3 tracking-tight line-clamp-2">{development.name}</h3>
                <p className="font-inter font-normal text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{development.description}</p>
                
                {/* Pricing and Availability */}
                {(development.price || development.deliveryDate || development.paymentPlan) && (
                  <div className="mb-4 space-y-2 border-t border-gray-100 pt-3">
                    {development.price && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">From</span>
                        <span className="text-sm font-light text-black">{development.price}</span>
                      </div>
                    )}
                    {development.paymentPlan && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">Payment</span>
                        <span className="text-xs font-light text-black">{development.paymentPlan}</span>
                      </div>
                    )}
                    {development.deliveryDate && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-normal text-gray-400 tracking-wide uppercase">Handover</span>
                        <span className="text-xs font-light text-black">{development.deliveryDate}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex gap-2">
                  {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                    <div className="flex-1 bg-gray-100 text-gray-500 px-3 py-2 text-xs text-center font-medium cursor-not-allowed">
                      SOLD OUT
                    </div>
                  ) : development.availabilityColor === 'text-orange-600' ? (
                    <a href="#contact" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                      {t.developments.lastUnits}
                    </a>
                  ) : development.availabilityColor === 'text-green-600' ? (
                    <a href="#contact" className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                      {t.developments.learnMore}
                    </a>
                  ) : (
                    <a href="#contact" className="flex-1 bg-black hover:bg-gray-800 text-white px-3 py-2 text-xs text-center font-medium transition-colors duration-300">
                      {t.developments.learnMore}
                    </a>
                  )}
                  
                  {development.websiteUrl && (
                    <a 
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 border border-gray-200 hover:border-black bg-white hover:bg-gray-50 py-2 flex items-center justify-center transition-colors duration-300"
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
                      <svg className="w-3 h-3 text-gray-400 hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
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
          <h3 className="text-3xl md:text-4xl font-inter font-light text-black mb-16 tracking-tight">{t.developments.trustedPartners}</h3>
          
          {/* Tesla-style grid layout for partners */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Development Companies */}
            <div className="bg-white p-8 border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-inter font-light text-black tracking-tight">Development Partners</h4>
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
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
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