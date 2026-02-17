'use client';

import { useState } from 'react';

const faqs = [
  ['Do you take walk-ins?', 'Yes, but priority goes to booked appointments.'],
  ['Do memberships roll over?', 'Unused cuts roll 30 days on Brickell and Yacht Club plans.'],
  ['Is parking available?', 'Valet and garage parking are available at Brickell City Centre nearby.']
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map(([q,a],i)=>(
        <div key={q} className="rounded-2xl border border-charcoal/20 p-4">
          <button className="w-full text-left font-semibold" onClick={()=>setOpen(open===i?null:i)}>{q}</button>
          {open===i && <p className="mt-2 text-sm text-charcoal/70">{a}</p>}
        </div>
      ))}
    </div>
  );
}
