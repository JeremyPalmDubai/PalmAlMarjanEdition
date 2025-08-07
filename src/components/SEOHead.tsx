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
    const baseUrl = 'https://invest-almarjanisland.com';
    if (currentPage === 'home') {
      return currentLanguage === 'en' ? baseUrl : `${baseUrl}/${currentLanguage}`;
    }
    return currentLanguage === 'en' ? `${baseUrl}/${currentPage}` : `${baseUrl}/${currentLanguage}/${currentPage}`;
  };

  const getHrefLangUrls = () => {
    const baseUrl = 'https://invest-almarjanisland.com';
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
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Palm Signature Real Estate" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="language" content={currentLanguage} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#000000" />
      <meta name="classification" content="Real Estate Investment" />
      <meta name="category" content="Luxury Real Estate" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Investors, Real Estate Buyers" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={getCanonicalUrl()} />
      
      {/* Hreflang Tags */}
      {Object.entries(hrefLangUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hreflang={lang} href={url} />
      ))}
      <link rel="alternate" hreflang="x-default" href={hrefLangUrls.en} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={getPageDescription()} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Palm Signature Real Estate" />
      <meta property="og:locale" content={localeMap[currentLanguage] || 'en_US'} />
      <meta property="og:image" content="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Al Marjan Island luxury real estate investment opportunities" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={getPageTitle()} />
      <meta name="twitter:description" content={getPageDescription()} />
      <meta name="twitter:image" content="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630" />
      <meta name="twitter:image:alt" content="Al Marjan Island luxury real estate investment opportunities" />
      
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
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Palm Signature Real Estate",
          "url": getCanonicalUrl(),
          "description": getPageDescription(),
          "foundingDate": "2020",
          "numberOfEmployees": "10-50",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Marjan Island, Ras Al Khaimah",
            "addressCountry": "AE",
            "addressRegion": "Ras Al Khaimah"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971-58-247-4950",
            "email": "hello@palmsignature.ae",
            "contactType": "customer service",
            "availableLanguage": ["en", "fr", "es", "nl"],
            "areaServed": "AE"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247",
            "bestRating": "5"
          },
          "priceRange": "$$$$",
          "currenciesAccepted": "AED, USD, EUR",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer"
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
              "item": "https://invest-almarjanisland.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Invest Al Marjan Island",
              "item": "https://invest-almarjanisland.com/invest-al-marjan-island"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Al Marjan Real Estate",
              "item": "https://invest-almarjanisland.com/al-marjan-real-estate"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};