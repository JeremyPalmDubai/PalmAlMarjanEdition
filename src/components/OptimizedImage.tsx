import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
  onError,
  quality = 85,
  format = 'webp'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Optimize alt text length (10-125 characters)
  const optimizedAlt = alt.length > 125 ? alt.substring(0, 122) + '...' : alt;
  
  // Generate SEO-friendly filename
  const generateSEOFilename = (originalSrc: string, altText: string) => {
    const extension = format;
    const seoFilename = altText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 50)
      .replace(/^-|-$/g, '');
    return `${seoFilename}.${extension}`;
  };

  // Generate responsive image sources with compression
  const generateOptimizedSrcSet = (baseSrc: string) => {
    const baseUrl = baseSrc.split('?')[0];
    const breakpoints = [400, 600, 800, 1200, 1600, 2000];
    
    return breakpoints.map(width => {
      const optimizedHeight = height ? Math.round((height * width) / (width || 800)) : Math.round(width * 0.75);
      return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${optimizedHeight}&fit=crop&fm=${format}&q=${quality} ${width}w`;
    }).join(', ');
  };

  // Generate optimized main src
  const getOptimizedSrc = (originalSrc: string) => {
    const baseUrl = originalSrc.split('?')[0];
    const optimizedWidth = width || 1200;
    const optimizedHeight = height || Math.round(optimizedWidth * 0.75);
    return `${baseUrl}?auto=compress&cs=tinysrgb&w=${optimizedWidth}&h=${optimizedHeight}&fit=crop&fm=${format}&q=${quality}`;
  };

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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
    
    // Track image load performance
    if (typeof gtag !== 'undefined') {
      gtag('event', 'image_load', {
        event_category: 'Performance',
        event_label: optimizedAlt,
        value: Math.round(performance.now())
      });
    }
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
    console.warn(`Failed to load image: ${src}`);
    
    // Track image errors
    if (typeof gtag !== 'undefined') {
      gtag('event', 'image_error', {
        event_category: 'Error',
        event_label: optimizedAlt,
        value: 1
      });
    }
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = generateOptimizedSrcSet(src);
  const seoFilename = generateSEOFilename(src, optimizedAlt);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Structured Data for Image SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": optimizedSrc,
            "name": optimizedAlt,
            "description": title || optimizedAlt,
            "width": width,
            "height": height,
            "encodingFormat": `image/${format}`,
            "author": {
              "@type": "Organization",
              "name": "Palm Signature Real Estate"
            },
            "copyrightHolder": {
              "@type": "Organization", 
              "name": "Palm Signature Real Estate"
            },
            "license": "https://invest-almarjanisland.com/terms",
            "acquireLicensePage": "https://invest-almarjanisland.com/terms"
          })
        }}
      />

      {isInView && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={optimizedAlt}
          title={title}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${hasError ? 'hidden' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
          data-seo-filename={seoFilename}
        />
      )}

      {/* Loading placeholder */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Error fallback with SEO-friendly alt text */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-gray-400 text-sm mb-2">Image unavailable</div>
            <div className="text-xs text-gray-300">{optimizedAlt}</div>
          </div>
        </div>
      )}

      {/* Preload hint for critical images */}
      {priority && (
        <link
          rel="preload"
          as="image"
          href={optimizedSrc}
          imageSrcSet={srcSet}
          imageSizes={sizes}
        />
      )}
    </div>
  );
};