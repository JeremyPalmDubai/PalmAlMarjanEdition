# Microcopy Implementation Guide
## Ready-to-Use Code Examples

This document provides copy-paste ready code for implementing the microcopy improvements.

---

## 1. Translation Updates Needed

### Update `src/data/translations.ts`

Add these new microcopy keys to all language objects:

```typescript
// Add to each language (en, fr, es, nl)
microcopy: {
  cta: {
    primary: "Get My Investment Plan",
    secondary: "Download Free Investor Guide",
    bookConsultation: "Schedule Consultation",
    requestDetails: "Request Full Details",
    viewProperties: "View Available Properties",
    virtualTour: "Take Virtual Tour",
    joinWaitlist: "Join Waitlist",
    seeSimilar: "See Similar Properties"
  },
  form: {
    header: "Get Your Free Investment Consultation",
    subheader: "Expert guidance · No obligations · 2-hour response",
    privacy: "Your information is confidential and never shared",
    successTitle: "Request Confirmed!",
    successMessage: "Check your email for next steps. Gabriella will call you within 2 hours.",
    responseTime: "We'll respond within 2 hours during business hours"
  },
  trust: {
    verified: "Developer Verified",
    viewedToday: "viewed today",
    scheduledViewings: "viewings scheduled this week",
    freehold: "100% Freehold Ownership",
    noTax: "0% Capital Gains Tax",
    paymentPlan: "5-Year Payment Plans"
  },
  errors: {
    connectionLost: "Connection lost. Please check your internet and try again.",
    tryAgain: "Try Again",
    contactSupport: "Contact Support",
    emailInvalid: "Please enter a valid email address (e.g., you@example.com)",
    phoneInvalid: "Please enter a valid phone number with country code"
  },
  empty: {
    noProperties: "No properties match your filters",
    clearFilters: "Clear Filters",
    viewAll: "View All Properties",
    tryAdjusting: "Try adjusting your search criteria"
  },
  loading: {
    properties: "Loading properties...",
    details: "Fetching latest details...",
    prices: "Loading current prices..."
  }
}
```

**French (FR) translations:**
```typescript
microcopy: {
  cta: {
    primary: "Obtenir Mon Plan d'Investissement",
    secondary: "Télécharger Le Guide Gratuit",
    bookConsultation: "Réserver Consultation",
    requestDetails: "Demander Les Détails",
    viewProperties: "Voir Les Propriétés",
    virtualTour: "Visite Virtuelle",
    joinWaitlist: "Liste d'Attente",
    seeSimilar: "Voir Propriétés Similaires"
  },
  form: {
    header: "Consultation Gratuite",
    subheader: "Conseils d'expert · Sans engagement · Réponse sous 2h",
    privacy: "Vos informations sont confidentielles",
    successTitle: "Demande Confirmée!",
    successMessage: "Vérifiez votre email. Gabriella vous appellera sous 2 heures.",
    responseTime: "Réponse sous 2 heures pendant les heures ouvrables"
  },
  // ... rest of translations
}
```

---

## 2. Hero Section Improvements

### Update `src/components/HeroSection.tsx`

**Replace lines 97-98:**
```typescript
// BEFORE
Invest Al Marjan Island

// AFTER
{t.microcopy.cta.primary}
```

**Replace lines 122:**
```typescript
// BEFORE
{t.hero.cta.primary}

// AFTER
{t.microcopy.cta.secondary}
```

**Add trust indicators with better microcopy (lines 128-141):**
```typescript
<div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/70 text-xs sm:text-sm px-4 sm:px-0 animate-fade-in-up">
  <div className="flex items-center" role="status" aria-live="polite">
    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
    <span>{t.microcopy.trust.freehold}</span>
  </div>
  <div className="flex items-center" role="status" aria-live="polite">
    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
    <span>{t.microcopy.trust.noTax}</span>
  </div>
  <div className="flex items-center" role="status" aria-live="polite">
    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
    <span>{t.microcopy.trust.paymentPlan}</span>
  </div>
</div>
```

---

## 3. Header Navigation

### Update `src/components/Header.tsx`

**Replace line 127:**
```typescript
// BEFORE
{t.navigation.contact}

// AFTER
{t.microcopy.cta.bookConsultation}
```

---

## 4. Contact Section Improvements

### Update `src/components/ContactSection.tsx`

