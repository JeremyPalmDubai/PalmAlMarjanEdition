import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const languages = ['en', 'fr', 'es', 'nl'];
const pages = ['sitemap', 'privacy', 'terms'];

const baseUrl = 'https://investalmarjanisland.com';

const languageContent = {
  en: {
    title: 'Invest Al Marjan Island - Al Marjan Real Estate Near Wynn Casino | Palm Signature',
    description: 'Invest Al Marjan Island luxury real estate near Wynn Casino. Al Marjan real estate with 5-year payment plans. 33.3% appreciation, tax-free ownership.',
    h1: 'Invest Al Marjan Island',
    subtitle: 'Luxury Real Estate Investment Near Wynn Casino 2027'
  },
  fr: {
    title: 'Investir Al Marjan Island - Immobilier de Luxe pres du Wynn Casino | Palm Signature',
    description: 'Investir Al Marjan Island immobilier de luxe pres du Wynn Casino. Al Marjan immobilier avec plans de paiement 5 ans. 33.3% appreciation, sans taxes.',
    h1: 'Investir a Al Marjan Island',
    subtitle: 'Investissement Immobilier de Luxe pres du Wynn Casino 2027'
  },
  es: {
    title: 'Invertir Al Marjan Island - Bienes Raices de Lujo cerca del Wynn Casino | Palm Signature',
    description: 'Invertir Al Marjan Island bienes raices de lujo cerca del Wynn Casino. Al Marjan bienes raices con planes de pago 5 anos. 33.3% apreciacion, sin impuestos.',
    h1: 'Invertir en Al Marjan Island',
    subtitle: 'Inversion Inmobiliaria de Lujo cerca del Wynn Casino 2027'
  },
  nl: {
    title: 'Investeren Al Marjan Island - Luxe Vastgoed bij Wynn Casino | Palm Signature',
    description: 'Investeren Al Marjan Island luxe vastgoed bij Wynn Casino. Al Marjan vastgoed met 5-jaar betalingsplannen. 33.3% waardestijging, belastingvrij.',
    h1: 'Investeren op Al Marjan Island',
    subtitle: 'Luxe Vastgoedinvestering bij Wynn Casino 2027'
  }
};

const pageContent = {
  sitemap: {
    en: { title: 'Sitemap - Invest Al Marjan Island', description: 'Complete sitemap of Invest Al Marjan Island website.' },
    fr: { title: 'Plan du site - Investir Al Marjan Island', description: 'Plan complet du site Investir Al Marjan Island.' },
    es: { title: 'Mapa del sitio - Invertir Al Marjan Island', description: 'Mapa completo del sitio Invertir Al Marjan Island.' },
    nl: { title: 'Sitemap - Investeren Al Marjan Island', description: 'Volledige sitemap van Investeren Al Marjan Island.' }
  },
  privacy: {
    en: { title: 'Privacy Policy - Invest Al Marjan Island', description: 'Privacy policy for Invest Al Marjan Island website.' },
    fr: { title: 'Politique de Confidentialite - Investir Al Marjan Island', description: 'Politique de confidentialite du site Investir Al Marjan Island.' },
    es: { title: 'Politica de Privacidad - Invertir Al Marjan Island', description: 'Politica de privacidad del sitio Invertir Al Marjan Island.' },
    nl: { title: 'Privacybeleid - Investeren Al Marjan Island', description: 'Privacybeleid van Investeren Al Marjan Island.' }
  },
  terms: {
    en: { title: 'Terms of Service - Invest Al Marjan Island', description: 'Terms of service for Invest Al Marjan Island website.' },
    fr: { title: 'Conditions d\'Utilisation - Investir Al Marjan Island', description: 'Conditions d\'utilisation du site Investir Al Marjan Island.' },
    es: { title: 'Terminos de Servicio - Invertir Al Marjan Island', description: 'Terminos de servicio del sitio Invertir Al Marjan Island.' },
    nl: { title: 'Algemene Voorwaarden - Investeren Al Marjan Island', description: 'Algemene voorwaarden van Investeren Al Marjan Island.' }
  }
};

