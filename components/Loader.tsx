'use client';

import { useEffect, useState } from 'react';

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1300);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center bg-charcoal text-coconut transition-opacity">
      <div className="text-center">
        <p className="editorial text-5xl">SOLÉ</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em]">Legacy & Hype</p>
      </div>
    </div>
  );
}
