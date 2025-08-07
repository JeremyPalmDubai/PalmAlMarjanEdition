// Enhanced image optimization utilities for comprehensive SEO

export interface ImageSEOConfig {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}

// Generate SEO-friendly filename from alt text
export const generateSEOFilename = (altText: string, originalSrc: string): string => {
  const extension = originalSrc.includes('.webp') ? 'webp' : 
                   originalSrc.includes('.jpg') || originalSrc.includes('.jpeg') ? 'jpg' : 
                   originalSrc.includes('.png') ? 'png' : 'webp';
  
  const seoName = altText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove multiple hyphens
    .substring(0, 50) // Limit length for SEO
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  return `${seoName}.${extension}`;
};

// Optimize alt text for SEO and accessibility
export const optimizeAltText = (originalAlt: string, context?: string): string => {
  // Ensure alt text is between 10-125 characters
  let optimized = originalAlt.trim();
  
  // Add context if missing and alt is too short
  if (optimized.length < 10 && context) {
    optimized = `${optimized} ${context}`;
  }
  
  // Truncate if too long
  if (optimized.length > 125) {
    optimized = optimized.substring(0, 122) + '...';
  }
  
  // Ensure it contains relevant keywords
  const keywords = ['Al Marjan Island', 'luxury', 'real estate', 'investment', 'Wynn Casino'];
  const hasKeywords = keywords.some(keyword => 
    optimized.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (!hasKeywords && optimized.length < 100) {
    optimized += ' Al Marjan Island luxury real estate';
  }
  
  return optimized;
};

// Generate responsive image srcset with optimization
export const generateResponsiveSrcSet = (
  baseSrc: string, 
  breakpoints: number[] = [400, 600, 800, 1200, 1600, 2000],
  quality: number = 85,
  format: string = 'webp'
): string => {
  const baseUrl = baseSrc.split('?')[0];
  
  return breakpoints
    .map(width => {
      const height = Math.round(width * 0.75); // 4:3 aspect ratio default
      return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop&fm=${format}&q=${quality} ${width}w`;
    })
    .join(', ');
};

// Generate sizes attribute for responsive images
export const generateSizesAttribute = (
  breakpoints: { [key: string]: string } = {
    '(max-width: 768px)': '100vw',
    '(max-width: 1200px)': '50vw',
    'default': '33vw'
  }
): string => {
  const entries = Object.entries(breakpoints);
  const conditions = entries.slice(0, -1).map(([condition, size]) => `${condition} ${size}`);
  const defaultSize = entries[entries.length - 1][1];
  
  return [...conditions, defaultSize].join(', ');
};

// Compress image URL with advanced options
export const compressImageUrl = (
  src: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
    fit?: 'crop' | 'scale' | 'fill';
    blur?: number;
    brightness?: number;
    contrast?: number;
  } = {}
): string => {
  const { 
    width, 
    height, 
    quality = 85, 
    format = 'webp', 
    fit = 'crop',
    blur,
    brightness,
    contrast
  } = options;
  
  const baseUrl = src.split('?')[0];
  const params = new URLSearchParams();
  
  params.set('auto', 'compress');
  params.set('cs', 'tinysrgb');
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality !== 85) params.set('q', quality.toString());
  if (format !== 'webp') params.set('fm', format);
  if (fit !== 'crop') params.set('fit', fit);
  if (blur) params.set('blur', blur.toString());
  if (brightness) params.set('brightness', brightness.toString());
  if (contrast) params.set('contrast', contrast.toString());
  
  return `${baseUrl}?${params.toString()}`;
};

// Generate structured data for images
export const generateImageStructuredData = (config: ImageSEOConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": config.src,
    "name": config.alt,
    "description": config.title || config.alt,
    "width": config.width,
    "height": config.height,
    "encodingFormat": `image/${config.format || 'webp'}`,
    "author": {
      "@type": "Organization",
      "name": "Palm Signature Real Estate"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Palm Signature Real Estate"
    },
    "license": "https://invest-almarjanisland.com/terms",
    "acquireLicensePage": "https://invest-almarjanisland.com/terms",
    "creditText": "Palm Signature Real Estate",
    "creator": {
      "@type": "Organization",
      "name": "Palm Signature Real Estate"
    }
  };
};

// Advanced image SEO audit function
export const auditImageSEO = (images: NodeListOf<HTMLImageElement>) => {
  const issues: Array<{
    element: HTMLImageElement;
    issues: string[];
    severity: 'critical' | 'warning' | 'info';
    recommendations: string[];
  }> = [];
  
  images.forEach((img, index) => {
    const imageIssues: string[] = [];
    const recommendations: string[] = [];
    let severity: 'critical' | 'warning' | 'info' = 'info';
    
    // Alt text analysis
    if (!img.alt || img.alt.trim() === '') {
      imageIssues.push('Missing alt text');
      recommendations.push('Add descriptive alt text (10-125 characters)');
      severity = 'critical';
    } else if (img.alt.length < 10) {
      imageIssues.push(`Alt text too short (${img.alt.length} chars)`);
      recommendations.push('Expand alt text to be more descriptive');
      severity = 'warning';
    } else if (img.alt.length > 125) {
      imageIssues.push(`Alt text too long (${img.alt.length} chars)`);
      recommendations.push('Shorten alt text to under 125 characters');
      severity = 'warning';
    }
    
    // Keyword analysis
    const keywords = ['al marjan', 'luxury', 'real estate', 'investment', 'wynn', 'casino', 'property'];
    const hasKeywords = keywords.some(keyword => 
      img.alt.toLowerCase().includes(keyword)
    );
    if (!hasKeywords && img.alt.length > 0) {
      imageIssues.push('Alt text missing relevant keywords');
      recommendations.push('Include relevant keywords like "Al Marjan Island", "luxury real estate"');
      severity = severity === 'critical' ? 'critical' : 'warning';
    }
    
    // Technical attributes
    if (!img.width || !img.height) {
      imageIssues.push('Missing width/height attributes');
      recommendations.push('Add explicit width and height attributes');
      severity = severity === 'critical' ? 'critical' : 'warning';
    }
    
    if (!img.loading) {
      imageIssues.push('Missing loading attribute');
      recommendations.push('Add loading="lazy" for below-fold images');
    }
    
    // Responsive images
    if (!img.srcset && (img.width > 400 || img.naturalWidth > 400)) {
      imageIssues.push('Large image missing srcset for responsive design');
      recommendations.push('Add srcset with multiple image sizes');
      severity = severity === 'critical' ? 'critical' : 'warning';
    }
    
    // File naming
    const filename = img.src.split('/').pop() || '';
    const hasDescriptiveName = /al-marjan|luxury|property|wynn|casino|development|investment/i.test(filename);
    if (!hasDescriptiveName) {
      imageIssues.push('Filename not SEO-friendly or descriptive');
      recommendations.push('Use descriptive filenames with keywords');
    }
    
    // Format optimization
    if (!img.src.includes('.webp') && !img.src.includes('fm=webp')) {
      imageIssues.push('Image not optimized (consider WebP format)');
      recommendations.push('Use WebP format for better compression');
    }
    
    // Accessibility
    if (!img.title && img.alt.length > 0) {
      imageIssues.push('Missing title attribute for better accessibility');
      recommendations.push('Add title attribute for tooltip information');
    }
    
    // Performance
    const rect = img.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight;
    if (isAboveFold && img.loading === 'lazy') {
      imageIssues.push('Above-fold image should not be lazy loaded');
      recommendations.push('Use loading="eager" for above-fold images');
      severity = 'warning';
    }
    
    if (imageIssues.length > 0) {
      issues.push({
        element: img,
        issues: imageIssues,
        severity,
        recommendations
      });
    }
  });
  
  return issues;
};

// Generate preload links for critical images
export const generatePreloadLinks = (criticalImages: ImageSEOConfig[]): string => {
  return criticalImages.map(img => {
    const optimizedSrc = compressImageUrl(img.src, { 
      width: img.width, 
      height: img.height, 
      quality: img.quality,
      format: img.format 
    });
    const srcSet = generateResponsiveSrcSet(img.src);
    const sizes = generateSizesAttribute();
    
    return `<link rel="preload" as="image" href="${optimizedSrc}" imagesrcset="${srcSet}" imagesizes="${sizes}" />`;
  }).join('\n');
};

// Image performance monitoring
export const trackImagePerformance = (img: HTMLImageElement, alt: string) => {
  const startTime = performance.now();
  
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.element === img) {
        const loadTime = performance.now() - startTime;
        
        // Track with Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'image_performance', {
            event_category: 'Performance',
            event_label: alt,
            value: Math.round(loadTime),
            custom_map: {
              image_size: img.naturalWidth * img.naturalHeight,
              image_format: getImageFormat(img.src),
              loading_method: img.loading || 'auto'
            }
          });
        }
        
        // Log performance issues
        if (loadTime > 3000) {
          console.warn(`Slow loading image: ${alt} (${Math.round(loadTime)}ms)`);
        }
      }
    }
  });
  
  observer.observe({ entryTypes: ['element'] });
};

// Detect image format from URL
const getImageFormat = (src: string): string => {
  if (src.includes('.webp') || src.includes('fm=webp')) return 'webp';
  if (src.includes('.jpg') || src.includes('.jpeg')) return 'jpeg';
  if (src.includes('.png')) return 'png';
  if (src.includes('.svg')) return 'svg';
  return 'webp'; // default to webp
};

// Batch image optimization for existing images
export const batchOptimizeImages = (images: NodeListOf<HTMLImageElement>) => {
  images.forEach((img, index) => {
    // Add missing attributes
    if (!img.loading) {
      const isAboveFold = img.getBoundingClientRect().top < window.innerHeight;
      img.loading = isAboveFold ? 'eager' : 'lazy';
    }
    
    if (!img.decoding) {
      img.decoding = 'async';
    }
    
    // Add SEO filename data attribute
    if (!img.dataset.seoFilename && img.alt) {
      img.dataset.seoFilename = generateSEOFilename(img.alt, img.src);
    }
    
    // Track performance
    trackImagePerformance(img, img.alt || `Image ${index + 1}`);
  });
};

// Generate image sitemap entries
export const generateImageSitemapEntries = (images: ImageSEOConfig[]): string => {
  return images.map(img => `
    <image:image>
      <image:loc>${compressImageUrl(img.src, { quality: img.quality, format: img.format })}</image:loc>
      <image:title>${img.alt}</image:title>
      <image:caption>${img.title || img.alt}</image:caption>
      <image:geo_location>Al Marjan Island, Ras Al Khaimah, UAE</image:geo_location>
      <image:license>https://invest-almarjanisland.com/terms</image:license>
    </image:image>
  `).join('');
};