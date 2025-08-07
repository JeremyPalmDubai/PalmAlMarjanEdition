import React, { useState } from 'react';
import { Settings, X, RotateCcw } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

export const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting, resetSettings } = useAccessibility();

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleReset = () => {
    resetSettings();
    setIsOpen(false);
  };

  return (
    <>
      {/* Accessibility panel toggle button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="accessibility-panel-title"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 id="accessibility-panel-title" className="text-xl font-semibold text-gray-900">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="reduced-motion" className="text-sm font-medium text-gray-900">
                      Reduce Motion
                    </label>
                    <p className="text-xs text-gray-600">
                      Minimize animations and transitions
                    </p>
                  </div>
                  <button
                    id="reduced-motion"
                    type="button"
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      settings.reducedMotion ? 'bg-black' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="high-contrast" className="text-sm font-medium text-gray-900">
                      High Contrast
                    </label>
                    <p className="text-xs text-gray-600">
                      Increase color contrast for better visibility
                    </p>
                  </div>
                  <button
                    id="high-contrast"
                    type="button"
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      settings.highContrast ? 'bg-black' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="large-text" className="text-sm font-medium text-gray-900">
                      Large Text
                    </label>
                    <p className="text-xs text-gray-600">
                      Increase text size for better readability
                    </p>
                  </div>
                  <button
                    id="large-text"
                    type="button"
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      settings.largeText ? 'bg-black' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicators */}
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="focus-visible" className="text-sm font-medium text-gray-900">
                      Enhanced Focus
                    </label>
                    <p className="text-xs text-gray-600">
                      Show enhanced focus indicators
                    </p>
                  </div>
                  <button
                    id="focus-visible"
                    type="button"
                    onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                      settings.focusVisible ? 'bg-black' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={settings.focusVisible}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reset button */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleReset}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset to defaults
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};