const base = {
  '@context': 'https://schema.org',
  '@type': 'Barbershop',
  name: 'SOLÉ BARBER LOUNGE',
  telephone: '(305) 555-0147',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '901 S Miami Ave',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33130'
  }
};

export const localBusinessSchema = () => ({ ...base, url: 'https://book.solebarberlounge.com', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '512' } });

export const serviceSchema = (name: string, price: string, minutes: string) => ({ '@context': 'https://schema.org', '@type': 'Service', name, provider: base, offers: { '@type': 'Offer', price, priceCurrency: 'USD' }, duration: `PT${minutes}M` });

export const reviewSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: base,
  reviewRating: { '@type': 'Rating', ratingValue: '5' },
  reviewBody: 'Booked fast. Started on time. Left looking expensive.',
  author: { '@type': 'Person', name: 'Jason C.' }
});

export const personSchema = (name: string, role: string) => ({ '@context': 'https://schema.org', '@type': 'Person', name, jobTitle: role, worksFor: base });
