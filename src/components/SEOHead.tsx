import React from 'react';
import { Helmet } from 'react-helmet-async';
import { translations } from '../data/translations';

interface SEOHeadProps {
  currentLanguage: string;
  currentPage: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentLanguage, currentPage }) => {
  const t = translations[currentLanguage];
  
  const getPageTitle = () => {
    switch (currentPage) {
      case 'sitemap':
        return t.seo.sitemap.title;
      case 'privacy':
        return t.seo.privacy.title;
      case 'terms':
        return t.seo.terms.title;
      default:
        return t.seo.home.title;
    }
  };

  const getPageDescription = () => {
    switch (currentPage) {
      case 'sitemap':
        return t.seo.sitemap.description;
      case 'privacy':
        return t.seo.privacy.description;
      case 'terms':
        return t.seo.terms.description;
      default:
        return t.seo.home.description;
    }
  };

  const getCanonicalUrl = () => {
    const baseUrl = 'https://investalmarjanisland.com';
    if (currentPage === 'home') {
      return currentLanguage === 'en' ? baseUrl : `${baseUrl}/${currentLanguage}`;
    }
    return currentLanguage === 'en' ? `${baseUrl}/${currentPage}` : `${baseUrl}/${currentLanguage}/${currentPage}`;
  };

  const getHrefLangUrls = () => {
    const baseUrl = 'https://investalmarjanisland.com';
    const urls = {
      en: currentPage === 'home' ? baseUrl : `${baseUrl}/${currentPage}`,
      fr: currentPage === 'home' ? `${baseUrl}/fr` : `${baseUrl}/fr/${currentPage}`,
      es: currentPage === 'home' ? `${baseUrl}/es` : `${baseUrl}/es/${currentPage}`,
      nl: currentPage === 'home' ? `${baseUrl}/nl` : `${baseUrl}/nl/${currentPage}`
    };
    return urls;
  };

  const hrefLangUrls = getHrefLangUrls();

  const localeMap = {
    en: 'en_US',
    fr: 'fr_FR',
    es: 'es_ES',
    nl: 'nl_NL'
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{getPageTitle()}</title>
      <meta name="description" content={getPageDescription()} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Palm Signature Real Estate" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="bingbot" content="index, follow, max-image-preview:large" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="language" content={currentLanguage} />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#000000" />
      <meta name="classification" content="Real Estate Investment" />
      <meta name="category" content="Luxury Real Estate" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Investors, Real Estate Buyers, High Net Worth Individuals" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="AE-RK" />
      <meta name="geo.placename" content="Al Marjan Island, Ras Al Khaimah" />
      <meta name="geo.position" content="25.6845;55.7755" />
      <meta name="ICBM" content="25.6845, 55.7755" />
      <meta name="keywords" content="invest al marjan island, al marjan real estate, wynn casino al marjan, ras al khaimah property investment, luxury villas uae, beachfront property dubai, tax free property uae, freehold property ras al khaimah, al marjan island apartments for sale, off plan properties uae 2025, dubai real estate investment, uae property investment guide, al marjan island villas, luxury real estate ras al khaimah, buy property al marjan island, invest in ras al khaimah, uae real estate market 2025, property for sale al marjan island, luxury apartments ras al khaimah, beachfront villas uae" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={getCanonicalUrl()} />
      
      {/* Hreflang Tags */}
      {Object.entries(hrefLangUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hreflang={lang} href={url} />
      ))}
      <link rel="alternate" hreflang="x-default" href={hrefLangUrls.en} />
      
      {/* Open Graph Tags - Enhanced for Lead Generation */}
      <meta property="og:title" content={`${getPageTitle()} | 33% ROI | Wynn Casino 2027`} />
      <meta property="og:description" content={`${getPageDescription()} | 100% Freehold | 0% Tax | 5-Year Payment Plans | Contact +971-58-247-4950`} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Invest Al Marjan Island - Palm Signature Real Estate" />
      <meta property="og:locale" content={localeMap[currentLanguage] || 'en_US'} />
      <meta property="og:image" content="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp" />
      <meta property="og:image:secure_url" content="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Invest in Al Marjan Island luxury beachfront real estate - 33% annual appreciation near Wynn Casino" />
      <meta property="og:phone_number" content="+971582474950" />
      <meta property="og:email" content="hello@palmsignature.ae" />
      
      {/* Twitter Card Tags - Enhanced for Lead Generation */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${getPageTitle()} | 33% ROI Near Wynn Casino`} />
      <meta name="twitter:description" content={`${getPageDescription()} | Call +971-58-247-4950 | 0% Tax | 100% Freehold`} />
      <meta name="twitter:image" content="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp" />
      <meta name="twitter:image:alt" content="Invest Al Marjan Island - 33% annual ROI luxury beachfront properties near Wynn Casino 2027" />
      <meta name="twitter:label1" content="ROI" />
      <meta name="twitter:data1" content="33.3% Annual" />
      <meta name="twitter:label2" content="Contact" />
      <meta name="twitter:data2" content="+971-58-247-4950" />
      
      {/* Additional Social Media Tags */}
      <meta property="fb:app_id" content="675636214954539" />
      <meta name="twitter:site" content="@PalmSignatureRE" />
      <meta name="twitter:creator" content="@GabriellaMagalhaes" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://palmdubai.fr" />
      <link rel="preconnect" href="https://images.pexels.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//tally.so" />
      
      {/* Additional DNS Prefetch */}
      <link rel="dns-prefetch" href="//palmdubai.fr" />
      <link rel="dns-prefetch" href="//www.mondrian-almarjan.com" />
      <link rel="dns-prefetch" href="//www.jwmarriot-almarjan.com" />
      <link rel="dns-prefetch" href="//www.unoluxe-almarjan.com" />
      <link rel="dns-prefetch" href="//www.arthouse-almarjan.com" />
      <link rel="dns-prefetch" href="//palmalmarjan.com" />
      
      {/* Preload Critical Resources */}
      <link 
        rel="preload" 
        href="https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp" 
        as="image" 
        type="image/webp"
      />
      
      {/* LocalBusiness + RealEstateAgent Schema - Enhanced for Lead Generation */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["RealEstateAgent", "LocalBusiness"],
          "name": "Palm Signature Real Estate - Invest Al Marjan Island",
          "alternateName": "Palm Signature",
          "url": getCanonicalUrl(),
          "logo": "https://investalmarjanisland.com/logo.png",
          "image": "https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp",
          "description": "Leading real estate agency specializing in Al Marjan Island luxury property investments with 33.3% annual appreciation. Expert consultants for beachfront villas, apartments, and penthouses near Wynn Casino 2027.",
          "foundingDate": "2020",
          "slogan": "Your Gateway to Al Marjan Island Luxury Real Estate",
          "areaServed": [
            {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "25.6845",
                "longitude": "55.7755"
              },
              "geoRadius": "50000"
            },
            {
              "@type": "Place",
              "name": "Al Marjan Island"
            },
            {
              "@type": "Place",
              "name": "Ras Al Khaimah"
            },
            {
              "@type": "Place",
              "name": "United Arab Emirates"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Marjan Island",
            "addressLocality": "Ras Al Khaimah",
            "addressRegion": "Ras Al Khaimah Emirate",
            "addressCountry": "AE",
            "postalCode": "0000"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.6845",
            "longitude": "55.7755"
          },
          "telephone": "+971-58-247-4950",
          "email": "hello@palmsignature.ae",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+971-58-247-4950",
              "contactType": "sales",
              "email": "hello@palmsignature.ae",
              "availableLanguage": ["en", "fr", "es", "nl", "ar"],
              "areaServed": "AE",
              "contactOption": ["TollFree", "HearingImpairedSupported"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "22:00"
              }
            },
            {
              "@type": "ContactPoint",
              "telephone": "+971-56-600-1314",
              "contactType": "customer support",
              "availableLanguage": ["en", "fr", "ar"],
              "areaServed": "Worldwide"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "312",
            "bestRating": "5",
            "worstRating": "1"
          },
          "priceRange": "AED 750,000 - AED 15,000,000",
          "currenciesAccepted": "AED, USD, EUR, GBP",
          "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Cryptocurrency"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "22:00"
          },
          "sameAs": [
            "https://www.linkedin.com/company/palm-signature",
            "https://www.instagram.com/palmsignature.ae",
            "https://www.facebook.com/palmsignature.ae",
            "https://twitter.com/PalmSignatureRE"
          ],
          "knowsAbout": [
            "Real Estate Investment",
            "Luxury Properties",
            "Al Marjan Island",
            "Wynn Casino Properties",
            "Beachfront Villas",
            "Tax-Free Property Investment",
            "Freehold Ownership UAE"
          ],
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Luxury Beachfront Villas Al Marjan Island"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2500000",
                "priceCurrency": "AED"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Waterfront Apartments Near Wynn Casino"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "1200000",
                "priceCurrency": "AED"
              }
            }
          ]
        })}
      </script>
      
      {/* FAQ Schema for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the ROI on Al Marjan Island properties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Al Marjan Island properties show 33.3% year-over-year appreciation and outperform global real estate markets by 400%. Invest Al Marjan Island for exceptional ROI potential with the upcoming Wynn Casino effect."
              }
            },
            {
              "@type": "Question", 
              "name": "When does the Wynn Casino open?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Wynn Resort & Casino opens in 2027 with a $3.9 billion investment. This will significantly boost Al Marjan Island real estate values. Invest near Wynn Casino for maximum appreciation potential."
              }
            },
            {
              "@type": "Question",
              "name": "Can foreigners buy property on Al Marjan Island?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Al Marjan Island offers 100% freehold ownership to international investors with 0% taxes on capital gains. Invest Al Marjan Island with complete ownership rights and tax-free appreciation."
              }
            },
            {
              "@type": "Question",
              "name": "Why choose Al Marjan real estate over other UAE locations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Al Marjan real estate offers superior ROI with 33.3% appreciation, proximity to the $3.9B Wynn Casino, pristine beaches, world-class developments, and 5-year interest-free payment plans. It's the next Palm Jumeirah."
              }
            }
          ]
        })}
      </script>
      
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://investalmarjanisland.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Invest Al Marjan Island",
              "item": "https://investalmarjanisland.com/invest-al-marjan-island"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Al Marjan Real Estate",
              "item": "https://investalmarjanisland.com/al-marjan-real-estate"
            }
          ]
        })}
      </script>

      {/* Place Schema - Al Marjan Island */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": "Al Marjan Island",
          "description": "Luxury beachfront real estate investment destination in Ras Al Khaimah, UAE featuring world-class developments and the upcoming Wynn Casino",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.6845",
            "longitude": "55.7755"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ras Al Khaimah",
            "addressRegion": "Ras Al Khaimah Emirate",
            "addressCountry": "AE"
          },
          "hasMap": "https://goo.gl/maps/AlMarjanIsland",
          "image": "https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Wynn Resort & Casino",
              "value": "$3.9B Opening 2027"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Private Beaches",
              "value": "Pristine coastline"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "World-Class Developments",
              "value": "Luxury properties"
            }
          ]
        })}
      </script>

      {/* RealEstateListing Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Al Marjan Island Luxury Real Estate Investment Opportunities",
          "description": "Invest in Al Marjan Island luxury properties with 33.3% year-over-year appreciation, tax-free ownership, and proximity to Wynn Casino opening 2027",
          "url": getCanonicalUrl(),
          "image": "https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp",
          "datePosted": "2025-01-26",
          "validThrough": "2027-12-31",
          "price": "From AED 750,000",
          "priceCurrency": "AED",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Marjan Island",
            "addressRegion": "Ras Al Khaimah",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.6845",
            "longitude": "55.7755"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Property Type",
              "value": "Beachfront Villas, Apartments, Townhouses"
            },
            {
              "@type": "PropertyValue",
              "name": "Ownership",
              "value": "100% Freehold"
            },
            {
              "@type": "PropertyValue",
              "name": "Tax Benefits",
              "value": "0% Property Tax, 0% Capital Gains Tax"
            },
            {
              "@type": "PropertyValue",
              "name": "Payment Plan",
              "value": "5-Year Interest-Free Available"
            },
            {
              "@type": "PropertyValue",
              "name": "ROI",
              "value": "33.3% Year-over-Year Appreciation"
            }
          ]
        })}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Real Estate Investment Consulting",
          "provider": {
            "@type": "Organization",
            "name": "Palm Signature Real Estate",
            "telephone": "+971-58-247-4950",
            "email": "hello@palmsignature.ae"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Al Marjan Island, Ras Al Khaimah, UAE"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Al Marjan Island Properties",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Luxury Beachfront Villas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Waterfront Apartments"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Designer Penthouses"
                }
              }
            ]
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://investalmarjanisland.com",
            "servicePhone": "+971-58-247-4950",
            "availableLanguage": ["en", "fr", "es", "nl"]
          }
        })}
      </script>

      {/* WebSite Schema with SearchAction */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Invest Al Marjan Island",
          "alternateName": "Al Marjan Island Real Estate Investment",
          "url": "https://investalmarjanisland.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://investalmarjanisland.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": ["en", "fr", "es", "nl"]
        })}
      </script>
    </Helmet>
  );
};