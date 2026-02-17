const team = [
  ['MATEO “SOLÉ” RIVAS', 'Founder / Master Barber — 12 yrs — fades + structure', 'Luxury is in the details.'],
  ['VALENTINA CRUZ', 'Senior Stylist — 8 yrs — scissor + texture + classics', 'Precision with polish.'],
  ['DANTE VARGAS', 'Beard Specialist — 9 yrs — beard architecture + ritual shaves', 'Your beard. Engineered.'],
  ['NICO SANTOS', 'Barber — 6 yrs — tapers + clean classics', 'Sharp. Simple. Repeat.']
];

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-8">
      <h1 className="section-title">The Human side of luxury.</h1>
      <p className="mt-3 max-w-2xl text-sm text-black/72">A modern barbershop team focused on consistency, punctuality, and clean finishing details.</p>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {team.map(([name, role, motto]) => (
          <article key={name} className="widget bg-sand" data-card-hover>
            <h2 className="font-display text-2xl">{name}</h2>
            <p className="mt-2 text-sm">{role}</p>
            <p className="mt-1 text-sm text-black/70">“{motto}”</p>
          </article>
        ))}
      </section>

      <section className="mt-10 widget bg-sand" data-card-hover>
        <h2 className="font-display text-3xl">Tell us your ideal slot.</h2>
        <p className="mt-2 text-sm">Hi, I’m [Name]. I want a [Service]. I prefer [Barber/No preference]. My ideal time is [Day/Time]. Budget: [Range].</p>
        <form className="mt-6 grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-black/20 bg-coconut p-3" placeholder="Name" />
          <input className="rounded-xl border border-black/20 bg-coconut p-3" placeholder="Service" />
          <input className="rounded-xl border border-black/20 bg-coconut p-3" placeholder="Barber preference" />
          <input className="rounded-xl border border-black/20 bg-coconut p-3" placeholder="Ideal day/time" />
          <input className="rounded-xl border border-black/20 bg-coconut p-3 md:col-span-2" placeholder="Budget" />
          <p className="text-xs md:col-span-2">4.9★ Rated • 512 Reviews</p>
          <button className="rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white md:col-span-2">Lock your slot.</button>
        </form>
      </section>

      <section className="mt-8 widget" data-card-hover>
        <h3 className="font-semibold">Shooting guide</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-black/70">
          <li>4K capture. 60fps for smooth slow-motion edits.</li>
          <li>Golden-hour exteriors, neon-night interiors, mirror detail closeups.</li>
          <li>Capture consultations, lineups, profile reveal, and final styling finish.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href="https://instagram.com/solebarberlounge" className="text-coral">View Instagram</a>
          <a href="https://tiktok.com/@solebarberlounge">View TikTok</a>
          <a href="https://book.solebarberlounge.com">Book this week</a>
        </div>
      </section>
    </main>
  );
}
