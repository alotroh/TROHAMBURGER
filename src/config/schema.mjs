/**
 * JSON-LD микроразметка. Собирается из данных бренда, чтобы поисковики
 * понимали, что это ресторан/бургерная. Адрес и гео добавляются в разметку
 * только когда реально заполнены в site.mjs (концепт — без выдуманных данных).
 */
import { SITE, SITE_URL, BUSINESS, CONTACTS } from './site.mjs';

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.brand,
    url: SITE_URL,
    inLanguage: SITE.lang,
  };
}

export function restaurantSchema({ image } = {}) {
  const node = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: SITE.brand,
    description: SITE.category,
    servesCuisine: ['Бургеры', 'Американская кухня', 'Стритфуд'],
    priceRange: BUSINESS.priceRange,
    url: SITE_URL,
    areaServed: BUSINESS.areaServed,
    acceptsReservations: 'True',
  };

  if (image) node.image = new URL(image, SITE_URL).href;
  if (CONTACTS.phoneRaw) node.telephone = CONTACTS.phoneRaw;

  const a = BUSINESS.address;
  if (a.streetAddress && a.addressLocality) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: a.streetAddress,
      addressLocality: a.addressLocality,
      addressRegion: a.addressRegion,
      postalCode: a.postalCode,
      addressCountry: a.addressCountry,
    };
  }
  if (BUSINESS.geo.latitude && BUSINESS.geo.longitude) {
    node.geo = {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    };
  }
  if (BUSINESS.openingHours?.length) {
    node.openingHoursSpecification = BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  return node;
}
