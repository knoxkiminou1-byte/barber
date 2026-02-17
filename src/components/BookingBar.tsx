import { useEffect, useState } from 'react';

const phases = [
  { threshold: 0, label: 'BOOK NOW', href: 'https://book.solebarberlounge.com' },
  { threshold: 700, label: 'VIEW PRICING', href: '/services' },
  { threshold: 1300, label: 'SEE RESULTS', href: '/gallery' },
  { threshold: 2100, label: 'CALL (305) 555-0147', href: 'tel:+13055550147' }
];

export default function BookingBar() {
  const [active, setActive] = useState(phases[0]);
  useEffect(() => {
    const update = () => {
      setActive([...phases].reverse().find((p) => window.scrollY >= p.threshold) ?? phases[0]);
    };
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <a href={active.href} className="fixed bottom-3 left-1/2 z-50 w-[94%] max-w-md -translate-x-1/2 rounded-full bg-coral px-6 py-3 text-center text-sm font-semibold text-white md:hidden">{active.label}</a>;
}
