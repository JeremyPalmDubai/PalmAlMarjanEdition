import React, { useState } from 'react';
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

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation handler
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  // Check URL for current page
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/sitemap' || path.includes('sitemap')) {
      setCurrentPage('sitemap');
    } else if (path === '/privacy' || path.includes('privacy')) {
      setCurrentPage('privacy');
    } else if (path === '/terms' || path.includes('terms')) {
      setCurrentPage('terms');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Handle browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/sitemap' || path.includes('sitemap')) {
        setCurrentPage('sitemap');
      } else if (path === '/privacy' || path.includes('privacy')) {
        setCurrentPage('privacy');
      } else if (path === '/terms' || path.includes('terms')) {
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
          <Header currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
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
          <Header currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
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
          <Header currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
          <TermsOfServicePage currentLanguage={currentLanguage} />
          <Footer currentLanguage={currentLanguage} />
        </div>
      </NavigationProvider>
    );
  }

  return (
    <NavigationProvider onNavigate={handleNavigation}>
      <div className="min-h-screen bg-white">
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17243978314"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17243978314');
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
            `,
          }}
        />
        
        <Header currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
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
        <Footer currentLanguage={currentLanguage} />
        <MobileNavigation currentLanguage={currentLanguage} />
      </div>
    </NavigationProvider>
  );
}

export default App;