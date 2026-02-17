import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingBar from './components/BookingBar';
import AnimationsProvider from './components/AnimationsProvider';
import CursorGlow from './components/CursorGlow';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';

export default function App() {
  return (
    <>
      <AnimationsProvider />
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <BookingBar />
    </>
  );
}
