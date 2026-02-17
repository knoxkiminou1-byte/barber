const team = [
  ['MATEO “SOLÉ” RIVAS','Founder / Master Barber','12 yrs','fades + structure','Luxury is in the details.'],
  ['VALENTINA CRUZ','Senior Stylist','8 yrs','scissor + texture + modern classics','Precision with polish.'],
  ['DANTE VARGAS','Beard Specialist','9 yrs','beard architecture + ritual shaves','Your beard. Engineered.'],
  ['NICO SANTOS','Barber','6 yrs','tapers + clean classics','Sharp. Simple. Repeat.']
];

export default function TeamPage() {
  return (
    <main>
      <section className="section-shell">
        <h1 className="editorial text-6xl">The Human side of luxury.</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {team.map(([name,role,yrs,spec,motto])=><article key={name} className="bento-card border-gold/40 bg-sand"><h2 className="editorial text-2xl">{name}</h2><p>{role} • {yrs}</p><p className="mt-2 text-sm">Specialty: {spec}</p><p className="mt-2 text-sm italic">“{motto}”</p><a href="https://book.solebarberlounge.com" className="cta-ghost mt-4">Book with {name.split(' ')[0]}</a></article>)}
        </div>
      </section>
      <section className="section-shell pt-0">
        <div className="bento-card">
          <h2 className="editorial text-4xl">Tell us your ideal appointment.</h2>
          <p className="mt-2">Hi, I’m [Name]. I want a [Service]. I prefer [Barber/No preference]. My ideal time is [Day/Time]. Budget: [Range].</p>
          <form className="mt-5 grid gap-3 md:grid-cols-2">
            {['Name','Service','Barber Preference','Day/Time','Budget Range'].map((f)=><input key={f} placeholder={f} className="rounded-xl border border-charcoal/20 bg-coconut px-4 py-3" />)}
            <button className="cta-primary md:col-span-2">Lock your slot.</button>
          </form>
          <p className="mt-4 text-sm">4.9★ Rated • 512 Reviews</p>
        </div>
      </section>
      <section className="section-shell pt-0">
        <div className="bento-card">
          <h3 className="editorial text-3xl">Shooting guide for real assets</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            <li>Shoot 4K at 60fps for slow-motion clip flexibility.</li>
            <li>Capture golden-hour exterior, neon night entrance, and mirror closeups.</li>
            <li>Use key light at 45° with warm bounce for skin-safe tones.</li>
            <li>Film hands/tool details, lineup edges, beard symmetry checks.</li>
            <li>Deliver hero loop clips at 8–12 seconds with no hard cuts.</li>
          </ul>
          <a href="https://book.solebarberlounge.com" className="cta-primary mt-5">Start your SOLÉ experience</a>
        </div>
      </section>
    </main>
  );
}
