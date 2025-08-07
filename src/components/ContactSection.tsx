import React from 'react';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLanguage: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  return (
    <section id="contact" className="tesla-section bg-gray-50">
      <div className="tesla-container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tesla-heading mb-8">
            {t.contact.title}
          </h2>
          <p className="text-xl tesla-subheading max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in">
            <h3 className="text-2xl tesla-heading mb-12">{t.contact.info.title}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-black mb-1">{t.contact.info.phone.label}</div>
                  <div className="tesla-subheading">
                    <a 
                      href={`tel:${t.contact.info.phone.value}`} 
                      className="hover:text-black"
                      onClick={() => {
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'contact', { method: 'phone' });
                        }
                        if (typeof fbq !== 'undefined') {
                          fbq('track', 'Contact', { content_name: 'Phone Call' });
                        }
                      }}
                    >
                      {t.contact.info.phone.value}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-black mb-1">{t.contact.info.email.label}</div>
                  <div className="tesla-subheading">
                    <a 
                      href={`mailto:${t.contact.info.email.value}`} 
                      className="hover:text-black"
                      onClick={() => {
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'contact', { method: 'email' });
                        }
                        if (typeof fbq !== 'undefined') {
                          fbq('track', 'Contact', { content_name: 'Email' });
                        }
                      }}
                    >
                      {t.contact.info.email.value}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-black mb-1">WhatsApp Gabriella</div>
                  <div className="tesla-subheading">
                    <a 
                      href={`https://wa.me/${t.contact.whatsapp.gabriella.replace(/\D/g, '')}?text=Hello Gabriella, I'm interested in Al Marjan Island investment opportunities.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black"
                      onClick={() => {
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'contact', { method: 'whatsapp' });
                        }
                        if (typeof fbq !== 'undefined') {
                          fbq('track', 'Contact', { content_name: 'WhatsApp' });
                        }
                      }}
                    >
                      {t.contact.whatsapp.gabriella}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Palm Signature */}
            <div className="mt-16 bg-black text-white p-8">
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4477 3718" fill="none" className="h-6 w-auto mr-3">
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
              <p className="text-gray-300 mb-4 font-light">{t.contact.about.description}</p>
              
              {/* Legal Information */}
              <div className="text-xs text-gray-400 mb-4 space-y-1">
                <div>{t.contact.legal.company}</div>
                <div>{t.contact.legal.license}</div>
                <div>{t.contact.legal.rera}</div>
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
          </div>

          {/* Tally Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white tesla-shadow overflow-hidden p-4 sm:p-6 lg:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl tesla-heading mb-6 sm:mb-8 text-center">
                {t.contact.form.title}
              </h3>
              
              <div className="w-full" style={{ minHeight: '404px' }}>
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400 animate-pulse"></div>
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-600 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-green-800">Réponse garantie sous 2h</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Notre équipe d'experts vous contactera dans les 2 heures pour discuter de vos opportunités d'investissement personnalisées.
                  </p>
                </div>
                <iframe
                  src="https://tally.so/embed/mZDk45?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source=investalmarjanisland"
                  loading="lazy"
                  width="100%"
                  height="404"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Lead Form Palm Signature"
                  className="w-full"
                  style={{ 
                    border: 'none',
                    minHeight: '404px',
                    backgroundColor: 'transparent'
                  }}
                  onLoad={() => {
                    // Track form view
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'form_view', { form_name: 'Lead Form' });
                    }
                    if (typeof fbq !== 'undefined') {
                      fbq('track', 'ViewContent', { content_name: 'Lead Form' });
                    }
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}