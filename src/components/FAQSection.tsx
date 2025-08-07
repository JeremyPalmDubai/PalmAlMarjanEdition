import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  currentLanguage: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLanguage }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quel est le ROI attendu sur Al Marjan Island ?",
      answer: "Les propriétés d'Al Marjan Island affichent une appréciation de 33,3% par an et surpassent les marchés immobiliers mondiaux de 400%. Avec l'ouverture du Wynn Casino en 2027, nous prévoyons une croissance encore plus importante."
    },
    {
      question: "Puis-je acheter en tant qu'étranger ?",
      answer: "Oui, Al Marjan Island offre une propriété 100% freehold aux investisseurs internationaux. Aucune restriction de nationalité, 0% d'impôt sur les plus-values, et droits de propriété complets."
    },
    {
      question: "Quels sont les plans de paiement disponibles ?",
      answer: "Nous proposons des plans de paiement flexibles sur 5 ans sans intérêt. Acompte initial de 10-20%, puis paiements échelonnés jusqu'à la livraison. Conditions négociables selon le projet."
    },
    {
      question: "Quand le Wynn Casino ouvrira-t-il ?",
      answer: "Le Wynn Resort & Casino ouvrira en 2027 avec un investissement de 3,9 milliards de dollars. Ce sera le premier casino-resort des EAU, créant une demande sans précédent pour l'immobilier d'Al Marjan Island."
    },
    {
      question: "Quels sont les frais et taxes ?",
      answer: "Frais d'enregistrement : 4% du prix d'achat. Aucune taxe sur les plus-values. Aucun impôt sur le revenu personnel. Frais de maintenance variables selon le projet (généralement 10-15 AED/sqft/an)."
    },
    {
      question: "Puis-je visiter les propriétés ?",
      answer: "Absolument ! Nous organisons des visites personnalisées avec transport depuis Dubai. Visite virtuelle disponible pour les clients internationaux. Hébergement et transport inclus pour les investisseurs sérieux."
    },
    {
      question: "Quelle est la différence avec Palm Jumeirah ?",
      answer: "Al Marjan Island est 40% moins cher que Palm Jumeirah avec un potentiel de croissance supérieur. Plus d'espace, moins de densité, et l'avantage du Wynn Casino. C'est le 'nouveau Palm Jumeirah' avant l'explosion des prix."
    },
    {
      question: "Comment Palm Signature m'accompagne ?",
      answer: "Support multilingue complet, accès exclusif aux meilleures propriétés, négociation des prix, assistance juridique, gestion post-achat, et suivi de votre investissement. Service VIP de A à Z."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="tesla-section bg-white">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-gray-400 mr-3" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading">
              Questions Fréquentes
            </h2>
          </div>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto">
            Toutes les réponses à vos questions sur l'investissement Al Marjan Island
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-black pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 tesla-subheading leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA après FAQ */}
          <div className="mt-16 text-center bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-light mb-4">Vous avez d'autres questions ?</h3>
            <p className="text-gray-300 mb-6">Nos experts sont disponibles 7j/7 pour répondre à toutes vos questions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="tesla-btn-secondary-white"
              >
                Parler à un Expert
              </a>
              <a 
                href="https://wa.me/971582474950?text=Bonjour, j'ai des questions sur l'investissement Al Marjan Island"
                target="_blank"
                rel="noopener noreferrer"
                className="tesla-btn-secondary-white flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};