import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const KCCServices = lazy(() => import('./pages/KCCServices'));
const LegalServices = lazy(() => import('./pages/LegalServices'));
const Contact = lazy(() => import('./pages/Contact'));

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-navy text-white"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          className="mx-auto h-16 w-16 rounded-full border-4 border-white/20 border-t-white"
        />
        <p className="mt-5 text-xl font-black">Takala Typing</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/kcc-services" element={<KCCServices />} />
          <Route path="/banking-services" element={<LegalServices />} />
          <Route path="/legal-services" element={<LegalServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <a
        href="https://wa.me/916266383257"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-glow transition hover:-translate-y-1"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <Footer />
    </>
  );
}
