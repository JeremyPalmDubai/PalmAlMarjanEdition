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
      const heroHeight = window.innerHeight * 0.9; // Un peu avant la fin du hero
      
      // Logique simplifiée : afficher après le hero, cacher si scroll rapide vers le bas
      if (currentScrollY > heroHeight) {
        setIsVisible(true);
      } else {
        // Dans le hero, cacher la navbar
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Écouter le scroll
    const throttledHandleScroll = throttle(handleScroll, 16); // 60fps
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Vérifier la position initiale
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  // Fonction throttle pour optimiser les performances
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
    
    // Scroll to top when clicking logo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigation.navigate('home');
      // Wait for navigation to complete, then scroll to contact
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // We're on home page, just scroll to contact
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible 
        ? 'transform translate-y-0 opacity-100' 
        : 'transform -translate-y-full opacity-0'
    } tesla-nav-enhanced`}>
      <div className="tesla-container">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4477 3718" fill="none" className="h-5 sm:h-6 w-auto">
              <path d="M984.944 895.681C656.599 1175.61 447.7 1567.75 447.7 2016.48C447.7 2374.02 582.103 2696.97 803.26 2955.38C862.303 3024.58 927.492 3089.09 997.89 3148.27L998.095 3148.03C1060.97 3200.83 1128.04 3249.52 1198.67 3293.7C1097.14 3405.06 996.699 3517.51 897.433 3630.95C821.7 3580 749.576 3524.8 681.537 3465.7L680.721 3464.99C675.559 3460.49 670.399 3455.99 665.286 3451.44C633.948 3423.67 603.501 3395.05 573.994 3365.64C566.949 3358.61 559.958 3351.54 553.021 3344.43C213.408 2996.15 3.67405 2539.33 0.0484313 2029.91L0 2016.48C0 1447.53 256.997 943.355 665.366 581.444C670.457 576.915 675.595 572.436 680.735 567.955L681.536 567.256C1088.34 213.893 1641.14 0 2238.5 0C2835.86 0 3388.66 213.893 3795.46 567.257L3796.34 568.025C3801.46 572.484 3806.62 576.982 3811.68 581.488C4220.02 943.396 4477 1447.55 4477 2016.48C4477 2531.63 4266.31 2993.67 3923.33 3345.1C3916.61 3351.99 3909.83 3358.83 3903.01 3365.64C3873.51 3395.04 3843.08 3423.64 3811.76 3451.4C3806.37 3456.2 3800.94 3460.98 3795.49 3465.73C3727.22 3525.04 3654.83 3580.41 3578.81 3631.51C3479.64 3518.33 3379.12 3405.94 3277.33 3294.43C3348.32 3250.08 3415.74 3201.14 3478.92 3148.05L3479.11 3148.27C3556.69 3083.05 3627.95 3011.35 3691.63 2934.05C3902.06 2679.25 4029.3 2364.12 4029.3 2016.48C4029.3 1567.74 3820.4 1175.61 3492.05 895.674C3487.75 891.991 3483.44 888.329 3479.11 884.686C3438.19 850.49 3395.43 818.054 3351.07 787.405C3048.85 576.304 2664.71 448.106 2238.5 448.106C1809.47 448.106 1423.06 577.98 1119.94 791.567C1077.72 820.989 1037 852.073 997.924 884.726C993.589 888.37 989.24 891.996 984.944 895.681Z" fill="#000000"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M2014.75 2444.97C1844.11 2613.25 1676.21 2784.29 1511.11 2958.03C1428.84 2913.72 1353.38 2862.43 1285.63 2805.39L1285.83 2805.14C1239.23 2765.96 1196.3 2724.19 1157.33 2680.18C1329.5 2498.32 1504.66 2319.34 1682.75 2143.32C1426.56 2156.47 1170.72 2178.71 915.713 2210.05C902.322 2146.73 895.4 2082 895.4 2016.48C895.4 1928.11 908.243 1840.98 932.702 1756.72C1175.63 1728.44 1419.24 1708.08 1663.15 1695.63C1512.92 1561.14 1361.19 1429 1208.2 1299.42C1229.9 1277.58 1252.6 1256.41 1276.25 1235.95L1285.83 1227.81C1374.57 1152.6 1476.28 1087.38 1588.79 1035.18C1731.98 1157.79 1874.02 1282.56 2014.75 1409.35V911.401C2087.06 901.43 2161.77 896.213 2238.5 896.213C2315.3 896.213 2390.07 901.439 2462.45 911.428V1408.37C2602.78 1282.23 2744.72 1157.83 2888.23 1035.19C3000.74 1087.38 3102.47 1152.57 3191.2 1227.78L3200.74 1235.95C3224.43 1256.43 3247.16 1277.64 3268.89 1299.51L3259.82 1307.19C3109.17 1434.69 2960.25 1564.17 2813.13 1695.59C3057.28 1708.02 3301.13 1728.46 3544.29 1756.77C3568.76 1840.97 3581.6 1928.1 3581.6 2016.48C3581.6 2082.01 3574.69 2146.73 3561.32 2210.03C3305.58 2178.6 3049 2156.33 2792.07 2143.2C2970.56 2319.72 3146.24 2499.2 3318.71 2681.26C3280 2724.87 3237.39 2766.28 3191.17 2805.14L3191.35 2805.36C3123.24 2862.67 3047.32 2914.19 2964.51 2958.68C2799.98 2785.66 2632.51 2615.05 2462.45 2447.18V3717.45H2014.75V2444.97ZM2555.07 1885.23L2238.5 1568.37L1921.93 1885.23L2238.5 2202.09L2555.07 1885.23Z" fill="#000000"></path>
            </svg>
            <div className="ml-2 sm:ml-3 flex flex-col justify-center h-5 sm:h-6 hidden sm:flex">
              <div className="text-black font-inter font-bold text-xs tracking-wider leading-tight">
                <div className="uppercase font-bold">PALM</div>
                <div className="uppercase font-bold">SIGNATURE</div>
              </div>
            </div>

            {/* Al Marjan Island Badge */}
            {/* Mobile: Hidden, Desktop: Badge */}
            <div className="ml-2 sm:ml-4 md:ml-6">
              {/* Mobile version - Hidden to save space */}
              <div className="hidden text-black font-inter font-bold text-xs tracking-wider uppercase leading-tight">
                <div>AL MARJAN</div>
                <div>ISLAND</div>
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block px-4 py-2 bg-black text-white rounded-full text-xs font-medium tracking-wider">
                <div className="uppercase">{t.hero.badge}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-4">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="bg-black text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Contact us for investment opportunities"
            >
              {t.navigation.contact}
            </a>

            {/* Language Selector */}
            <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </header>
  );
};