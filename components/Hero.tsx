'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from './MagneticButton';
import { Marquee } from './Marquee';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.headline span', { yPercent: 110, stagger: 0.08, duration: 0.8, ease: 'power3.out' });
      gsap.to('.hero-media', { yPercent: 12, scrollTrigger: { trigger: ref.current, scrub: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-shell pt-10">
      <div className="relative overflow-hidden rounded-[24px] border border-charcoal/10 bg-charcoal p-8 text-coconut md:p-12">
        <video className="hero-media absolute inset-0 h-full w-full object-cover opacity-40" autoPlay muted loop playsInline src="/media/hero-miami-loop.mp4" />
        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="headline editorial text-6xl md:text-8xl"><span className="inline-block">MIAMI.</span> <span className="inline-block">CLEAN.</span></h1>
          <p>Luxury cuts. Razor-clean beards. On time. Every time.</p>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="https://book.solebarberlounge.com" primary>BOOK NOW</MagneticButton>
            <MagneticButton href="/gallery">SEE THE LOOKS</MagneticButton>
          </div>
        </div>
      </div>
      <div className="mt-5"><Marquee /></div>
    </section>
  );
}
