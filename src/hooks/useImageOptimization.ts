import { useState, useEffect, useCallback } from 'react';
import { 
  generateResponsiveSrcSet, 
  generateSizesAttribute, 
  compressImageUrl,
  trackImagePerformance 
} from '../utils/imageOptimization';

interface UseImageOptimizationProps {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  breakpoints?: number[];
  sizes?: { [key: string]: string };
}

export const useImageOptimization = ({
  src,
  alt,
  priority = false,
  quality = 85,
  breakpoints = [400, 800, 1200, 1600, 2000],
  sizes
}: UseImageOptimizationProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [loadTime, setLoadTime] = useState<number | null>(null);

  // Generate optimized image attributes
  const optimizedSrc = compressImageUrl(src, { quality });
  const srcSet = generateResponsiveSrcSet(src, breakpoints);
  const sizesAttr = generateSizesAttribute(sizes);

  // Handle image load
  const handleLoad = useCallback((img: HTMLImageElement) => {
    const startTime = performance.now();
    setIsLoaded(true);
    
    // Track performance
    trackImagePerformance(img, alt);
    
    // Measure load time
    const endTime = performance.now();
    setLoadTime(endTime - startTime);
    
    // Track Core Web Vitals - LCP
    if (priority) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.element === img) {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'lcp_image', {
                event_category: 'Performance',
                event_label: alt,
                value: Math.round(entry.startTime)
              });
            }
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [alt, priority]);

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'image_load_error', {
        event_category: 'Error',
        event_label: alt,
        value: 1
      });
    }
  }, [alt]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    return () => observer.disconnect();
  }, [priority]);

  // Preload critical images
  useEffect(() => {
    if (priority && !isLoaded) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      if (srcSet) link.setAttribute('imagesrcset', srcSet);
      if (sizesAttr) link.setAttribute('imagesizes', sizesAttr);
      
      document.head.appendChild(link);
      
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority, optimizedSrc, srcSet, sizesAttr, isLoaded]);

  return {
    optimizedSrc,
    srcSet,
    sizes: sizesAttr,
    isLoaded,
    isInView,
    hasError,
    loadTime,
    shouldLoad: isInView || priority,
    handleLoad,
    handleError,
    loading: priority ? 'eager' as const : 'lazy' as const,
    fetchPriority: priority ? 'high' as const : 'low' as const
  };
};