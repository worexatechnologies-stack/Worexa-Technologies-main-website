import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BarChart3,
  FileText,
  Globe,
  Layout,
  Megaphone,
  Palette,
  Search,
  Target,
  TrendingUp,
  Newspaper,
  Award,
  Camera,
  Radio,
  ChevronDown,
  HelpCircle,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    icon: <Search size={24} />,
    title: "Search Engine Optimization (SEO & AEO)",
    path: "/services/search-engine-optimization-seo",
    desc: "Dominate search engine results pages with organic ranking architecture, technical audits, and answer-engine optimization.",
    tag: "ORGANIC GROWTH"
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Google Ads & Performance Marketing",
    path: "/services/google-ads",
    desc: "High-performance paid acquisition funnels engineered for maximum return on ad spend (ROAS) and qualified B2B/B2C leads.",
    tag: "PAID MEDIA"
  },
  {
    icon: <Megaphone size={24} />,
    title: "Social Media & Community Building",
    path: "/services/social-media-marketing",
    desc: "Build an active, loyal brand following across Meta, LinkedIn, and Instagram with high-conversion creative campaigns.",
    tag: "SOCIAL & INFLUENCE"
  },
  {
    icon: <FileText size={24} />,
    title: "Content Marketing & Email Automation",
    path: "/services/content-marketing",
    desc: "Strategic thought-leadership storytelling and automated lead nurturing sequences that convert prospects into buyers.",
    tag: "RETENTION & NURTURE"
  },
  {
    icon: <Palette size={24} />,
    title: "Branding & Creative Strategy",
    path: "/services/branding-and-creative-strategy",
    desc: "Define your visual identity, positioning, and messaging systems that carve out distinct authority in your industry.",
    tag: "BRAND ARCHITECTURE"
  },
  {
    icon: <Globe size={24} />,
    title: "Web & Mobile App Development",
    path: "/services/web-development",
    desc: "Ultra-fast, responsive web applications built with modern frameworks, optimized for SEO, speed, and conversion.",
    tag: "DIGITAL ENGINEERING"
  },
  {
    icon: <Layout size={24} />,
    title: "UI/UX Design & Conversion Rate (CRO)",
    path: "/services/ui-ux-and-cro",
    desc: "Frictionless user experiences and data-informed A/B testing designed to maximize every dollar of your inbound traffic.",
    tag: "EXPERIENCE SCIENCE"
  },
  {
    icon: <Radio size={24} />,
    title: "Offline Advertising & Hoardings",
    path: "/services/offline-advertising",
    desc: "High-impact outdoor media, billboards, transit ads, and local activation campaigns across Bengaluru's highest footfall zones.",
    tag: "HYPERLOCAL REACH"
  },
  {
    icon: <Newspaper size={24} />,
    title: "Public Relations (PR) & Authority",
    path: "/services/public-relations",
    desc: "Strengthen executive reputation, secure top-tier press coverage, and position your leadership as industry voices.",
    tag: "MEDIA REPUTATION"
  },
  {
    icon: <Camera size={24} />,
    title: "Commercial Photoshoot & Production",
    path: "/services/photoshoot",
    desc: "High-end visual storytelling, corporate films, product shoots, and creative production that captures customer attention.",
    tag: "CREATIVE PRODUCTION"
  }
];

const highlights = [
  { icon: <Target size={20} />, label: "Strategy-Led Execution", desc: "No random acts of marketing" },
  { icon: <TrendingUp size={20} />, label: "Built for Net Revenue", desc: "Attributable sales and qualified pipeline" },
  { icon: <Award size={20} />, label: "Bespoke Production", desc: "Custom designed for your brand" },
];

