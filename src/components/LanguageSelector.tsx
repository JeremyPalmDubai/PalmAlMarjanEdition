import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 sm:px-4 py-2 hover:bg-gray-100 transition-all duration-300 font-inter font-medium text-sm rounded-lg hover:scale-105 hover:shadow-md"
      >
        <Globe className="w-4 h-4 text-gray-600 sm:hidden" />
        <span className="text-sm hidden sm:inline">{currentLang.flag}</span>
        <span className="text-gray-700 hidden sm:inline">{currentLang.name}</span>
        <svg className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[140px] animate-fade-in-up backdrop-blur-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                console.log('Language selector clicked:', lang.code); // Debug log
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-all duration-200 font-inter text-sm hover:translate-x-1"
            >
              <span className="text-sm">{lang.flag}</span>
              <span className="text-gray-700">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};