const reviews = [
  ['Feels like a lounge, not a barbershop. Fade is flawless.', 'Luis M.'],
  ['Booked fast. Started on time. Left looking expensive.', 'Jason C.'],
  ['Best beard work in Miami. Clean symmetry.', 'Marco P.'],
  ['Hot towel ritual is elite. I’m locked in.', 'Andre S.'],
  ['The vibe is luxury. The cut matches.', 'Kevin R.']
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8" data-reveal>
      <h2 className="section-title">Trusted by Brickell regulars.</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {reviews.map(([quote, name]) => (
          <article key={quote} className="widget text-sm" data-card-hover>
            <p>“{quote}”</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-black/55">— {name}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="https://book.solebarberlounge.com" className="rounded-full bg-coral px-5 py-2 text-white">Book your first visit</a>
        <a href="/gallery" className="rounded-full border border-black/20 px-5 py-2">See more results</a>
      </div>
    </section>
  );
}
