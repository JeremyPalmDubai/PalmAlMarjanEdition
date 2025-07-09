import React from 'react';

export const StructuredData: React.FC = () => {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Palm Signature Real Estate",
            "url": "https://palmsignature.ae",
            "logo": "https://palmsignature.ae/logo.svg",
            "description": "Leading luxury real estate agency specializing in Al Marjan Island investments",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al Marjan Island",
              "addressLocality": "Ras Al Khaimah",
              "addressCountry": "UAE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-50-123-4567",
              "email": "info@palmsignature.ae",
              "contactType": "customer service",
              "availableLanguage": ["en", "fr", "es", "nl"]
            },
            "sameAs": [
              "https://palmsignature.ae",
              "https://www.linkedin.com/company/palm-signature-real-estate"
            ],
            "founder": {
              "@type": "Person",
              "name": "Gabriella Magalhaes",
              "jobTitle": "CEO & Founder"
            }
          })
        }}
      />

      {/* Property Listing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            "name": "Al Marjan Island Luxury Properties",
            "description": "Exclusive luxury real estate investment opportunities on Al Marjan Island",
            "url": "https://palmsignature.ae",
            "listingAgent": {
              "@type": "RealEstateAgent",
              "name": "Palm Signature Real Estate",
              "telephone": "+971-50-123-4567",
              "email": "info@palmsignature.ae"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Al Marjan Island",
              "addressRegion": "Ras Al Khaimah",
              "addressCountry": "UAE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.685833",
              "longitude": "55.701667"
            },
            "priceRange": "AED 1,800,000 - AED 4,500,000",
            "priceCurrency": "AED",
            "availabilityStarts": "2025-01-27",
            "numberOfBedrooms": "1-4",
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": "500-3000",
              "unitText": "square feet"
            },
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Private Beach Access"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Marina Access"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Golf Course"
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Wynn Casino Proximity"
              }
            ]
          })
        }}
      />

      {/* Investment Opportunity Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Al Marjan Island Real Estate Investment",
            "description": "High-yield real estate investment opportunity with 33.3% annual appreciation",
            "provider": {
              "@type": "Organization",
              "name": "Palm Signature Real Estate"
            },
            "url": "https://palmsignature.ae",
            "category": "Real Estate Investment",
            "offers": {
              "@type": "Offer",
              "priceRange": "AED 1,800,000 - AED 4,500,000",
              "priceCurrency": "AED",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-27",
              "description": "Luxury real estate investment with 5-year payment plans"
            },
            "feesAndCommissionsSpecification": "No hidden fees, transparent pricing",
            "interestRate": "0% (interest-free payment plans)",
            "loanTerm": "5 years"
          })
        }}
      />

      {/* Wynn Casino Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Wynn Resort & Casino Al Marjan Island Opening",
            "description": "Grand opening of the $3.9 billion Wynn Resort & Casino",
            "startDate": "2027-01-01",
            "location": {
              "@type": "Place",
              "name": "Al Marjan Island",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ras Al Khaimah",
                "addressCountry": "UAE"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Wynn Resorts"
            },
            "offers": {
              "@type": "Offer",
              "name": "Investment Opportunity",
              "description": "Property investment opportunity with Wynn effect",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </>
  );
};