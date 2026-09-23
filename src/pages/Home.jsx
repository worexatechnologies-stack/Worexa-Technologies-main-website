import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Globe,
  Megaphone,
  Search,
  Target,
  TrendingUp,
  Zap,
  Palette,
  ShieldCheck,
  Star,
  Award,
  Layers,
  ArrowUpRight,
  Users,
  Compass,
  Laptop,
  Flame,
  Check,
  Play,
  X,
  ChevronDown,
  HelpCircle,
  Magnet,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const teamHeroImage = "/assets/worexa-team-hero.jpg";
const aboutImage = "/assets/image4 (2).webp";

const heroSlides = [
  {
    src: "/assets/image1.webp",
    alt: "Worexa Technologies Team",
    position: "object-[70%_center]",
    tag: "Bangalore HQ Team",
  },
  {
    src: "/assets/hero-team-collab.webp",
    alt: "Worexa Strategy & Collaboration",
    position: "object-[75%_center]",
    tag: "Strategy & Execution",
  },
  {
    src: "/assets/hero-team-discussion.webp",
    alt: "Worexa Digital Marketing & Client Strategy",
    position: "object-[80%_center]",
    tag: "Growth & Performance",
  },
  {
    src: "/assets/hero-team-creative.webp",
    alt: "Worexa Creative Media & Tech Production",
    position: "object-[65%_center]",
    tag: "Creative Media & Production",
  },
  {
    src: "/assets/hero-team-members.webp",
    alt: "Worexa Marketing Specialists",
    position: "object-[70%_center]",
    tag: "Specialist Growth Consultants",
  },
];

const heroMetrics = [
  { value: "100+", label: "Happy Clients", icon: Users },
  { value: "250+", label: "Projects Delivered", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "5+", label: "Years of Excellence", icon: ShieldCheck },
];

const stats = [
  { value: "340%", label: "Average Organic Traffic Lift", sub: "Within 6 months" },
  { value: "4.8x", label: "Average Client ROAS", sub: "Google & Meta Campaigns" },
  { value: "₹18Cr+", label: "Client Revenue Generated", sub: "Direct attributable sales" },
  { value: "98.4%", label: "Client Retention Rate", sub: "Long-term partnerships" },
];

const clientLogos = [
  { label: "SPYSENSE", category: "IOT & SECURITY", image: "/assets/spy-sense.svg" },
  { label: "VIYANA EVENTS & GIFTING", category: "LUXURY GIFTING", image: "/assets/viyana-events-gifting.svg" },
  { label: "MY DEAR PARTNER", category: "WEB PLATFORM", image: "/assets/my-dear-partner.svg" },
  { label: "ALL FRESH NATURALS", category: "ORGANIC & WELLNESS", image: "/assets/all-fresh-naturals.webp", bg: "bg-[#104239]" },
  { label: "BRIGHT STAR PRE-SCHOOL", category: "EARLY EDUCATION", image: "/assets/brightstar-preschool.svg" },
  { label: "APPUGE CARE", category: "MATERNITY & HEALTH", image: "/assets/appuge-care.svg" },
  { label: "SAHANTA PHOTOGRAPHY", category: "MEDIA & PRODUCTION", image: "/assets/sahana-photography.svg" },
  { label: "VOLPE", category: "EDTECH & SOFTWARE", image: "/assets/volpehub.svg" },
  { label: "ADVOCATE SEVA", category: "LEGAL & ADVISORY", image: "/assets/advocate-seva.svg" },
  { label: "INDIRA CONVENT HIGH SCHOOL", category: "EDUCATION & ACADEMICS", image: "/assets/indira-convent-high-school.svg" },
  { label: "AMOGH MASUR ASSOCIATES", category: "CORPORATE ADVISORY", image: "/assets/amogh-masur-associates.svg" }
];



