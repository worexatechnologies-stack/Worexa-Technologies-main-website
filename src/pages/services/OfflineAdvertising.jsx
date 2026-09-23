import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is offline advertising?",
    answer:
      "Offline advertising is the promotion of a business, product, or service through traditional marketing channels that do not rely primarily on digital platforms. Common examples include print advertisements, brochures, flyers, posters, banners, billboards, signage, promotional materials, direct marketing, and event-based advertising.",
  },
  {
    question: "Why is offline advertising important for businesses?",
    answer:
      "Offline advertising can help businesses reach specific audiences in physical locations, increase brand awareness, and create additional touchpoints with potential customers. It can be particularly useful for businesses targeting local communities, events, retail locations, or audiences that can be reached effectively through physical media.",
  },
  {
    question: "What offline advertising services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides offline advertising services that can include print advertising, brochure design, flyer design, posters, banners, promotional materials, outdoor advertising, event marketing, and other physical advertising solutions based on your campaign objectives and target audience.",
  },
  {
    question: "What are the different types of offline advertising?",
    answer:
      "Common types of offline advertising include newspapers and magazines, brochures, flyers, posters, banners, billboards, outdoor signage, direct mail, promotional materials, event advertising, and local campaigns. The most suitable format depends on the target audience, location, campaign objective, and available budget.",
  },
  {
    question: "Can offline advertising help attract local customers?",
    answer:
      "Yes. Offline advertising can help businesses reach potential customers in specific geographic areas through physical marketing materials, outdoor advertising, local promotions, events, and other location-focused campaigns. Targeting the right locations and audience is important for making a local offline campaign relevant.",
  },
  {
    question: "Is offline advertising still effective in the digital age?",
    answer:
      "Yes. Offline advertising can still be effective when it is targeted, creatively designed, and aligned with a clear marketing objective. Physical advertising can complement digital channels by increasing brand exposure and providing additional opportunities for customers to interact with a business.",
  },
  {
    question: "Can offline advertising and digital marketing work together?",
    answer:
      "Yes. Offline advertising and digital marketing can work together as part of an integrated marketing strategy. For example, a printed advertisement, poster, or banner can direct people to a website, landing page, social media profile, QR code, or promotional offer, allowing offline campaigns to connect with digital channels.",
  },
  {
    question: "How can Worexa Technologies plan an offline advertising campaign?",
    answer:
      "Worexa Technologies plans offline advertising campaigns by considering the business objectives, target audience, geographic area, campaign message, advertising format, distribution or placement requirements, and available budget. The campaign is then structured around the offline channels most relevant to the intended audience.",
  },
  {
    question: "How much does offline advertising cost?",
    answer:
      "The cost of offline advertising depends on factors such as the advertising format, design requirements, printing quantity, material quality, distribution, location, media placement, campaign duration, and production requirements. A customized campaign can be planned according to the business's objectives and available budget.",
  },
  {
    question: "How do you measure the effectiveness of offline advertising?",
    answer:
      "Offline advertising can be measured using methods such as promotional codes, QR codes, dedicated landing pages, unique phone numbers, coupon redemptions, enquiries, event registrations, customer surveys, and changes in sales or leads during the campaign. Measurement methods should be selected according to the campaign's specific objectives.",
  },
];

const OfflineAdvertising = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Explore the Top Offline Advertising Companies in Bangalore</title>
        <meta
          name="description"
          id="metaDescription"
          content="Partner with the Top Offline Advertising Companies in Bangalore. We deliver high-impact billboard, print, and transit media campaigns that scale your brand."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="top offline advertising companies in bangalore, offline advertising company in banashankari, what is offline advertisinng in marketing, offline advertising company near me, offline advertising agencies near me"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Explore the Top Offline Advertising Companies in Bangalore"
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Partner with the Top Offline Advertising Companies in Bangalore. We deliver high-impact billboard, print, and transit media campaigns that scale your brand."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/offline-advertising"
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
          content="Explore the Top Offline Advertising Companies in Bangalore"
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Partner with the Top Offline Advertising Companies in Bangalore. We deliver high-impact billboard, print, and transit media campaigns that scale your brand."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/offline-advertising"
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
                "name": "Offline Advertising & Hoardings",
                "item": "https://worexatechnologies.com/services/offline-advertising"
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

            {/* Main Headline - Dual Tone White & Orange */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">Offline Advertising & Local Marketing </span>
              <span className="text-[#f97316]">Services That Grow Your Local Presence</span>
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
              Reach customers where they live, work, and shop with Worexa Technologies’ offline advertising and local marketing services. We help businesses build stronger local visibility through strategically planned advertising campaigns that connect your brand with the right audience in the right locations.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines local market research, audience targeting, outdoor advertising, print promotions, event marketing, location-based campaigns, and performance measurement to create impactful offline marketing strategies. Whether you want to increase local brand awareness, attract walk-in customers, promote a new location, or generate leads, we create campaigns tailored to your business objectives and target market.
            </p>

            <p className="text-xl md:text-2xl font-black text-orange-600">
              Right Location. Right Audience. Stronger Local Presence.
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
              <ServiceContactForm serviceName="Offline Advertising & Hoardings" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our Offline Advertising & Local Marketing Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Market & Audience Research",
                desc: "We analyze your target locations, customer demographics, local competitors, buying behaviour, and market opportunities to develop an effective local marketing strategy."
              },
              {
                title: "Campaign Strategy & Planning",
                desc: "We select the right advertising channels, locations, messaging, and campaign formats based on your business goals and target audience."
              },
              {
                title: "Creative & Local Advertising",
                desc: "We create impactful advertising materials for billboards, banners, flyers, brochures, posters, print media, retail promotions, and local campaigns."
              },
              {
                title: "Location-Based Marketing",
                desc: "We focus your campaigns on relevant geographic areas to increase local visibility and connect your brand with potential customers near your business."
              },
              {
                title: "Campaign Tracking & Optimization",
                desc: "We measure campaign response through enquiries, calls, footfall, QR codes, offers, and other relevant metrics to identify what works and optimize future campaigns."
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

            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Offline Advertising Services</h2>
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
                    Branding & Print Materials
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Outdoor Advertising
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Events & Promotions

                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  04
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Direct Marketing
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
                    Promotional Materials (Branding Giveaways)
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Retail & In-Store Marketing
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  07
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Traditional Media Advertising
                  </h3>
                </div>
              </div>


              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  08
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Transit & Mobile Advertising
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
                  Offline Marketing That <span className="text-orange-600 italic">Delivers Impact</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Offline advertising is not just about reach - it’s about recall and trust.
                  As a performance-driven marketing and advertising company in Bangalore we ensure your offline campaigns
                  are strategically aligned to support your overall marketing goals.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our strategies help you:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  {[
                    "Increase local brand awareness",
                    "Build trust with your audience",
                    "Reach customers beyond digital platforms",
                    "Generate high-quality local leads"
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
              Offline Advertising?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Offline marketing requires planning, precision, and local understanding.
              As an experienced marketing and advertising company in Bangalore, we ensure your campaigns are well-targeted, professionally executed and aligned with your growth strategy.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Strategic location-based targeting",
              "Creative and impactful campaign designs",
              "Seamless execution and distribution",
              "Integrated online + offline strategy"
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
            "Strong local brand visibility",
            "Increased customer reach",
            "Better brand recall",
            "More walk-ins and inquiries",
            "Integrated marketing impact"
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Offline Advertising Services
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

export default OfflineAdvertising;
