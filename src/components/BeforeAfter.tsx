const transformations = [
  'Executive reset before a board meeting.',
  'Wedding-week beard architecture + line precision.',
  'Scissor reshape with natural volume control.',
  'Kids classic clean-up with soft taper.'
];

export default function BeforeAfter() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8" data-reveal>
      <h2 className="section-title">Before. After. Intentional.</h2>
      <p className="mt-3 max-w-2xl text-sm text-black/70">Each service is built around face shape, growth pattern, and daily styling routine.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {transformations.map((note) => (
          <article key={note} className="widget" data-card-hover>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-coconut p-8 text-center text-xs uppercase">Before</div>
              <div className="rounded-xl bg-coconut p-8 text-center text-xs uppercase">After</div>
            </div>
            <p className="mt-3 text-sm text-black/75">{note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