const growthGoals = [
  {
    id: "visibility",
    number: "01",
    title: "Get More Visibility",
    description: "Be easier to find across Google and digital platforms.",
    icon: Search,
    bgIcon: "bg-[#e0f2fe]",
    textIcon: "text-[#0369a1]",
    textNum: "text-[#0369a1]",
    btnBg: "bg-sky-50 text-[#0369a1] group-hover:bg-[#0369a1] group-hover:text-white",
    glow: "from-sky-500/10",
  },
  {
    id: "brand",
    number: "02",
    title: "Build Your Brand",
    description: "Create a stronger identity and memorable digital presence.",
    icon: ShieldCheck,
    bgIcon: "bg-[#f3e8ff]",
    textIcon: "text-[#7e22ce]",
    textNum: "text-[#7e22ce]",
    btnBg: "bg-purple-50 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white",
    glow: "from-purple-500/10",
  },
  {
    id: "reach",
    number: "03",
    title: "Reach More Customers",
    description: "Connect with audiences who are relevant to your business.",
    icon: Users,
    bgIcon: "bg-[#dcfce7]",
    textIcon: "text-[#15803d]",
    textNum: "text-[#15803d]",
    btnBg: "bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white",
    glow: "from-emerald-500/10",
  },
  {
    id: "leads",
    number: "04",
    title: "Generate More Leads",
    description: "Turn digital visibility and engagement into meaningful enquiries.",
    icon: Magnet,
    bgIcon: "bg-[#ffedd5]",
    textIcon: "text-[#c2410c]",
    textNum: "text-[#c2410c]",
    btnBg: "bg-orange-50 text-[#c2410c] group-hover:bg-[#c2410c] group-hover:text-white",
    glow: "from-amber-500/10",
  },
  {
    id: "conversions",
    number: "05",
    title: "Increase Conversions",
    description: "Create campaigns and experiences designed to move prospects toward action.",
    icon: TrendingUp,
    bgIcon: "bg-[#ffe4e6]",
    textIcon: "text-[#be123c]",
    textNum: "text-[#be123c]",
    btnBg: "bg-rose-50 text-[#be123c] group-hover:bg-[#be123c] group-hover:text-white",
    glow: "from-rose-500/10",
  },
  {
    id: "growth",
    number: "06",
    title: "Grow Your Business",
    description: "Bring your digital channels together with a focused growth strategy.",
    icon: Rocket,
    bgIcon: "bg-[#ede9fe]",
    textIcon: "text-[#6d28d9]",
    textNum: "text-[#6d28d9]",
    btnBg: "bg-violet-50 text-[#6d28d9] group-hover:bg-[#6d28d9] group-hover:text-white",
    glow: "from-violet-500/10",
  },
];

const worexaDigitalServices = [
  {
    title: "SEO",
    description: "Improve your search visibility and help potential customers discover your business organically.",
    icon: Search,
    link: "/services/search-engine-optimization-seo",
  },
  {
    title: "Social Media Marketing",
    description: "Build your brand presence through strategic social media content and audience engagement.",
    icon: Users,
    link: "/services/social-media-marketing",
  },
  {
    title: "Performance Marketing",
    description: "Create data-informed campaigns focused on reaching relevant audiences and driving business actions.",
    icon: TrendingUp,
    link: "/services/google-ads",
  },
  {
    title: "Google Ads",
    description: "Reach potential customers through targeted search and digital advertising campaigns.",
    icon: Target,
    link: "/services/google-ads",
  },
  {
    title: "Meta Ads",
    description: "Connect with relevant audiences through Facebook and Instagram advertising.",
    icon: Megaphone,
    link: "/services/social-media-marketing",
  },
  {
    title: "Content Marketing",
    description: "Create useful, relevant content that informs your audience and strengthens your digital presence.",
    icon: Layers,
    link: "/services/content-marketing",
  },
  {
    title: "Content Creation",
    description: "Develop social media posts, reels, blogs, website content, and creative assets for your brand.",
    icon: Laptop,
    link: "/services/content-marketing",
  },
  {
    title: "Website Development",
    description: "Build websites designed to communicate your brand clearly and provide a strong digital experience.",
    icon: Globe,
    link: "/services/web-development",
  },
];

