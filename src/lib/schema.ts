export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Barbershop',
  name: 'SOLÉ BARBER LOUNGE',
  image: '/gallery/look-01.jpg',
  telephone: '(305) 555-0147',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '901 S Miami Ave',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33130'
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.9, reviewCount: 512 }
};

export const servicesSchema = [
  ['The Brickell Fade', '45 min', '65'],
  ['The Ocean Scissor Cut', '55 min', '75'],
  ['Beard Sculpt + Line Up', '30 min', '45'],
  ['Hot Towel Ritual Shave', '45 min', '70'],
  ['Fade + Beard Signature', '75 min', '110'],
  ['Kids Cut (10 & under)', '35 min', '40']
].map(([name, duration, price]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  offers: { '@type': 'Offer', priceCurrency: 'USD', price, description: `${name} - ${duration}` }
}));

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: { '@type': 'Person', name: 'Luis M.' },
  reviewBody: 'Feels like a lounge, not a barbershop. Fade is flawless.'
};

export const peopleSchema = [
  ['MATEO “SOLÉ” RIVAS', 'Founder / Master Barber'],
  ['VALENTINA CRUZ', 'Senior Stylist'],
  ['DANTE VARGAS', 'Beard Specialist'],
  ['NICO SANTOS', 'Barber']
].map(([name, jobTitle]) => ({ '@context': 'https://schema.org', '@type': 'Person', name, jobTitle }));
