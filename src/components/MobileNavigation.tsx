import React, { useState, useEffect } from 'react';
import { Home, TrendingUp, Building, DollarSign, MapPin, MessageSquare } from 'lucide-react';
import { useNavigation } from './NavigationProvider';

interface MobileNavigationProps {
  currentLanguage: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ currentLanguage }) => {
  const [activeSection, setActiveSection] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['opportunity', 'wynn-effect', 'roi-metrics', 'developments', 'lifestyle', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigation.navigate('home');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    { id: 'opportunity', icon: Home, label: 'Home' },
    { id: 'wynn-effect', icon: TrendingUp, label: 'Wynn' },
    { id: 'roi-metrics', icon: DollarSign, label: 'ROI' },
    { id: 'developments', icon: Building, label: 'Properties' },
    { id: 'lifestyle', icon: MapPin, label: 'Lifestyle' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 lg:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};