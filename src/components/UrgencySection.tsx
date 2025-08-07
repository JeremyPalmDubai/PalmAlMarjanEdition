import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface UrgencySectionProps {
  currentLanguage: string;
}

export const UrgencySection: React.FC<UrgencySectionProps> = ({ currentLanguage }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  // Countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="tesla-section bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="tesla-container">
        <div className="text-center">
          {/* Urgency Header */}
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-light tracking-tight">
              Fenêtre d'Investissement Limitée
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Les prix augmentent de 2-3% chaque mois. Investissez maintenant avant l'ouverture du Wynn Casino en 2027.
          </p>

          {/* Countdown Timer */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 mr-2" />
              <span className="text-lg font-medium">Temps restant avant la prochaine hausse de prix</span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-light mb-1">{timeLeft.days}</div>
                <div className="text-sm text-white/70">Jours</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-light mb-1">{timeLeft.hours}</div>
                <div className="text-sm text-white/70">Heures</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-light mb-1">{timeLeft.minutes}</div>
                <div className="text-sm text-white/70">Minutes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-light mb-1">{timeLeft.seconds}</div>
                <div className="text-sm text-white/70">Secondes</div>
              </div>
            </div>
          </div>

          {/* Price Evolution */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lg font-medium mb-2">Prix Actuel</div>
              <div className="text-2xl font-light mb-2">À partir de 1.8M AED</div>
              <div className="text-sm text-green-400">✓ Meilleur prix disponible</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lg font-medium mb-2">Dans 3 Mois</div>
              <div className="text-2xl font-light mb-2">À partir de 2.0M AED</div>
              <div className="text-sm text-yellow-400">⚠ Hausse prévue +11%</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-lg font-medium mb-2">Après Wynn (2027)</div>
              <div className="text-2xl font-light mb-2">À partir de 4.5M AED</div>
              <div className="text-sm text-red-400">📈 Hausse prévue +150%</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-red-600 px-8 py-4 font-medium text-lg hover:bg-gray-100 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Sécuriser Mon Investissement
              </span>
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Calculer Mon ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};