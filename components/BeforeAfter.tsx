export function BeforeAfter() {
  return (
    <section className="section-shell">
      <h2 className="editorial text-4xl">Proof in every angle.</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[1,2,3].map((i)=> <div key={i} className="bento-card"><p className="widget-title">Before / After {i}</p><div className="mt-3 h-48 rounded-xl bg-charcoal/10" /></div>)}
      </div>
      <a href="/gallery" className="cta-primary mt-6">See transformation gallery</a>
    </section>
  );
}
