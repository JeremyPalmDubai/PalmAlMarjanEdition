import React from 'react';
import { translations } from '../data/translations';

interface DevelopmentsSectionProps {
  currentLanguage: string;
}

export const DevelopmentsSection: React.FC<DevelopmentsSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const developments = [
    {
      name: "W Al Marjan Island",
      developer: "Marriott International",
      image: "https://palmdubai.fr/uploads/posts/2025-07/1178d03d12_w.webp",
      description: "Luxury beachfront resort with world-class amenities and stunning Arabian Gulf views.",
    },
    {
      name: "Hilton Al Marjan Island",
      developer: "Hilton Worldwide",
      image: "https://palmdubai.fr/uploads/posts/2025-07/f2b6bf1feb_hilton.webp",
      description: "Premium hospitality experience with exceptional service and luxury accommodations.",
    },
    {
      name: "La Mazzoni",
      developer: "Mazzoni Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/52e2ed0048_lamazzoni.webp",
      description: "Sophisticated waterfront residences with Italian-inspired luxury and contemporary design.",
    },
    {
      name: "Playa Viva",
      developer: "Viva Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/c5791afbd9_playaviva.webp",
      description: "Vibrant beachfront living with modern amenities and stunning ocean views.",
    },
    {
      name: "Clé d'Or by Arthouse",
      developer: "Arthouse Residences",
      image: "https://palmdubai.fr/uploads/posts/2025-07/f8834d1461_cledorbyarthouse.webp",
      description: "Artistic luxury residences with innovative architecture and premium finishes.",
    },
    {
      name: "Oystra by Richmind",
      developer: "Richmind Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/622e87aec2_oystrabyrichmind.webp",
      description: "Elegant coastal living with contemporary design and luxury amenities.",
    },
    {
      name: "Babolex Residences",
      developer: "Babolex Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/cb748b46fa_babolex.webp",
      description: "Contemporary living spaces with innovative design and premium finishes.",
    },
    {
      name: "Manta Bay Residences",
      developer: "Manta Bay Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/0384c0f122_mantabay.webp",
      description: "Waterfront luxury living with panoramic views and exclusive amenities.",
    },
    {
      name: "Trio Isle Octa",
      developer: "Trio Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/90007331f0_trioisleocta.webp",
      description: "Innovative architectural design with premium coastal living experiences.",
    },
    {
      name: "Park Beach Residences",
      developer: "Park Beach Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/e5ce326e37_parkbeach.webp",
      description: "Beachfront luxury with pristine white sand beaches and crystal-clear waters.",
    },
    {
      name: "Ola Residences",
      developer: "Ola Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/a9d4e40639_ola.webp",
      description: "Modern waterfront living with sophisticated design and premium amenities.",
    },
    {
      name: "Costa Mare by Ellington",
      developer: "Ellington Properties",
      image: "https://palmdubai.fr/uploads/posts/2025-07/b1ea8562fb_costamareellington.webp",
      description: "Elegant coastal residences with contemporary design and luxury finishes.",
    },
    {
      name: "Oystra Zaha Hadid",
      developer: "Zaha Hadid Architects",
      image: "https://palmdubai.fr/uploads/posts/2025-07/7089d298f4_oystrazahahadid.webp",
      description: "Iconic architecture by Zaha Hadid with revolutionary design and luxury living.",
    },
    {
      name: "Emaar Address Residences",
      developer: "Emaar Properties",
      image: "https://palmdubai.fr/uploads/posts/2025-07/38a4475d18_emaaraddressresidences.webp",
      description: "Premium residences with Emaar's signature luxury and world-class amenities.",
    },
  ];

  const featuredDevelopments = [
    {
      name: "La Mer by Elie Saab",
      developer: "Elie Saab",
      image: "https://palmdubai.fr/uploads/posts/2025-07/87baf2aac8_lamerbyeliesaab.webp",
      description: "Haute couture-inspired residences with unparalleled luxury and elegance.",
    },
    {
      name: "The Unexpected",
      developer: "The Unexpected Development",
      image: "https://palmdubai.fr/uploads/posts/2025-07/168ac67004_theunexpected.webp",
      description: "Extraordinary architectural masterpiece redefining luxury waterfront living.",
    },
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

        {/* Tesla-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {developments.map((development, index) => (
            <div key={index} className="bg-white tesla-hover animate-fade-in-up">
              <div className="h-64 overflow-hidden">
                <img
                  src={development.image}
                  alt={development.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                  {development.developer}
                </div>
                <h3 className="text-xl tesla-heading mb-4">{development.name}</h3>
                <p className="tesla-subheading text-sm leading-relaxed mb-6">{development.description}</p>
                
                <div className="flex justify-center">
                  <a href="#contact" className="tesla-btn-primary">
                    {t.developments.learnMore}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Developments */}
        <div className="mb-24 space-y-8">
          {featuredDevelopments.map((development, index) => (
            <div key={index} className="bg-white tesla-hover animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="h-80 lg:h-96 overflow-hidden">
                  <img
                    src={development.image}
                    alt={development.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                    {development.developer}
                  </div>
                  <h3 className="text-3xl tesla-heading mb-6">{development.name}</h3>
                  <p className="tesla-subheading text-base leading-relaxed mb-8">{development.description}</p>
                  
                  <div className="flex justify-center lg:justify-start">
                    <a href="#contact" className="tesla-btn-primary">
                      {t.developments.learnMore}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tesla-style developer logos */}
        <div className="text-center">
          <h3 className="text-2xl tesla-heading mb-12">{t.developments.trustedPartners}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-40">
            <div className="text-lg lg:text-xl font-light text-gray-600">MARRIOTT</div>
            <div className="text-lg lg:text-xl font-light text-gray-600">HILTON</div>
            <div className="text-lg lg:text-xl font-light text-gray-600">BABOLEX</div>
            <div className="text-lg lg:text-xl font-light text-gray-600">MANTA BAY</div>
            <div className="text-lg lg:text-xl font-light text-gray-600">ELIE SAAB</div>
            <div className="text-lg lg:text-xl font-light text-gray-600">TRIO</div>
            <div className="text-lg lg:text-xl font-light text-gray-600">ELLINGTON</div>
          </div>
        </div>
      </div>
    </section>
  );
};