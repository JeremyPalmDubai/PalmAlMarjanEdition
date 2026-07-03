/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq: (command: string, action: string, params?: Record<string, unknown>) => void;
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export {};
