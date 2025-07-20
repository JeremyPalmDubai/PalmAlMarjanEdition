import React from 'react';
import { useNavigation } from './NavigationProvider';
import { translations } from '../data/translations';

interface FooterProps {
  currentLanguage: string;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];
  const navigation = useNavigation();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
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

  const handlePageNavigation = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    navigation.navigate(page);
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="tesla-container">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4477 3718" fill="none" className="h-6 w-auto">
                <path d="M984.944 895.681C656.599 1175.61 447.7 1567.75 447.7 2016.48C447.7 2374.02 582.103 2696.97 803.26 2955.38C862.303 3024.58 927.492 3089.09 997.89 3148.27L998.095 3148.03C1060.97 3200.83 1128.04 3249.52 1198.67 3293.7C1097.14 3405.06 996.699 3517.51 897.433 3630.95C821.7 3580 749.576 3524.8 681.537 3465.7L680.721 3464.99C675.559 3460.49 670.399 3455.99 665.286 3451.44C633.948 3423.67 603.501 3395.05 573.994 3365.64C566.949 3358.61 559.958 3351.54 553.021 3344.43C213.408 2996.15 3.67405 2539.33 0.0484313 2029.91L0 2016.48C0 1447.53 256.997 943.355 665.366 581.444C670.457 576.915 675.595 572.436 680.735 567.955L681.536 567.256C1088.34 213.893 1641.14 0 2238.5 0C2835.86 0 3388.66 213.893 3795.46 567.257L3796.34 568.025C3801.46 572.484 3806.62 576.982 3811.68 581.488C4220.02 943.396 4477 1447.55 4477 2016.48C4477 2531.63 4266.31 2993.67 3923.33 3345.1C3916.61 3351.99 3909.83 3358.83 3903.01 3365.64C3873.51 3395.04 3843.08 3423.64 3811.76 3451.4C3806.37 3456.2 3800.94 3460.98 3795.49 3465.73C3727.22 3525.04 3654.83 3580.41 3578.81 3631.51C3479.64 3518.33 3379.12 3405.94 3277.33 3294.43C3348.32 3250.08 3415.74 3201.14 3478.92 3148.05L3479.11 3148.27C3556.69 3083.05 3627.95 3011.35 3691.63 2934.05C3902.06 2679.25 4029.3 2364.12 4029.3 2016.48C4029.3 1567.74 3820.4 1175.61 3492.05 895.674C3487.75 891.991 3483.44 888.329 3479.11 884.686C3438.19 850.49 3395.43 818.054 3351.07 787.405C3048.85 576.304 2664.71 448.106 2238.5 448.106C1809.47 448.106 1423.06 577.98 1119.94 791.567C1077.72 820.989 1037 852.073 997.924 884.726C993.589 888.37 989.24 891.996 984.944 895.681Z" fill="#ffffff"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M2014.75 2444.97C1844.11 2613.25 1676.21 2784.29 1511.11 2958.03C1428.84 2913.72 1353.38 2862.43 1285.63 2805.39L1285.83 2805.14C1239.23 2765.96 1196.3 2724.19 1157.33 2680.18C1329.5 2498.32 1504.66 2319.34 1682.75 2143.32C1426.56 2156.47 1170.72 2178.71 915.713 2210.05C902.322 2146.73 895.4 2082 895.4 2016.48C895.4 1928.11 908.243 1840.98 932.702 1756.72C1175.63 1728.44 1419.24 1708.08 1663.15 1695.63C1512.92 1561.14 1361.19 1429 1208.2 1299.42C1229.9 1277.58 1252.6 1256.41 1276.25 1235.95L1285.83 1227.81C1374.57 1152.6 1476.28 1087.38 1588.79 1035.18C1731.98 1157.79 1874.02 1282.56 2014.75 1409.35V911.401C2087.06 901.43 2161.77 896.213 2238.5 896.213C2315.3 896.213 2390.07 901.439 2462.45 911.428V1408.37C2602.78 1282.23 2744.72 1157.83 2888.23 1035.19C3000.74 1087.38 3102.47 1152.57 3191.2 1227.78L3200.74 1235.95C3224.43 1256.43 3247.16 1277.64 3268.89 1299.51L3259.82 1307.19C3109.17 1434.69 2960.25 1564.17 2813.13 1695.59C3057.28 1708.02 3301.13 1728.46 3544.29 1756.77C3568.76 1840.97 3581.6 1928.1 3581.6 2016.48C3581.6 2082.01 3574.69 2146.73 3561.32 2210.03C3305.58 2178.6 3049 2156.33 2792.07 2143.2C2970.56 2319.72 3146.24 2499.2 3318.71 2681.26C3280 2724.87 3237.39 2766.28 3191.17 2805.14L3191.35 2805.36C3123.24 2862.67 3047.32 2914.19 2964.51 2958.68C2799.98 2785.66 2632.51 2615.05 2462.45 2447.18V3717.45H2014.75V2444.97ZM2555.07 1885.23L2238.5 1568.37L1921.93 1885.23L2238.5 2202.09L2555.07 1885.23Z" fill="#ffffff"></path>
              </svg>
              <div className="ml-3 flex flex-col justify-center h-6">
                <div className="text-white font-inter font-bold text-xs tracking-wider leading-tight">
                  <div className="uppercase font-bold">PALM</div>
                  <div className="uppercase font-bold">SIGNATURE</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-light leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Legal Information */}
            <div className="text-xs text-gray-400 mb-4 space-y-1">
              <div><strong>{t.footer.legal.company}</strong></div>
              <div>{t.footer.legal.license}</div>
              <div>{t.footer.legal.rera}</div>
            </div>
            
            <a
              href="https://invest-almarjanisland.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 font-medium"
            >
              invest-almarjanisland.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-3">
              <li><a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="text-gray-300 hover:text-white font-light">{t.footer.quickLinks.opportunity}</a></li>
              <li><a href="#wynn-effect" onClick={(e) => handleNavClick(e, 'wynn-effect')} className="text-gray-300 hover:text-white font-light">{t.footer.quickLinks.wynn}</a></li>
              <li><a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="text-gray-300 hover:text-white font-light">{t.footer.quickLinks.roi}</a></li>
              <li><a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="text-gray-300 hover:text-white font-light">{t.footer.quickLinks.developments}</a></li>
              <li><a href="#lifestyle" onClick={(e) => handleNavClick(e, 'lifestyle')} className="text-gray-300 hover:text-white font-light">{t.footer.quickLinks.lifestyle}</a></li>
              <li><a href="/sitemap" onClick={(e) => handlePageNavigation(e, 'sitemap')} className="text-gray-300 hover:text-white font-light">Sitemap</a></li>
            </ul>
          </div>

          {/* Investment Benefits */}
          <div>
            <h4 className="text-lg font-medium mb-6">Investment Advantages</h4>
            <div className="space-y-3 text-gray-300 font-light">
              <p>✓ 0% Tax on Capital Gains</p>
              <p>✓ 100% Freehold Ownership</p>
              <p>✓ 5-Year Payment Plans</p>
              <p>✓ Wynn Casino Opening 2027</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left font-light">
            &copy; 2025 Palm Signature Real Estate. {t.footer.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" onClick={(e) => handlePageNavigation(e, 'privacy')} className="text-gray-400 hover:text-white font-light text-sm">
              {t.footer.privacy}
            </a>
            <a href="/terms" onClick={(e) => handlePageNavigation(e, 'terms')} className="text-gray-400 hover:text-white font-light text-sm">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};