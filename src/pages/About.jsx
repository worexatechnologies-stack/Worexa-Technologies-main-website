import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BarChart4,
  Globe,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  Award,
  ChevronDown,
  Star,
  Layers,
  Building2,
  Check,
  Zap,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const image7 = "/assets/image7.webp";
const image9 = "/assets/image9.webp";
const teamHeroImage = "/assets/worexa-team-hero.jpg";
const teamCultureImage = "/assets/worexa-team-culture.jpg";
const teamGroupImage = "/assets/worexa-team-group.jpg";
const aboutPic2 = "/assets/aboutpic2.webp";

const clientLogos = [
  { label: "SPYSENSE", category: "IOT & SECURITY", image: "/assets/spy-sense.svg" },
  { label: "VIYANA EVENTS", category: "LUXURY GIFTING", image: "/assets/viyana-events-gifting.svg" },
  { label: "MY DEAR PARTNER", category: "WEB PLATFORM", image: "/assets/my-dear-partner.svg" },
  { label: "ALL FRESH NATURALS", category: "ORGANIC & WELLNESS", image: "/assets/all-fresh-naturals.webp" },
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
  const [activeTab, setActiveTab] = useState('team');
  const [activeIndex, setActiveIndex] = useState(null);

  const stats = [
    { label: "Client Retention Rate", value: "98%", change: "+14% YoY" },
    { label: "Campaigns Executed", value: "500+", change: "Data-Driven" },
    { label: "Average Campaign ROI", value: "4.8x", change: "Verified" },
    { label: "Organic Impressions", value: "10M+", change: "Search & Social" }
  ];

  const galleryImages = [
    { id: 'team', src: teamHeroImage, title: 'Growth & Strategy Team', subtitle: 'Collaborating at our Bengaluru Studio' },
    { id: 'culture', src: teamCultureImage, title: 'Creative Innovation', subtitle: 'Designing high-impact brand identities' },
    { id: 'group', src: teamGroupImage, title: 'Client Partnerships', subtitle: 'Driving growth for 100+ businesses' }
  ];

  return (
    <div className="min-h-screen text-slate-900 bg-white selection:bg-orange-100 selection:text-orange-900">
      <Helmet>
        <title id="metaTitle">About Worexa Technologies | Digital Marketing Agency Bangalore</title>
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
      ========================================================================= */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-20 overflow-hidden bg-[#fbfbfa] text-slate-900 border-b border-slate-200/80">
        
        {/* Soft Ambient Warm Lighting & Subtle Grid Texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div
            className="absolute top-0 right-10 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(251,191,36,0.08) 45%, transparent 70%)' }}
          />

          <div
            className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-700 text-xs font-extrabold tracking-wide mb-5 sm:mb-6 shadow-2xs">
                <Award size={13} className="text-orange-500" />
                <span>BANGALORE'S PREMIER DIGITAL GROWTH STUDIO</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-tight leading-[1.1] text-slate-900 mb-5 sm:mb-6">
                Your Digital Growth <br />
                Partner in{' '}
                <span className="text-orange-600">
                  Bangalore
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mb-7 sm:mb-8 text-center lg:text-left">
                Worexa Technologies is a digital marketing and advertising company in Bangalore that helps businesses increase online visibility, generate qualified leads, and improve conversions. We provide SEO, Google Ads, Meta Ads, social media marketing, content strategy, and performance marketing designed around measurable business outcomes.
              </p>

              {/* 4 Value Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full mb-8 pt-2">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-2">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">More Visibility</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">Rank Higher on Search</p>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-2">
                    <Target size={16} />
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">More Leads</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">Reach High Intent</p>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-2">
                    <Users size={16} />
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">More Customers</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">Turn Clicks to Sales</p>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600 mb-2">
                    <Star size={16} />
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Better Growth</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">Long-Term Impact</p>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-sm font-bold px-7 py-3.5 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Work With Our Team</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold px-7 py-3.5 transition-all duration-200 shadow-2xs hover:scale-[1.02]"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Showcase Card (Clean photographic & stat visual replacing video) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative flex items-center justify-center pt-2 lg:pt-0"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Showcase Frame */}
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-4 sm:p-5">
                  {/* Team Photographic Banner */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-800 border border-slate-700/80 group">
                    <img
                      src={teamHeroImage}
                      alt="Worexa Technologies Growth Team"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">Bengaluru Studio</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-0.5">Worexa Headquarters</p>
                      <p className="text-sm sm:text-base font-black leading-snug">Empowering 100+ Brands Across India</p>
                    </div>
                  </div>

                  {/* Stat Highlights Bar below picture */}
                  <div className="grid grid-cols-2 gap-2.5 mt-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <p className="text-xl font-black text-orange-400">98%</p>
                      <p className="text-[11px] text-slate-300 font-medium">Client Retention</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <p className="text-xl font-black text-amber-400">500+</p>
                      <p className="text-[11px] text-slate-300 font-medium">Growth Campaigns</p>
                    </div>
                  </div>

                  {/* Floating Guarantee Chip */}
                  <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-transparent border border-orange-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                      <span className="text-xs font-bold text-slate-200">Data-Driven Strategy &amp; Execution</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-orange-300 uppercase">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DIGITAL MARKETING EXPERTS MANIFESTO SPREAD
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-200/80 via-slate-100/90 to-slate-200/80 py-16 sm:py-24 overflow-hidden border-b border-slate-300/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-orange-100/30 via-amber-50/15 to-transparent blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Digital Marketing Experts Helping Brands Grow With{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Strategy, Creativity &amp; Data
              </span>
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-300/70 bg-white p-6 sm:p-12 shadow-md relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400" />
            
            <div className="space-y-5 relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-lg sm:text-2xl font-black text-slate-900 leading-snug tracking-tight">
                We are a full-service digital marketing agency helping ambitious businesses build stronger brands, reach the right audience, and generate measurable growth.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our team combines digital marketing strategy, creative design, performance marketing, technology, and data to turn ideas into campaigns that deliver real business results — integrated digital experiences designed around your business goals, not vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHO IS WOREXA TECHNOLOGIES? — METHODOLOGY & STACKING CARDS
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-slate-50/80 via-orange-50/15 to-slate-50/80 py-16 sm:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Who Is{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Worexa Technologies?
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              Worexa Technologies is a Bangalore-based marketing and growth firm that strives to help startups, SMEs, local enterprises, and growing brands enhance their digital footprint and market performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: 3 Core Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-4">
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

            {/* Right Column: 3 Cards */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
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
              ].map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-orange-400 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200/80 text-orange-600">
                        <IconComponent size={22} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base sm:text-lg font-black text-slate-900">
                            {card.title}
                          </h3>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {card.num}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
          SECTION 4: TEAM & CULTURE GALLERY SHOWCASE
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Inside Worexa Technologies:{' '}
              <span className="text-orange-600">Our Culture &amp; Studio</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
              Meet the strategists, creators, developers, and media specialists behind Bangalore's fastest-growing digital agency.
            </p>

            {/* Interactive Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {galleryImages.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Image Showcase Box */}
          <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group">
            {galleryImages.map((img) => (
              img.id === activeTab && (
                <div key={img.id} className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">{img.subtitle}</p>
                    <h3 className="text-base sm:text-xl font-black">{img.title}</h3>
                  </div>
                </div>
              )
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLIENT TRUST & PARTNER LOGOS
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-3">
            Trusted by Industry Leaders &amp; Ambitious Brands
          </p>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-8 sm:mb-10">
            Partnering With Businesses Across Education, Tech, Healthcare &amp; E-Commerce
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {clientLogos.map((client) => (
              <div
                key={client.label}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-orange-300 transition-all"
              >
                <img
                  src={client.image}
                  alt={client.label}
                  className="h-9 w-auto max-w-[110px] object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-[10px] font-bold text-slate-700 text-center leading-tight">
                  {client.label}
                </span>
                <span className="text-[9px] text-slate-400 font-semibold tracking-tighter">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WE ARE YOUR GROWTH PARTNER — ROADMAP & PIPELINE
      ========================================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-[3.2rem] font-black tracking-tight leading-[1.15] text-slate-900">
              We Are Your{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Growth Partner,
              </span>
              <br />
              Not Just Another Agency
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Columns: Stepped Process */}
            <div className="lg:col-span-6 space-y-3.5">
              {[
                { step: '01', label: 'Understand your business & audience' },
                { step: '02', label: 'Develop a tailored marketing strategy' },
                { step: '03', label: 'Execute with creativity & data precision' },
                { step: '04', label: 'Monitor, optimise & improve results' },
              ].map(({ step, label }, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-orange-400 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100/90 font-mono text-xs font-black text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    {step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {label}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    Step 0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Right 6 Columns: Executive Dual Narrative Cards & CTAs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-7 space-y-3 shadow-xs">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  At Worexa Technologies, we believe digital marketing should contribute to <span className="font-black text-slate-900">real business growth</span>, not just clicks, impressions, or likes. We first understand your business, target audience, competitors, and objectives before developing a marketing strategy.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our team combines strategy, creativity, technology, data, and performance marketing to help businesses attract the right audience and convert opportunities into customers.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/80 to-amber-50/60 p-5 shadow-xs">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                  Whether you're <span className="font-black text-slate-900">launching a startup</span>, growing a small business, or scaling an established brand — our goal is to make your digital marketing more strategic, measurable, and focused on growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-3.5 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-black px-7 py-3 shadow-md shadow-orange-500/20 transition-all hover:scale-105"
                >
                  <span>Work With Us</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-black px-7 py-3 transition-all hover:scale-105"
                >
                  <span>View Our Services</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FAQ ACCORDION
      ========================================================================= */}
      <section className="py-16 sm:py-24 relative bg-[#f8fafc] border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                Worexa Technologies
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Everything you need to know about our growth agency, capabilities, approach, and how we help businesses scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            
            <div className="space-y-3.5">
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
                      className="flex w-full items-start justify-between gap-3.5 p-4 sm:p-5 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`font-mono text-xs font-black px-2 py-0.5 rounded mt-0.5 shrink-0 transition-colors ${
                            isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                            isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'bg-orange-500 text-white rotate-180 shadow-xs'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown size={14} />
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
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed pl-10 sm:pl-11 border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="space-y-3.5">
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
                      className="flex w-full items-start justify-between gap-3.5 p-4 sm:p-5 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`font-mono text-xs font-black px-2 py-0.5 rounded mt-0.5 shrink-0 transition-colors ${
                            isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                            isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'bg-orange-500 text-white rotate-180 shadow-xs'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown size={14} />
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
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed pl-10 sm:pl-11 border-t border-slate-100">
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

      {/* =========================================================================
          SECTION 8: HIGH-CONVERTING BOTTOM CTA BANNER
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-widest">
            <Zap size={13} />
            <span>Ready To Scale Your Business?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Transform Your Online Visibility into <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Measurable Revenue Growth
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Partner with Worexa Technologies in Bengaluru to architect data-driven SEO, Google Ads, and social marketing campaigns built for sustainable success.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold text-sm px-8 py-3.5 shadow-xl shadow-orange-500/25 hover:scale-105 transition-transform"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
