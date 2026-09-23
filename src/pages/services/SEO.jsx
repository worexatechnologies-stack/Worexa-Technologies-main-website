import ServiceContactForm from '../../components/ServiceContactForm';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving a website so it can appear more prominently in organic search results for relevant queries. SEO helps businesses increase search visibility, attract qualified organic traffic, generate leads, and reach potential customers.",
  },
  {
    question: "How can SEO benefit my business?",
    answer:
      "SEO can help your business increase organic website traffic, improve search visibility, reach people actively searching for your products or services, generate qualified leads, and build long-term online visibility. Unlike paid advertising, SEO can continue generating organic traffic after the initial optimization work.",
  },
  {
    question: "How does Worexa Technologies improve Google search rankings?",
    answer:
      "Worexa Technologies improves search visibility through a comprehensive SEO strategy that includes keyword research, technical SEO, on-page optimization, content optimization, internal linking, local SEO, competitor analysis, website performance optimization, and ongoing performance monitoring. The specific strategy is tailored to each website and business objective.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically takes several months to produce meaningful results, although the timeline varies by website, industry, competition, target keywords, content quality, and the current authority of the website. Some improvements may appear earlier, while sustainable organic growth generally requires consistent SEO work over time.",
  },
  {
    question: "What is included in professional SEO services?",
    answer:
      "Professional SEO services typically include SEO audits, keyword research, technical SEO, on-page SEO, content optimization, internal linking, local SEO, competitor analysis, website performance optimization, and SEO performance monitoring. The exact services depend on the website's needs and business goals.",
  },
  {
    question: "How does Worexa Technologies create an SEO strategy?",
    answer:
      "Worexa Technologies creates an SEO strategy by analyzing the business, target audience, website, competitors, industry, search demand, and business objectives. We then identify relevant search opportunities and prioritize technical, content, on-page, and off-page optimization activities based on their potential business impact.",
  },
  {
    question: "Can SEO help my website generate leads?",
    answer:
      "Yes, SEO can help generate leads by bringing relevant visitors to your website when they are actively searching for products or services you offer. Worexa Technologies focuses on targeting relevant search intent and optimizing website content and landing pages to support conversions as well as organic visibility.",
  },
  {
    question: "What is local SEO and does my business need it?",
    answer:
      "Local SEO is the process of optimizing a business's online presence to appear for relevant searches in specific geographic locations. It is particularly useful for businesses that serve customers in specific cities, regions, or service areas. Local SEO may include Google Business Profile optimization, local keyword targeting, location-based content, citations, and other local search optimization activities.",
  },
  {
    question: "How do you measure SEO performance?",
    answer:
      "SEO performance is measured using metrics such as organic traffic, keyword visibility, search impressions, clicks, rankings, conversions, enquiries, and qualified leads. The most important metrics depend on the business's objectives, because higher rankings alone do not necessarily mean better business results.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "SEO pricing varies depending on the website size, industry competition, target locations, number of keywords, current website performance, required services, and business objectives. Worexa Technologies recommends an SEO strategy based on the specific requirements and growth opportunities of each business.",
  },
];

