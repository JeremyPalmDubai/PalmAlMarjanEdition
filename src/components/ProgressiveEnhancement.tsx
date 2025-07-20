import React, { useState, useEffect } from 'react';

interface ProgressiveEnhancementProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  feature?: string;
  className?: string;
}

export const ProgressiveEnhancement: React.FC<ProgressiveEnhancementProps> = ({
  children,
  fallback,
  feature,
  className = ''
}) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for feature support
    let supported = true;

    if (feature) {
      switch (feature) {
        case 'intersection-observer':
          supported = 'IntersectionObserver' in window;
          break;
        case 'css-grid':
          supported = CSS.supports('display', 'grid');
          break;
        case 'css-flexbox':
          supported = CSS.supports('display', 'flex');
          break;
        case 'webp':
          supported = document.createElement('canvas')
            .toDataURL('image/webp')
            .indexOf('data:image/webp') === 0;
          break;
        case 'local-storage':
          try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            supported = true;
          } catch {
            supported = false;
          }
          break;
        case 'reduced-motion':
          supported = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          break;
        default:
          supported = true;
      }
    }

    setIsSupported(supported);
    setIsLoaded(true);
  }, [feature]);

  if (!isLoaded) {
    return (
      <div className={`progressive-enhancement-loading ${className}`}>
        {fallback || <div>Loading...</div>}
      </div>
    );
  }

  return (
    <div className={`progressive-enhancement ${className}`}>
      {isSupported ? children : (fallback || children)}
    </div>
  );
};

// Hook for progressive enhancement
export const useProgressiveEnhancement = (feature?: string) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let supported = true;

    if (feature) {
      switch (feature) {
        case 'intersection-observer':
          supported = 'IntersectionObserver' in window;
          break;
        case 'css-animations':
          supported = CSS.supports('animation-name', 'test');
          break;
        case 'touch':
          supported = 'ontouchstart' in window;
          break;
        case 'hover':
          supported = window.matchMedia('(hover: hover)').matches;
          break;
        default:
          supported = true;
      }
    }

    setIsSupported(supported);
    setIsLoaded(true);
  }, [feature]);

  return { isSupported, isLoaded };
};