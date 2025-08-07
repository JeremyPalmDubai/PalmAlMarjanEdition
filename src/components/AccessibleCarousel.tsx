import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface CarouselItem {
  id: string;
  content: React.ReactNode;
  ariaLabel: string;
}

interface AccessibleCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
}

export const AccessibleCarousel: React.FC<AccessibleCarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = '',
  showDots = true,
  showArrows = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality with pause on interaction
  useEffect(() => {
    if (isPlaying && !isUserInteracting) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isUserInteracting, items.length, autoPlayInterval]);

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'Home':
        event.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        goToSlide(items.length - 1);
        break;
      case ' ':
      case 'Enter':
        event.preventDefault();
        togglePlayPause();
        break;
    }
  };

  const goToNext = () => {
    setIsUserInteracting(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsUserInteracting(false), 3000);
  };

  const goToPrevious = () => {
    setIsUserInteracting(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsUserInteracting(false), 3000);
  };

  const goToSlide = (index: number) => {
    setIsUserInteracting(true);
    setCurrentIndex(index);
    setTimeout(() => setIsUserInteracting(false), 3000);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Announce slide changes to screen readers
  const announceSlideChange = (index: number) => {
    const announcement = `Slide ${index + 1} of ${items.length}: ${items[index].ariaLabel}`;
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
  };

  useEffect(() => {
    announceSlideChange(currentIndex);
  }, [currentIndex]);

  return (
    <div className={`relative ${className}`}>
      {/* Screen reader instructions */}
      <div className="sr-only">
        <p>
          Carousel with {items.length} slides. Use arrow keys to navigate, 
          space bar to play/pause, Home and End keys to go to first and last slides.
        </p>
      </div>

      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        role="region"
        aria-label="Image carousel"
        aria-live="polite"
        aria-atomic="false"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
        onFocus={() => setIsUserInteracting(true)}
        onBlur={() => setIsUserInteracting(false)}
      >
        {/* Slides container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}: ${item.ariaLabel}`}
              aria-hidden={index !== currentIndex}
            >
              {item.content}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
              aria-label="Go to previous slide"
              type="button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
              aria-label="Go to next slide"
              type="button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Play/Pause button */}
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
            type="button"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center mt-6 gap-2" role="tablist" aria-label="Carousel navigation">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                index === currentIndex
                  ? 'bg-black scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}: ${items[index].ariaLabel}`}
              tabIndex={index === currentIndex ? 0 : -1}
              type="button"
            />
          ))}
        </div>
      )}

      {/* Progress indicator */}
      <div className="mt-4 bg-gray-200 h-1 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={items.length}
          aria-label={`Slide ${currentIndex + 1} of ${items.length}`}
        />
      </div>

      {/* Live region for announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id={`carousel-status-${Math.random().toString(36).substr(2, 9)}`}
      >
        Showing slide {currentIndex + 1} of {items.length}
      </div>
    </div>
  );
};