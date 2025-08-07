import React from 'react';

export const SkipLinks: React.FC = () => {
  const skipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skipToNavigation = () => {
    const navigation = document.getElementById('main-navigation');
    if (navigation) {
      navigation.focus();
      navigation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skipToFooter = () => {
    const footer = document.getElementById('main-footer');
    if (footer) {
      footer.focus();
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-black text-white p-4 flex gap-4">
        <button
          onClick={skipToContent}
          className="bg-white text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to main content
        </button>
        <button
          onClick={skipToNavigation}
          className="bg-white text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to navigation
        </button>
        <button
          onClick={skipToFooter}
          className="bg-white text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to footer
        </button>
      </div>
    </div>
  );
};