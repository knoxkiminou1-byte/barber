import Loader from '../components/Loader';
import Marquee from '../components/Marquee';
import BentoGrid from '../components/BentoGrid';
import BeforeAfter from '../components/BeforeAfter';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import MagneticButton from '../components/MagneticButton';
import { localBusinessSchema, peopleSchema, reviewSchema, servicesSchema } from '../lib/schema';

const quickPrices = [
  ['The Brickell Fade', '$65'],
  ['The Ocean Scissor Cut', '$75'],
  ['Beard Sculpt + Line Up', '$45'],
  ['Hot Towel Ritual Shave', '$70']
];

export default function HomePage() {
  return (
    <main>
      <Loader />

      <section className="hero relative min-h-[90vh] overflow-hidden px-4 pb-16 pt-24 md:px-8">
        <video className="absolute inset-0 h-full w-full object-cover opacity-45" autoPlay muted loop playsInline data-parallax="hero">
          <source src="/media/hero-miami-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-vignette absolute inset-0" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-black/60">Brickell • Miami</p>
          <h1 className="hero-title font-display text-6xl leading-[0.9] md:text-8xl">
            <span className="inline-block">MIAMI.</span> <span className="inline-block">CLEAN.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg">Luxury cuts. Razor-clean beards. On time. Every time.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="https://book.solebarberlounge.com" label="BOOK NOW" />
            <MagneticButton href="/gallery" label="SEE THE LOOKS" solid={false} />
          </div>
          <div className="mt-10 max-w-md rounded-2xl border border-black/15 bg-coconut/85 p-4 backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/60">Today’s fastest slot</p>
            <p className="mt-1 font-display text-3xl">6:20 PM • Mateo</p>
            <a href="https://book.solebarberlounge.com" className="mt-2 inline-block text-sm text-coral">Take this appointment →</a>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-4 py-10 md:px-8" data-reveal>
        <div className="widget text-center" data-card-hover><p className="font-display text-3xl">4.9★</p><p className="text-xs">512 reviews</p></div>
        <div className="widget text-center" data-card-hover><p className="font-display text-3xl">18,900+</p><p className="text-xs">clients served</p></div>
        <div className="widget text-center" data-card-hover><p className="font-display text-3xl">81%</p><p className="text-xs">repeat rate</p></div>
      </section>

      <BentoGrid />

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8" data-reveal>
        <article className="widget" data-card-hover>
          <p className="text-[11px] uppercase tracking-[0.24em] text-black/55">About SOLÉ</p>
          <h2 className="mt-2 section-title">Modern Miami barbering. Lounge-level service.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/75">
            SOLÉ BARBER LOUNGE is built for professionals, founders, and regulars who value consistency. Every appointment starts with a focused consultation,
            follows a clean structure process, and ends with finish styling so you leave camera-ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.15em]">
            <span className="rounded-full border border-black/20 px-3 py-2">On-time appointments</span>
            <span className="rounded-full border border-black/20 px-3 py-2">Sanitized tools every service</span>
            <span className="rounded-full border border-black/20 px-3 py-2">Luxury finish included</span>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8" data-reveal>
        <article className="widget" data-card-hover>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/55">Pricing snapshot</p>
              <h2 className="mt-1 text-3xl font-display">Most-booked services</h2>
            </div>
            <a href="/services" className="text-sm font-semibold text-coral">View full service menu →</a>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {quickPrices.map(([name, price]) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-black/10 bg-coconut p-3 text-sm">
                <span>{name}</span><span className="font-semibold">{price}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <BeforeAfter />
      <Reviews />

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8" data-reveal>
        <article className="widget" data-card-hover>
          <h2 className="section-title">Brickell. Pull up polished.</h2>
          <p className="mt-3 text-sm">901 S Miami Ave, Miami, FL 33130 • Parking garage + valet nearby • (305) 555-0147</p>
          <p className="mt-1 text-sm">Mon–Thu 10AM–8PM • Fri–Sat 10AM–9PM • Sun 11AM–6PM</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href="https://book.solebarberlounge.com" className="text-coral">Lock your slot</a>
            <a href="/services">View pricing</a>
            <a href="tel:+13055550147">Call now</a>
            <a href="https://instagram.com/solebarberlounge">See Instagram</a>
          </div>
        </article>
      </section>

      <FAQ />

      <footer className="border-t border-black/10 px-4 py-10 text-sm md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>SOLÉ BARBER LOUNGE — Miami luxury. Clean lines. Always on time.</p>
          <a href="https://book.solebarberlounge.com" className="rounded-full bg-coral px-5 py-2 text-white">Final CTA: BOOK NOW</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }} />
    </main>
  );
}
