'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.bento-animate', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', end: 'bottom 20%', scrub: 0.8 }
      });
      ScrollTrigger.create({ trigger: '.book-pin', start: 'top top', end: '+=100%', pin: true });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-shell">
      <div className="grid gap-4 md:grid-cols-3">
        <article className="bento-card bento-animate book-pin md:col-span-2">
          <p className="widget-title">Book in 2 taps</p>
          <h3 className="mt-2 text-2xl editorial">Service → Barber → Confirm</h3>
          <p className="mt-2 text-sm">Fast flow. No friction. Done before your coffee lands.</p>
          <a className="cta-primary mt-6" href="https://book.solebarberlounge.com">Start booking</a>
        </article>
        <article className="bento-card bento-animate">
          <p className="widget-title">Next available</p>
          <p className="mt-4 text-4xl editorial">Today</p><p className="text-xl">6:20 PM</p>
        </article>
        <article className="bento-card bento-animate"><p className="widget-title">Liquid hover services</p><p className="mt-3">Brickell Fade</p><p className="text-teal">Ocean Scissor Cut</p><p>Hot Towel Ritual</p></article>
        <article className="bento-card bento-animate md:col-span-2"><p className="widget-title">Membership mode</p><p className="mt-2 text-xl">Monthly vs One-off toggles with instant savings preview.</p><a href="/services" className="cta-ghost mt-5">Compare plans</a></article>
      </div>
    </section>
  );
}
