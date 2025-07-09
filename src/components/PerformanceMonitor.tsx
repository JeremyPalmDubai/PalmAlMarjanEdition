import { useEffect } from 'react';

export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(entry.startTime),
              metric_rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs_improvement' : 'poor'
            });
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(fid),
              metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
            });
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    };

    // Network information monitoring
    const monitorNetworkInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'network_info', {
            effective_type: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt
          });
        }
      }
    };

    // Memory usage monitoring
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'memory_usage', {
            used_js_heap_size: memory.usedJSHeapSize,
            total_js_heap_size: memory.totalJSHeapSize,
            js_heap_size_limit: memory.jsHeapSizeLimit
          });
        }
      }
    };

    // Page load performance
    const monitorPageLoad = () => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_performance', {
              dns_lookup: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
              tcp_connect: Math.round(navigation.connectEnd - navigation.connectStart),
              server_response: Math.round(navigation.responseStart - navigation.requestStart),
              dom_processing: Math.round(navigation.domContentLoadedEventEnd - navigation.responseEnd),
              total_load_time: Math.round(navigation.loadEventEnd - navigation.navigationStart)
            });
          }
        }, 0);
      });
    };

    // Initialize monitoring
    observeWebVitals();
    monitorNetworkInfo();
    monitorMemoryUsage();
    monitorPageLoad();

    // Error tracking
    window.addEventListener('error', (event) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: event.error?.message || 'Unknown error',
          fatal: false,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        });
      }
    });

    // Unhandled promise rejection tracking
    window.addEventListener('unhandledrejection', (event) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: event.reason?.message || 'Unhandled promise rejection',
          fatal: false
        });
      }
    });

  }, []);

  return null;
};