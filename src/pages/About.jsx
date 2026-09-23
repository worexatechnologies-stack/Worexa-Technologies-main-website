import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BarChart4,
  Globe,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
  Zap,
  CheckCircle2,
  Award,
  MapPin,
  Play,
  Pause,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Smartphone,
  Star,
  Film,
  Layers,
  Award as AwardIcon,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const image7 = "/assets/image7.webp";
const image9 = "/assets/image9.webp";
const teamHeroImage = "/assets/worexa-team-hero.jpg";
const heroShowcaseImage = "/assets/about-hero-showcase-clean.png";
const companyVideo = "/assets/final4.mp4";

const clientLogos = [
  { label: "SPYSENSE", category: "IOT & SECURITY", image: "/assets/spy-sense.svg" },
  { label: "VIYANA EVENTS", category: "LUXURY GIFTING", image: "/assets/viyana-events-gifting.svg" },
  { label: "MY DEAR PARTNER", category: "WEB PLATFORM", image: "/assets/my-dear-partner.svg" },
  { label: "ALL FRESH NATURALS", category: "ORGANIC & WELLNESS", image: "/assets/all-fresh-naturals.webp", bg: "bg-[#104239]" },
  { label: "BRIGHT STAR PRE-SCHOOL", category: "EARLY EDUCATION", image: "/assets/brightstar-preschool.svg" },
  { label: "APPUGE CARE", category: "MATERNITY & HEALTH", image: "/assets/appuge-care.svg" },
  { label: "SAHANA PHOTOGRAPHY", category: "MEDIA & PRODUCTION", image: "/assets/sahana-photography.svg" },
  { label: "VOLPE", category: "EDTECH & SOFTWARE", image: "/assets/volpehub.svg" },
  { label: "ADVOCATE SEVA", category: "LEGAL & ADVISORY", image: "/assets/advocate-seva.svg" },
  { label: "INDIRA CONVENT HIGH SCHOOL", category: "EDUCATION & ACADEMICS", image: "/assets/indira-convent-high-school.svg" },
  { label: "AMOGH MASUR ASSOCIATES", category: "CORPORATE ADVISORY", image: "/assets/amogh-masur-associates.svg" }
];

const faqs = [
  {
    question: "What is Worexa Technologies?",
    answer:
      "Worexa Technologies is a digital marketing and growth agency based in Bengaluru, Karnataka. The company provides SEO, Google Ads, performance marketing, social media marketing, content marketing, branding, website development, UI/UX, conversion rate optimization (CRO), public relations, offline advertising, and creative production services.",
  },
  {
    question: "Who is Worexa Technologies for?",
    answer:
      "Worexa Technologies works with entrepreneurs, startups, local businesses, retailers, and small and medium-sized enterprises (SMEs) looking to increase their visibility, generate leads, acquire customers, and grow their business through digital and offline marketing.",
  },
  {
    question: "Where is Worexa Technologies located?",
    answer:
      "Worexa Technologies is based in Bengaluru (Bangalore), Karnataka. Its corporate office is located on the 4th Floor of Gopalan Workspace at Gopalan Promenade Mall, Banashankari 3rd Stage, 3rd Phase, Bengaluru – 560085.",
  },
  {
    question: "What services does Worexa Technologies offer?",
    answer:
      "Worexa Technologies offers a combination of digital marketing, technology, branding, and offline advertising services. Its services include technical SEO, Google Ads, performance marketing, social media marketing, content marketing, branding, website development, UI/UX design, conversion rate optimization (CRO), public relations, creative production, hoardings, print advertising, and local marketing.",
  },
  {
    question: "Is Worexa Technologies a digital marketing agency in Bangalore?",
    answer:
      "Yes. Worexa Technologies is a Bengaluru-based digital marketing and growth agency that provides SEO, paid advertising, social media marketing, content marketing, web development, branding, and other online and offline marketing services.",
  },
  {
    question: "What is Worexa Technologies' approach to marketing?",
    answer:
      "Worexa Technologies uses an integrated marketing approach that combines technical SEO, content, paid advertising, branding, conversion optimization, and performance measurement. Its strategy is designed to help businesses increase visibility, generate qualified leads, improve conversions, and build long-term brand growth.",
  },
  {
    question: "Does Worexa Technologies provide local marketing services in Bangalore?",
    answer:
      "Yes. Worexa Technologies provides localized marketing services for businesses in Bengaluru, including digital advertising, local SEO, outdoor advertising, hoardings, print advertising, flyers, and other location-focused promotional activities.",
  },
  {
    question: "Who founded Worexa Technologies?",
    answer:
      "Worexa Technologies Pvt. Ltd. was founded by Raju Pavan Kumar and Channenahalli Nagaraj Vikas, who serve as the company's co-founders and directors in Bengaluru.",
  },
  {
    question: "Does Worexa Technologies provide both online and offline marketing?",
    answer:
      "Yes. Worexa Technologies combines online marketing services such as SEO, Google Ads, social media, content marketing, and performance marketing with offline channels such as hoardings, print advertising, flyers, and other local advertising initiatives.",
  },
  {
    question: "Why do businesses choose Worexa Technologies?",
    answer:
      "Businesses can work with Worexa Technologies when they need an integrated approach to digital marketing, technology, branding, and local advertising. The agency combines performance-focused marketing with creative and technology services to support lead generation, customer acquisition, and business growth.",
  },
];

