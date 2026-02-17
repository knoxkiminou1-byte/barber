const faqs = [
  ['Do you run on time?', 'Yes. We keep schedule discipline every day.'],
  ['Any hidden fees?', 'No hidden fees. Final price is confirmed first.'],
  ['Parking?', 'Valet and parking garages are available nearby in Brickell.']
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8" data-reveal>
      <h2 className="section-title text-3xl">FAQ</h2>
      <div className="mt-4 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="widget">
            <summary className="cursor-pointer font-semibold">{q}</summary>
            <p className="mt-2 text-sm text-black/70">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
