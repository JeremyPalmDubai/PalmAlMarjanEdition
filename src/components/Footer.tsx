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
    
    // Scroll to top when navigating to page
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <div>{t.footer.legal.company}</div>
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
          <p className="text-gray-300 mb-6 max-w-md font-light leading-relaxed hover:text-gray-200 transition-colors duration-300">
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
        
        {/* Designed by credit - Below copyright */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          {/* SEO Keywords Section - Discreet */}
          <div className="text-center mb-6">
            <div className="text-xs text-gray-600 leading-relaxed max-w-6xl mx-auto">
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors mr-2">Invest Al Marjan</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors mr-2">Invest Al Marjan Island</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-2">Al Marjan real estate</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-2">Al Marjan Island real estate</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#wynn-effect" onClick={(e) => handleNavClick(e, 'wynn-effect')} className="hover:text-gray-400 transition-colors mr-2">invest near Wynn Casino</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#wynn-effect" onClick={(e) => handleNavClick(e, 'wynn-effect')} className="hover:text-gray-400 transition-colors mr-2">Wynn Casino 2027</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-2">UAE real estate investment</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors mr-2">tax-free property UAE</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-2">luxury real estate Dubai</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-2">Ras Al Khaimah investment</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-2">beachfront properties UAE</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-2">off-plan properties Al Marjan Island</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-400 transition-colors mr-2">5-year payment plans</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors mr-2">100% freehold ownership</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-2">capital appreciation UAE</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-2">rental yields Al Marjan Island</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-400 transition-colors mr-2">Palm Signature Real Estate</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#ceo" onClick={(e) => handleNavClick(e, 'ceo')} className="hover:text-gray-400 transition-colors mr-2">Gabriella Magalhaes CEO</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-2">luxury developments UAE</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#lifestyle" onClick={(e) => handleNavClick(e, 'lifestyle')} className="hover:text-gray-400 transition-colors mr-2">beachfront investment UAE</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#wynn-effect" onClick={(e) => handleNavClick(e, 'wynn-effect')} className="hover:text-gray-400 transition-colors mr-2">Wynn Casino investment</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-2">33.3% property appreciation</a>
              <span className="text-gray-700 mx-1">•</span>
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors">0% capital gains tax</a>
            </div>
            
            {/* SEO Phrases Section */}
            <div className="text-xs text-gray-500 leading-relaxed max-w-6xl mx-auto mt-4">
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors mr-3">Best Al Marjan Island investment opportunities</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#wynn-effect" onClick={(e) => handleNavClick(e, 'wynn-effect')} className="hover:text-gray-400 transition-colors mr-3">Luxury real estate near Wynn Casino</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-3">Highest ROI real estate UAE</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors mr-3">Premium beachfront properties Ras Al Khaimah</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-400 transition-colors mr-3">Interest-free payment plans UAE property</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#opportunity" onClick={(e) => handleNavClick(e, 'opportunity')} className="hover:text-gray-400 transition-colors mr-3">Tax-free real estate investment Dubai</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#lifestyle" onClick={(e) => handleNavClick(e, 'lifestyle')} className="hover:text-gray-400 transition-colors mr-3">Luxury lifestyle Al Marjan Island</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#wynn-effect" onClick={(e) => handleNavClick(e, 'wynn-effect')} className="hover:text-gray-400 transition-colors mr-3">Property investment before Wynn Casino opening</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#roi-metrics" onClick={(e) => handleNavClick(e, 'roi-metrics')} className="hover:text-gray-400 transition-colors mr-3">400% market outperformance real estate</a>
              <span className="text-gray-600 mx-1">•</span>
              <a href="#developments" onClick={(e) => handleNavClick(e, 'developments')} className="hover:text-gray-400 transition-colors">World-class developments Al Marjan Island</a>
            </div>
          </div>
          
          {/* Designed by credit */}
          <div className="flex justify-center items-center">
          <span className="text-gray-400 text-sm font-light mr-2">Designed by</span>
          <a 
            href="https://ioagency.ae" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 1306 250" preserveAspectRatio="xMidYMid meet" className="fill-gray-400 hover:fill-white transition-colors">
              <g>
                <path d="M226.1 204 c-12.6 -1.8 -26.8 -7 -36.7 -13.6 -43 -28.5 -48.4 -87.5 -11.2 -121.9 26.2 -24.3 65.9 -30.1 98.7 -14.4 30.9 14.7 48.4 42.3 46.8 73.9 -0.7 12.6 -2.5 19.9 -7.8 30.6 -13 26.5 -41.7 44.4 -73.8 45.8 -5.3 0.3 -12.5 0.1 -16 -0.4z m23.7 -28.5 c23.5 -5.6 40.2 -26.7 40.2 -51 0 -14.6 -5.3 -26.8 -16 -36.9 -30.8 -29 -80.1 -11.8 -86.2 30 -3.5 24.2 10.9 48.3 33.7 56.2 10 3.5 18.4 4 28.3 1.7z"></path>
                <path d="M693.6 203.9 c-31.4 -4.3 -59.1 -26.7 -68.1 -55.1 -11.2 -35.4 2.3 -70.8 34.6 -90.7 30.5 -18.8 72.4 -16.5 101 5.5 14.3 10.9 26.1 29 29.4 44.9 6.5 31.1 -6.8 63 -33.9 80.9 -18.1 12.1 -41.5 17.5 -63 14.5z m24.2 -28.4 c10.2 -2.4 17 -6.3 24.8 -14 10.7 -10.6 15.4 -21.8 15.4 -37.1 0 -22.5 -13.9 -41.5 -36 -49 -8.3 -2.8 -24.5 -2.5 -32.5 0.6 -11.6 4.5 -19.1 10.4 -25.6 20.4 -11.3 17.2 -11.1 40.5 0.5 58 11.6 17.3 33.1 25.9 53.4 21.1z"></path>
                <path d="M858.7 203.9 c-27.1 -3.7 -47.3 -19.9 -53.2 -42.6 -1.2 -4.7 -1.5 -15 -1.5 -58.5 l0 -52.8 16 0 16 0 0 50.3 c0 58.6 -0.1 57.7 8.4 66.2 7.3 7.4 14 9.8 27.1 9.9 16.6 0.1 27.1 -4.8 33 -15.5 l3 -5.4 0.3 -52.7 0.3 -52.8 16.4 0 16.5 0 0 49.8 c-0.1 38.4 -0.4 51.5 -1.5 57.7 -4 22.2 -20.1 38.3 -44.9 44.5 -9.3 2.3 -26.3 3.3 -35.9 1.9z"></path>
                <path d="M1178.5 204 c-15.5 -1.8 -29.6 -6 -43.7 -13 -9.5 -4.7 -24.1 -14.7 -23.6 -16.1 0.2 -0.5 4.1 -5.6 8.8 -11.4 8 -9.8 8.6 -10.3 10.5 -8.9 14.6 10.8 26.2 16.9 39.2 20.6 6.6 1.9 10.2 2.3 22.8 2.3 13.2 0 15.7 -0.3 20.7 -2.3 10.2 -4.1 16 -12.7 14.5 -21.7 -1.8 -10.8 -12.2 -14.9 -44.7 -17.5 -40.6 -3.2 -58.2 -12.2 -63.5 -32.5 -2.7 -10.5 -1.6 -21.3 3.1 -31 3.2 -6.5 12 -15.3 19 -18.8 21 -10.6 51.2 -11 81.9 -1.1 8.9 2.9 23.8 9.8 25.5 11.9 0.8 1 -1 3.8 -7.7 11.9 -4.8 5.8 -9.1 10.6 -9.6 10.6 -0.5 0 -2.2 -0.9 -3.8 -2.1 -4.6 -3.3 -15.1 -7.7 -24.1 -10.1 -11.1 -3 -33.7 -3.3 -41 -0.5 -6 2.3 -11.8 8.6 -11.9 13 -0.2 5.1 0.2 7 1.7 9.4 3.5 5.6 11.4 7.7 35.3 9.8 22 1.9 30.8 3.2 39.1 5.7 14.9 4.6 24.4 11.8 29.7 22.6 2.6 5.4 2.8 6.4 2.8 18.7 0 11.1 -0.4 13.8 -2.3 18.5 -6.2 15.5 -20.7 26.2 -41.2 30.4 -9.8 1.9 -27.4 2.7 -37.5 1.6z"></path>
                <path d="M529.5 202.5 c-11.5 -2.5 -22.9 -8.7 -31.1 -16.9 -7.4 -7.4 -16.4 -21.1 -14.8 -22.6 0.5 -0.4 6.6 -3.8 13.6 -7.5 l12.6 -6.6 3.2 6 c4.1 7.7 10.5 14.3 17.2 17.8 4.8 2.5 6.3 2.8 15.3 2.8 7.9 0 10.9 -0.5 14.5 -2.1 6.7 -3.1 10.6 -6.8 13.7 -13.2 l2.8 -5.7 0.3 -52.2 0.3 -52.3 15.9 0 16 0 0 52.3 c0 56.6 -0.3 59.5 -5.6 70.1 -7.4 14.6 -19.5 24.2 -36.9 28.8 -9.6 2.6 -27.9 3.2 -37 1.3z"></path>
                <path d="M1274.2 200.4 c-6.6 -3.3 -10.6 -9.4 -10.6 -16.4 0 -17.9 24.8 -25.7 37.1 -11.7 8.4 9.6 5.6 22.4 -6.1 28.2 -6.8 3.4 -13.5 3.3 -20.4 -0.1z"></path>
                <path d="M0 125 l0 -75.1 52.8 0.3 c51.7 0.3 52.8 0.4 58.6 2.6 8.9 3.3 13.8 6.5 19.4 12.7 6 6.6 8.7 13.4 8.5 22 -0.2 10.6 -6 21.4 -14.3 26.9 l-4.1 2.7 6 3 c12.3 6.2 19.8 17.3 20.8 31.1 1.6 21.4 -11.9 39.8 -34.2 46.6 -4.2 1.3 -14.1 1.6 -59.2 1.9 l-54.3 0.4 0 -75.1z m102.5 46.7 c5.3 -2.4 7.4 -4.4 9.6 -9.2 4.7 -10.1 0.1 -21.6 -10.3 -26 -3.1 -1.2 -9.2 -1.5 -36.3 -1.5 l-32.5 0 0 19.6 0 19.5 32.8 -0.3 c28.7 -0.3 33.2 -0.5 36.7 -2.1z m-10.6 -61.6 c15.2 -3 19.3 -21.2 6.8 -30.5 -2.7 -2 -4.2 -2.1 -34.3 -2.4 l-31.4 -0.3 0 17.1 0 17 27.3 0 c14.9 -0.1 29.2 -0.5 31.6 -0.9z"></path>
                <path d="M339 125 l0 -75 13.8 0 13.7 0 38 46.5 c20.9 25.5 38.3 46.4 38.8 46.4 0.4 0.1 0.7 -20.8 0.7 -46.4 l0 -46.5 16 0 16 0 0 75 0 75 -13.8 0 -13.8 0 -38.5 -46.7 -38.4 -46.8 -0.3 46.8 -0.2 46.7 -16 0 -16 0 0 -75z"></path>
                <path d="M966 124.9 l0 -75 49.3 0.3 49.2 0.3 7.6 2.6 c4.2 1.4 10.1 4.3 13.3 6.4 19.2 12.7 26 37.9 15.4 57.7 -3.6 6.7 -13.1 16.1 -20.1 19.8 -2.8 1.5 -4.5 3 -4.2 3.8 0.2 0.7 7.9 14.1 17 29.8 9.1 15.7 16.5 28.7 16.5 29 0 0.2 -8.2 0.4 -18.2 0.4 l-18.3 -0.1 -15 -27.4 -14.9 -27.5 -22.8 0 -22.8 0 0 27.5 0 27.5 -16 0 -16 0 0 -75.1z m96.4 -9.8 c6.9 -3.4 10.6 -9.5 10.6 -17.3 0 -3.2 -0.6 -7.3 -1.4 -9.1 -1.7 -4.3 -7.6 -9.3 -12.3 -10.6 -2.3 -0.7 -15.6 -1.1 -32.5 -1.1 l-28.8 0 0 20.6 0 20.6 29.8 -0.4 c29 -0.3 29.8 -0.4 34.6 -2.7z"></path>
              </g>
            </svg>
            <div className="ml-3 flex flex-col justify-center h-6 hover:scale-105 transition-transform duration-300">
        </a>
        </div>
        </div>
      </div>
    </footer>
  );