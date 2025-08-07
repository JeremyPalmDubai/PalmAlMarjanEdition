import React from 'react';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

interface SocialProofSectionProps {
  currentLanguage: string;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ currentLanguage }) => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Investisseurs Satisfaits",
      description: "Clients dans 25+ pays"
    },
    {
      icon: TrendingUp,
      number: "€180M",
      label: "Volume d'Investissements",
      description: "Facilités depuis 2020"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Note Client",
      description: "Sur 300+ avis vérifiés"
    },
    {
      icon: Star,
      number: "95%",
      label: "Taux de Recommandation",
      description: "Clients qui nous recommandent"
    }
  ];

  const mediaLogos = [
    { name: "Arabian Business", logo: "🏢" },
    { name: "Gulf News", logo: "📰" },
    { name: "Emirates Business", logo: "💼" },
    { name: "Property Weekly", logo: "🏠" }
  ];

  const certifications = [
    "RERA Licensed",
    "ISO 9001 Certified", 
    "Member of FIABCI",
    "Dubai Chamber Member"
  ];

  return (
    <section className="tesla-section bg-black text-white">
      <div className="tesla-container">
        {/* Achievements Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-light mb-2">{achievement.number}</div>
              <div className="text-lg font-medium mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-400">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Media Coverage */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-inter font-light mb-12">
            Reconnu par les Médias Internationaux
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {mediaLogos.map((media, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-2">{media.logo}</div>
                <div className="text-sm text-gray-300">{media.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-inter font-light mb-12">
            Certifications & Accréditations
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                ✓ {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};