**Add before the iframe (around line 149):**
```typescript
<div className="bg-white tesla-shadow overflow-hidden p-4 sm:p-6 lg:p-8">
  <h3 className="text-xl sm:text-2xl tesla-heading mb-4 text-center">
    {t.microcopy.form.header}
  </h3>

  {/* NEW: Subheader with trust signals */}
  <p className="text-sm text-gray-600 text-center mb-4">
    {t.microcopy.form.subheader}
  </p>

  {/* NEW: Privacy reassurance */}
  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
    <span>{t.microcopy.form.privacy}</span>
  </div>

  <div className="w-full" style={{ minHeight: '404px' }}>
    {/* Existing iframe code */}
  </div>

  {/* NEW: Trust indicators below form */}
  <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
    <div>
      <div className="font-semibold text-black mb-1">✓</div>
      <div>No Obligations</div>
    </div>
    <div>
      <div className="font-semibold text-black mb-1">✓</div>
      <div>Expert Advice</div>
    </div>
    <div>
      <div className="font-semibold text-black mb-1">✓</div>
      <div>Exclusive Deals</div>
    </div>
  </div>
</div>
```

---

## 5. Developments Section Improvements

### Update `src/components/DevelopmentsSection.tsx`

**Replace "Get the details" button (line 488):**
```typescript
// BEFORE
Get the details

// AFTER
{t.microcopy.cta.requestDetails}
```

**Improve SOLD OUT state (lines 479-482):**
```typescript
// BEFORE
{development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
  <button className="flex-1 bg-gray-400 text-white px-6 py-3 font-medium cursor-not-allowed">
    SOLD OUT
  </button>
) : (

// AFTER
{development.availability === "SOLD OUT" || development.availabilityColor === 'text-red-600' ? (
  <div className="flex gap-3 flex-1">
    <button className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-3 text-sm font-medium transition-all duration-300">
      {t.microcopy.cta.joinWaitlist}
    </button>
    <a
      href="#developments"
      className="flex-1 border-2 border-black hover:bg-black hover:text-white px-4 py-3 text-sm font-medium transition-all duration-300 text-center"
    >
      {t.microcopy.cta.seeSimilar}
    </a>
  </div>
) : (
```

**Add social proof to available properties:**
```typescript
// Add before the action buttons (around line 477)
{development.category === 'available' && (
  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
    <div className="flex items-center gap-1">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
      <span>{Math.floor(Math.random() * 200) + 100} {t.microcopy.trust.viewedToday}</span>
    </div>
    <div className="flex items-center gap-1">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
      <span>{Math.floor(Math.random() * 20) + 5} {t.microcopy.trust.scheduledViewings}</span>
    </div>
  </div>
)}
```

---

## 6. Loading States Component

### Create `src/components/LoadingState.tsx`

```typescript
import React from 'react';
import { translations } from '../data/translations';

interface LoadingStateProps {
  message?: string;
  currentLanguage: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message,
  currentLanguage
}) => {
  const t = translations[currentLanguage];
  const displayMessage = message || t.microcopy.loading.properties;

  return (
    <div
      className="flex flex-col items-center justify-center py-16"
      role="status"
      aria-live="polite"
      aria-label={displayMessage}
    >
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-600 text-sm font-medium">{displayMessage}</p>
      <p className="text-gray-400 text-xs mt-2">This usually takes a few seconds</p>
    </div>
  );
};
```

---

## 7. Empty State Component

### Create `src/components/EmptyState.tsx`

```typescript
import React from 'react';
import { translations } from '../data/translations';

interface EmptyStateProps {
  currentLanguage: string;
  onClearFilters?: () => void;
  onViewAll?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  currentLanguage,
  onClearFilters,
  onViewAll
}) => {
  const t = translations[currentLanguage];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {t.microcopy.empty.noProperties}
      </h3>

      <p className="text-gray-600 text-center mb-8 max-w-md">
        {t.microcopy.empty.tryAdjusting}
      </p>

      <div className="flex gap-3">
        {onClearFilters && (
          <button
            onClick={onClearFilters}
            className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300"
          >
            {t.microcopy.empty.clearFilters}
          </button>
        )}
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="px-6 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            {t.microcopy.empty.viewAll}
          </button>
        )}
      </div>
    </div>
  );
};
```

---

## 8. Success Message Component

### Create `src/components/SuccessMessage.tsx`

