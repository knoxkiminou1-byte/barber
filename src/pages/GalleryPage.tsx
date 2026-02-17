const timeline = ['2022: Foundation.', '2023: Precision era.', '2024: Ritual upgrades.', '2025: Luxury standard.', '2026: Category favorite.'];
const filters = ['Fade', 'Beard', 'Scissor', 'Classic', 'Kids'];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <h1 className="section-title">The Legacy.</h1>
      <p className="mt-3 max-w-2xl text-sm text-black/72">Real clients. Real shape work. Focus on texture, line quality, and profile balance.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {timeline.map((t) => <article key={t} className="widget text-sm" data-card-hover>{t}</article>)}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => <button className="rounded-full border border-black/20 px-4 py-2 text-xs hover:border-teal" key={f}>{f}</button>)}
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 18 }).map((_, i) => (
          <article key={i} className="widget p-2" data-card-hover>
            <img src={`/gallery/look-${String(i + 1).padStart(2, '0')}.jpg`} alt={`Barber look ${i + 1}`} className="aspect-[4/5] w-full rounded-xl object-cover bg-sand" loading="lazy" />
            <p className="p-2 text-xs">4.9★ average • Most booked: Brickell Fade • Detail-focused finishing</p>
          </article>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="https://book.solebarberlounge.com" className="rounded-full bg-coral px-6 py-3 text-sm text-white">See results. Book now.</a>
        <a href="/team" className="rounded-full border border-black/20 px-6 py-3 text-sm">Meet your barber</a>
      </div>
    </main>
  );
}
