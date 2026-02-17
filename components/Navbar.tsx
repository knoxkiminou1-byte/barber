'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/team', label: 'Team/Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-coconut/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="editorial text-xl font-semibold">SOLÉ BARBER LOUNGE</Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? 'text-coral' : 'text-charcoal/80'}>{link.label}</Link>
          ))}
        </nav>
        <a href="https://book.solebarberlounge.com" className="cta-primary">Book Now</a>
      </div>
    </header>
  );
}
