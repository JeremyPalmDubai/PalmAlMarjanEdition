import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface InfiniteScrollItem {
  id: string;
  content: React.ReactNode;
}

interface AccessibleInfiniteScrollProps {
  items: InfiniteScrollItem[];
  loadMore: () => Promise<InfiniteScrollItem[]>;
  hasMore: boolean;
  loading: boolean;
  error?: string;
  className?: string;
  itemsPerPage?: number;
  loadMoreText?: string;
  noMoreText?: string;
}

export const AccessibleInfiniteScroll: React.FC<AccessibleInfiniteScrollProps> = ({
  items,
  loadMore,
  hasMore,
  loading,
  error,
  className = '',
  itemsPerPage = 10,
  loadMoreText = 'Load more items',
  noMoreText = 'No more items to load'
}) => {
  const [isManualMode, setIsManualMode] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const loadMoreButtonRef = useRef<HTMLButtonElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    setIsManualMode(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches) {
        setIsManualMode(true);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle loading more items
  const handleLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      const newItems = await loadMore();
      setAnnouncement(`Loaded ${newItems.length} more items. Total items: ${items.length + newItems.length}`);
      
      // Focus management for screen readers
      setTimeout(() => {
        if (loadMoreButtonRef.current && isManualMode) {
          loadMoreButtonRef.current.focus();
        }
      }, 100);
    } catch (err) {
      setAnnouncement('Failed to load more items. Please try again.');
    }
  }, [loading, hasMore, loadMore, items.length, isManualMode]);

  // Intersection Observer for automatic loading
  useEffect(() => {
    if (isManualMode || !hasMore || loading) {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          handleLoadMore();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isManualMode, hasMore, loading, handleLoadMore]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLoadMore();
    }
  };

  return (
    <div className={`accessible-infinite-scroll ${className}`}>
      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Control panel */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-sm text-gray-600">
            Showing {items.length} items
            {hasMore && ` • ${hasMore ? 'More available' : 'All items loaded'}`}
          </div>
          
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={isManualMode}
                onChange={(e) => setIsManualMode(e.target.checked)}
                className="rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              Manual loading mode
            </label>
          </div>
        </div>
        
        {isManualMode && (
          <p className="mt-2 text-xs text-gray-500">
            Manual mode is enabled. Use the "Load more" button to load additional content.
          </p>
        )}
      </div>

      {/* Items list */}
      <div role="feed" aria-label="Content feed" className="space-y-4">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            aria-posinset={index + 1}
            aria-setsize={hasMore ? -1 : items.length}
          >
            {item.content}
          </article>
        ))}
      </div>

      {/* Loading/Error states */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <div className="flex items-center gap-2 text-red-800">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Error loading content</span>
          </div>
          <p className="mt-1 text-sm text-red-700">{error}</p>
          <button
            onClick={handleLoadMore}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Try again
          </button>
        </div>
      )}

      {/* Load more section */}
      {hasMore && !error && (
        <div
          ref={loadMoreRef}
          className="mt-8 text-center"
        >
          {isManualMode ? (
            <button
              ref={loadMoreButtonRef}
              onClick={handleLoadMore}
              onKeyDown={handleKeyDown}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby="load-more-description"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </span>
              ) : (
                loadMoreText
              )}
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-gray-600">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Loading more items...</span>
                </>
              ) : (
                <span>Scroll down to load more</span>
              )}
            </div>
          )}
          
          <p id="load-more-description" className="mt-2 text-sm text-gray-500">
            {isManualMode 
              ? 'Click to load more items manually'
              : 'Items will load automatically as you scroll'
            }
          </p>
        </div>
      )}

      {/* End of content */}
      {!hasMore && !loading && (
        <div className="mt-8 text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">{noMoreText}</p>
          <p className="text-sm text-gray-500 mt-1">
            You've reached the end of the content.
          </p>
        </div>
      )}
    </div>
  );
};