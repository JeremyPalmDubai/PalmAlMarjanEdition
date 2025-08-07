import React, { useState, useRef, useEffect } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface AccessibleTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const AccessibleTabs: React.FC<AccessibleTabsProps> = ({
  tabs,
  defaultTab,
  onChange,
  className = '',
  orientation = 'horizontal'
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [focusedTab, setFocusedTab] = useState(activeTab);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
      setFocusedTab(tabId);
      onChange?.(tabId);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, tabId: string) => {
    const currentIndex = tabs.findIndex(tab => tab.id === tabId);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        do {
          nextIndex = (nextIndex + 1) % tabs.length;
        } while (tabs[nextIndex].disabled && nextIndex !== currentIndex);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        do {
          nextIndex = (nextIndex - 1 + tabs.length) % tabs.length;
        } while (tabs[nextIndex].disabled && nextIndex !== currentIndex);
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        while (tabs[nextIndex].disabled && nextIndex < tabs.length - 1) {
          nextIndex++;
        }
        break;
      case 'End':
        event.preventDefault();
        nextIndex = tabs.length - 1;
        while (tabs[nextIndex].disabled && nextIndex > 0) {
          nextIndex--;
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleTabChange(tabId);
        return;
      default:
        return;
    }

    const nextTab = tabs[nextIndex];
    if (nextTab && !nextTab.disabled) {
      setFocusedTab(nextTab.id);
      tabRefs.current[nextTab.id]?.focus();
    }
  };

  // Focus management
  useEffect(() => {
    if (focusedTab && tabRefs.current[focusedTab]) {
      tabRefs.current[focusedTab]?.focus();
    }
  }, [focusedTab]);

  return (
    <div className={`${className}`}>
      {/* Tab list */}
      <div
        ref={tabListRef}
        className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} ${
          orientation === 'horizontal' ? 'border-b border-gray-200' : 'border-r border-gray-200'
        }`}
        role="tablist"
        aria-orientation={orientation}
        aria-label="Content sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[tab.id] = el)}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            aria-disabled={tab.disabled}
            tabIndex={focusedTab === tab.id ? 0 : -1}
            className={`px-6 py-3 font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
              tab.disabled
                ? 'text-gray-400 cursor-not-allowed'
                : activeTab === tab.id
                ? 'text-black border-b-2 border-black bg-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            } ${
              orientation === 'vertical' 
                ? 'text-left border-r-2 border-transparent' 
                : 'border-b-2 border-transparent'
            }`}
            onClick={() => handleTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            onFocus={() => setFocusedTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className={activeTab === tab.id ? 'focus:outline-none' : ''}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>

      {/* Screen reader instructions */}
      <div className="sr-only">
        <p>
          Use arrow keys to navigate between tabs, Enter or Space to activate a tab, 
          Home and End to go to first and last tabs.
        </p>
      </div>
    </div>
  );
};