const faqs = [
  {
    question: "What digital marketing and advertising services does Worexa Technologies offer?",
    answer:
      "Worexa Technologies offers a full range of digital marketing, advertising, branding, creative, and web development services. Its services include Search Engine Optimization (SEO), Google Ads and performance marketing, social media marketing, content marketing, branding and creative strategy, website design and development, UI/UX design, conversion rate optimization (CRO), offline advertising, public relations (PR), and creative production.",
  },
  {
    question: "Which digital marketing services does Worexa Technologies provide in Bangalore?",
    answer:
      "Worexa Technologies provides SEO, Google Ads, PPC and performance marketing, social media marketing, content marketing, email marketing, website development, UI/UX design, conversion rate optimization, branding, and digital advertising services for businesses in Bangalore and other markets.",
  },
  {
    question: "Does Worexa Technologies provide SEO services?",
    answer:
      "Yes. Worexa Technologies provides SEO services focused on improving a website's search visibility, organic traffic, and ability to attract relevant customers. SEO can include technical SEO, on-page optimization, keyword research, content optimization, local SEO, and other search visibility activities based on the business's requirements.",
  },
  {
    question: "Does Worexa Technologies offer Google Ads and performance marketing?",
    answer:
      "Yes. Worexa Technologies provides Google Ads and performance marketing services designed to reach relevant audiences, generate leads, drive website traffic, and support measurable business outcomes. Campaign strategy, targeting, creative, landing pages, tracking, and ongoing optimization can be aligned with the business's goals.",
  },
  {
    question: "Does Worexa Technologies provide social media marketing?",
    answer:
      "Yes. Worexa Technologies provides social media marketing and paid social campaign services to help businesses build their brand presence, engage their target audience, increase reach, and generate leads or conversions through relevant social platforms.",
  },
  {
    question: "What does Worexa Technologies' website design and development service include?",
    answer:
      "Worexa Technologies provides website design and development focused on creating responsive, user-friendly, search-friendly, and conversion-focused websites. Depending on the project, the service can include website strategy, UI design, development, responsive implementation, landing pages, performance improvements, and conversion-focused features.",
  },
  {
    question: "Does Worexa Technologies provide UI/UX and conversion rate optimization services?",
    answer:
      "Yes. Worexa Technologies provides UI/UX design and conversion rate optimization (CRO) services to improve how users interact with a website and make it easier for visitors to take actions such as submitting an enquiry, requesting a consultation, making a purchase, or contacting a business.",
  },
  {
    question: "What does Worexa Technologies offer for branding and creative services?",
    answer:
      "Worexa Technologies provides branding and creative services that can include brand strategy, visual identity, creative campaigns, marketing creatives, promotional materials, and other brand communication assets. These services are designed to create a consistent and recognizable brand presence across digital and offline channels.",
  },
  {
    question: "Does Worexa Technologies provide offline advertising and outdoor advertising?",
    answer:
      "Yes. Worexa Technologies provides offline and outdoor advertising solutions, including hoardings, print advertising, flyers, and other location-focused promotional activities. These services can be used by businesses that want to increase local visibility, brand awareness, and footfall.",
  },
  {
    question: "Does Worexa Technologies provide content marketing and content creation?",
    answer:
      "Yes. Worexa Technologies provides content marketing and content creation services to help businesses communicate with their target audiences, support SEO and digital campaigns, build brand authority, and generate customer interest. Content strategies can be aligned with the business's marketing objectives and customer journey.",
  },
  {
    question: "Can Worexa Technologies manage multiple marketing services for one business?",
    answer:
      "Yes. Worexa Technologies can combine multiple marketing services into an integrated growth strategy. For example, a business may use SEO and content marketing for organic visibility, Google Ads for faster lead generation, social media for audience engagement, and website and CRO services to improve conversions.",
  },
  {
    question: "Who can benefit from Worexa Technologies' marketing services?",
    answer:
      "Worexa Technologies works with startups, entrepreneurs, local businesses, SMEs, retailers, and growing brands. Services can be selected and combined according to the business's objectives, target audience, industry, market, and available marketing budget.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen text-slate-900 bg-white selection:bg-orange-100 selection:text-orange-900">
      <Helmet>
        <title id="metaTitle">Worexa Technologies Services | Digital Growth Solutions.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Explore Worexa Technologies Services including SEO, Social Media Marketing, PPC, web development, branding, and digital strategies designed for business growth."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="worexa technologies services, services in worexa technologies, seo agency in bangalore, digital marketing services in bangalore"
        />
        <meta id="ogTitle" property="og:title" content="Worexa Technologies Services | Digital Growth Solutions." />
        <meta id="ogType" property="og:type" content="website" />
        <meta id="ogDescription" property="og:description" content="Explore Worexa Technologies Services including SEO, Social Media Marketing, PPC, web development, branding, and digital strategies designed for business growth." />
        <meta id="ogUrl" property="og:url" content="https://worexatechnologies.com/services" />
        <meta id="ogSiteName" property="og:site_name" content="Worexa Technologies" />
        <meta id="ogImage" property="og:image" content="https://worexatechnologies.com/assets/logo.png" />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta id="twitterTitle" name="twitter:title" content="Worexa Technologies Services | Digital Growth Solutions." />
        <meta id="twitterDescription" name="twitter:description" content="Explore Worexa Technologies Services including SEO, Social Media Marketing, PPC, web development, branding, and digital strategies designed for business growth." />
        <meta id="author" name="author" content="Akshay" />
        <link id="canonical" rel="canonical" href="https://worexatechnologies.com/services" />
        <meta id="indexingStatus" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta id="Publisher" property="publisher" content="Worexa Technologies" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      {/* Services Hero */}
      <section className="relative isolate overflow-hidden bg-[#050505] px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-5xl text-4xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl lg:leading-[1.03]">
            Marketing & advertising Services That Drive{' '}
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Visibility, Leads &amp; Growth
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
            Worexa Technologies is a full-service digital marketing agency helping businesses build stronger brands,
            increase online visibility, generate qualified leads, and turn website traffic into measurable revenue.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION: ALL SERVICES DIRECTORY
      ========================================================================= */}
      <section id="services-directory" className="py-24 sm:py-32 relative bg-slate-50/50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="pb-8 mb-12 text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600 mb-2">Our Services Directory</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-tight">
              Explore Our Services
            </h2>
          </div>

          {/* 10 Services Clean Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <Link
                key={service.path}
                to={service.path}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                      {service.tag}
                    </span>
                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-orange-500 transition-colors">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                    Deep Dive &amp; Strategy
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}


          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CONSULTATION BANNER — REFINED VIP STRATEGY DOCK
          Aesthetic: Clean luxury card with radiant amber lighting & generous spacing
      ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-orange-300/60 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 p-8 sm:p-12 text-center shadow-lg text-white">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider text-white">
                <Zap size={13} className="text-amber-300" />
                <span>Start Your Growth Journey</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Not sure which channels will deliver the highest ROI?
              </h2>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl mx-auto">
                Book a 30-minute growth consultation with our lead strategists. We&apos;ll audit your existing assets and chart an exact roadmap.
              </p>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 text-slate-900 px-8 py-3.5 text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight size={15} className="text-orange-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FREQUENTLY ASKED QUESTIONS — 12 COMPREHENSIVE FAQS
          Aesthetic: Two-column clean interactive accordion with numbered pills
      ========================================================================= */}
      <section className="py-24 sm:py-32 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle size={14} className="text-orange-500" />
              <span>Questions &amp; Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Everything you need to know about our digital marketing, advertising, technology, and growth solutions.
            </p>
          </div>

          {/* 2-Column Responsive Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
            
            {/* Column 1 (Questions 01 to 06) */}
            <div className="space-y-4">
              {faqs.slice(0, 6).map((faq, idx) => {
                const index = idx;
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
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

            {/* Column 2 (Questions 07 to 12) */}
            <div className="space-y-4">
              {faqs.slice(6, 12).map((faq, idx) => {
                const index = idx + 6;
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
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
