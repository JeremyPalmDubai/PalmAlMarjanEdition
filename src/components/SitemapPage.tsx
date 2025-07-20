import React from 'react';
import { MapPin, Building, TrendingUp, Users, Phone, Mail } from 'lucide-react';
import { useNavigation } from './NavigationProvider';
import { translations } from '../data/translations';

interface SitemapPageProps {
  currentLanguage: string;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];
  const navigation = useNavigation();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    // Navigate to home page first
    navigation.navigate('home');
    // Wait for navigation to complete, then scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleHomeNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    navigation.navigate('home');
  };

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: MapPin,
      links: [
        { name: 'Home', url: '/', description: 'Al Marjan Island investment homepage', isHome: true },
        { name: 'Investment Opportunity', url: '#opportunity', description: 'Prime investment opportunities', sectionId: 'opportunity' },
        { name: 'Wynn Effect', url: '#wynn-effect', description: 'Impact of Wynn Casino on property values', sectionId: 'wynn-effect' },
        { name: 'ROI Metrics', url: '#roi-metrics', description: 'Return on investment statistics', sectionId: 'roi-metrics' },
        { name: 'Developments', url: '#developments', description: 'Luxury property developments', sectionId: 'developments' },
        { name: 'Lifestyle', url: '#lifestyle', description: 'Luxury living experience', sectionId: 'lifestyle' },
        { name: 'Contact', url: '#contact', description: 'Get in touch with our team', sectionId: 'contact' },
      ]
    },
    {
      title: 'Developments',
      icon: Building,
      links: [
        { name: 'W Al Marjan Island', url: '#developments', description: 'Marriott luxury resort', sectionId: 'developments' },
        { name: 'Hilton Al Marjan Island', url: '#developments', description: 'Hilton premium hospitality', sectionId: 'developments' },
        { name: 'La Mer by Elie Saab', url: '#developments', description: 'Haute couture inspired residences', sectionId: 'developments' },
        { name: 'The Unexpected', url: '#developments', description: 'Extraordinary architectural masterpiece', sectionId: 'developments' },
        { name: 'Babolex Residences', url: '#developments', description: 'Contemporary living spaces', sectionId: 'developments' },
        { name: 'Manta Bay Residences', url: '#developments', description: 'Waterfront luxury living', sectionId: 'developments' },
        { name: 'Trio Isle Octa', url: '#developments', description: 'Innovative architectural design', sectionId: 'developments' },
        { name: 'Park Beach Residences', url: '#developments', description: 'Beachfront luxury', sectionId: 'developments' },
        { name: 'Ola Residences', url: '#developments', description: 'Modern waterfront living', sectionId: 'developments' },
        { name: 'Costa Mare by Ellington', url: '#developments', description: 'Elegant coastal residences', sectionId: 'developments' },
        { name: 'Oystra Zaha Hadid', url: '#developments', description: 'Iconic architecture by Zaha Hadid', sectionId: 'developments' },
        { name: 'Emaar Address Residences', url: '#developments', description: 'Premium residences by Emaar', sectionId: 'developments' },
      ]
    },
    {
      title: 'Investment Information',
      icon: TrendingUp,
      links: [
        { name: 'Property Appreciation', url: '#roi-metrics', description: '33.3% year-over-year growth', sectionId: 'roi-metrics' },
        { name: 'Market Outperformance', url: '#roi-metrics', description: '400% vs global real estate', sectionId: 'roi-metrics' },
        { name: 'Wynn Casino Impact', url: '#wynn-effect', description: '$3.9B investment opening 2027', sectionId: 'wynn-effect' },
        { name: 'Long-term Potential', url: '#roi-metrics', description: '500% total return potential', sectionId: 'roi-metrics' },
        { name: 'Payment Plans', url: '#contact', description: '5-year interest-free payment options', sectionId: 'contact' },
        { name: 'Tax Benefits', url: '#opportunity', description: '0% tax on capital gains', sectionId: 'opportunity' },
      ]
    },
    {
      title: 'Company Information',
      icon: Users,
      links: [
        { name: 'About Palm Signature', url: '#contact', description: 'Leading luxury real estate agency', sectionId: 'contact' },
        { name: 'Gabriella Magalhaes CEO', url: '#ceo', description: 'CEO & Founder profile', sectionId: 'ceo' },
        { name: 'Our Services', url: '#why-palm-signature', description: 'Exclusive access and support', sectionId: 'why-palm-signature' },
        { name: 'Multilingual Support', url: '#contact', description: 'English, French, Spanish, Dutch', sectionId: 'contact' },
        { name: 'RERA Licensed', url: '#contact', description: 'Registered real estate agent', sectionId: 'contact' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8" id="sitemap-title">
            Site Map
          </h1>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto">
            Navigate through all sections of our Al Marjan Island investment portal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg p-8 tesla-shadow">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl tesla-heading" id={`sitemap-${section.title.toLowerCase().replace(/\s+/g, '-')}`}>{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    onClick={link.isHome ? handleHomeNavigation : (e) => handleNavClick(e, link.sectionId || '')}
                    className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <div className="font-medium text-black mb-1 group-hover:text-gray-600">
                          {link.name}
                        </div>
                        <div className="text-sm tesla-subheading">
                          {link.description}
                        </div>
                      </div>
                      <div className="ml-4 text-gray-400 group-hover:text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-20 bg-black text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-inter font-light text-center mb-12" id="ready-to-start">
            Ready to Start Your Investment Journey?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-2" id="call-now">Call Now</h3>
              <p className="text-gray-300 mb-4">Speak with our investment experts</p>
              <a
                href="tel:+971582474950"
                className="tesla-btn-secondary-white"
              >
                +971 58 247 4950
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-2" id="email-us">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed investment information</p>
              <a
                href="mailto:hello@palmsignature.ae"
                className="tesla-btn-secondary-white"
              >
                hello@palmsignature.ae
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};