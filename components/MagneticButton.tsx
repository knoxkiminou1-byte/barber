'use client';

import { ReactNode } from 'react';

export function MagneticButton({ children, href, primary = false }: { children: ReactNode; href: string; primary?: boolean }) {
  return (
    <a href={href} className={primary ? 'cta-primary' : 'cta-ghost'}>
      {children}
    </a>
  );
}
