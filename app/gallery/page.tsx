const years = ['2022: Foundation.','2023: Precision era.','2024: Ritual upgrades.','2025: Luxury standard.','2026: Category favorite.'];
const filters = ['Fade','Beard','Scissor','Classic','Kids'];

export default function GalleryPage() {
  return (
    <main>
      <section className="section-shell">
        <h1 className="editorial text-6xl">The Legacy lookbook.</h1>
        <p className="mt-3">Miami lifestyle cuts with real structure.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-5">{years.map((y)=><div className="bento-card text-sm" key={y}>{y}</div>)}</div>
      </section>
      <section className="section-shell pt-0">
        <div className="mb-4 flex flex-wrap gap-2">{filters.map((f)=><button className="rounded-full border border-charcoal/30 px-4 py-2 text-xs" key={f}>{f}</button>)}</div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{Array.from({length:18}).map((_,i)=><article className="bento-card" key={i}><div className="h-56 rounded-xl bg-charcoal/10" /><p className="mt-2 text-sm">Look {String(i+1).padStart(2,'0')} • Hover microvideo preview</p></article>)}</div>
        <div className="mt-5 grid gap-4 md:grid-cols-2"><div className="bento-card">4.9★ average</div><div className="bento-card">Most booked: Brickell Fade</div></div>
        <a href="https://book.solebarberlounge.com" className="cta-primary mt-6">Get this result</a>
      </section>
    </main>
  );
}
