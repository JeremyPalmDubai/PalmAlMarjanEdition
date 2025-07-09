import React from 'react';
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
        return `Sitemap - ${t.seo.sitemap.title}`;
      case 'privacy':
        return `Privacy Policy - ${t.seo.privacy.title}`;
      case 'terms':
        return `Terms of Service - ${t.seo.terms.title}`;
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

  React.useEffect(() => {
    // Update document title
    document.title = getPageTitle();

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getPageDescription());
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', getCanonicalUrl());
    }

    // Update hreflang tags
    const existingHrefLangs = document.querySelectorAll('link[hreflang]');
    existingHrefLangs.forEach(link => link.remove());

    // Add new hreflang tags
    Object.entries(hrefLangUrls).forEach(([lang, url]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
    });

    // Add x-default hreflang
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = hrefLangUrls.en;
    document.head.appendChild(defaultLink);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', getPageTitle());
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', getPageDescription());
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', getCanonicalUrl());
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      const localeMap = {
        en: 'en_US',
        fr: 'fr_FR',
        es: 'es_ES',
        nl: 'nl_NL'
      };
      ogLocale.setAttribute('content', localeMap[currentLanguage] || 'en_US');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', getPageTitle());
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', getPageDescription());
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t.seo.keywords);
    }

  }, [currentLanguage, currentPage]);

  return null;
};