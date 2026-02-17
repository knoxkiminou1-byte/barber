import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/Navbar';
import { BookingBar } from '@/components/BookingBar';
import { CursorGlow } from '@/components/CursorGlow';
import { SmoothScroll } from '@/components/SmoothScroll';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'SOLÉ Barber Lounge | Miami Barber in Brickell',
  description: 'Miami barber services in Brickell: Brickell fade, beard sculpt, hot towel shave, and luxury grooming.',
  keywords: ['Miami barber', 'Brickell fade', 'beard sculpt Miami', 'hot towel shave Brickell']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <SmoothScroll />
        <CursorGlow />
        <Navbar />
        {children}
        <BookingBar />
      </body>
    </html>
  );
}