const whyChooseWorexa = [
  {
    number: "01",
    title: "Strategy First",
    description: "We understand your business, audience, competition, and objectives before planning your marketing approach.",
    icon: Compass,
    tags: ["Competitor Audits", "Audience Intent Mapping", "Custom Growth Roadmap"],
  },
  {
    number: "02",
    title: "Creative That Communicates",
    description: "We create content and campaigns designed to capture attention while clearly communicating your brand value.",
    icon: Megaphone,
    tags: ["High-Converting Copy", "Distinctive Brand Assets", "Multi-Format Campaigns"],
  },
  {
    number: "03",
    title: "Data-Informed Approach",
    description: "We use available performance insights to understand what is working and where opportunities exist.",
    icon: BarChart3,
    tags: ["Attribution Modeling", "A/B Conversion Testing", "Real-Time KPI Dashboards"],
  },
  {
    number: "04",
    title: "Connected Marketing",
    description: "SEO, content, social media, advertising, and your website can work together as part of one digital strategy.",
    icon: Layers,
    tags: ["Multi-Channel Synergy", "Cross-Platform Retargeting", "Unified Funnel Tracking"],
  },
  {
    number: "05",
    title: "Focused on Your Goals",
    description: "Our approach starts with what you want your marketing to achieve—not simply which platform you want to use.",
    icon: Target,
    tags: ["Revenue & Pipeline Focus", "CAC & LTV Optimization", "Commercial ROI Alignment"],
  },
];