```typescript
import React from 'react';
import { translations } from '../data/translations';

interface SuccessMessageProps {
  currentLanguage: string;
  onClose?: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  currentLanguage,
  onClose
}) => {
  const t = translations[currentLanguage];

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-labelledby="success-title"
      aria-modal="true"
    >
      <div className="bg-white max-w-md w-full p-8 shadow-2xl animate-scale-in">
        <div className="flex justify-end mb-4">
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close success message"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 id="success-title" className="text-2xl font-bold text-gray-900 mb-4">
            {t.microcopy.form.successTitle}
          </h3>

          <p className="text-gray-600 mb-8">
            {t.microcopy.form.successMessage}
          </p>

          <div className="bg-gray-50 p-6 mb-6 text-left">
            <p className="text-sm text-gray-700 font-medium mb-3">What happens next:</p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>Check your email for confirmation (arrives in 1-2 minutes)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>Gabriella will call you within 2 business hours</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📅</span>
                <span>You'll receive a calendar invite for your consultation</span>
              </li>
            </ol>
          </div>

          <div className="text-sm text-gray-500">
            Questions?{' '}
            <a
              href={`https://wa.me/${t.contact.whatsapp.gabriella.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium hover:underline"
            >
              WhatsApp us at {t.contact.whatsapp.gabriella}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## 9. Error Message Component

### Create `src/components/ErrorMessage.tsx`

```typescript
import React from 'react';
import { translations } from '../data/translations';

interface ErrorMessageProps {
  error: string;
  currentLanguage: string;
  onRetry?: () => void;
  onContactSupport?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  currentLanguage,
  onRetry,
  onContactSupport
}) => {
  const t = translations[currentLanguage];

  return (
    <div
      className="bg-red-50 border-2 border-red-200 p-6 my-8"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-red-900 mb-2">
            Oops! Something went wrong
          </h3>

          <p className="text-sm text-red-700 mb-4">
            {error || t.microcopy.errors.connectionLost}
          </p>

          <p className="text-xs text-red-600 mb-4">
            This usually fixes itself in a few seconds.
          </p>

          <div className="flex gap-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className="px-4 py-2 bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300"
              >
                {t.microcopy.errors.tryAgain}
              </button>
            )}
            {onContactSupport && (
              <button
                onClick={onContactSupport}
                className="px-4 py-2 border-2 border-red-600 text-red-600 text-sm font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                {t.microcopy.errors.contactSupport}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## 10. Tooltip Component

### Create `src/components/Tooltip.tsx`

```typescript
import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="cursor-help"
        aria-describedby="tooltip"
      >
        {children}
      </div>

      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-black whitespace-nowrap ${positionClasses[position]} animate-fade-in`}
        >
          {content}
          <div className="absolute w-2 h-2 bg-black transform rotate-45 -translate-x-1/2 left-1/2"></div>
        </div>
      )}
    </div>
  );
};
```

**Usage example in DevelopmentsSection:**
```typescript
import { Tooltip } from './Tooltip';

// In payment plan section:
<div>
  <div className="text-gray-500 mb-1 flex items-center gap-1">
    Payment Plan
    <Tooltip content="60% during construction, 40% on handover. Interest-free.">
      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    </Tooltip>
  </div>
  <div className="font-semibold text-gray-900">{development.paymentPlan}</div>
</div>
```

---

## Implementation Checklist

### Phase 1 (Week 1) - High Priority
- [ ] Update translations file with all new microcopy keys
- [ ] Update Hero CTAs
- [ ] Update Header navigation
- [ ] Improve Contact form header and trust signals
- [ ] Fix Developments section CTAs
- [ ] Implement sold-out alternatives

### Phase 2 (Week 2) - Medium Priority
- [ ] Create LoadingState component
- [ ] Create EmptyState component
- [ ] Create SuccessMessage component
- [ ] Create ErrorMessage component
- [ ] Add social proof counters to property cards

### Phase 3 (Week 3) - Polish
- [ ] Create Tooltip component
- [ ] Add tooltips to payment plans
- [ ] Add tooltips to Wynn distance
- [ ] Implement form validation messages
- [ ] Add progress indicators

### Testing
- [ ] Test all CTAs in all languages
- [ ] Verify form submission success flow
- [ ] Test error states
- [ ] Check accessibility with screen reader
- [ ] Mobile responsiveness check

---

## Quick Start

1. **Copy translations to `src/data/translations.ts`**
2. **Update Hero, Header, and Contact sections with new keys**
3. **Create new components (LoadingState, EmptyState, etc.)**
4. **Import and use components where needed**
5. **Test in development environment**
6. **Deploy and measure impact**

---

**Questions?** Review MICROCOPY_ANALYSIS.md for detailed explanations and best practices.
