const featured = [
  { name: 'The Brickell Fade', meta: '45 min', price: '$65' },
  { name: 'The Ocean Scissor Cut', meta: '55 min', price: '$75' },
  { name: 'Fade + Beard Signature', meta: '75 min', price: '$110' }
];

export default function BentoGrid() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-16 md:grid-cols-3 md:px-8">
      <article className="widget md:col-span-2" data-pin-booking data-card-hover>
        <p className="text-[11px] uppercase tracking-[0.25em] text-black/55">Book in 2 taps</p>
        <h3 className="mt-2 text-2xl font-semibold">Service. Barber. Confirm.</h3>
        <p className="mt-3 max-w-md text-sm text-black/70">Same flow clients expect from premium Miami studios. No calls. No waiting.</p>
        <div className="mt-6 grid gap-2 text-sm">
          <div className="rounded-xl bg-coconut p-3">1) Select: The Brickell Fade</div>
          <div className="rounded-xl bg-coconut p-3">2) Choose barber: Mateo “SOLÉ”</div>
          <div className="rounded-xl bg-coral p-3 text-white">3) Confirm: Today 6:20 PM</div>
        </div>
        <a href="https://book.solebarberlounge.com" className="mt-5 inline-block text-sm font-semibold text-coral">Reserve in 30 seconds →</a>
      </article>

      <article className="widget" data-reveal data-card-hover>
        <p className="text-[11px] uppercase tracking-[0.25em] text-black/55">Next available</p>
        <p className="mt-2 font-display text-4xl">Today 6:20 PM</p>
        <p className="mt-2 text-sm text-black/65">Brickell • Founder chair open</p>
        <a href="https://book.solebarberlounge.com" className="mt-6 inline-block rounded-full border border-black/20 px-4 py-2 text-xs uppercase tracking-[0.2em]">Claim spot</a>
      </article>

      <article className="widget md:col-span-3" data-reveal>
        <div className="grid gap-3 md:grid-cols-3">
          {featured.map((item) => (
            <article key={item.name} className="rounded-2xl border border-gold/35 bg-coconut p-4" data-card-hover>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-1 text-xs text-black/60">{item.meta}</p>
              <p className="mt-3 font-display text-3xl">{item.price}</p>
              <a href="https://book.solebarberlounge.com" className="mt-3 inline-block text-xs uppercase tracking-[0.15em] text-coral">Book service</a>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
