import { BentoGrid } from '@/components/BentoGrid';
import { BeforeAfter } from '@/components/BeforeAfter';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { Loader } from '@/components/Loader';
import { Reviews } from '@/components/Reviews';
import { localBusinessSchema, personSchema, reviewSchema, serviceSchema } from '@/lib/schema';

const services = [
  ['The Brickell Fade', '65', '45'],
  ['The Ocean Scissor Cut', '75', '55'],
  ['Beard Sculpt + Line Up', '45', '30'],
  ['Hot Towel Ritual Shave', '70', '45'],
  ['Fade + Beard Signature', '110', '75'],
  ['Kids Cut (10 & under)', '40', '35']
] as const;

export default function HomePage() {
  const schema = [
    localBusinessSchema(),
    reviewSchema(),
    ...services.map(([n,p,m])=>serviceSchema(n,p,m)),
    personSchema('MATEO “SOLÉ” RIVAS', 'Founder / Master Barber'),
    personSchema('VALENTINA CRUZ', 'Senior Stylist'),
    personSchema('DANTE VARGAS', 'Beard Specialist'),
    personSchema('NICO SANTOS', 'Barber')
  ];

  return (
    <main>
      <Loader />
      <Hero />
      <section className="section-shell pt-2">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bento-card"><p className="widget-title">Google</p><p className="text-3xl editorial">4.9★</p><p>512 reviews</p></div>
          <div className="bento-card"><p className="widget-title">Clients served</p><p className="text-3xl editorial">18,900+</p></div>
          <div className="bento-card"><p className="widget-title">Repeat rate</p><p className="text-3xl editorial">81%</p></div>
        </div>
      </section>
      <BentoGrid />
      <BeforeAfter />
      <Reviews />
      <section className="section-shell">
        <div className="bento-card">
          <h2 className="editorial text-4xl">Find us in Brickell.</h2>
          <p className="mt-3">901 S Miami Ave, Miami, FL 33130 • Valet + garage parking nearby.</p>
          <p className="mt-2">Mon–Thu 10:00 AM – 8:00 PM • Fri–Sat 10:00 AM – 9:00 PM • Sun 11:00 AM – 6:00 PM</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="cta-primary" href="https://book.solebarberlounge.com">Reserve your time</a>
            <a className="cta-ghost" href="tel:+13055550147">Call concierge</a>
          </div>
        </div>
      </section>
      <footer className="section-shell pt-0">
        <div className="rounded-[24px] border border-charcoal/20 bg-sand p-6 md:p-8">
          <h3 className="editorial text-3xl">No dead ends. Just sharp exits.</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <FAQ />
            <div>
              <p className="mb-4">Ready to lock your slot?</p>
              <a href="https://book.solebarberlounge.com" className="cta-primary">Book your Brickell cut</a>
              <p className="mt-6 text-sm">Instagram • TikTok • (305) 555-0147</p>
            </div>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
