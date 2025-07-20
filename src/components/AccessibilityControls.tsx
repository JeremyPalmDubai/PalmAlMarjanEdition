import React, { useState } from 'react';
import { Settings, Eye, Type, MousePointer, Volume2, X } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

export const AccessibilityControls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting, resetSettings } = useAccessibility();

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Accessibility button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black/50" onClick={togglePanel} />
            
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Accessibility Settings
                </h2>
                <button
                  onClick={togglePanel}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Reduced Motion */}
                <div className="flex items-start gap-3">
                  <MousePointer className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div className="flex-1">
                    <label className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Reduce Motion</div>
                        <div className="text-sm text-gray-600">
                          Minimize animations and transitions
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                        className="ml-3 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                  </div>
                </div>

                {/* High Contrast */}
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div className="flex-1">
                    <label className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">High Contrast</div>
                        <div className="text-sm text-gray-600">
                          Increase color contrast for better visibility
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                        className="ml-3 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                  </div>
                </div>

                {/* Font Size */}
                <div className="flex items-start gap-3">
                  <Type className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 mb-2">Font Size</div>
                    <div className="space-y-2">
                      {(['small', 'medium', 'large'] as const).map((size) => (
                        <label key={size} className="flex items-center">
                          <input
                            type="radio"
                            name="fontSize"
                            value={size}
                            checked={settings.fontSize === size}
                            onChange={(e) => updateSetting('fontSize', e.target.value as any)}
                            className="mr-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="capitalize text-gray-700">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Focus Visible */}
                <div className="flex items-start gap-3">
                  <MousePointer className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div className="flex-1">
                    <label className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Enhanced Focus</div>
                        <div className="text-sm text-gray-600">
                          Show enhanced focus indicators
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.focusVisible}
                        onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                        className="ml-3 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={resetSettings}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Reset to Default
                </button>
                <button
                  onClick={togglePanel}
                  className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Apply Settings
                </button>
              </div>

              {/* Screen reader info */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <Volume2 className="w-4 h-4 inline mr-1" />
                  Screen reader detected: {settings.screenReader ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};