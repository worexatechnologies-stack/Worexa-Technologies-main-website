import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone, User, Briefcase } from 'lucide-react';
import { getLenisInstance } from './SmoothScroll';

const SUBMIT_TIMEOUT_MS = 30000;

export default function ContactPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Digital Marketing & Growth',
    message: '',
    website_url: '' // Honeypot spam trap
  });

  // Trigger popup 60 seconds after opening website (unless already dismissed in session)
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('worexa_contact_popup_dismissed');
    if (isDismissed === 'true') {
      return;
    }

    const timer = setTimeout(() => {
      // Avoid popping up if visitor is already directly on the contact page
      if (window.location.pathname === '/contact') {
        return;
      }
      setIsOpen(true);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  // Manage body scroll and Lenis smoothly when popup is visible
  useEffect(() => {
    const lenis = getLenisInstance();
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('worexa_contact_popup_dismissed', 'true');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot bot protection
    if (form.website_url) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setError('');

    const nameParts = form.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      name: form.name.trim(),
      firstName,
      lastName,
      phone: form.phone.trim(),
      email: 'lead@worexatechnologies.com',
      serviceName: form.service,
      message: `[Visitor 60s Contact Popup]\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nService Interested: ${form.service}\nNotes/Message: ${form.message.trim() || 'N/A'}`,
      subject: `Quick Consultation Request - ${form.service} (${form.name.trim()})`,
      source: 'Website 60s Popup Contact Form'
    };

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch('/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      const responseText = await res.text();
      let result = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        result = { message: 'The mail server returned an invalid response. Please try again.' };
      }

      if (res.ok && result.success) {
        setSubmitted(true);
        sessionStorage.setItem('worexa_contact_popup_dismissed', 'true');
      } else {
        setError(result.message || result.error || 'Unable to send message right now. Please try again.');
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        setError('Request timed out. Please contact us directly at info@worexatechnologies.com.');
      } else {
        setError('Unable to send inquiry. Please check your connection and try again.');
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-900/50 backdrop-blur-sm"
      >
        {/* Backdrop clickable overlay */}
        <div
          className="fixed inset-0 -z-10"
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Modal Window Container: Compact, Clean White Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 14 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-[390px] rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        >
          {/* Header Bar - Clean Pure White */}
          <div className="relative px-5 pt-4 pb-3 bg-white border-b border-slate-100 flex items-start justify-between gap-3 shrink-0">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                Get in Touch With Us
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                Leave your contact details and our team will call you back.
              </p>
            </div>

            {/* Remove / Close Popup Button */}
            <button
              type="button"
              onClick={handleClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 bg-white transition-all cursor-pointer shrink-0"
              title="Close popup"
              aria-label="Close popup"
            >
              <X size={15} strokeWidth={2.4} />
            </button>
          </div>

          {/* Body Section */}
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            className="px-5 py-4 overflow-y-auto space-y-3 custom-scrollbar text-xs bg-white"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 px-3 text-center rounded-xl bg-emerald-50 border border-emerald-200"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2.5 shadow-md shadow-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Thank You, {form.name.split(' ')[0] || 'Friend'}!
                </h4>
                <p className="text-[11px] text-slate-600 mb-4 leading-relaxed max-w-xs mx-auto">
                  We have received your details. Our strategist will call you shortly.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[11px] font-medium">
                    {error}
                  </div>
                )}

                {/* Honeypot field for bot protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_url"
                    tabIndex="-1"
                    autoComplete="off"
                    value={form.website_url}
                    onChange={handleChange}
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-orange-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-orange-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={25}
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all"
                    />
                  </div>
                </div>

                {/* Service Interested In */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full pl-9 pr-7 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all cursor-pointer appearance-none"
                    >
                      <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Google Ads / Performance Marketing">Google Ads / Performance Marketing</option>
                      <option value="Social Media & Meta Ads">Social Media & Meta Ads</option>
                      <option value="Web Development & UI/UX">Web Development & UI/UX</option>
                      <option value="Branding & Creative Strategy">Branding & Creative Strategy</option>
                      <option value="Content Marketing & Creation">Content Marketing & Creation</option>
                      <option value="Photoshoot & Production">Photoshoot & Video Production</option>
                      <option value="Other / General Consultation">Other / General Consultation</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message / Requirement (optional) */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Requirements <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows="2"
                    maxLength={500}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all resize-none"
                  />
                </div>

                {/* Submit & Remove Popup Actions */}
                <div className="pt-1.5 space-y-1.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:opacity-95 active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Callback</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {/* Remove Popup Button */}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full py-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors text-center cursor-pointer"
                  >
                    No thanks, close popup
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
