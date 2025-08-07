import React, { createContext, useContext } from 'react';

interface NavigationContextType {
  navigate: (page: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children, onNavigate }) => {
  const navigate = (page: string) => {
    onNavigate(page);
    
    // Ensure scroll to top on navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <NavigationContext.Provider value={{ navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};