import React from 'react';
import { translations } from '../data/translations';
import { Calendar, Clock, ArrowRight, TrendingUp, Building2, MapPin, DollarSign } from 'lucide-react';

interface BlogSectionProps {
  currentLanguage: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage];

  const blogArticles = [
    {
      id: 'wynn-casino-2027-investment-guide',
      title: {
        en: 'Wynn Casino Al Marjan Island 2027: Complete Investment Guide',
        fr: 'Wynn Casino Al Marjan Island 2027: Guide Complet d\'Investissement',
        es: 'Wynn Casino Al Marjan Island 2027: Guia Completa de Inversion',
        nl: 'Wynn Casino Al Marjan Island 2027: Volledige Investeringsgids'
      },
      excerpt: {
        en: 'The $3.9 billion Wynn Resort & Casino opening in 2027 is transforming Al Marjan Island into the next Dubai Marina. Learn why early investors are seeing 33.3% annual returns.',
        fr: 'Le Wynn Resort & Casino de 3,9 milliards $ qui ouvre en 2027 transforme Al Marjan Island en la prochaine Dubai Marina. Decouvrez pourquoi les investisseurs gagnent 33,3% par an.',
        es: 'El Wynn Resort & Casino de $3.9 mil millones que abre en 2027 esta transformando Al Marjan Island en la proxima Dubai Marina. Descubra por que los inversores ven retornos del 33.3%.',
        nl: 'De $3.9 miljard Wynn Resort & Casino die in 2027 opent, transformeert Al Marjan Island tot de volgende Dubai Marina. Ontdek waarom vroege investeerders 33.3% jaarlijks rendement zien.'
      },
      category: 'Investment Guide',
      date: '2025-07-01',
      readTime: '8 min',
      image: 'https://palmdubai.fr/uploads/17f993c922_wynn_al_marjan_island-aerial_view-marina_estates.webp',
      icon: Building2,
      featured: true
    },
    {
      id: 'al-marjan-vs-palm-jumeirah-comparison',
      title: {
        en: 'Al Marjan Island vs Palm Jumeirah: ROI Comparison 2025',
        fr: 'Al Marjan Island vs Palm Jumeirah: Comparaison ROI 2025',
        es: 'Al Marjan Island vs Palm Jumeirah: Comparacion ROI 2025',
        nl: 'Al Marjan Island vs Palm Jumeirah: ROI Vergelijking 2025'
      },
      excerpt: {
        en: 'Historical data shows Palm Jumeirah properties appreciated 400% since launch. Al Marjan Island is following the same trajectory with Wynn Casino effect. Compare returns.',
        fr: 'Les donnees historiques montrent que les proprietes de Palm Jumeirah ont pris 400% depuis le lancement. Al Marjan Island suit la meme trajectoire avec l\'effet Wynn Casino.',
        es: 'Los datos historicos muestran que las propiedades de Palm Jumeirah se apreciaron 400% desde el lanzamiento. Al Marjan Island sigue la misma trayectoria con el efecto Wynn Casino.',
        nl: 'Historische gegevens tonen aan dat Palm Jumeirah woningen 400% in waarde stegen sinds de lancering. Al Marjan Island volgt dezelfde trajektie met het Wynn Casino effect.'
      },
      category: 'Market Analysis',
      date: '2025-06-28',
      readTime: '6 min',
      image: 'https://palmdubai.fr/uploads/posts/2025-04/709292a07f_capture-decran-2025-04-22-a-23_13_25.webp',
      icon: TrendingUp,
      featured: true
    },
    {
      id: 'tax-free-property-investment-uae',
      title: {
        en: 'Tax-Free Property Investment in UAE: Complete Guide 2025',
        fr: 'Investissement Immobilier Sans Taxes aux EAU: Guide Complet 2025',
        es: 'Inversion Inmobiliaria Sin Impuestos en EAU: Guia Completa 2025',
        nl: 'Belastingvrije Vastgoedinvestering in VAE: Volledige Gids 2025'
      },
      excerpt: {
        en: 'Discover how to invest in UAE real estate with 0% property tax, 0% capital gains tax, and 100% freehold ownership. Complete legal guide for international investors.',
        fr: 'Decouvrez comment investir dans l\'immobilier aux EAU avec 0% taxe fonciere, 0% plus-value et 100% pleine propriete. Guide juridique complet pour investisseurs internationaux.',
        es: 'Descubra como invertir en bienes raices EAU con 0% impuesto a la propiedad, 0% ganancias de capital y 100% propiedad absoluta. Guia legal completa para inversores internacionales.',
        nl: 'Ontdek hoe te investeren in VAE vastgoed met 0% onroerendgoedbelasting, 0% kapitaalwinstbelasting en 100% volle eigendom. Volledige juridische gids voor internationale investeerders.'
      },
      category: 'Legal Guide',
      date: '2025-06-25',
      readTime: '10 min',
      image: 'https://palmdubai.fr/uploads/posts/2025-07/f8834d1461_cledorbyarthouse.webp',
      icon: DollarSign
    },
    {
      id: 'payment-plans-al-marjan-island',
      title: {
        en: '5-Year Payment Plans Al Marjan Island: Best Options 2025',
        fr: 'Plans de Paiement 5 Ans Al Marjan Island: Meilleures Options 2025',
        es: 'Planes de Pago 5 Anos Al Marjan Island: Mejores Opciones 2025',
        nl: '5-Jaar Betalingsplannen Al Marjan Island: Beste Opties 2025'
      },
      excerpt: {
        en: 'Compare flexible payment plans from top developers on Al Marjan Island. 60/40 split, post-handover options, and interest-free installments explained.',
        fr: 'Comparez les plans de paiement flexibles des meilleurs promoteurs sur Al Marjan Island. Repartition 60/40, options post-livraison et versements sans interets expliques.',
        es: 'Compare planes de pago flexibles de los principales desarrolladores en Al Marjan Island. Division 60/40, opciones post-entrega y cuotas sin intereses explicadas.',
        nl: 'Vergelijk flexibele betalingsplannen van top ontwikkelaars op Al Marjan Island. 60/40 verdeling, post-oplevering opties en rentevrije termijnen uitgelegd.'
      },
      category: 'Financial Guide',
      date: '2025-06-22',
      readTime: '7 min',
      image: 'https://palmdubai.fr/uploads/posts/2025-07/0384c0f122_mantabay.webp',
      icon: DollarSign
    },
    {
      id: 'best-developments-near-wynn-casino',
      title: {
        en: 'Best Developments Near Wynn Casino Al Marjan 2025',
        fr: 'Meilleurs Developpements Pres du Wynn Casino Al Marjan 2025',
        es: 'Mejores Desarrollos cerca del Wynn Casino Al Marjan 2025',
        nl: 'Beste Ontwikkelingen bij Wynn Casino Al Marjan 2025'
      },
      excerpt: {
        en: 'Comprehensive review of luxury developments within walking distance of Wynn Casino. Compare prices, amenities, and investment potential.',
        fr: 'Revue complete des developpements de luxe a distance de marche du Wynn Casino. Comparez prix, amenites et potentiel d\'investissement.',
        es: 'Revision completa de desarrollos de lujo a distancia caminable del Wynn Casino. Compare precios, amenidades y potencial de inversion.',
        nl: 'Uitgebreide beoordeling van luxe ontwikkelingen op loopafstand van Wynn Casino. Vergelijk prijzen, voorzieningen en investeringspotentieel.'
      },
      category: 'Property Review',
      date: '2025-06-18',
      readTime: '12 min',
      image: 'https://palmdubai.fr/uploads/posts/2025-07/1178d03d12_w.webp',
      icon: MapPin
    },
    {
      id: 'ras-al-khaimah-real-estate-market-2025',
      title: {
        en: 'Ras Al Khaimah Real Estate Market Outlook 2025-2027',
        fr: 'Perspectives du Marche Immobilier Ras Al Khaimah 2025-2027',
        es: 'Perspectivas del Mercado Inmobiliario Ras Al Khaimah 2025-2027',
        nl: 'Ras Al Khaimah Vastgoedmarkt Vooruitzichten 2025-2027'
      },
      excerpt: {
        en: 'Expert analysis of Ras Al Khaimah real estate market trends, tourism growth, and investment opportunities leading up to Wynn Casino opening.',
        fr: 'Analyse experte des tendances du marche immobilier de Ras Al Khaimah, croissance du tourisme et opportunites d\'investissement precedant l\'ouverture du Wynn Casino.',
        es: 'Analisis experto de tendencias del mercado inmobiliario Ras Al Khaimah, crecimiento turistico y oportunidades de inversion antes de la apertura del Wynn Casino.',
        nl: 'Expertanalyse van Ras Al Khaimah vastgoedmarkttrends, toerismegroei en investeringsmogelijkheden voorafgaand aan Wynn Casino opening.'
      },
      category: 'Market Analysis',
      date: '2025-06-15',
      readTime: '9 min',
      image: 'https://palmalmarjan.com/public/assets/img/wrapper-bg.png',
      icon: TrendingUp
    }
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' :
                                    currentLanguage === 'es' ? 'es-ES' :
                                    currentLanguage === 'nl' ? 'nl-NL' : 'en-US',
                                    { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const blogTitle = currentLanguage === 'fr' ? 'Actualites Immobilieres' :
                    currentLanguage === 'es' ? 'Noticias Inmobiliarias' :
                    currentLanguage === 'nl' ? 'Vastgoedsnieuws' : 'Real Estate Insights';

  const blogSubtitle = currentLanguage === 'fr' ? 'Analyses expertes et guides d\'investissement pour Al Marjan Island' :
                       currentLanguage === 'es' ? 'Analisis expertos y guias de inversion para Al Marjan Island' :
                       currentLanguage === 'nl' ? 'Expertanalyses en investeringsgidsen voor Al Marjan Island' :
                       'Expert analysis and investment guides for Al Marjan Island';

  const readMore = currentLanguage === 'fr' ? 'Lire la suite' :
                   currentLanguage === 'es' ? 'Leer mas' :
                   currentLanguage === 'nl' ? 'Lees meer' : 'Read More';

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {blogTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blogSubtitle}
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogArticles.filter(a => a.featured).map((article, index) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/Article"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title[currentLanguage] || article.title.en}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <IconComponent className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1" itemProp="datePublished">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2" itemProp="headline">
                    {article.title[currentLanguage] || article.title.en}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">
                    {article.excerpt[currentLanguage] || article.excerpt.en}
                  </p>
                  <a
                    href={`#${article.id}`}
                    className="inline-flex items-center text-black font-medium hover:underline group"
                    onClick={(e) => {
                      e.preventDefault();
                      // Future: navigate to full article page
                    }}
                  >
                    {readMore}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogArticles.filter(a => !a.featured).map((article) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/Article"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title[currentLanguage] || article.title.en}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <IconComponent className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1" itemProp="datePublished">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm" itemProp="headline">
                    {article.title[currentLanguage] || article.title.en}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3" itemProp="description">
                    {article.excerpt[currentLanguage] || article.excerpt.en}
                  </p>
                  <a
                    href={`#${article.id}`}
                    className="inline-flex items-center text-black text-sm font-medium hover:underline group"
                  >
                    {readMore}
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Blog CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {currentLanguage === 'fr' ? 'Restez informe des dernieres opportunites d\'investissement' :
             currentLanguage === 'es' ? 'Mantente informado de las ultimas oportunidades de inversion' :
             currentLanguage === 'nl' ? 'Blijf op de hoogte van de laatste investeringsmogelijkheden' :
             'Stay updated with the latest investment opportunities'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {currentLanguage === 'fr' ? 'Recevoir les actualites' :
             currentLanguage === 'es' ? 'Recibir noticias' :
             currentLanguage === 'nl' ? 'Nieuws ontvangen' : 'Get Investment Updates'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
