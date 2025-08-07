import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AlMarjanIslandSection } from './components/AlMarjanIslandSection';
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

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  // Extract language and page from URL
  useEffect(() => {
    const path = window.location.pathname;
    console.log('Current path:', path); // Debug log
    
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
    
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Language change handler
  const handleLanguageChange = (lang: string) => {
    console.log('Changing language to:', lang); // Debug log
    let url = '';
    
    if (currentPage === 'home') {
      url = lang === 'en' ? '/' : `/${lang}`;
    } else {
      url = lang === 'en' ? `/${currentPage}` : `/${lang}/${currentPage}`;
    }
    
    // Update state and URL without page reload
    setCurrentLanguage(lang);
    window.history.pushState({}, '', url);
    
    // Update page title and meta tags for new language
    document.documentElement.lang = lang;
    
    // Add page_url parameter for Tally form
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page_url", window.location.href);
    window.history.replaceState({}, '', newUrl);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      console.log('PopState path:', path); // Debug log
      
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
      
      // Scroll to top when using browser navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <NavigationProvider onNavigate={handleNavigation}>
      <div className="min-h-screen bg-white">
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
        <HeroSection currentLanguage={currentLanguage} />
        <AlMarjanIslandSection currentLanguage={currentLanguage} />
        <OpportunitySection currentLanguage={currentLanguage} />
        <ExplosiveGrowthSection currentLanguage={currentLanguage} />
        <WynnEffectSection currentLanguage={currentLanguage} />
        <ROIMetricsSection currentLanguage={currentLanguage} />
        <DevelopmentsSection currentLanguage={currentLanguage} />
        <WhyPalmSignatureSection currentLanguage={currentLanguage} />
        <CEOSection currentLanguage={currentLanguage} />
        <LifestyleSection currentLanguage={currentLanguage} />
        <ContactSection currentLanguage={currentLanguage} />
        <Footer currentLanguage={currentLanguage} />
        
        {/* Mobile Navigation */}
        <nav className="mobile-nav lg:hidden">
          <div className="mobile-nav-container">
            <button 
              className="mobile-nav-item"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="nav-label">HOME</span>
            </button>
            
            <button 
              className="mobile-nav-item"
              onClick={() => {
                const element = document.getElementById('wynn-effect');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="nav-label">WYNN</span>
            </button>
            
            <button 
              className="mobile-nav-item"
              onClick={() => {
                const element = document.getElementById('roi-metrics');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="nav-label">ROI</span>
            </button>
            
            <button 
              className="mobile-nav-item"
              onClick={() => {
                const element = document.getElementById('developments');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="nav-label">INVEST</span>
            </button>
            
            <a 
              href="#contact"
              className="mobile-contact-btn"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </NavigationProvider>
  );
}

export default App;