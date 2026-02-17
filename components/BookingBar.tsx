'use client';

import { useEffect, useState } from 'react';

export function BookingBar() {
  const [label, setLabel] = useState('BOOK NOW');
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 500) setLabel('BOOK NOW');
      else if (y < 1200) setLabel('VIEW PRICING');
      else if (y < 2200) setLabel('SEE RESULTS');
      else setLabel('CALL (305) 555-0147');
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <a href="https://book.solebarberlounge.com" className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-full bg-coral px-6 py-4 text-center text-sm font-bold text-white md:hidden">{label}</a>;
}
