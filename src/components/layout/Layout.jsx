import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, ArrowRight, Zap, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function FloatingConcierge() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3">
      <AnimatePresence>
        {open && (
          <>
            {/* Phone Call Circle (Top) */}
            <motion.a
              key="phone"
              href="tel:+919187233616"
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.8 }}
              transition={{ duration: 0.18, delay: 0.04 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:bg-[#20bd5a] transition-all cursor-pointer"
              aria-label="Call +91 9187233616"
            >
              <Phone size={19} className="text-white sm:w-5 sm:h-5" strokeWidth={2.2} />
            </motion.a>

            {/* WhatsApp Circle (Middle) */}
            <motion.a
              key="whatsapp"
              href="https://wa.me/919187233616"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }}
              transition={{ duration: 0.16 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:bg-[#20bd5a] transition-all cursor-pointer"
              aria-label="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main Trigger Button (Black Circle with White X or Chat) */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black text-white shadow-[0_4px_18px_rgba(0,0,0,0.3)] hover:bg-zinc-900 border border-zinc-800 transition-all focus:outline-none cursor-pointer"
        aria-label={open ? "Close options" : "Contact options"}
      >
        <motion.span
          key={open ? "open" : "closed"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {open ? (
            <X size={19} className="text-white sm:w-5 sm:h-5" strokeWidth={2.5} />
          ) : (
            <MessageCircle size={19} className="text-white sm:w-5 sm:h-5" />
          )}
        </motion.span>
      </motion.button>
    </div>
  );
}

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white relative">
      {/* Background Ambient Lights */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.05),transparent_70%)] blur-[100px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04),transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.03),transparent_70%)] blur-[120px]" />
      </div>

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      {/* Modern Floating Concierge */}
      <FloatingConcierge />
    </div>
  );
}
