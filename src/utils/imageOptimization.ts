// Image optimization utilities for SEO and performance

export interface ImageSEOConfig {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

// Generate SEO-friendly filename from alt text
export const generateSEOFilename = (altText: string, originalSrc: string): string => {
  const extension = originalSrc.split('.').pop() || 'jpg';
  const seoName = altText
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove multiple hyphens
    .substring(0, 50) // Limit length
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  return `${seoName}.${extension}`;
};

// Generate responsive image srcset
export const generateResponsiveSrcSet = (
  baseSrc: string, 
  breakpoints: number[] = [400, 800, 1200, 1600, 2000]
): string => {
  const baseUrl = baseSrc.split('?')[0];
  const existingParams = baseSrc.includes('?') ? baseSrc.split('?')[1] : '';
  
  return breakpoints
    .map(width => {
      const params = existingParams 
        ? `auto=compress&cs=tinysrgb&w=${width}&${existingParams}`
        : `auto=compress&cs=tinysrgb&w=${width}`;
      return `${baseUrl}?${params} ${width}w`;
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

// Compress image URL with quality settings
export const compressImageUrl = (
  src: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
    fit?: 'crop' | 'scale' | 'fill';
  } = {}
): string => {
  const { width, height, quality = 85, format, fit = 'crop' } = options;
  const baseUrl = src.split('?')[0];
  
  const params = new URLSearchParams();
  params.set('auto', 'compress');
  params.set('cs', 'tinysrgb');
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality !== 85) params.set('q', quality.toString());
  if (format) params.set('fm', format);
  if (fit !== 'crop') params.set('fit', fit);
  
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
    "encodingFormat": getImageFormat(config.src),
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
  };
};

// Detect image format from URL
const getImageFormat = (src: string): string => {
  if (src.includes('.webp')) return 'image/webp';
  if (src.includes('.jpg') || src.includes('.jpeg')) return 'image/jpeg';
  if (src.includes('.png')) return 'image/png';
  if (src.includes('.svg')) return 'image/svg+xml';
  return 'image/jpeg'; // default
};

// Generate preload link for critical images
export const generatePreloadLink = (
  src: string, 
  srcSet?: string, 
  sizes?: string
): string => {
  const attributes = [
    'rel="preload"',
    'as="image"',
    `href="${src}"`
  ];
  
  if (srcSet) attributes.push(`imagesrcset="${srcSet}"`);
  if (sizes) attributes.push(`imagesizes="${sizes}"`);
  
  return `<link ${attributes.join(' ')} />`;
};

// Image SEO audit function
export const auditImageSEO = (images: NodeListOf<HTMLImageElement>) => {
  const issues: string[] = [];
  
  images.forEach((img, index) => {
    // Check alt text
    if (!img.alt || img.alt.trim() === '') {
      issues.push(`Image ${index + 1}: Missing alt text`);
    } else if (img.alt.length < 10) {
      issues.push(`Image ${index + 1}: Alt text too short (${img.alt.length} chars)`);
    } else if (img.alt.length > 125) {
      issues.push(`Image ${index + 1}: Alt text too long (${img.alt.length} chars)`);
    }
    
    // Check dimensions
    if (!img.width || !img.height) {
      issues.push(`Image ${index + 1}: Missing width/height attributes`);
    }
    
    // Check loading attribute
    if (!img.loading) {
      issues.push(`Image ${index + 1}: Missing loading attribute`);
    }
    
    // Check srcset for responsive images
    if (!img.srcset && img.width > 400) {
      issues.push(`Image ${index + 1}: Large image missing srcset`);
    }
    
    // Check file naming
    const filename = img.src.split('/').pop() || '';
    if (!/^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/i.test(filename)) {
      issues.push(`Image ${index + 1}: Non-SEO friendly filename`);
    }
  });
  
  return issues;
};

// Performance monitoring for images
export const trackImagePerformance = (img: HTMLImageElement, alt: string) => {
  const startTime = performance.now();
  
  img.onload = () => {
    const loadTime = performance.now() - startTime;
    
    // Track with Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'image_load_time', {
        event_category: 'Performance',
        event_label: alt,
        value: Math.round(loadTime),
        custom_map: {
          image_size: img.naturalWidth * img.naturalHeight,
          image_format: getImageFormat(img.src)
        }
      });
    }
    
    // Log slow loading images
    if (loadTime > 3000) {
      console.warn(`Slow loading image: ${alt} (${Math.round(loadTime)}ms)`);
    }
  };
  
  img.onerror = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'image_error', {
        event_category: 'Error',
        event_label: alt,
        value: 1
      });
    }
  };
};