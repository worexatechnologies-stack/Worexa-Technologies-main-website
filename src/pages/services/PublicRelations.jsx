import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are public relations services?",
    answer:
      "Public relations (PR) services help businesses manage their public image, communicate with their audiences, build relationships with media and other stakeholders, and strengthen brand reputation. PR can include media relations, press releases, corporate communications, publicity campaigns, event promotion, and reputation management.",
  },
  {
    question: "Why are public relations services important for a business?",
    answer:
      "PR can help businesses increase brand awareness, build credibility, communicate important messages, develop media relationships, and manage their reputation. A strategic PR program can also help businesses communicate effectively with customers, journalists, partners, employees, and other relevant audiences.",
  },
  {
    question: "What public relations services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides PR services that can include media relations, press release writing, publicity campaigns, brand communication, corporate communications, event promotion, reputation management, PR content creation, and communication strategy. The scope of services is tailored to the business, industry, audience, and communication objectives.",
  },
  {
    question: "How can public relations improve my brand reputation?",
    answer:
      "Public relations can improve brand reputation by communicating clear and consistent messages, highlighting relevant business achievements, developing positive media relationships, and engaging with important audiences. Worexa Technologies develops communication strategies designed to strengthen brand positioning and support long-term reputation.",
  },
  {
    question: "Can Worexa Technologies help my business get media coverage?",
    answer:
      "Yes, Worexa Technologies provides media relations and publicity support that can help businesses identify relevant media opportunities, develop newsworthy communication materials, and engage with appropriate media contacts. Media coverage cannot be guaranteed because editorial decisions ultimately depend on journalists and media organizations.",
  },
  {
    question: "What is a press release and when should a business use one?",
    answer:
      "A press release is a structured announcement designed to communicate news or significant information about a business to media organizations and other relevant audiences. Businesses may use press releases for product launches, company milestones, partnerships, events, awards, expansions, announcements, and other genuinely newsworthy developments.",
  },
  {
    question: "Can PR help increase brand awareness?",
    answer:
      "Yes. PR can increase brand awareness by creating opportunities for a business to communicate its expertise, achievements, products, services, and perspectives through relevant media and communication channels. Consistent PR activity can help increase exposure and strengthen recognition among target audiences.",
  },
  {
    question: "How can Worexa Technologies improve my brand communication?",
    answer:
      "Worexa Technologies can improve brand communication by developing clear messaging aligned with your brand positioning, audience, and business objectives. PR content, press releases, corporate communications, publicity materials, and other messages can then be developed around a consistent communication strategy.",
  },
  {
    question: "What is reputation management in PR?",
    answer:
      "Reputation management is the process of monitoring, influencing, and responding to how a business or brand is perceived by its audiences and stakeholders. It can involve proactive communication, media relations, issue management, response strategies, and consistent messaging across relevant channels.",
  },
  {
    question: "Can PR support product launches and business events?",
    answer:
      "Yes. PR can support product launches, company announcements, conferences, events, and other important business activities by developing communication strategies, press materials, media outreach, event promotion, and supporting content. The approach depends on the event, target audience, and desired communication outcomes.",
  },
  {
    question: "Why choose Worexa Technologies for public relations services?",
    answer:
      "Worexa Technologies combines PR strategy, branding, content creation, communication, and digital marketing expertise to develop integrated public relations campaigns. Our approach focuses on strengthening brand communication, increasing relevant visibility, building credibility, and supporting measurable business and communication objectives.",
  },
];

