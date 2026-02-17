const services = [
  ['The Brickell Fade', '45 min', '$65', 'Skin fade or taper with balance-focused line work.'],
  ['The Ocean Scissor Cut', '55 min', '$75', 'Scissor-crafted shape and texture for movement and control.'],
  ['Beard Sculpt + Line Up', '30 min', '$45', 'Beard architecture with neckline cleanup and symmetry correction.'],
  ['Hot Towel Ritual Shave', '45 min', '$70', 'Traditional shave finish with steam prep and post-shave calm.'],
  ['Fade + Beard Signature', '75 min', '$110', 'Most-booked full reset: fade, beard, detail pass, final style.'],
  ['Kids Cut (10 & under)', '35 min', '$40', 'Age-appropriate classic and modern cuts with clean finish.']
];

const addons = ['Razor Enhancement — $12', 'Steam + Towel Upgrade — $18', 'Hair Wash + Scalp Massage — $25', 'Styling Finish (matte or shine) — $10'];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <h1 className="section-title">Choose your level. Leave polished.</h1>
      <p className="mt-4 max-w-2xl text-sm text-black/72">Straight pricing. Zero guesswork. Every service includes consultation and finish styling.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="widget" data-card-hover><p className="text-xs uppercase tracking-[0.2em]">Classic</p><p className="mt-2 text-sm">For dependable weekly maintenance.</p><a href="https://book.solebarberlounge.com" className="mt-4 inline-block text-coral">Book Classic</a></article>
        <article className="widget" data-card-hover><p className="text-xs uppercase tracking-[0.2em]">Luxe</p><p className="mt-2 text-sm">For texture, shape upgrades, and polish.</p><a href="https://book.solebarberlounge.com" className="mt-4 inline-block text-coral">Book Luxe</a></article>
        <article className="widget" data-card-hover><p className="text-xs uppercase tracking-[0.2em]">Signature</p><p className="mt-2 text-sm">For complete image architecture.</p><a href="https://book.solebarberlounge.com" className="mt-4 inline-block text-coral">Book Signature</a></article>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {services.map((s) => (
          <article key={s[0]} className="widget" data-card-hover>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">{s[0]}</p>
                <p className="text-xs text-black/60">{s[1]}</p>
              </div>
              <p className="font-display text-2xl">{s[2]}</p>
            </div>
            <p className="mt-2 text-sm text-black/70">{s[3]}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 grid gap-3 md:grid-cols-4">
        {['No hidden fees.', 'On-time appointments.', 'Sanitized tools every service.', 'Luxury finish included.'].map((i) => <div key={i} className="widget text-sm" data-card-hover>{i}</div>)}
      </section>

      <section className="mt-8 widget" data-card-hover>
        <h2 className="font-display text-3xl">The SOLÉ System</h2>
        <ol className="mt-4 grid gap-3 text-sm md:grid-cols-4"><li>1) Consult</li><li>2) Structure</li><li>3) Detail</li><li>4) Finish</li></ol>
      </section>

      <section className="mt-8 widget" data-card-hover>
        <h3 className="font-semibold">Add-ons</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">{addons.map((a) => <div className="rounded-xl bg-coconut p-3 text-sm" key={a}>{a}</div>)}</div>
      </section>

      <section className="mt-8 widget" data-card-hover>
        <h3 className="font-semibold">Memberships</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-3 text-sm">
          <div className="rounded-xl bg-coconut p-4">The Weekender — 1 cut/month — $59</div>
          <div className="rounded-xl bg-coconut p-4">The Brickell — 2 cuts/month — $109</div>
          <div className="rounded-xl bg-coconut p-4">The Yacht Club — weekly cut — $189</div>
        </div>
        <a href="https://book.solebarberlounge.com" className="mt-4 inline-block rounded-full bg-coral px-6 py-3 text-white">Reserve your service</a>
      </section>
    </main>
  );
}
