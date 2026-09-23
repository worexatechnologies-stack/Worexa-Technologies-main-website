import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Search,
  BarChart3,
  Megaphone,
  FileText,
  Palette,
  Globe,
  Layout,
  Camera,
  Radio,
  Newspaper
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const logoImg = '/assets/logo-white.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Articles', path: '/articles' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const servicesList = [
  {
    name: 'SEO & Organic Growth',
    path: '/services/search-engine-optimization-seo',
    icon: Search,
    desc: 'Top rankings & continuous inbound traffic'
  },
  {
    name: 'Google Ads & Performance',
    path: '/services/google-ads',
    icon: BarChart3,
    desc: 'High ROAS campaigns engineered to scale'
  },
  {
    name: 'Social Media & Paid Campaigns',
    path: '/services/social-media-marketing',
    icon: Megaphone,
    desc: 'Audience cultivation & engagement'
  },
  {
    name: 'Content & Email Automation',
    path: '/services/content-marketing',
    icon: FileText,
    desc: 'Nurture workflows that drive conversions'
  },
  {
    name: 'Branding & Creative Strategy',
    path: '/services/branding-and-creative-strategy',
    icon: Palette,
    desc: 'Iconic brand identity & market positioning'
  },
  {
    name: 'Website & App Development',
    path: '/services/web-development',
    icon: Globe,
    desc: 'Ultra-fast, high-converting digital platforms'
  },
  {
    name: 'UI/UX & CRO Optimization',
    path: '/services/ui-ux-and-cro',
    icon: Layout,
    desc: 'Data-informed user journeys & higher conversion'
  },
  {
    name: 'Offline & Local Advertising',
    path: '/services/offline-advertising',
    icon: Radio,
    desc: 'Outdoor, hoardings & regional campaigns'
  },
  {
    name: 'Public Relations (PR)',
    path: '/services/public-relations',
    icon: Newspaper,
    desc: 'Media authority, press coverage & reputation'
  },
  {
    name: 'Photoshoot & Creative Media',
    path: '/services/photoshoot',
    icon: Camera,
    desc: 'Commercial visual storytelling & production'
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#070c17]/95 backdrop-blur-2xl border-slate-800 shadow-[0_10px_35px_rgba(0,0,0,0.5)] py-2.5 sm:py-3'
          : 'bg-[#0d1424]/90 backdrop-blur-xl border-slate-800/80 shadow-[0_4px_25px_rgba(0,0,0,0.35)] py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={logoImg}
              alt="Worexa Technologies"
              width="160"
              height="40"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200 rounded-full ${
                  isActive(link.path)
                    ? 'text-orange-400 font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-orange-500/20 border border-orange-500/40 -z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link
                to="/services"
                className={`relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200 rounded-full ${
                  isActive('/services')
                    ? 'text-orange-400 font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${
                    showDropdown ? 'rotate-180 text-orange-400' : 'text-slate-400'
                  }`}
                />
                {isActive('/services') && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-orange-500/20 border border-orange-500/40 -z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    style={{ backgroundColor: '#070c18' }}
                    className="absolute left-1/2 top-full mt-3 w-[54rem] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-700/90 bg-[#070c18] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-1 ring-white/10 text-white z-50"
                  >
                    {/* Hover Bridge */}
                    <div className="absolute -top-3 left-0 right-0 h-3" />
                    <div className="relative z-10">
                      {/* Header in Mega Menu */}
                      <div className="flex items-center justify-between border-b border-slate-800/90 pb-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                          </span>
                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-orange-400">
                              Comprehensive Growth Services
                            </p>
                            <p className="text-[11px] text-slate-300">
                              Engineered for revenue, authority and market leadership
                            </p>
                          </div>
                        </div>
                        <Link
                          to="/services"
                          onClick={() => setShowDropdown(false)}
                          className="flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          View All Services
                          <ArrowRight size={13} />
                        </Link>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {servicesList.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => setShowDropdown(false)}
                              className="group flex items-start gap-3.5 rounded-2xl p-3 transition-all duration-200 bg-slate-900/70 hover:bg-slate-800/95 border border-slate-800/90 hover:border-orange-500/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,106,0,0.4)]">
                                <Icon size={18} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-[13px] font-bold text-slate-100 group-hover:text-orange-400 transition-colors truncate">
                                    {service.name}
                                  </span>
                                  <ArrowRight
                                    size={12}
                                    className="shrink-0 text-orange-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                                  />
                                </div>
                                <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">
                                  {service.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200 rounded-full ${
                  isActive(link.path)
                    ? 'text-orange-400 font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-orange-500/20 border border-orange-500/40 -z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone Call Button */}
            <a
              href="tel:+919187233616"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-800/70 text-xs font-semibold text-slate-200 hover:text-white hover:border-orange-400/50 hover:bg-orange-500/10 transition-all shadow-xs"
            >
              <Phone size={13} className="text-orange-400" />
              <span>+91 9187233616</span>
            </a>

            {/* Primary CTA Button (Matching Image 1: Get Started ->) */}
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-orange-500/40 active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href="tel:+919187233616"
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-orange-400 hover:border-orange-400/50 transition-all"
              aria-label="Call Worexa"
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-200 transition-colors hover:bg-slate-700 hover:text-white cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean, dark glass, responsive) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ backgroundColor: '#070c18' }}
            className="overflow-hidden border-t border-slate-800 bg-[#070c18] lg:hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Bangalore HQ • Now Accepting New Projects</span>
              </div>

              {/* Primary Nav Links */}
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                        : 'bg-slate-800/60 text-slate-200 hover:bg-slate-700/70 hover:text-white border border-slate-700/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={12} className="opacity-70" />
                  </Link>
                ))}
              </div>

              {/* Services Group */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between mb-3 px-1">
                  <p className="text-[11px] font-black uppercase tracking-wider text-orange-400">
                    Our Services
                  </p>
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-[11px] font-semibold text-slate-400 hover:text-white"
                  >
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {servicesList.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs transition-colors ${
                          location.pathname === service.path
                            ? 'bg-orange-500/15 text-orange-400 font-bold border border-orange-500/30'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                        }`}
                      >
                        <Icon size={14} className="text-orange-400 shrink-0" />
                        <span className="truncate">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-xs font-black text-white shadow-lg shadow-orange-500/25"
                >
                  <span>Get Started</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