const marketingProcess = [
  {
    step: "01",
    title: "Understand",
    description: "We learn about your business, audience, industry, competitors, and objectives.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategize",
    description: "We identify opportunities and develop a marketing strategy around your growth goals.",
    icon: Target,
  },
  {
    step: "03",
    title: "Create",
    description: "We develop content, campaigns, creatives, websites, and other required marketing assets.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Launch",
    description: "We execute your SEO, social media, advertising, content, or digital campaigns.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Analyze",
    description: "We review available performance data to understand audience response and campaign results.",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "Optimize",
    description: "We refine the strategy and marketing activities based on insights and changing opportunities.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    question: "What does a digital marketing agency in Bangalore do?",
    answer:
      "A digital marketing agency in Bangalore helps businesses attract potential customers and generate leads or sales through online channels such as SEO, Google Ads, Meta Ads, social media, content marketing, and performance marketing. The goal is to improve online visibility, reach the right audience, and generate measurable business results.",
  },
  {
    question: "What digital marketing services does Worexa Technologies offer?",
    answer:
      "Worexa Technologies offers SEO, Local SEO, Google Ads, performance marketing, social media marketing, content marketing, lead generation, branding, website development, and conversion-focused digital marketing solutions. Services are customized according to a business's industry, target audience, objectives, competition, and budget.",
  },
  {
    question: "How can digital marketing help my business generate more leads and sales?",
    answer:
      "Digital marketing helps businesses reach potential customers at different stages of their buying journey. SEO can attract people actively searching for your products or services, paid advertising can target specific audiences, and social media and content marketing can build awareness and trust. Combining these channels can help increase qualified leads and conversions.",
  },
  {
    question: "How do I choose the right digital marketing agency in Bangalore?",
    answer:
      "Choose a digital marketing agency based on its understanding of your business goals, relevant industry experience, strategy, communication, reporting, and ability to measure business outcomes. Look for an agency that focuses not only on traffic and followers but also on qualified leads, conversions, customer acquisition costs, and return on investment. Look for relevant case studies and evidence of business results, not just rankings, traffic, followers, or impressions.",
  },
  {
    question: "How much does digital marketing cost in Bangalore?",
    answer:
      "The cost of digital marketing in Bangalore varies depending on the services required, business goals, competition, target audience, campaign size, advertising budget, and level of ongoing optimization. Instead of choosing a fixed package, businesses should determine their digital marketing budget based on their objectives and expected return on investment.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "The time required to see results depends on the marketing channel and business goals. Paid advertising can generate traffic and leads relatively quickly, while SEO usually requires several months of consistent optimization and content development. Results also depend on competition, website quality, budget, targeting, and the effectiveness of the strategy.",
  },
  {
    question: "Is SEO better than Google Ads for generating leads?",
    answer:
      "Neither SEO nor Google Ads is universally better. Google Ads can generate targeted traffic quickly, while SEO can build long-term organic visibility. The right approach depends on the business, competition, budget, and objectives. In many cases, combining SEO and paid advertising provides a stronger overall acquisition strategy. The right combination depends on your goals, industry, competition, customer journey, and budget.",
  },
  {
    question: "How does Worexa Technologies measure digital marketing performance?",
    answer:
      "Digital marketing performance can be measured using metrics such as qualified leads, conversions, cost per lead, conversion rate, website traffic, search rankings, advertising return on investment, and customer acquisition cost. The most relevant metrics depend on the business objectives and marketing channels being used.",
  },
  {
    question: "Can digital marketing help local businesses in Bangalore?",
    answer:
      "Yes. Local businesses can use Local SEO, Google Business Profile optimization, location-based advertising, social media marketing, and locally relevant content to reach customers in Bangalore and nearby areas. These strategies can help businesses improve local visibility and generate enquiries from customers searching for their products or services.",
  },
  {
    question: "Should a small business invest in digital marketing?",
    answer:
      "Yes, if digital channels are relevant to the business's target customers. Small businesses can start with focused strategies such as Local SEO, Google Ads, social media, or content marketing rather than investing in every channel at once. The right mix depends on the target audience, competition, budget, and business goals.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Preload only the NEXT slide sequentially to keep initial network free for LCP
  useEffect(() => {
    const nextSlideIdx = (currentHeroSlide + 1) % heroSlides.length;
    const img = new Image();
    img.src = heroSlides[nextSlideIdx].src;
  }, [currentHeroSlide]);

  // Auto-advance hero slides smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen text-slate-900 bg-white overflow-hidden">
      <Helmet>
        <title id="metaTitle">Marketing and Advertising Company in Bangalore | Grow Your Brand</title>
        <meta
          name="description"
          id="metaDescription"
          content="Partner with a marketing and advertising company in Bangalore for digital marketing, branding, creative campaigns, and strategies that drive business growth."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="marketing and advertising company in bangalore, marketing and advertising agency in bangalore, digital marketing agency in bangalore, digital marketing companies in bangalore, best digital marketing agency in bangalore, advertising companies in bangalore, advertising agencies in bangalore, digital marketing agency near me, top digital marketing agencies in bangalore, marketing agency in bangalore"
        />
        <meta id="ogTitle" property="og:title" content="Marketing and Advertising Company in Bangalore | Strategies That Drive Growth" />
        <meta id="ogType" property="og:type" content="website" />
        <meta id="ogDescription" property="og:description" content="Grow your business with a creative marketing and advertising company in Bangalore. Build your brand, connect with your audience, and achieve measurable marketing results." />
        <meta id="ogUrl" property="og:url" content="https://worexatechnologies.com/" />
        <meta id="ogSiteName" property="og:site_name" content="Worexa Technologies" />
        <meta id="ogImage" property="og:image" content="https://worexatechnologies.com/assets/logo-white.png" />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta id="twitterTitle" name="twitter:title" content="Marketing and Advertising Company in Bangalore | Drive Business Growth" />
        <meta id="twitterDescription" name="twitter:description" content="Looking for a marketing and advertising company in Bangalore? Get digital marketing, branding, creative campaigns, and growth strategies designed to increase visibility and engagement." />
        <meta id="author" name="author" content="Akshay" />
        <link id="canonical" rel="canonical" href="https://worexatechnologies.com/" />
        <meta id="indexingStatus" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta id="Publisher" property="publisher" content="Worexa Technologies" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      {/* =========================================================================
          1. HERO SECTION — PREMIUM REDESIGN
      ========================================================================= */}
      <section className="home-hero relative text-white overflow-hidden min-h-screen flex flex-col" style={{ paddingTop: '72px' }}>

        {/* ── BACKGROUND LAYER ── */}
        <div className="absolute inset-0 z-0 bg-[#050a14] overflow-hidden">
          {/* Smooth Hardware-Accelerated Cross-Fading Hero Carousel */}
          <AnimatePresence mode="sync">
            <motion.img
              key={currentHeroSlide}
              src={heroSlides[currentHeroSlide].src}
              alt={heroSlides[currentHeroSlide].alt}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                scale: { duration: 5.5, ease: 'easeOut' },
              }}
              className={`absolute inset-0 w-full h-full object-cover ${heroSlides[currentHeroSlide].position} transform-gpu will-change-transform`}
              fetchPriority={currentHeroSlide === 0 ? "high" : "auto"}
              decoding={currentHeroSlide === 0 ? "sync" : "async"}
            />
          </AnimatePresence>

          {/* Soft localized left vignette only behind text to ensure crisp legibility without darkening the team image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent lg:w-3/5 pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-black/15 pointer-events-none z-[1]" />

          {/* Pure GPU CSS animated glow orbs (zero JavaScript main thread blocking) */}
          <div
            className="absolute top-1/4 left-[5%] w-[420px] h-[420px] rounded-full pointer-events-none transform-gpu animate-pulse-glow z-[2]"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.45) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -left-10 w-[350px] h-[350px] rounded-full pointer-events-none transform-gpu animate-pulse-glow z-[2] [animation-delay:2s]"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.35) 0%, transparent 70%)' }}
          />

          {/* Grid lines overlay — subtle tech feel */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none z-[2]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>


        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-[760px] mt-6 sm:mt-10 md:mt-12">

            {/* Headline — Immediately visible for instant LCP score */}
            <h1
              className="font-black tracking-tight leading-[1.12] text-white drop-shadow-xl"
              style={{ fontSize: 'clamp(1.85rem, 3.3vw, 2.95rem)' }}
            >
              <span className="block sm:whitespace-nowrap">Marketing and Advertising</span>
              <span className="block mt-1 sm:mt-1.5 sm:whitespace-nowrap">Company in Bangalore</span>
              <span className="block mt-1 sm:mt-1.5 sm:whitespace-nowrap">for Business Growth</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="mt-6 text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-[540px] font-normal drop-shadow-md">
              Worexa Technologies is a marketing and advertising company in Bangalore, helping businesses build visibility, connect with their target audience, strengthen their brand, and generate growth through strategic digital marketing and advertising.
            </p>

            {/* ── HERO ACTION BUTTONS ── */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-3.5">
              <Link
                to="/contact"
                className="w-fit inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-2.5 shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>Get Consultation</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                onClick={() => {
                  const t = document.getElementById('growth-engine');
                  t ? t.scrollIntoView({ behavior: 'smooth' }) : (window.location.href = '/services');
                }}
                className="w-fit inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>View Our Services</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>

        {/* ── SLIDE NAVIGATION INDICATORS ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-5 sm:pb-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentHeroSlide(idx)}
                aria-label={`Switch to slide ${idx + 1}`}
                className="group relative min-h-[48px] min-w-[36px] flex items-center justify-center p-2 cursor-pointer focus:outline-hidden"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${idx === currentHeroSlide
                    ? 'w-10 bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_12px_rgba(249,115,22,0.7)]'
                    : 'w-3 bg-white/30 group-hover:bg-white/60'
                    }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-wider text-slate-300/90 uppercase hidden sm:inline-block">
              {heroSlides[currentHeroSlide].tag}
            </span>
            <span className="text-[11px] font-bold text-orange-400 bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10">
              0{currentHeroSlide + 1} / 0{heroSlides.length}
            </span>
          </div>
        </div>
      </section>

      {/* Video Story Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200"
            >
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors shadow-lg"
                aria-label="Close video"
              >
                <X size={20} />
              </button>
              <div className="aspect-video w-full bg-black">
                <video
                  src="/assets/final4.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          2. WHY BUSINESSES CHOOSE WOREXA TECHNOLOGIES
          Style: High-Trust Strategic Grid on Crisp White
      ========================================================================= */}
      <section className="py-20 sm:py-28 relative bg-white border-b border-slate-200/80 overflow-hidden">
        {/* Subtle decorative background accents */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-400/5 via-amber-300/5 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-slate-100 to-transparent blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Worexa Technologies</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Marketing works better when strategy, creativity, technology, and execution work together. Here is how we engineer measurable commercial advantage.
            </p>
          </div>

          {/* 5 Strategic Pillars Grid - Matching User Reference Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {whyChooseWorexa.map((item, index) => {
              const isHighlighted = index === 1; // Card 02 highlighted with orange border like reference
              return (
                <div
                  key={item.number}
                  className={`group relative rounded-[26px] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${isHighlighted
                    ? 'bg-white border-2 border-orange-500 shadow-md shadow-orange-500/10'
                    : 'bg-[#f8f9fa] border border-slate-200/80 hover:border-orange-500 hover:bg-white hover:shadow-xl hover:shadow-orange-500/10'
                    }`}
                >
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-snug">
                    <span className="text-orange-500 font-extrabold mr-2">{item.number}.</span>
                    <span>{item.title}</span>
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CLIENT TRUST & METRICS TICKER
      ========================================================================= */}
      <section className="py-7 sm:py-9 border-y border-white/[0.08] bg-[#090a0f] overflow-hidden text-white relative">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-orange-500/[0.06] blur-[80px] pointer-events-none" />

        {/* Top Centered Rating Pill */}
        <div className="text-center mb-5 sm:mb-6 px-4 relative z-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 shadow-md shadow-black/20 backdrop-blur-md">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
            <span className="text-[11px] sm:text-xs font-semibold text-slate-200">
              Trusted by <span className="text-orange-400 font-extrabold">growing businesses</span> across industries
            </span>
          </div>
        </div>

        {/* Running Logos Slider (Infinite 60fps CSS Marquee - No Gaps) */}
        <div className="relative overflow-hidden py-1">
          {/* Smooth edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#090a0f] via-[#090a0f]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#090a0f] via-[#090a0f]/80 to-transparent z-10" />

          {/* Infinite seamless ticker container */}
          <div className="flex w-max animate-marquee [animation-duration:36s] hover:[animation-play-state:paused] items-center gap-4 sm:gap-6">
            {[...clientLogos, ...clientLogos].map((item, idx) => (
              <div key={`${item.label}-${idx}`} className="flex items-center gap-4 sm:gap-6 shrink-0">
                <div
                  className="group/card relative flex items-center gap-3.5 pl-2 pr-4 sm:pr-5 py-2 rounded-full bg-[#111319]/90 hover:bg-[#181a24] border border-white/[0.12] hover:border-orange-500/50 shadow-md shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 select-none shrink-0 cursor-default"
                >
                  {/* Logo container */}
                  <div className={`flex h-10 w-16 sm:h-10.5 sm:w-18 shrink-0 items-center justify-center rounded-xl ${item.bg || 'bg-white'} p-1.5 shadow-xs transition-transform duration-300 group-hover/card:scale-105 overflow-hidden`}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs font-black text-slate-800">{item.label[0]}</span>
                    )}
                  </div>

                  {/* Name, Subtitle & Arrow */}
                  <div className="text-left flex items-center gap-2.5 sm:gap-3">
                    <div>
                      <div className="text-xs sm:text-[13px] font-black text-white tracking-wider uppercase group-hover/card:text-orange-400 transition-colors whitespace-nowrap">
                        {item.label}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-zinc-400 tracking-widest uppercase whitespace-nowrap font-mono mt-0.5">
                        {item.category}
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="text-white/30 group-hover/card:text-orange-400 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all shrink-0 ml-0.5" />
                  </div>
                </div>

                {/* Glowing Orange Dot Separator */}
                <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316,0_0_4px_#fb923c] shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Centered Metrics Row (4 Columns with Clean Dividers) */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/[0.08] max-w-4xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 text-center divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            <div className="pt-2 md:pt-0 md:px-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                20<span className="text-orange-500 font-semibold ml-0.5">+</span>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                Brands Scaled
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                50<span className="text-orange-500 font-semibold ml-0.5">+</span>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                Campaigns Delivered
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                10<span className="text-orange-500 font-semibold ml-0.5">+</span>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                Growth Solutions
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:px-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                4.8<span className="text-orange-500 font-semibold">/5</span>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT DOES WOREXA TECHNOLOGIES DO?
      ========================================================================= */}
      <section className="py-20 sm:py-28 relative bg-[#fff7ed] border-b border-orange-200/60 overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-35 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Does{' '}
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Worexa Technologies
            </span>{' '}
            Do?
          </h2>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed font-semibold">
              Worexa Technologies is a marketing and advertising company in Bangalore helping businesses build visibility, connect with the right audience, and turn digital attention into business opportunities.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We combine SEO, social media marketing, performance marketing, paid advertising, content creation, and website development to create digital marketing strategies aligned with your business goals.
            </p>
            <p className="text-base sm:text-lg text-orange-800 font-bold pt-2">
              From getting discovered to getting chosen, Worexa helps your brand move forward.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHAT DIGITAL MARKETING SERVICES DOES WOREXA PROVIDE?
          Style: Premium Interactive Service Cards (Box Design)
      ========================================================================= */}
      <section className="py-20 sm:py-28 relative bg-[#f1f5f9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              What Digital Marketing Services Does Worexa Provide?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Worexa Technologies provides integrated digital marketing and advertising services to help businesses build visibility, engage audiences, and support measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {worexaDigitalServices.map((service, index) => {
              const Icon = service.icon;
              const formattedNum = String(index + 1).padStart(2, '0');

              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xs hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer no-underline text-inherit"
                >
                  {/* Subtle top accent gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Corner ambient glow */}
                  <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/10 to-amber-300/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Header: Icon + Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-700 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:scale-105 shadow-xs">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs font-black text-slate-600 group-hover:text-orange-700 bg-slate-100 group-hover:bg-orange-50 px-2.5 py-1 rounded-full border border-slate-200 group-hover:border-orange-200 transition-colors">
                        {formattedNum}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-orange-700 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-orange-700 group-hover:text-orange-800 transition-colors">
                      Explore Service
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 shadow-2xs">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CHOOSE YOUR GROWTH GOAL (WHAT DO YOU WANT YOUR MARKETING TO ACHIEVE?)
          Style: Horizontal Interactive Launchpad Capsules
      ========================================================================= */}
      <section className="py-20 sm:py-28 relative bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Header & 3D Target Visual (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14 sm:mb-16">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.12]">
                What Do You Want Your <br className="hidden sm:inline" />
                <span className="text-orange-500">Marketing</span> to Achieve?
              </h2>

              {/* Subtitle */}
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Every business has a different growth goal. Choose what matters most to your brand, and Worexa can help you build a strategy around it.
              </p>
            </div>

            {/* Right Visual (Team In Action) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-[28px] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80 bg-slate-100 group">
                <img
                  src="/assets/marketing-goals-team.webp"
                  alt="Worexa Marketing & Production Team at Work"
                  width="500"
                  height="312"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle depth gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 3-Column Goals Grid (6 Cards Matching Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {growthGoals.map((goal) => {
              const Icon = goal.icon;
              return (
                <Link
                  key={goal.id}
                  to="/contact"
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle colored corner wash on bottom-left */}
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${goal.glow} to-transparent rounded-bl-2xl pointer-events-none opacity-80`} />

                  {/* Top Row: Squircle Icon, Number & Title, and Right Circular Arrow Button */}
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      {/* Squircle Icon Container */}
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${goal.bgIcon} ${goal.textIcon} transition-transform duration-300 group-hover:scale-105 shadow-2xs`}>
                        <Icon size={26} strokeWidth={2.2} />
                      </div>

                      {/* Number and Title */}
                      <div>
                        <span className={`block text-xs font-bold ${goal.textNum} tracking-wider`}>
                          {goal.number}
                        </span>
                        <h3 className="mt-0.5 text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-slate-950 transition-colors">
                          {goal.title}
                        </h3>
                      </div>
                    </div>

                    {/* Circular Arrow Button */}
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${goal.btnBg} transition-all duration-300 shadow-2xs mt-1`}>
                      <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mt-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {goal.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* =========================================================================
          8. HOW DOES WOREXA'S DIGITAL MARKETING PROCESS WORK?
          Style: Continuous Connected Process Roadmap
      ========================================================================= */}
      <section className="py-20 sm:py-28 relative bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              How Does Worexa&apos;s Digital Marketing Process Work?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              A clear process helps turn business goals into focused marketing actions.
            </p>
          </div>

          {/* Connected Process Flow Grid: 6 connected stepping stages with arrow flow */}
          <div className="relative">
            {/* Horizontal connection line for desktop */}
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-amber-400 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
              {marketingProcess.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="group relative flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    {/* Step Node Circle */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white border-2 border-orange-200 group-hover:border-orange-500 shadow-md group-hover:shadow-xl group-hover:shadow-orange-500/15 transition-all duration-300 group-hover:-translate-y-1 mb-5 relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white font-mono text-[10px] font-black group-hover:bg-orange-600 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="w-full">
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-700 block mb-1">
                        PHASE {item.step}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-orange-700 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQ MATRIX)
          Style: Neat, High-Trust 2-Column Professional Accordion
      ========================================================================= */}
      <section className="py-20 sm:py-28 relative bg-[#f1f5f9] border-t border-slate-200 overflow-hidden">
        {/* Subtle decorative background ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-orange-400/5 via-amber-300/5 to-transparent blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <HelpCircle size={14} className="text-orange-600" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Everything you need to know about partnering with Worexa Technologies, our digital marketing approach, attribution models, and commercial deliverables.
            </p>
          </div>

          {/* 2-Column Professional Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
            {/* Column 1 (Questions 01 to 05) */}
            <div className="space-y-4">
              {faqs.slice(0, 5).map((faq, idx) => {
                const index = idx;
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${isOpen
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
                          className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${isOpen ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                            }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold leading-snug transition-colors ${isOpen ? 'text-orange-700' : 'text-slate-900 hover:text-orange-700'
                            }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                          ? 'bg-orange-600 text-white rotate-180 shadow-xs'
                          : 'bg-slate-100 text-slate-700'
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
                    className={`rounded-2xl transition-all duration-300 border ${isOpen
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
                          className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${isOpen ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                            }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold leading-snug transition-colors ${isOpen ? 'text-orange-700' : 'text-slate-900 hover:text-orange-700'
                            }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                          ? 'bg-orange-600 text-white rotate-180 shadow-xs'
                          : 'bg-slate-100 text-slate-700'
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
    </div >
  );
}
