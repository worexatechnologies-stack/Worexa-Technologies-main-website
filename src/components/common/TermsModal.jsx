import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ExternalLink, AlertCircle, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLenisInstance } from './SmoothScroll';

export default function TermsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const accepted = localStorage.getItem('worexa_terms_accepted');
    if (!accepted || accepted !== 'true') {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const lenis = getLenisInstance();
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (lenis) lenis.start();
    };
  }, [isOpen]);

  const handleScroll = (e) => {
    e.stopPropagation();
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // When user reaches near the bottom of scroll container
      if (scrollHeight - scrollTop - clientHeight <= 20) {
        setScrolledToBottom(true);
      }
    }
  };

  const handleAccept = () => {
    if (!scrolledToBottom || !agreed) {
      setShowWarning(true);
      return;
    }
    const lenis = getLenisInstance();
    if (lenis) lenis.start();
    localStorage.setItem('worexa_terms_accepted', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    setShowWarning(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 overflow-hidden bg-slate-900/65 backdrop-blur-md"
      >
        {/* Compact White Card Popup Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 14 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 text-slate-900 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[88vh]"
        >
          {/* Top Decorative Header */}
          <div className="relative px-5 pt-5 pb-3.5 sm:px-6 sm:pt-6 border-b border-slate-100 bg-slate-50/80 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20">
                <ShieldCheck size={20} strokeWidth={2.2} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 font-mono">
                  Worexa Technologies
                </span>
                <h2 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
                  Terms & Conditions
                </h2>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500 leading-normal">
              Please scroll to the bottom of the terms box below to enable acceptance and continue.
            </p>
          </div>

          {/* Scrollable Terms Content */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="px-5 py-4 sm:px-6 overflow-y-auto space-y-3.5 text-xs text-slate-600 border-b border-slate-100 custom-scrollbar leading-relaxed max-h-[240px]"
          >
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-orange-500 shrink-0" /> 1. Acceptance of Terms
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                By entering and utilizing this website, you agree to comply with and be bound by Worexa Technologies' Terms & Conditions and Privacy Policy governing all digital solutions, media, and agency services.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-orange-500 shrink-0" /> 2. Intellectual Property Rights
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                All software, designs, trademarks, graphic assets, strategies, and published source materials presented on this platform are owned by Worexa Technologies and protected under digital content regulations.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-orange-500 shrink-0" /> 3. Service Scope & Client Privacy
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                We safeguard user information, project submissions, and consultation requests with strict data privacy protocols. Unauthorised reproduction or web scraping of website assets is strictly prohibited.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-orange-500 shrink-0" /> 4. Governing Law & Updates
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                These terms are governed by national digital guidelines. Continued browsing after scrolling and accepting constitutes complete agreement to all platform policies.
              </p>
            </div>

            <div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-orange-600 font-semibold">
              <Link
                to="/terms-and-conditions"
                target="_blank"
                className="hover:underline flex items-center gap-1"
              >
                Read Full Terms <ExternalLink size={11} />
              </Link>
              <Link
                to="/privacy-policy"
                target="_blank"
                className="hover:underline flex items-center gap-1"
              >
                Privacy Policy <ExternalLink size={11} />
              </Link>
            </div>

            {/* Indicator at the end of text */}
            <div className="pt-2 text-center text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              --- End of Terms & Conditions Summary ---
            </div>
          </div>

          {/* Scroll Progress Status Banner */}
          <div className="px-5 py-2 sm:px-6 bg-slate-50 border-b border-slate-100 text-center shrink-0">
            {scrolledToBottom ? (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <CheckCircle2 size={13} /> You have scrolled to the bottom. You can now accept.
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600 animate-pulse">
                <ArrowDown size={13} /> Scroll down inside the terms box to read all terms
              </span>
            )}
          </div>

          {/* Warning message if user clicks accept before reading/agreeing */}
          {showWarning && (
            <div className="mx-5 mt-3 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-[11px] flex items-center gap-2 shrink-0">
              <AlertCircle size={14} className="shrink-0 text-red-500" />
              <span>
                {!scrolledToBottom
                  ? "Please scroll to the bottom of the terms box first."
                  : "Please check the agreement box to accept and continue."}
              </span>
            </div>
          )}

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 shrink-0 space-y-3.5 bg-white">
            <label className={`flex items-start gap-2.5 cursor-pointer select-none ${!scrolledToBottom ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <input
                type="checkbox"
                disabled={!scrolledToBottom}
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked) setShowWarning(false);
                }}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 bg-slate-50 text-orange-500 focus:ring-orange-500/20 cursor-pointer accent-orange-500 disabled:cursor-not-allowed"
              />
              <span className="text-[11px] text-slate-700 leading-tight">
                I have read and agree to Worexa Technologies' <strong className="text-slate-900">Terms & Conditions</strong> and <strong className="text-slate-900">Privacy Policy</strong>.
              </span>
            </label>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleDecline}
                className="w-1/3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Decline
              </button>

              <button
                type="button"
                onClick={handleAccept}
                disabled={!scrolledToBottom || !agreed}
                className="w-2/3 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Accept & Continue</span>
                <CheckCircle2 size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
