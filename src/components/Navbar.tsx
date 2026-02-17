import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-coconut/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl">SOLÉ</Link>
        <div className="hidden gap-6 text-sm md:flex">
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/team">Team / Contact</Link>
        </div>
        <a href="https://book.solebarberlounge.com" className="rounded-full bg-coral px-5 py-2 text-xs font-semibold text-white">BOOK NOW</a>
      </nav>
    </header>
  );
}
