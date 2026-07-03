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
  errorText?: string;
  retryText?: string;
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
  noMoreText = 'No more items to load',
  errorText = 'Failed to load more items',
  retryText = 'Try again'
}) => {
  const [displayedItems, setDisplayedItems] = useState<InfiniteScrollItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [autoLoadEnabled, setAutoLoadEnabled] = useState(true);
  const [announceText, setAnnounceText] = useState('');
  
  const loadMoreRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);

  // Initialize displayed items
  useEffect(() => {
    setDisplayedItems(items.slice(0, currentPage * itemsPerPage));
  }, [items, currentPage, itemsPerPage]);

  // Intersection Observer for auto-loading
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasMore && !loading && autoLoadEnabled) {
      handleLoadMore();
    }
  }, [hasMore, loading, autoLoadEnabled]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '100px',
      threshold: 0.1
    });

    if (lastItemRef.current && autoLoadEnabled) {
      observer.observe(lastItemRef.current);
    }

    return () => observer.disconnect();
  }, [observerCallback, autoLoadEnabled, displayedItems.length]);

  // Handle manual load more
  const handleLoadMore = async () => {
    if (loading || !hasMore) return;

    try {
      const newItems = await loadMore();
      setCurrentPage(prev => prev + 1);
      
      // Announce new items to screen readers
      setAnnounceText(`Loaded ${newItems.length} more items. Total: ${displayedItems.length + newItems.length} items.`);
      
      // Focus management - move focus to first new item
      setTimeout(() => {
        const firstNewItem = containerRef.current?.children[displayedItems.length] as HTMLElement;
        if (firstNewItem) {
          firstNewItem.focus();
        }
      }, 100);
      
    } catch {
      setAnnounceText('Failed to load more items. Please try again.');
    }
  };

  // Toggle auto-load preference
  const toggleAutoLoad = () => {
    setAutoLoadEnabled(!autoLoadEnabled);
    setAnnounceText(
      autoLoadEnabled 
        ? 'Auto-loading disabled. Use the Load More button to continue.'
        : 'Auto-loading enabled. New items will load automatically.'
    );
  };

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLoadMore();
    }
  };

  return (
    <div className={`${className}`} ref={containerRef}>
      {/* Auto-load preference toggle */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <label htmlFor="auto-load-toggle" className="text-sm font-medium text-gray-700">
            Auto-load content
          </label>
          <button
            id="auto-load-toggle"
            type="button"
            onClick={toggleAutoLoad}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
              autoLoadEnabled ? 'bg-black' : 'bg-gray-200'
            }`}
            role="switch"
            aria-checked={autoLoadEnabled}
            aria-describedby="auto-load-description"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoLoadEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span id="auto-load-description" className="text-sm text-gray-500">
            {autoLoadEnabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        
        <div className="text-sm text-gray-500">
          Showing {displayedItems.length} of {items.length} items
        </div>
      </div>

      {/* Items grid */}
      <div className="space-y-6" role="feed" aria-label="Content feed">
        {displayedItems.map((item, index) => (
          <div
            key={item.id}
            ref={index === displayedItems.length - 1 ? lastItemRef : undefined}
            className="focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-lg"
            tabIndex={0}
            role="article"
            aria-posinset={index + 1}
            aria-setsize={items.length}
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Load more section */}
      <div className="mt-12 text-center">
        {error ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-red-600" role="alert">
              <AlertCircle className="w-5 h-5" />
              <span>{errorText}</span>
            </div>
            <button
              onClick={handleLoadMore}
              className="tesla-btn-secondary"
              type="button"
            >
              {retryText}
            </button>
          </div>
        ) : hasMore ? (
          <div className="space-y-4">
            {!autoLoadEnabled && (
              <button
                ref={loadMoreRef}
                onClick={handleLoadMore}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="tesla-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
                aria-describedby="load-more-description"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </span>
                ) : (
                  loadMoreText
                )}
              </button>
            )}
            
            {autoLoadEnabled && loading && (
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Loading more content...</span>
              </div>
            )}
            
            <p id="load-more-description" className="text-sm text-gray-500">
              {autoLoadEnabled 
                ? 'New content loads automatically as you scroll'
                : 'Click to load more content manually'
              }
            </p>
          </div>
        ) : (
          <div className="text-gray-500 py-8" role="status">
            <p>{noMoreText}</p>
          </div>
        )}
      </div>

      {/* Live region for announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announceText}
      </div>

      {/* Skip to end link for screen readers */}
      {hasMore && (
        <a
          href="#content-end"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to end of content
        </a>
      )}
      
      <div id="content-end" />
    </div>
  );
};