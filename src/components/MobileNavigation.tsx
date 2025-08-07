import React, { useState, useEffect } from 'react';
import { Home, TrendingUp, Building, DollarSign, MessageSquare } from 'lucide-react';
import { useNavigation } from './NavigationProvider';

interface MobileNavigationProps {
  currentLanguage: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ currentLanguage }) => {
  const [activeSection, setActiveSection] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['opportunity', 'wynn-effect', 'roi-metrics', 'developments', 'lifestyle'];
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
    { id: 'al-marjan-island', icon: Home, label: 'Island' },
    { id: 'wynn-effect', icon: TrendingUp, label: 'Wynn' },
    { id: 'roi-metrics', icon: DollarSign, label: 'ROI' },
    { id: 'developments', icon: Building, label: 'Invest' }
  ];

  return (
    <nav className="tesla-mobile-nav">
      <div className="tesla-mobile-nav-container">
        {/* Navigation Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`tesla-nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
        
        {/* Contact Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="tesla-contact-btn"
          aria-label="Contact"
        >
          <MessageSquare className="contact-icon" />
        </button>
      </div>
    </nav>
  );
};