export default function About() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeMediaTab, setActiveMediaTab] = useState('photo');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 bg-white selection:bg-orange-100 selection:text-orange-900">
      <Helmet>
        <title id="metaTitle">About Worexa Technologies | Digital Marketing Agency.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Learn about Worexa Technologies, a results-driven digital marketing agency helping businesses grow through SEO, Social Media, PPC, branding, and web solutions."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="about worexa technologies, digital marketing agency banashankari, web design company bangalore, seo experts in bangalore, best digital marketing company, about us, about worexa"
        />
        <meta id="ogTitle" property="og:title" content="About Worexa Technologies | Digital Marketing Agency." />
        <meta id="ogType" property="og:type" content="website" />
        <meta id="ogDescription" property="og:description" content="Learn about Worexa Technologies, a results-driven digital marketing agency helping businesses grow through SEO, Social Media, PPC, branding, and web solutions." />
        <meta id="ogUrl" property="og:url" content="https://worexatechnologies.com/about" />
        <meta id="ogSiteName" property="og:site_name" content="Worexa Technologies" />
        <meta id="ogImage" property="og:image" content="https://worexatechnologies.com/assets/logo.png" />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta id="twitterTitle" name="twitter:title" content="About Worexa Technologies | Digital Marketing Agency." />
        <meta id="twitterDescription" name="twitter:description" content="Learn about Worexa Technologies, a results-driven digital marketing agency helping businesses grow through SEO, Social Media, PPC, branding, and web solutions." />
        <meta id="author" name="author" content="Akshay" />
        <link id="canonical" rel="canonical" href="https://worexatechnologies.com/about" />
        <meta id="indexingStatus" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta id="Publisher" property="publisher" content="Worexa Technologies" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      {/* =========================================================================
          SECTION 1: HERO — YOUR DIGITAL GROWTH PARTNER IN BANGALORE
          Exact match with user reference design: Luxury light studio desk aesthetic,
          Vidhana Soudha glow, 3D laptop/phone showcase, and high-impact conversion deck
      ========================================================================= */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-16 overflow-hidden bg-[#fbfbfa] text-slate-900 border-b border-slate-200/80">
        
        {/* Soft Ambient Warm Lighting & Subtle Grid Texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle micro dot grid */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Warm Sun/Amber Radial Glow */}
          <div
            className="absolute top-0 right-10 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(251,191,36,0.08) 45%, transparent 70%)' }}
          />

          {/* Subtle warm ambient wash on left */}
          <div
            className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column on Desktop / Bottom on Mobile: Narrative, 4 Value Pillars & Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1 lg:col-span-7 space-y-5 lg:space-y-6"
            >

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.1] text-slate-900">
                Your Digital Growth <br />
                Partner in{' '}
                <span className="text-orange-600">
                  Bangalore
                </span>
              </h1>

              {/* Paragraph Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Worexa Technologies is a digital marketing and advertising company in Bangalore that helps businesses increase online visibility, generate qualified leads, and improve conversions. We provide SEO, Google Ads, Meta Ads, social media marketing, content marketing, and performance marketing services designed around measurable business goals.
              </p>

              {/* 4 Value Pillars Row with Dividers (Matching Reference Image) */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                
                {/* Pillar 1: More Visibility */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200/70 shadow-2xs">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">More Visibility</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">Rank Higher on Google</p>
                  </div>
                </div>

                {/* Pillar 2: More Leads */}
                <div className="flex flex-col gap-1.5 sm:border-l sm:border-slate-200 sm:pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200/70 shadow-2xs">
                    <Target size={18} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">More Leads</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">Reach the Right Audience</p>
                  </div>
                </div>

                {/* Pillar 3: More Customers */}
                <div className="flex flex-col gap-1.5 sm:border-l sm:border-slate-200 sm:pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200/70 shadow-2xs">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">More Customers</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">Turn Clicks into Sales</p>
                  </div>
                </div>

                {/* Pillar 4: Better Growth */}
                <div className="flex flex-col gap-1.5 sm:border-l sm:border-slate-200 sm:pl-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200/70 shadow-2xs">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Better Growth</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">Long-Term Success</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Primary CTA Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-sm sm:text-base font-bold px-7 py-3.5 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 cursor-pointer"
                >
                  <span>Work With Our Team</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* Right Column on Desktop / Top on Mobile: Device Showcase with Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2 lg:col-span-5 relative flex items-center justify-center pt-2 sm:pt-4 lg:pt-0"
            >
              {/* Main Device / Video Showcase Card */}
              <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] xl:max-w-[460px] mx-auto">
                
                {/* Video Screen */}
                <div className="relative h-[440px] xs:h-[480px] sm:h-[510px] xl:h-[530px] w-full overflow-hidden rounded-[2rem] bg-slate-950 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.14)] hover:shadow-[0_25px_60px_-12px_rgba(249,115,22,0.2)] transition-all duration-500 group">
                  <video
                    ref={videoRef}
                    poster={image7}
                    src={companyVideo}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="h-full w-full object-cover object-center cursor-pointer"
                    onClick={togglePlay}
                  />

                  {/* Top Floating Controls */}
                  <div className="absolute top-3 right-3 z-20 flex items-center justify-end pointer-events-auto">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition-all cursor-pointer shadow-sm"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        {isPlaying ? <Pause size={11} /> : <Play size={11} className="translate-x-0.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white hover:bg-orange-500 hover:border-orange-500 transition-all cursor-pointer shadow-sm"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                        <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Center Play Overlay When Paused */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-xs cursor-pointer"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-500/50 hover:scale-110 transition-transform">
                        <Play size={20} className="translate-x-0.5 fill-current" />
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </motion.div>

          </div>
        </div>

        {/* Interactive Video Story Modal */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
              onClick={() => setShowVideoModal(false)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-950 border border-white/15 shadow-2xl"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-sm font-bold text-white tracking-wide">
                      Worexa Technologies Story • Bengaluru Growth Studio
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowVideoModal(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors cursor-pointer"
                    aria-label="Close story video"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="relative aspect-video w-full bg-black">
                  <video
                    src={companyVideo}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* =========================================================================
          SECTION 2: DIGITAL MARKETING EXPERTS — ARCHITECTURAL MANIFESTO SPREAD
          Aesthetic: Clean high-contrast editorial spread with glowing metric blocks
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-200/80 via-slate-100/90 to-slate-200/80 py-20 sm:py-28 overflow-hidden border-b border-slate-300/80">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-orange-100/30 via-amber-50/15 to-transparent blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Centered Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Digital Marketing Experts Helping Brands Grow With{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Strategy, Creativity &amp; Data
              </span>
            </h2>
          </div>

          {/* The Worexa Standard Manifesto Card */}
          <div className="rounded-3xl border border-slate-300/70 bg-white p-8 sm:p-12 shadow-[0_15px_45px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.12)] transition-all duration-500 relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400" />
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-orange-400/10 via-amber-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-black text-slate-900 leading-snug tracking-tight">
                We are a full-service digital marketing agency helping ambitious businesses build stronger brands, reach the right audience, and generate measurable growth.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                Our team combines digital marketing strategy, creative design, performance marketing, technology, and data to turn ideas into campaigns that deliver real business results — integrated digital experiences designed around your business goals, not vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHO IS WOREXA TECHNOLOGIES? — ASYMMETRICAL STEPPED CARDS
          Aesthetic: Tiered modern cards with methodology pillar bar on warm slate-50
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-50/80 via-orange-50/15 to-slate-50/80 py-20 sm:py-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Centered Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 sm:whitespace-nowrap">
              Who Is{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Worexa Technologies?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
              Worexa Technologies is a Bangalore-based marketing and growth firm that strives to help startups, SMEs, local enterprises, and growing brands enhance their digital footprint and market performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">

            {/* Left 5 Columns: Sticky Overview Block */}
            <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-28">

              {/* Our Approach Card with Stepped Progress Nodes */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Our Approach</p>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">3 Core Pillars</span>
                </div>
                
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  Our approach to marketing entails knowing the following:
                </p>
                
                <div className="space-y-3 pt-1">
                  {[
                    { num: '01', title: 'The Business.' },
                    { num: '02', title: 'The Audience.' },
                    { num: '03', title: 'The Goal for Growth.' },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 hover:bg-orange-50/70 hover:border-orange-300 transition-all duration-300 shadow-2xs"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 font-mono text-xs font-black text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        {item.num}
                      </span>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Parallax Stacking Cards ("one goes top on another") */}
            <div className="lg:col-span-7 relative">
              {[
                {
                  num: '#01',
                  icon: Lightbulb,
                  title: 'Tailored, Not Templated',
                  desc: 'Unlike firms where the same marketing strategies are employed for all businesses, we create marketing solutions tailored depending on the industry, audience, competition, budget, and goals for each firm.',
                },
                {
                  num: '#02',
                  icon: Target,
                  title: 'Full-Spectrum Marketing',
                  desc: 'Whether a business wants to increase visibility on Google, generate leads, build social media presence, strengthen branding, or launch a high-converting website — Worexa Technologies offers a unique blend of marketing tactics for every objective.',
                },
                {
                  num: '#03',
                  icon: Rocket,
                  title: 'Built for Growth at Every Stage',
                  desc: 'From early-stage startups finding product-market fit, to established SMEs scaling market share, to local enterprises going digital — we architect marketing systems built to grow with your business.',
                },
              ].map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`sticky rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_-12px_30px_rgba(0,0,0,0.08),0_20px_40px_rgba(0,0,0,0.06)] hover:border-orange-400/80 transition-all duration-300 relative overflow-hidden ${
                      idx > 0 ? 'mt-[40vh] sm:mt-[50vh]' : 'mt-0'
                    }`}
                    style={{
                      top: `calc(7rem + ${idx * 1.5}rem)`,
                      zIndex: 10 + idx,
                    }}
                  >
                    {/* Top subtle highlight gradient accent */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0" />

                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-600 shadow-2xs">
                        <IconComponent size={24} />
                      </div>
                      <div className="space-y-2.5 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-black text-slate-900">
                            {card.title}
                          </h3>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {card.num}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HELPING BUSINESSES GROW IN BANGALORE AND BEYOND
          Aesthetic: Visual Photographic Editorial Spread with Vector Capability Tiles
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left: Single Cinematic Studio Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.2rem] overflow-hidden border border-slate-200/90 shadow-2xl group">
                <img
                  src={image9}
                  alt="Worexa Creative Production"
                  className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Editorial Narrative Content */}
            <div className="lg:col-span-7 space-y-7">
              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-slate-900 tracking-tight leading-[1.1]">
                Helping Businesses Grow in{' '}
                <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Bangalore and Beyond
                </span>
              </h2>

              {/* Intro paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Bangalore is one of India&apos;s most competitive business markets, with startups, technology companies, real estate businesses, healthcare providers, educational institutions, retailers, and professional service businesses competing for customer attention.
              </p>

              {/* Pull-quote highlight in Glass Box */}
              <div className="relative pl-6 pr-6 py-4 border-l-4 border-orange-500 bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-transparent rounded-r-3xl space-y-2 shadow-2xs">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  For businesses operating in such a competitive environment, simply having an online presence is not enough.
                </p>
                <p className="text-sm sm:text-base font-black text-slate-900">
                  You need to be discoverable, relevant, credible, and easy to choose.
                </p>
              </div>

              {/* Closing statement */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                That&apos;s where a strategic digital marketing approach can make a difference. Worexa Technologies helps businesses strengthen their online presence through a combination of search visibility, paid advertising, social media, content, branding, websites, and conversion-focused marketing.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* =========================================================================
          SECTION 6: WE ARE YOUR GROWTH PARTNER — ROADMAP & INTERCONNECTED PIPELINE
          Aesthetic: Chronological stepped roadmap with executive callout cards
      ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Centered Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.15] text-slate-900">
              We Are Your{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Growth Partner,
              </span>
              <br />
              Not Just Another Agency
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-center">

            {/* Left 6 Columns: Interactive Process Pipeline */}
            <div className="lg:col-span-6 space-y-4">
              {/* Connected Milestone Step Track with Interactive Lighting */}
              <div className="space-y-4 relative">
                {[
                  { step: '01', label: 'Understand your business & audience' },
                  { step: '02', label: 'Develop a tailored marketing strategy' },
                  { step: '03', label: 'Execute with creativity & data precision' },
                  { step: '04', label: 'Monitor, optimise & improve results' },
                ].map(({ step, label }, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-orange-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100/90 font-mono text-xs font-black text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-2xs">
                      {step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {label}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-orange-500">
                      Step 0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Columns: Executive Dual Narrative Cards & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              {/* Content block 1 */}
              <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-8 space-y-4 shadow-sm">
                <p className="text-base text-slate-800 leading-relaxed">
                  At Worexa Technologies, we believe digital marketing should contribute to <span className="font-black text-slate-900">real business growth</span>, not just clicks, impressions, or likes. We first understand your business, target audience, competitors, and objectives before developing a marketing strategy.
                </p>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Our team combines strategy, creativity, technology, data, and performance marketing to help businesses attract the right audience and convert opportunities into customers. We continuously monitor performance, identify what is working, and optimize to improve results.
                </p>
              </div>

              {/* Content block 2: Warm Amber Container */}
              <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50/80 to-amber-50/60 px-8 py-6 shadow-sm">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                  Whether you&apos;re <span className="font-black text-slate-900">launching a startup</span>, growing a small business, or scaling an established brand — our goal is to make your digital marketing more strategic, measurable, and focused on growth.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-black px-8 py-3.5 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200"
                >
                  <span>Work With Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 text-slate-800 text-sm font-black px-8 py-3.5 transition-all duration-200 shadow-2xs hover:scale-105"
                >
                  <span>View Our Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>



        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION: FREQUENTLY ASKED QUESTIONS ABOUT WOREXA TECHNOLOGIES
          Aesthetic: Two-column interactive accordion with glowing active states
      ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-[#f8fafc] border-t border-slate-200 overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-orange-400/5 via-amber-300/5 to-transparent blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                Worexa Technologies
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Everything you need to know about our growth agency, capabilities, approach, and how we help businesses scale.
            </p>
          </div>

          {/* 2-Column Responsive Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            
            {/* Column 1 (Questions 01 to 05) */}
            <div className="space-y-4">
              {faqs.slice(0, 5).map((faq, idx) => {
                const index = idx;
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${
                            isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                            isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'bg-orange-500 text-white rotate-180 shadow-xs'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 sm:pl-14 border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Questions 06 to 10) */}
            <div className="space-y-4">
              {faqs.slice(5, 10).map((faq, idx) => {
                const index = idx + 5;
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${
                            isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                            isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'bg-orange-500 text-white rotate-180 shadow-xs'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 sm:pl-14 border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
