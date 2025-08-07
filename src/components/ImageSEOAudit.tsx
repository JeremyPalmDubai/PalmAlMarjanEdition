import React, { useEffect, useState } from 'react';
import { auditImageSEO } from '../utils/imageOptimization';

interface ImageIssue {
  element: HTMLImageElement;
  issues: string[];
  src: string;
  alt: string;
}

export const ImageSEOAudit: React.FC = () => {
  const [imageIssues, setImageIssues] = useState<ImageIssue[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [showAudit, setShowAudit] = useState(false);

  const runImageAudit = () => {
    setIsAuditing(true);
    
    // Wait for images to load
    setTimeout(() => {
      const images = document.querySelectorAll('img');
      const issues: ImageIssue[] = [];
      
      images.forEach((img) => {
        const imageIssues: string[] = [];
        
        // Check alt text
        if (!img.alt || img.alt.trim() === '') {
          imageIssues.push('Missing alt text');
        } else if (img.alt.length < 10) {
          imageIssues.push(`Alt text too short (${img.alt.length} chars)`);
        } else if (img.alt.length > 125) {
          imageIssues.push(`Alt text too long (${img.alt.length} chars)`);
        }
        
        // Check if alt text contains keywords
        const hasKeywords = /invest|al marjan|luxury|real estate|property|wynn|casino/i.test(img.alt);
        if (!hasKeywords && img.alt.length > 0) {
          imageIssues.push('Alt text missing relevant keywords');
        }
        
        // Check dimensions
        if (!img.width || !img.height) {
          imageIssues.push('Missing width/height attributes');
        }
        
        // Check loading attribute
        if (!img.loading) {
          imageIssues.push('Missing loading attribute');
        }
        
        // Check srcset for responsive images
        if (!img.srcset && (img.width > 400 || img.naturalWidth > 400)) {
          imageIssues.push('Large image missing srcset for responsive design');
        }
        
        // Check file naming
        const filename = img.src.split('/').pop() || '';
        const hasDescriptiveName = /invest|al-marjan|luxury|property|wynn|casino|development/i.test(filename);
        if (!hasDescriptiveName) {
          imageIssues.push('Filename not SEO-friendly or descriptive');
        }
        
        // Check image format
        if (!img.src.includes('.webp') && !img.src.includes('auto=compress')) {
          imageIssues.push('Image not optimized (consider WebP format)');
        }
        
        // Check title attribute
        if (!img.title && img.alt.length > 0) {
          imageIssues.push('Missing title attribute for better accessibility');
        }
        
        // Check if image is above the fold
        const rect = img.getBoundingClientRect();
        const isAboveFold = rect.top < window.innerHeight;
        if (isAboveFold && img.loading === 'lazy') {
          imageIssues.push('Above-fold image should not be lazy loaded');
        }
        
        if (imageIssues.length > 0) {
          issues.push({
            element: img,
            issues: imageIssues,
            src: img.src,
            alt: img.alt || 'No alt text'
          });
        }
      });
      
      setImageIssues(issues);
      setIsAuditing(false);
      
      // Track audit results
      if (typeof gtag !== 'undefined') {
        gtag('event', 'image_seo_audit', {
          event_category: 'SEO',
          event_label: 'Image Audit Completed',
          value: issues.length
        });
      }
    }, 1000);
  };

  // Auto-run audit in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const timer = setTimeout(runImageAudit, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowAudit(!showAudit)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Image SEO ({imageIssues.length} issues)
      </button>
      
      {showAudit && (
        <div className="absolute bottom-12 right-0 w-96 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Image SEO Audit</h3>
              <button
                onClick={runImageAudit}
                disabled={isAuditing}
                className="text-sm bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
              >
                {isAuditing ? 'Auditing...' : 'Re-audit'}
              </button>
            </div>
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {imageIssues.length === 0 ? (
              <div className="p-4 text-center text-green-600">
                ✅ No image SEO issues found!
              </div>
            ) : (
              imageIssues.map((issue, index) => (
                <div key={index} className="p-4 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Image {index + 1}
                  </div>
                  <div className="text-xs text-gray-600 mb-2 truncate">
                    {issue.alt || 'No alt text'}
                  </div>
                  <ul className="text-xs text-red-600 space-y-1">
                    {issue.issues.map((issueText, issueIndex) => (
                      <li key={issueIndex}>• {issueText}</li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
          
          {imageIssues.length > 0 && (
            <div className="p-4 bg-gray-50 text-xs text-gray-600">
              <strong>Quick Fixes:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Add descriptive alt text (10-125 chars)</li>
                <li>• Include width/height attributes</li>
                <li>• Use srcset for responsive images</li>
                <li>• Add loading="lazy" for below-fold images</li>
                <li>• Use SEO-friendly filenames</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};