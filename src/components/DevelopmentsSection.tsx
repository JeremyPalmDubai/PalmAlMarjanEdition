import React from 'react';
import { Building2, ExternalLink, ArrowRight, CheckCircle, Clock, XCircle, TrendingUp, Star } from 'lucide-react';
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

  const getAvailabilityIcon = (availability: string | null, availabilityColor: string) => {
    if (!availability) return null;
    
    if (availabilityColor === 'text-red-600') {
      return <XCircle className="w-4 h-4 mr-2" />;
    } else if (availabilityColor === 'text-orange-600') {
      return <Clock className="w-4 h-4 mr-2" />;
    } else {
      return <CheckCircle className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <section id="developments" className="tesla-section tesla-section-beige">
      <div className="tesla-container">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="tesla-badge-solid mb-8">
            <Building2 className="w-4 h-4 mr-2" />
            <span className="tracking-widest">LUXURY DEVELOPMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8 text-balance">
            {t.developments.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-4xl mx-auto leading-relaxed text-pretty">
            {t.developments.description}
          </p>
        </div>

        {/* Featured Developments */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="tesla-badge-accent mb-6">
              <span className="tracking-widest">PREMIUM SELECTION</span>
            </div>
            <h3 className="text-3xl md:text-4xl tesla-heading mb-6">
              Featured Projects
            </h3>
            <p className="text-lg tesla-subheading max-w-3xl mx-auto leading-relaxed text-pretty">
              Exclusive luxury developments curated for discerning investors seeking exceptional returns
            </p>
          </div>
          
          {/* Featured Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDevelopments.map((development, index) => (
            <div key={index} className="tesla-card hover-lift animate-fade-in-up relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Premium Badge */}
              <div className="absolute top-4 left-4 z-20 tesla-badge-solid">
                <span className="text-xs">PREMIUM</span>
              </div>
              
              {/* Special badge for profit achievement */}
              {development.profitBadge && (
                <div className="absolute top-16 left-4 z-10 tesla-badge-accent">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span className="text-xs">{development.profitBadge}</span>
                </div>
              )}
              
              {/* Image */}
              <div className="h-64 overflow-hidden relative rounded-t-tesla">
                {development.availability && (
                  <div className={`absolute top-4 right-4 z-10 tesla-card-glass px-3 py-1 text-xs font-medium flex items-center ${development.availabilityColor}`}>
                    {getAvailabilityIcon(development.availability, development.availabilityColor)}
                    <span>{development.availability}</span>
                  </div>
                )}
                <img
                  src={development.image}
                  alt={development.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-medium tesla-subheading tracking-wider uppercase mb-3">
                  {development.developer}
                </div>
                <h3 className="text-xl tesla-heading mb-4">{development.name}</h3>
                <p className="tesla-subheading text-sm leading-relaxed mb-6 text-pretty">{development.description}</p>
                  
                {/* Property Details */}
                {(development.price || development.deliveryDate || development.wynnDistance) && (
                  <div className="mb-6 space-y-3 border-t border-tesla pt-4">
                    {development.price && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">From</span>
                        <span className="text-lg font-light tesla-heading">{development.price}</span>
                      </div>
                    )}
                    {development.paymentPlan && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">Payment</span>
                        <span className="text-sm font-light tesla-heading">{development.paymentPlan}</span>
                      </div>
                    )}
                    {development.deliveryDate && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">Handover</span>
                        <span className="text-sm font-light tesla-heading">{development.deliveryDate}</span>
                      </div>
                    )}
                    {development.wynnDistance && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">Wynn</span>
                        <span className="text-sm font-medium text-premium-blue">{development.wynnDistance}</span>
                      </div>
                    )}
                  </div>
                )}
                  
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                    <div className="flex-1 bg-gray-300 text-gray-600 px-4 py-3 text-sm text-center font-medium cursor-not-allowed rounded-tesla">
                      SOLD OUT
                    </div>
                  ) : development.availabilityColor === 'text-orange-600' ? (
                    <a href="#contact" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 text-sm text-center font-medium transition-colors duration-400 rounded-tesla">
                      {t.developments.lastUnits}
                    </a>
                  ) : (
                    <a href="#contact" className="flex-1 tesla-btn-primary text-sm py-3">
                      {t.developments.learnMore}
                    </a>
                  )}
                  
                  {development.websiteUrl && (
                    <a 
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 border-tesla hover:border-tesla-accent bg-white hover:bg-light-beige py-3 flex items-center justify-center transition-colors duration-400 rounded-tesla"
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
                      <ExternalLink className="w-4 h-4 tesla-icon hover:tesla-icon-accent transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* All Other Developments */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl tesla-heading mb-4">
              All Projects
            </h3>
            <p className="text-base tesla-subheading max-w-xl mx-auto text-pretty">
              Complete portfolio of luxury developments
            </p>
          </div>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {developments.map((development, index) => (
            <div key={index} className="tesla-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image */}
              <div className="h-64 overflow-hidden relative rounded-t-tesla">
                {/* Status badge */}
                {development.availability && (
                  <div className={`absolute top-4 right-4 z-10 tesla-card-glass px-3 py-1 text-xs font-medium flex items-center ${development.availabilityColor}`}>
                    {getAvailabilityIcon(development.availability, development.availabilityColor)}
                    <span>{development.availability}</span>
                  </div>
                )}
                
                <img
                  src={development.image}
                  alt={development.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-medium tesla-subheading tracking-wider uppercase mb-3">
                  {development.developer}
                </div>
                <h3 className="text-xl tesla-heading mb-4">{development.name}</h3>
                <p className="tesla-subheading text-sm leading-relaxed mb-6 text-pretty">{development.description}</p>
                
                {/* Property Details */}
                {(development.price || development.deliveryDate || development.paymentPlan) && (
                  <div className="mb-6 space-y-3 border-t border-tesla pt-4">
                    {development.price && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">From</span>
                        <span className="text-lg font-light tesla-heading">{development.price}</span>
                      </div>
                    )}
                    {development.paymentPlan && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">Payment</span>
                        <span className="text-sm font-light tesla-heading">{development.paymentPlan}</span>
                      </div>
                    )}
                    {development.deliveryDate && (
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs font-medium tesla-subheading tracking-wider uppercase">Handover</span>
                        <span className="text-sm font-light tesla-heading">{development.deliveryDate}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
                    <div className="flex-1 bg-gray-300 text-gray-600 px-4 py-3 text-sm text-center font-medium cursor-not-allowed rounded-tesla">
                      SOLD OUT
                    </div>
                  ) : development.availabilityColor === 'text-orange-600' ? (
                    <a href="#contact" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 text-sm text-center font-medium transition-colors duration-400 rounded-tesla">
                      {t.developments.lastUnits}
                    </a>
                  ) : development.availabilityColor === 'text-green-600' ? (
                    <a href="#contact" className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-sm text-center font-medium transition-colors duration-400 rounded-tesla">
                      {t.developments.learnMore}
                    </a>
                  ) : (
                    <a href="#contact" className="flex-1 tesla-btn-secondary text-sm py-3">
                      {t.developments.learnMore}
                    </a>
                  )}
                  
                  {development.websiteUrl && (
                    <a 
                      href={development.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 border-tesla hover:border-tesla-accent bg-white hover:bg-light-beige py-3 flex items-center justify-center transition-colors duration-400 rounded-tesla"
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
                      <ExternalLink className="w-4 h-4 tesla-icon hover:tesla-icon-accent transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Trusted Partners */}
        <div className="bg-deep-gray rounded-tesla-lg p-12 lg:p-16 text-white">
          <h3 className="text-3xl md:text-4xl font-inter font-light text-center mb-16 text-white">
            {t.developments.trustedPartners}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Development Companies */}
            <div className="tesla-card-glass p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-premium-blue rounded-tesla flex items-center justify-center mr-4">
                  <Building2 className="tesla-icon-white" />
                </div>
                <h4 className="text-xl font-inter font-light text-white">Development Partners</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {['EMAAR', 'DECA', 'DAMAC', 'ELLINGTON', 'RICHMIND', 'BABOLEX'].map((partner, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-tesla hover:bg-white/20 transition-colors duration-400">
                    <div className="text-lg font-medium text-white mb-1">{partner}</div>
                    <div className="text-xs text-white/70 uppercase tracking-wide">Premium Developer</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Prestige Brands */}
            <div className="tesla-card-glass p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-premium-blue rounded-tesla flex items-center justify-center mr-4">
                  <Star className="tesla-icon-white" />
                </div>
                <h4 className="text-xl font-inter font-light text-white">Prestige Brands</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'MARRIOTT', sub: 'W Hotels' },
                  { name: 'HILTON', sub: 'Luxury Hospitality' },
                  { name: 'ELIE SAAB', sub: 'Haute Couture' },
                  { name: 'WYNN', sub: 'Casino Resort' },
                  { name: 'NIKKI BEACH', sub: 'Beach Club' },
                  { name: 'NOBU', sub: 'Fine Dining' }
                ].map((brand, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-tesla hover:bg-white/20 transition-colors duration-400">
                    <div className="text-lg font-medium text-white mb-1">{brand.name}</div>
                    <div className="text-xs text-white/70 uppercase tracking-wide">{brand.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="tesla-btn-glass group"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', { 
                    event_category: 'CTA',
                    event_label: 'Developments CTA'
                  });
                }
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout', {
                    content_name: 'Development Portfolio'
                  });
                }
              }}
            >
              <span>Explore All Developments</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};