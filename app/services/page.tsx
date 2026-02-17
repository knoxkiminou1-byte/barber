export default function ServicesPage() {
  return (
    <main>
      <section className="section-shell">
        <h1 className="editorial text-6xl">Choose your level. Leave polished.</h1>
        <p className="mt-4 max-w-xl">Miami barber precision. Brickell scheduling speed. Every service includes a luxury finish.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Classic','Luxe','Signature'].map((tier)=> <article key={tier} className="bento-card"><p className="widget-title">{tier}</p><p className="mt-3 border-t border-gold/40 pt-3">Built for sharp lines, clean structure, and lasting hold.</p><a href="https://book.solebarberlounge.com" className="cta-ghost mt-4">Select {tier}</a></article>)}
        </div>
      </section>
      <section className="section-shell pt-0"><div className="grid gap-4 md:grid-cols-4">{['No hidden fees.','On-time appointments.','Sanitized tools every service.','Luxury finish included.'].map((c)=><div key={c} className="bento-card text-sm">{c}</div>)}</div></section>
      <section className="section-shell pt-0">
        <div className="bento-card">
          <h2 className="editorial text-4xl">The SOLÉ System</h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-4">{['Consult (60 seconds)','Structure (shape + balance)','Detail (blend + lines)','Finish (texture + hold)'].map((s)=><li key={s} className="rounded-xl border border-charcoal/20 p-3 text-sm">{s}</li>)}</ol>
          <p className="mt-5 text-sm">Tools: Wahl • BabylissPRO • Andis • Reuzel • Layrite</p>
          <a href="https://book.solebarberlounge.com" className="cta-primary mt-6">Book your service tier</a>
        </div>
      </section>
    </main>
  );
}