const PublicRelations = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Public Relations Services in Bangalore | PR agency.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Discover premier Public Relations Services in Bangalore. Build credibility, manage corporate reputation, and secure top-tier media coverage for your business."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="public relations services in bangalore, digital public relations, what is digital pr, public relationship services in banashankari, public relationship in digital marketing"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Public Relations Services in Bangalore | PR agency."
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Discover premier Public Relations Services in Bangalore. Build credibility, manage corporate reputation, and secure top-tier media coverage for your business."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/public-relations"
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
          content="Public Relations Services in Bangalore | PR agency."
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Discover premier Public Relations Services in Bangalore. Build credibility, manage corporate reputation, and secure top-tier media coverage for your business."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/public-relations"
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
                "name": "Public Relations (PR) & Authority",
                "item": "https://worexatechnologies.com/services/public-relations"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* --- 2. INTRO SECTION --- */}
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
            {/* Breadcrumb Navigation - Sleek Dark Pill */}
            <nav aria-label="Breadcrumb" className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-400 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-orange-400 transition-colors"
              >
                <Home className="w-3.5 h-3.5 text-zinc-500 hover:text-orange-400" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              <Link
                to="/services"
                className="text-zinc-400 hover:text-orange-400 transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              <span className="text-orange-500 font-semibold truncate">
                Public Relations (PR) & Authority
              </span>
            </nav>

            {/* Main Headline - Dual Tone White & Orange */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">Public Relations & Brand Communication </span>
              <span className="text-[#f97316]">Services That Build Trust & Brand Visibility</span>
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
              <div className="h-1 w-24 bg-orange-600 rounded-full"></div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Build credibility, strengthen your reputation, and get your brand noticed with Worexa Technologies’ public relations and brand communication services. We help businesses build meaningful relationships with media, customers, industry audiences, and other key stakeholders through strategic communication.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines PR strategy, media relations, press releases, brand storytelling, content creation, media outreach, and reputation management to create positive visibility and strengthen your brand presence. Whether you want to launch a new product, increase brand awareness, gain media coverage, establish industry authority, or manage your brand reputation, we create PR strategies aligned with your business objectives.
            </p>

            <p className="text-xl md:text-2xl font-black text-orange-600">
              Build Trust. Earn Attention. Strengthen Your Reputation.
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
              <ServiceContactForm serviceName="Public Relations (PR) & Authority" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our Public Relations Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand & Media Research",
                desc: "We understand your brand, industry, target audience, competitors, and relevant media landscape to identify the right PR opportunities."
              },
              {
                title: "PR Strategy & Story Development",
                desc: "We develop compelling brand stories, key messages, and PR campaigns that communicate your value and create meaningful reasons for audiences to pay attention."
              },
              {
                title: "Media Relations & Outreach",
                desc: "We identify relevant media opportunities and support outreach to journalists, publications, influencers, and industry platforms to increase your brand visibility."
              },
              {
                title: "Content & Press Communication",
                desc: "We create press releases, media pitches, thought-leadership content, brand stories, and corporate communications designed for clear and effective communication."
              },
              {
                title: "Reputation & Performance Management",
                desc: "We monitor brand visibility and media response, evaluate PR outcomes, and continuously refine communication strategies to build long-term credibility and positive brand perception."
              }
            ].map((step, i) => (
              <div
                key={step.title}
                className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-600 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-extrabold text-black mb-4">
                  <span className="text-orange-600 mr-2">0{i + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE ADS SERVICES SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold uppercase tracking-[4px]">

            </span>

            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our PR Services Include:</h2>
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
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Product & e-commerce photography
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Model, fashion & lifestyle shoots

                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Corporate & professional shoots
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  04
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Catalogue & campaign shoots
                  </h3>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  05
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Creative concept & brand storytelling shoots
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Event & promotional shoots
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  07
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Studio & outdoor photoshoots
                  </h3>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  08
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Photo editing & high-end retouching
                  </h3>
                </div>
              </div>



            </div>

          </div>
        </div>
      </section>

      {/* --- 4. RESULTS SECTION --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto bg-orange-50 rounded-[2.5rem] p-8 md:p-14 border border-orange-100 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/40 blur-[100px] rounded-full group-hover:bg-orange-300/40 transition-colors duration-700"></div>

            <div className="flex flex-col lg:flex-row gap-10 items-center">

              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  Visuals That <span className="text-orange-600 italic">Drive Engagement</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Public relations should do more than generate visibility -it should shape perception and build trust. As a performance-driven marketing and advertising company in Bangalore, we create PR strategies that secure meaningful media coverage and position your brand as an industry authority.
                  Our approach focuses on consistent visibility, strong messaging, and long-term reputation building to help your business stand out and stay relevant.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our strategies help you:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  {[
                    "Higher brand credibility and trust",
                    "Increased media visibility and coverage",
                    "Stronger brand reputation in the market",
                    "Better audience perception and authority",
                    "Wider reach through media and influencer exposure"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
                      {item}
                    </li>
                  ))}
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
              PR Services?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              As an experienced marketing and advertising company in Bangalore, we ensure your PR campaigns are strategic, targeted, and result-oriented.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Strong media network and outreach strategy",
              "Professionally crafted communication and storytelling",
              "Industry-specific PR strategies",
              "Focus on credibility, not just visibility"
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

      {/* --- 6. EXPECTATION --- */}
      <section className="py-24 bg-orange-600">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-14 uppercase">
            What You Can Expect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          {[
            "Increased brand credibility and trust",
            "Higher media visibility and coverage",
            "Stronger brand reputation",
            "Better audience perception",
            "Long-term brand authority"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-2xl shadow flex items-center gap-4"
            >
              {/* ORANGE DOT */}
              <div className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0"></div>

              {/* TEXT */}
              <p className="text-lg font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

            {/* --- 7. FAQ SECTION --- */}
      <section className="py-20 sm:py-28 relative bg-[#f1f5f9] border-t border-slate-200 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-orange-400/5 via-amber-300/5 to-transparent blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <HelpCircle size={14} className="text-orange-500" />
              <span>Questions &amp; Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Public Relations (PR) Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Everything you need to know. Can&#39;t find what you&#39;re looking for?{' '}
              <Link to="/contact" className="text-orange-600 font-bold hover:underline">Talk to our team.</Link>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
            <div className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const index = idx;
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className={`rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20' : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'}`}>
                    <button type="button" onClick={() => setActiveIndex(isOpen ? null : index)} className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer" aria-expanded={isOpen}>
                      <div className="flex items-start gap-3.5">
                        <span className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>{String(index + 1).padStart(2, '0')}</span>
                        <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'}`}>{faq.question}</span>
                      </div>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-orange-500 text-white rotate-180 shadow-sm' : 'bg-slate-100 text-slate-500'}`}><ChevronDown size={16} /></div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 sm:pl-14 border-t border-slate-100">{faq.answer}</div>
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
                  <div key={index} className={`rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-white border-orange-400 shadow-md shadow-orange-500/5 ring-1 ring-orange-400/20' : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'}`}>
                    <button type="button" onClick={() => setActiveIndex(isOpen ? null : index)} className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer" aria-expanded={isOpen}>
                      <div className="flex items-start gap-3.5">
                        <span className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-md mt-0.5 shrink-0 transition-colors ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'}`}>{String(index + 1).padStart(2, '0')}</span>
                        <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-900 hover:text-orange-600'}`}>{faq.question}</span>
                      </div>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-orange-500 text-white rotate-180 shadow-sm' : 'bg-slate-100 text-slate-500'}`}><ChevronDown size={16} /></div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 sm:pl-14 border-t border-slate-100">{faq.answer}</div>
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

export default PublicRelations;
