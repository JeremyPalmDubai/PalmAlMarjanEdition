import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileNavigation } from './components/MobileNavigation';
import { HeroSection } from './components/HeroSection';
import { OpportunitySection } from './components/OpportunitySection';
import { ExplosiveGrowthSection } from './components/ExplosiveGrowthSection';
import { WynnEffectSection } from './components/WynnEffectSection';
import { ROIMetricsSection } from './components/ROIMetricsSection';
import { DevelopmentsSection } from './components/DevelopmentsSection';
import { LifestyleSection } from './components/LifestyleSection';
import { WhyPalmSignatureSection } from './components/WhyPalmSignatureSection';
import { CEOSection } from './components/CEOSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SitemapPage } from './components/SitemapPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { NavigationProvider } from './components/NavigationProvider';
import { SEOHead } from './components/SEOHead';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { AccessibilityProvider } from './components/AccessibilityProvider';
import { AccessibilityControls } from './components/AccessibilityControls';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  // Extract language and page from URL
  useEffect(() => {
    const path = window.location.pathname;
    
    // Language detection from URL
    if (path.startsWith('/fr')) {
      setCurrentLanguage('fr');
    } else if (path.startsWith('/es')) {
      setCurrentLanguage('es');
    } else if (path.startsWith('/nl')) {
      setCurrentLanguage('nl');
    } else {
      setCurrentLanguage('en');
    }

    // Page detection
    if (path.includes('sitemap')) {
      setCurrentPage('sitemap');
    } else if (path.includes('privacy')) {
      setCurrentPage('privacy');
    } else if (path.includes('terms')) {
      setCurrentPage('terms');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Navigation handler with language support
  const handleNavigation = (page: string, lang?: string) => {
    const language = lang || currentLanguage;
    let url = '';
    
    if (page === 'home') {
      url = language === 'en' ? '/' : `/${language}`;
    } else {
      url = language === 'en' ? `/${page}` : `/${language}/${page}`;
    }
    
    setCurrentPage(page);
    if (lang) setCurrentLanguage(lang);
    window.history.pushState({}, '', url);
  };

  // Language change handler
  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    let url = '';
    
    if (currentPage === 'home') {
      url = lang === 'en' ? '/' : `/${lang}`;
    } else {
      url = lang === 'en' ? `/${currentPage}` : `/${lang}/${currentPage}`;
    }
    
    window.history.pushState({}, '', url);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      
      // Language detection
      if (path.startsWith('/fr')) {
        setCurrentLanguage('fr');
      } else if (path.startsWith('/es')) {
        setCurrentLanguage('es');
      } else if (path.startsWith('/nl')) {
        setCurrentLanguage('nl');
      } else {
        setCurrentLanguage('en');
      }

      // Page detection
      if (path.includes('sitemap')) {
        setCurrentPage('sitemap');
      } else if (path.includes('privacy')) {
        setCurrentPage('privacy');
      } else if (path.includes('terms')) {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPage === 'sitemap') {
    return (
      <NavigationProvider onNavigate={handleNavigation}>
        <div className="min-h-screen bg-white">
          <SEOHead currentLanguage={currentLanguage} currentPage={currentPage} />
          <Header currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
          <SitemapPage currentLanguage={currentLanguage} />
          <Footer currentLanguage={currentLanguage} />
        </div>
      </NavigationProvider>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <NavigationProvider onNavigate={handleNavigation}>
        <div className="min-h-screen bg-white">
          <SEOHead currentLanguage={currentLanguage} currentPage={currentPage} />
          <Header currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
          <PrivacyPolicyPage currentLanguage={currentLanguage} />
          <Footer currentLanguage={currentLanguage} />
        </div>
      </NavigationProvider>
    );
  }

  if (currentPage === 'terms') {
    return (
      <NavigationProvider onNavigate={handleNavigation}>
        <div className="min-h-screen bg-white">
          <SEOHead currentLanguage={currentLanguage} currentPage={currentPage} />
          <Header currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
          <TermsOfServicePage currentLanguage={currentLanguage} />
          <Footer currentLanguage={currentLanguage} />
        </div>
      </NavigationProvider>
    );
  }

  return (
    <AccessibilityProvider>
      <NavigationProvider onNavigate={handleNavigation}>
        <div className="min-h-screen bg-white">
          {/* Skip links for keyboard navigation */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <a href="#navigation" className="skip-link">
            Skip to navigation
          </a>
          
          <PerformanceMonitor />
          <SEOHead currentLanguage={currentLanguage} currentPage={currentPage} />
        
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17243978314"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17243978314');
              
              // Track page views
              gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                language: '${currentLanguage}'
              });
            `,
          }}
        />
        
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '675636214954539');
              fbq('track', 'PageView');
              
              // Track custom events
              fbq('track', 'ViewContent', {
                content_name: 'Al Marjan Island Investment',
                content_category: 'Real Estate',
                value: 200000,
                currency: 'USD',
                language: '${currentLanguage}'
              });
            `,
          }}
        />
        
        {/* Enhanced tracking for user interactions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Track scroll depth
              let maxScroll = 0;
              window.addEventListener('scroll', function() {
                const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > maxScroll) {
                  maxScroll = scrollPercent;
                  if (maxScroll >= 25 && maxScroll < 50) {
                    gtag('event', 'scroll', { percent_scrolled: 25, language: '${currentLanguage}' });
                    fbq('track', 'ViewContent', { content_name: '25% Page Scroll', language: '${currentLanguage}' });
                  } else if (maxScroll >= 50 && maxScroll < 75) {
                    gtag('event', 'scroll', { percent_scrolled: 50, language: '${currentLanguage}' });
                    fbq('track', 'ViewContent', { content_name: '50% Page Scroll', language: '${currentLanguage}' });
                  } else if (maxScroll >= 75) {
                    gtag('event', 'scroll', { percent_scrolled: 75, language: '${currentLanguage}' });
                    fbq('track', 'ViewContent', { content_name: '75% Page Scroll', language: '${currentLanguage}' });
                  }
                }
              });
              
              // Track time on page
              let timeOnPage = 0;
              setInterval(function() {
                timeOnPage += 30;
                if (timeOnPage === 30) {
                  gtag('event', 'timing_complete', { name: 'time_on_page', value: 30, language: '${currentLanguage}' });
                  fbq('track', 'ViewContent', { content_name: '30 seconds on page', language: '${currentLanguage}' });
                } else if (timeOnPage === 60) {
                  gtag('event', 'timing_complete', { name: 'time_on_page', value: 60, language: '${currentLanguage}' });
                  fbq('track', 'ViewContent', { content_name: '1 minute on page', language: '${currentLanguage}' });
                } else if (timeOnPage === 120) {
                  gtag('event', 'timing_complete', { name: 'time_on_page', value: 120, language: '${currentLanguage}' });
                  fbq('track', 'ViewContent', { content_name: '2 minutes on page', language: '${currentLanguage}' });
                }
              }, 30000);
            `,
          }}
        />
        
        <Header currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
        
        <main id="main-content" role="main">
          <HeroSection currentLanguage={currentLanguage} />
          <OpportunitySection currentLanguage={currentLanguage} />
          <ExplosiveGrowthSection currentLanguage={currentLanguage} />
          <WynnEffectSection currentLanguage={currentLanguage} />
          <ROIMetricsSection currentLanguage={currentLanguage} />
          <DevelopmentsSection currentLanguage={currentLanguage} />
          <WhyPalmSignatureSection currentLanguage={currentLanguage} />
          <CEOSection currentLanguage={currentLanguage} />
          <LifestyleSection currentLanguage={currentLanguage} />
          <ContactSection currentLanguage={currentLanguage} />
        </main>
        
        <Footer currentLanguage={currentLanguage} />
        
        <div id="navigation">
          <MobileNavigation currentLanguage={currentLanguage} />
        </div>
        
        <AccessibilityControls />
        </div>
      </NavigationProvider>
    </AccessibilityProvider>
  );
}

export default App;