const SEO = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">SEO Agency in Bangalore | Expert SEO Services for Business Growth.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Looking for a trusted SEO agency in Bangalore? We help businesses improve rankings, drive organic traffic, and generate quality leads with proven SEO strategies."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="seo agency in bangalore, best seo agency in bangalore, best seo agency in banashankari, top seo service company in bangalore"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="SEO Agency in Bangalore | Expert SEO Services for Business Growth."
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Looking for a trusted SEO agency in Bangalore? We help businesses improve rankings, drive organic traffic, and generate quality leads with proven SEO strategies."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/search-engine-optimization-seo"
        />
        <meta
          id="ogSiteName"
          property="og:site_name"
          content="Worexa Technologies"
        />
        <meta
          id="ogImage"
          property="og:image"
          content="https://worexatechnologies.com/assets/logo-white.png"
        />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta
          id="twitterTitle"
          name="twitter:title"
          content="SEO Agency in Bangalore | Expert SEO Services for Business Growth."
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Looking for a trusted SEO agency in Bangalore? We help businesses improve rankings, drive organic traffic, and generate quality leads with proven SEO strategies."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/search-engine-optimization-seo"
        />
        <meta
          id="indexingStatus"
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta id="Publisher" property="publisher" content="Worexa Technologies" />
        <meta property="og:locale" content="en_US" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://worexatechnologies.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://worexatechnologies.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Search Engine Optimization (SEO)",
                "item": "https://worexatechnologies.com/services/search-engine-optimization-seo"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* --- HERO BANNER — PURE BLACK (#000000) EXCLUSIVELY FOR BREADCRUMB & HEADLINE --- */}
      <section className="relative overflow-hidden bg-black pt-32 sm:pt-36 pb-14 sm:pb-16 border-b border-zinc-900">
        {/* Subtle Top Warm Amber/Orange Radial Glow (matching Image 1) */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(249, 115, 22, 0.22) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 75%)',
          }}
        />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-6"
          >

            {/* Main Headline - Dual Tone White & Orange (matching Image 1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">SEO Services That Increase </span>
              <span className="text-[#f97316]">Search Visibility, Qualified Traffic &amp; Leads</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO CONTENT SECTION — CLEAN WHITE BACKGROUND --- */}
            {/* --- INTRO CONTENT & INLINE FORM SECTION --- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Original Intro Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our SEO services help businesses improve their visibility in organic search, attract qualified customers, and turn search traffic into measurable business growth. We build customized SEO strategies based on your industry, target audience, competition, and business objectives not one-size-fits-all tactics.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              From technical SEO and keyword research to on-page optimization, content strategy, local SEO, link building, and performance tracking, we improve the factors that help search engines understand your website and help potential customers find your business.
            </p>
            </motion.div>

            {/* Right Column: Only Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <ServiceContactForm serviceName="Search Engine Optimization (SEO)" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. SEO APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase">Our SEO Approach</h2>

            <p className="text-gray-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
              We use a structured, data-driven SEO process to improve your website's technical health, search visibility, content relevance, and ability to convert organic visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SEO Audit & Technical Optimization",
                desc: "We analyze your website's technical health, crawlability, indexing, site structure, Core Web Vitals, internal links, and other SEO factors to identify opportunities and remove barriers to search performance."
              },
              {
                title: "Keyword & Search Intent Research",
                desc: "We identify relevant keywords and search queries based on your products, services, audience, location, competition, and customer journey—then map them to the right pages and content."
              },
              {
                title: "On-Page SEO",
                desc: "We optimize page titles, headings, content, URLs, internal links, images, and other on-page elements so search engines and users can clearly understand what each page offers."
              },
              {
                title: "Content Strategy",
                desc: "We create and optimize useful, topic-focused content that answers real customer questions, demonstrates expertise, supports your service pages, and builds topical authority."
              },
              {
                title: "Local SEO",
                desc: "For businesses targeting specific locations, we optimize local search signals to help customers discover your business when they search for relevant products and services nearby."
              },
              {
                title: "Authority & Link Building",
                desc: "We develop sustainable authority-building strategies designed to earn relevant, high-quality links and strengthen your website's credibility within its industry."
              },
              {
                title: "SEO Performance & Reporting",
                desc: "We monitor organic visibility, rankings, traffic, conversions, and other meaningful KPIs to identify what's working and continuously improve the strategy."
              }
            ].map((step, i) => (
              <div
                key={i}
                className={`p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-600 hover:shadow-xl transition-all duration-300 ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
              >
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                  <span className="text-orange-600 mr-2">0{i + 1}.</span> {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* SEO SERVICES SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold uppercase tracking-[4px]">
              SEO Solutions
            </span>

            <h4 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4">
              Our SEO Services Include
            </h4>
          </div>

          {/* SERVICES LIST */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  01
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Keyword Research &amp; Strategy
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    On-Page SEO Optimization
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Technical SEO Improvements
                  </h3>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  04
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Content Optimization &amp; Creation
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  05
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Link Building (Off-Page SEO)
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Local SEO
                  </h3>

                </div>
              </div>

            </div>

          </div>

          {/* CENTER 7TH CARD */}
          <div className="flex justify-center mt-8">
            <div className="w-full lg:w-[48%]">
              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  07
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    SEO Audits &amp; Competitor Analysis
                  </h3>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. ENHANCED RESULTS SECTION --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto bg-orange-50 rounded-[2.5rem] p-8 md:p-14 border border-orange-100 relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/40 blur-[100px] rounded-full group-hover:bg-orange-300/40 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  SEO That Drives <br />
                  <span className="text-orange-600 italic">Real Results</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  SEO is not just about rankings - it's about business growth.
                  As a results-driven marketing and advertising company in Bangalore, we focus on turning your website into a consistent lead generation channel. We continuously monitor performance, analyze user behavior and refine strategies to improve both traffic quality and conversion rates.
                  Our goal is simple: help you attract the right audience and turn that traffic into measurable business result
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-4">
                  Our approach helps you achieve:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Higher conversion rates</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Lower cost per lead</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Better return on ad spend (ROAS)</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Sustainable campaign scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-orange-600 uppercase tracking-[4px] text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-5 leading-tight">
              Why Choose Us For <br className="hidden md:block" />
              SEO?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Choosing the right SEO partner can make a significant difference in your online success. As an experienced marketing and advertising company in Bangalore, we focus on strategies that are transparent, scalable, and result-oriented.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Data-driven SEO strategies ",
              "Customized approach based on your business goals",
              "Focus on long-term organic growth",
              "Transparent reporting with actionable insights"
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gray-50 border border-gray-200 rounded-[2rem] p-7 md:p-8 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 min-h-[220px] flex flex-col justify-between"
              >

                {/* NUMBER */}
                <div className="flex justify-end">
                  <span className="text-5xl md:text-6xl font-black text-orange-100 leading-none">
                    0{i + 1}
                  </span>
                </div>

                {/* TEXT */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed relative z-10 mt-6">
                  {item}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* --- 6. WHAT YOU CAN EXPECT --- */}
      <section className="py-24 bg-orange-600">
        <div className="container mx-auto px-8 text-center">

          <h2 className="text-4xl font-black text-white mb-6 uppercase">
            What You Can Expect
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-white/90 font-medium mb-12">
            When you invest in SEO you're investing in long-term growth. Our strategies are designed to deliver:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Improved search engine rankings",
              "Consistent organic traffic",
              "Higher quality leads",
              "Better conversion rates",
              "Sustainable online visibility"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                <p className="text-slate-800 font-semibold text-left">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. FAQ SECTION --- */}
      <section className="py-20 sm:py-28 relative bg-[#f1f5f9] border-t border-slate-200 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-orange-400/5 via-amber-300/5 to-transparent blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <HelpCircle size={14} className="text-orange-500" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About SEO Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Everything you need to know. Can't find what you're looking for?{' '}
              <Link to="/contact" className="text-orange-600 font-bold hover:underline">Talk to our team.</Link>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
            <div className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const index = idx;
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className={`rounded-2xl transition-all duration-300 border ${
                    isOpen ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20' : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                  }`}>
                    <button type="button" onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer" aria-expanded={isOpen}>
                      <div className="flex items-start gap-3.5">
                        <span className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${
                          isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'
                        }`}>{String(index + 1).padStart(2, '0')}</span>
                        <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                          isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
                        }`}>{faq.question}</span>
                      </div>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-orange-500 text-white rotate-180 shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}><ChevronDown size={16} /></div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden">
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
            <div className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const index = idx + Math.ceil(faqs.length / 2);
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className={`rounded-2xl transition-all duration-300 border ${
                    isOpen ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20' : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                  }`}>
                    <button type="button" onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer" aria-expanded={isOpen}>
                      <div className="flex items-start gap-3.5">
                        <span className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${
                          isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'
                        }`}>{String(index + 1).padStart(2, '0')}</span>
                        <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                          isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'
                        }`}>{faq.question}</span>
                      </div>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-orange-500 text-white rotate-180 shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}><ChevronDown size={16} /></div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden">
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
};

export default SEO;
