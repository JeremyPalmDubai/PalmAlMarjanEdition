import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useNavigation } from './NavigationProvider';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = translations[currentLanguage];
  const navigation = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.9;
      
      if (currentScrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigation.navigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigation.navigate('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isVisible 
        ? 'transform translate-y-0 opacity-100' 
        : 'transform -translate-y-full opacity-0'
    } bg-white/80 backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo ultra-minimal */}
          <div className="flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="w-6 h-6 bg-black mr-3 group-hover:bg-gray-800 transition-colors duration-300"></div>
            <div className="text-black font-light text-sm tracking-tight">
              Palm Signature
            </div>
          </div>
          
          {/* Navigation ultra-minimal */}
          <div className="hidden lg:flex items-center space-x-12">
            <button 
              onClick={() => {
                const element = document.getElementById('opportunity');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-black text-sm font-light transition-colors duration-300"
            >
              Opportunity
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('wynn-effect');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-black text-sm font-light transition-colors duration-300"
            >
              Wynn Effect
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('developments');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-black text-sm font-light transition-colors duration-300"
            >
              Developments
            </button>
          </div>
          
          {/* CTA + Language ultra-minimal */}
          <div className="flex items-center space-x-6">
            <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
            <button 
              onClick={handleContactClick}
              className="bg-black text-white px-6 py-2 text-sm font-light hover:bg-gray-800 transition-all duration-300"
            >
              {t.navigation.contact}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};