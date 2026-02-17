const reviews = [
  '“Feels like a lounge, not a barbershop. Fade is flawless.” — Luis M.',
  '“Booked fast. Started on time. Left looking expensive.” — Jason C.',
  '“Best beard work in Miami. Clean symmetry.” — Marco P.',
  '“Hot towel ritual is elite. I’m locked in.” — Andre S.',
  '“The vibe is luxury. The cut matches.” — Kevin R.'
];

export function Reviews() {
  return (
    <section className="section-shell">
      <h2 className="editorial text-4xl">Miami says it better.</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {reviews.map((r) => <blockquote key={r} className="bento-card text-lg">{r}</blockquote>)}
      </div>
    </section>
  );
}
