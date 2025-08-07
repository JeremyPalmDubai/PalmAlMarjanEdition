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
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const baseUrl = baseSrc.split('?')[0];
    const params = baseSrc.includes('?') ? '&' + baseSrc.split('?')[1] : '';
    
    return [
      `${baseUrl}?auto=compress&cs=tinysrgb&w=400${params} 400w`,
      `${baseUrl}?auto=compress&cs=tinysrgb&w=800${params} 800w`,
      `${baseUrl}?auto=compress&cs=tinysrgb&w=1200${params} 1200w`,
      `${baseUrl}?auto=compress&cs=tinysrgb&w=1600${params} 1600w`,
      `${baseUrl}?auto=compress&cs=tinysrgb&w=2000${params} 2000w`
    ].join(', ');
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
        event_label: alt,
        value: Math.round(performance.now())
      });
    }
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
    console.warn(`Failed to load image: ${src}`);
  };

  // Generate optimized filename for SEO
  const getOptimizedFilename = (originalSrc: string, altText: string) => {
    const extension = originalSrc.split('.').pop();
    const seoFilename = altText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
    return `${seoFilename}.${extension}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Structured Data for Image */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": src,
            "name": alt,
            "description": title || alt,
            "width": width,
            "height": height,
            "encodingFormat": src.includes('.webp') ? 'image/webp' : 
                           src.includes('.jpg') || src.includes('.jpeg') ? 'image/jpeg' : 
                           src.includes('.png') ? 'image/png' : 'image/jpeg',
            "author": {
              "@type": "Organization",
              "name": "Palm Signature Real Estate"
            },
            "copyrightHolder": {
              "@type": "Organization", 
              "name": "Palm Signature Real Estate"
            }
          })
        }}
      />

      {isInView && (
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
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
          data-seo-filename={getOptimizedFilename(src, alt)}
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
            <div className="text-xs text-gray-300">{alt}</div>
          </div>
        </div>
      )}

      {/* Preload hint for critical images */}
      {priority && (
        <link
          rel="preload"
          as="image"
          href={src}
          imageSrcSet={generateSrcSet(src)}
          imageSizes={sizes}
        />
      )}
    </div>
  );
};