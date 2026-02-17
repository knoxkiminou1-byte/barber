import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationsProvider() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.08
    });

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.fromTo('.hero-title span', { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.07, duration: 0.9, ease: 'power3.out', delay: 0.85 });

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(el, { y: 44, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          end: 'top 62%',
          scrub: 0.45
        }
      });
    });

    gsap.to('[data-parallax="hero"]', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', scrub: 1 }
    });

    ScrollTrigger.create({
      trigger: '[data-pin-booking]',
      start: 'top top',
      end: '+=95%',
      pin: true
    });

    const cards = gsap.utils.toArray<HTMLElement>('[data-card-hover]');
    const cleanups = cards.map((card) => {
      const enter = () => gsap.to(card, { y: -8, rotateX: 3, duration: 0.35, ease: 'power2.out' });
      const leave = () => gsap.to(card, { y: 0, rotateX: 0, duration: 0.35, ease: 'power2.out' });
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      return () => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
      };
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((x) => x.kill());
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