function generateHtmlPage(lang, page, content) {
  const langPath = lang === 'en' ? '' : `/${lang}`;
  const pagePath = page === 'home' ? '' : `/${page}`;
  const url = `${baseUrl}${langPath}${pagePath}`;

  const isHome = page === 'home';
  const langContent = languageContent[lang] || languageContent.en;
  const pageSpecific = !isHome && pageContent[page] ? pageContent[page][lang] : null;

  const title = pageSpecific ? pageSpecific.title : langContent.title;
  const description = pageSpecific ? pageSpecific.description : langContent.description;
  const h1 = langContent.h1;
  const subtitle = langContent.subtitle;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${url}">
  ${languages.map(l => {
    const lPath = l === 'en' ? '' : `/${l}`;
    return `<link rel="alternate" hreflang="${l}" href="${baseUrl}${lPath}${pagePath}">`;
  }).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${baseUrl}${pagePath}">
  <link rel="icon" type="image/svg+xml" href="/vite.svg">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Palm Signature Real Estate",
    "url": "${baseUrl}",
    "telephone": "+971-58-247-4950",
    "email": "hello@palmsignature.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Al Marjan Island, Ras Al Khaimah",
      "addressCountry": "AE"
    }
  }
  </script>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; }
    .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; text-align: center; padding: 2rem; }
    .hero h1 { font-size: 3rem; margin-bottom: 1rem; font-weight: 300; }
    .hero p { font-size: 1.5rem; opacity: 0.9; margin-bottom: 2rem; }
    .hero .cta { display: inline-block; background: white; color: #1a1a2e; padding: 1rem 2rem; text-decoration: none; font-weight: 600; border-radius: 4px; }
    .loading { padding: 2rem; text-align: center; color: #666; }
  </style>
</head>
<body>
  <noscript>
    <div class="hero">
      <div>
        <h1>${h1}</h1>
        <p>${subtitle}</p>
        <a href="#contact" class="cta">Contact +971-58-247-4950</a>
      </div>
    </div>
  </noscript>
  <div id="root">
    <div class="loading">
      <p>Loading Invest Al Marjan Island...</p>
      <p>Contact us: <a href="tel:+971582474950">+971-58-247-4950</a> | <a href="mailto:hello@palmsignature.ae">hello@palmsignature.ae</a></p>
    </div>
  </div>
  <script type="module" src="/src/main.tsx"></script>
  <script>
    window.__INITIAL_STATE__ = { language: '${lang}', page: '${page}' };
  </script>
</body>
</html>`;
}

function generateAllPages() {
  console.log('Generating static HTML pages for SEO...');

  if (!fs.existsSync(distDir)) {
    console.log('dist directory not found, creating...');
    fs.mkdirSync(distDir, { recursive: true });
  }

  const allCombinations = [];

  // Generate home pages for each language
  languages.forEach(lang => {
    allCombinations.push({ lang, page: 'home', path: lang === 'en' ? '/index.html' : `/${lang}/index.html` });
  });

  // Generate other pages for each language
  pages.forEach(page => {
    languages.forEach(lang => {
      const langPath = lang === 'en' ? '' : `/${lang}`;
      allCombinations.push({ lang, page, path: `${langPath}/${page}/index.html` });
    });
  });

  allCombinations.forEach(({ lang, page, path: pagePath }) => {
    const fullPath = path.join(distDir, pagePath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const html = generateHtmlPage(lang, page, languageContent[lang]);
    fs.writeFileSync(fullPath, html);
    console.log(`Generated: ${pagePath}`);
  });

  // Copy main index.html if it exists in dist
  const mainIndexSrc = path.join(distDir, 'index.html');
  if (fs.existsSync(mainIndexSrc)) {
    console.log('Main index.html already exists in dist');
  }

  console.log(`\nGenerated ${allCombinations.length} static HTML pages for SEO!`);
  console.log('Pages generated for languages:', languages.join(', '));
  console.log('Pages: home, sitemap, privacy, terms');
}

generateAllPages();
