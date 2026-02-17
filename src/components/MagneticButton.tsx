import { useRef } from 'react';

export default function MagneticButton({ label, href, solid = true }: { label: string; href: string; solid?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      className={`inline-flex rounded-full px-6 py-3 text-sm font-semibold transition ${solid ? 'bg-coral text-white' : 'border border-charcoal/40 text-charcoal'}`}
      onMouseMove={(e) => {
        const n = ref.current;
        if (!n) return;
        const rect = n.getBoundingClientRect();
        n.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.08}px, ${(e.clientY - rect.top - rect.height / 2) * 0.08}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
      }}
    >
      {label}
    </a>
  );
}
