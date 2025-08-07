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
    <section id="developments" className="section-feature">
      <div className="container-minimal">
        <div className="text-center mb-20">
          <h2 className="text-display mb-8">
            {t.developments.title}
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            {t.developments.description}
          </p>
        </div>

        {/* Featured Developments - Priority on Mobile */}
        <div className="mb-16">
          {/* Enhanced Featured Projects Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center glass-dark px-6 py-3 text-white rounded-xl mb-6 text-label">
              ◆ Premium Selection
            </div>
            <h3 className="text-headline mb-6">
              Featured Projects
            </h3>
            <p className="text-body max-w-3xl mx-auto">
              Exclusive luxury developments curated for discerning investors seeking exceptional returns
            </p>
          </div>
          
          {/* Enhanced Featured Grid */}
          <div className="grid-minimal grid-3 mb-8">
          {featuredDevelopments.map((development, index) => (
            <div key={index} className="card-feature animate-fade-in-up relative overflow-hidden">
              {/* Premium Badge */}
              <div className="absolute top-4 left-4 z-20 glass-dark text-white px-3 py-1 rounded-lg text-label">
                ◆ Premium
              </div>
              
              {/* Special badge for profit achievement */}
              {development.profitBadge && (
                <div className="absolute top-16 left-4 z-10 glass-dark bg-green-600/80 text-white px-2 py-1 rounded-lg text-caption font-semibold">
                    🚀 {development.profitBadge}
                </div>
              )}
              
              <div className="h-64 overflow-hidden relative rounded-t-2xl">
                {development.availability && (
                  <div className={`absolute top-4 right-4 z-10 glass-primary px-3 py-1 rounded-xl text-caption font-semibold ${
                    development.availabilityColor === 'text-red-600' ? 'text-red-600' :
                    development.availabilityColor === 'text-orange-600' ? 'text-orange-600' :
                    development.availabilityColor === 'text-green-600' ? 'text-green-600' :
                    development.availabilityColor === 'text-blue-600' ? 'text-blue-600' :
                    'text-red-600'
                  }`}>
                    {development.availability}
                  </div>
                )}
                  <img
                    src={development.image}
                    alt={development.name}
                    className="w-full h-full object-cover image-minimal"
                  />
              </div>
              
              <div className="p-6">
                <div className="text-label text-[#86868b] mb-2">
                    {development.developer}
                </div>
                <h3 className="text-title mb-4 line-clamp-2">{development.name}</h3>
                <p className="text-body mb-6 line-clamp-3">{development.description}</p>
                  
                {/* Pricing and Info */}
                {(development.price || development.deliveryDate || development.wynnDistance) && (
                  <div className="mb-6 space-y-2 glass-secondary p-4 rounded-xl border-l-4 border-[#1d1d1f]">
                      {development.price && (
                        <div className="flex items-center justify-between">
                          <span className="text-label text-[#86868b]">From:</span>
                          <span className="text-body font-semibold text-[#1d1d1f]">{development.price}</span>
                        </div>
                      )}
                      {development.paymentPlan && (
                        <div className="flex items-center justify-between">
                          <span className="text-label text-[#86868b]">Payment:</span>
                          <span className="text-caption font-semibold text-[#1d1d1f]">{development.paymentPlan}</span>
                        </div>
                      )}
                      {development.deliveryDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-label text-[#86868b]">Handover:</span>
                          <span className="text-caption font-semibold text-[#1d1d1f]">{development.deliveryDate}</span>
                        </div>
                      )}
                      {development.wynnDistance && (
                        <div className="flex items-center justify-between">
                          <span className="text-label text-[#1d1d1f]">Wynn:</span>
                          <span className="text-caption font-bold text-[#1d1d1f]">{development.wynnDistance}</span>
                        </div>
                      )}
                  </div>
                )}
                  
                <div className="flex gap-2">
                      {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                        <div className="flex-1 glass-secondary text-[#86868b] px-4 py-2 text-caption text-center font-medium cursor-not-allowed rounded-xl">
                          SOLD OUT
                        </div>
                      ) : development.availabilityColor === 'text-orange-600' ? (
                        <a href="#contact" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-caption text-center font-medium transition-all duration-300 rounded-xl">
                          {t.developments.lastUnits}
                        </a>
                      ) : development.availabilityColor === 'text-green-600' ? (
                        <a href="#contact" className="btn-primary flex-1 text-caption text-center">
                          {t.developments.learnMore}
                        </a>
                      ) : development.availabilityColor === 'text-blue-600' ? (
                        <a href="#contact" className="btn-primary flex-1 text-caption text-center">
                          {t.developments.learnMore}
                        </a>
                      ) : (
                        <a href="#contact" className="btn-primary flex-1 text-caption text-center">
                          {t.developments.learnMore}
                        </a>
                      )}
                      
                      {development.websiteUrl && (
                        <a 
                          href={development.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost w-12 py-2 flex items-center justify-center"
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
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
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
            <h3 className="text-title mb-4 text-[#86868b]">
            All Projects
            </h3>
            <p className="text-body max-w-xl mx-auto">
              Complete portfolio of luxury developments
            </p>
          </div>
        <div className="grid-minimal grid-3 mb-16">
          {developments.map((development, index) => (
            <div key={index} className="card-minimal animate-fade-in-up relative overflow-hidden">
              {/* Status badge */}
              {development.availability && (
                <div className={`absolute top-4 right-4 z-10 glass-primary px-3 py-1 rounded-xl text-caption font-semibold ${
                  development.availabilityColor === 'text-red-600' ? 'text-red-600' :
                  development.availabilityColor === 'text-orange-600' ? 'text-orange-600' :
                  development.availabilityColor === 'text-green-600' ? 'text-green-600' :
                  development.availabilityColor === 'text-blue-600' ? 'text-blue-600' :
                  'text-red-600'
                }`}>
                  {development.availability}
                </div>
              )}
              
              <div className="h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={development.image}
                  alt={development.name}
                  className="w-full h-full object-cover image-minimal"
                />
              </div>
              
              <div className="p-6">
                <div className="text-label text-[#86868b] mb-2">
                  {development.developer}
                </div>
                <h3 className="text-title mb-4 line-clamp-2">{development.name}</h3>
                <p className="text-body mb-6 line-clamp-3">{development.description}</p>
                
                {/* Pricing and Availability */}
                {(development.price || development.deliveryDate || development.paymentPlan) && (
                  <div className="mb-6 space-y-2 glass-secondary p-4 rounded-xl">
                    {development.price && (
                      <div className="flex items-center justify-between">
                        <span className="text-label text-[#86868b]">From:</span>
                        <span className="text-body font-semibold text-[#1d1d1f]">{development.price}</span>
                      </div>
                    )}
                    {development.paymentPlan && (
                      <div className="flex items-center justify-between">
                        <span className="text-label text-[#86868b]">Payment:</span>
                        <span className="text-caption font-semibold text-[#1d1d1f]">{development.paymentPlan}</span>
                      </div>
                    )}
                    {development.deliveryDate && (
                      <div className="flex items-center justify-between">
                        <span className="text-label text-blue-600">Handover:</span>
                        <span className="text-caption font-semibold text-blue-600">{development.deliveryDate}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex gap-2">
                  {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                    <div className="flex-1 glass-secondary text-[#86868b] py-2 text-center text-caption font-medium cursor-not-allowed rounded-xl">
                      SOLD OUT
                    </div>
                  ) : development.availabilityColor === 'text-orange-600' ? (
                    <a href="#contact" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 text-center text-caption font-medium rounded-xl transition-all duration-300">
                      {t.developments.lastUnits}
                    </a>
                  ) : development.availabilityColor === 'text-green-600' ? (
                    <a href="#contact" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 text-center text-caption font-medium rounded-xl transition-all duration-300">
                      {t.developments.learnMore}
                    </a>
                  ) : (
                    <a href="#contact" className="btn-primary flex-1 py-2 text-center text-caption">
                      {t.developments.learnMore}
                    </a>
                  )}
                  
                  {development.websiteUrl && (
                    <a 
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost w-12 py-2 flex items-center justify-center"
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
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
          <h3 className="text-headline mb-16">{t.developments.trustedPartners}</h3>
          
          {/* Tesla-style grid layout for partners */}
          <div className="grid-minimal grid-2 max-w-6xl mx-auto">
            
            {/* Development Companies */}
            <div className="card-feature">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-title">Development Partners</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-[#1d1d1f] mb-1">EMAAR</div>
                  <div className="text-label text-[#86868b]">Premium Developer</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-[#1d1d1f] mb-1">DECA</div>
                  <div className="text-label text-[#86868b]">Luxury Projects</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-[#1d1d1f] mb-1">DAMAC</div>
                  <div className="text-label text-[#86868b]">Iconic Developments</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-[#1d1d1f] mb-1">ELLINGTON</div>
                  <div className="text-label text-[#86868b]">Coastal Living</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-[#1d1d1f] mb-1">RICHMIND</div>
                  <div className="text-label text-[#86868b]">Innovative Design</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-[#1d1d1f] mb-1">BABOLEX</div>
                  <div className="text-label text-[#86868b]">Contemporary Style</div>
                </div>
              </div>
            </div>
            
            {/* Prestige Brands */}
            <div className="card-dark">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 glass-primary rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#1d1d1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-title text-white">Prestige Brands</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-white mb-1">MARRIOTT</div>
                  <div className="text-label text-white/70">W Hotels</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-white mb-1">HILTON</div>
                  <div className="text-label text-white/70">Luxury Hospitality</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-white mb-1">ELIE SAAB</div>
                  <div className="text-label text-white/70">Haute Couture</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-white mb-1">WYNN</div>
                  <div className="text-label text-white/70">Casino Resort</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-white mb-1">NIKKI BEACH</div>
                  <div className="text-label text-white/70">Beach Club</div>
                </div>
                <div className="text-center p-4 glass-subtle rounded-xl hover:glass-secondary transition-all duration-300">
                  <div className="text-body font-semibold text-white mb-1">NOBU</div>
                  <div className="text-label text-white/70">Fine Dining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};