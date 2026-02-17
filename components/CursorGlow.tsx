'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mm = window.matchMedia('(pointer:fine)');
    if (!mm.matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div className="pointer-events-none fixed z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-2xl" style={{ left: pos.x, top: pos.y }} />;
}
