import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  currentLanguage: string;
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ currentLanguage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jean-Pierre Dubois",
      location: "Paris, France",
      investment: "MONDRIAN by ELEVATE",
      quote: "Grâce à Palm Signature, j'ai investi dans Al Marjan Island en 2023. Ma propriété a déjà pris 45% de valeur. L'équipe de Gabriella est exceptionnelle.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      profit: "+45% en 18 mois"
    },
    {
      name: "Maria Rodriguez",
      location: "Madrid, Spain", 
      investment: "La Mer by Elie Saab",
      quote: "La inversión en Al Marjan Island ha superado todas mis expectativas. El servicio de Palm Signature es impecable y muy profesional.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      profit: "+52% en 2 ans"
    },
    {
      name: "Robert van der Berg",
      location: "Amsterdam, Netherlands",
      investment: "JW Marriott Al Marjan",
      quote: "Uitstekende service en transparantie. Mijn investering in Al Marjan Island presteert beter dan verwacht. Zeer tevreden met Palm Signature.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      profit: "+38% en 1 an"
    },
    {
      name: "Sarah Johnson",
      location: "London, UK",
      investment: "The Unexpected",
      quote: "Palm Signature helped me secure an amazing property before the Wynn Casino announcement. The ROI has been incredible - exactly as promised.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      profit: "+67% en 2 ans"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="tesla-section bg-gray-50">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            Témoignages Clients
          </h2>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto">
            Découvrez les succès de nos investisseurs internationaux sur Al Marjan Island
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg tesla-shadow p-8 md:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <Quote className="w-12 h-12 text-gray-300" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl tesla-subheading mb-8 leading-relaxed italic">
                "{current.quote}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center justify-center mb-6">
                <img
                  src={current.image}
                  alt={`${current.name} client Palm Signature Real Estate`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  width="64"
                  height="64"
                />
                <div className="text-left">
                  <div className="font-medium text-black text-lg">{current.name}</div>
                  <div className="tesla-subheading text-sm">{current.location}</div>
                  <div className="text-xs text-gray-500">{current.investment}</div>
                </div>
              </div>

              {/* Profit Badge */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {current.profit}
              </div>

              {/* Star Rating */}
              <div className="flex justify-center">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg tesla-shadow">
            <div className="text-3xl font-light text-black mb-2">247+</div>
            <div className="tesla-metric-label">Clients Satisfaits</div>
          </div>
          <div className="bg-white p-8 rounded-lg tesla-shadow">
            <div className="text-3xl font-light text-black mb-2">4.9/5</div>
            <div className="tesla-metric-label">Note Moyenne</div>
          </div>
          <div className="bg-white p-8 rounded-lg tesla-shadow">
            <div className="text-3xl font-light text-black mb-2">€127M</div>
            <div className="tesla-metric-label">Investissements Facilités</div>
          </div>
        </div>
      </div>
    </section>
  );
};