import { useEffect, useState } from 'react';

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[110] overflow-hidden bg-charcoal text-coconut">
      <div className="loader-curtain animate-[curtain_1.25s_ease-in-out_forwards]" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <p className="font-display text-6xl tracking-[0.26em] md:text-8xl">SOLÉ</p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-gold">Miami luxury. Clean lines.</p>
        </div>
      </div>
      <style>{`@keyframes curtain { 0% { transform: translateY(0%);} 65% { transform: translateY(-70%);} 100% { transform: translateY(-100%);} }`}</style>
    </div>
  );
}
