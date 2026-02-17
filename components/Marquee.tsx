export function Marquee() {
  const text = 'BRICKELL FADES • BEARD SCULPT • HOT TOWEL RITUAL • SCISSOR LUXE • 4.9★ RATED • ON-TIME SLOTS';
  return (
    <div className="overflow-hidden rounded-full border border-charcoal/20 bg-sand py-3">
      <div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap px-6 text-xs tracking-[0.2em]">{text} • {text}</div>
      <style jsx>{`@keyframes marquee {from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
