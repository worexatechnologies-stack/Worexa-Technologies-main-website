import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is content marketing?",
    answer:
      "Content marketing is the process of creating and distributing valuable, relevant, and useful content to attract, educate, and engage a target audience. It can include blog posts, website content, landing pages, social media content, guides, promotional content, and other formats designed to support business and marketing goals.",
  },
  {
    question: "How can content marketing benefit my business?",
    answer:
      "Content marketing can help businesses increase brand awareness, build trust and authority, improve organic search visibility, attract relevant website traffic, generate leads, and nurture potential customers. Consistent, high-quality content can also help businesses answer customer questions and support the buying journey.",
  },
  {
    question: "What content marketing services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides content marketing services that can include content strategy, SEO content writing, blog writing, website content, landing page copywriting, social media content, promotional copy, and campaign content. Content can be developed based on your target audience, industry, search opportunities, and business objectives.",
  },
  {
    question: "How does content marketing help with SEO?",
    answer:
      "Content marketing supports SEO by creating useful, relevant content around topics and search queries that matter to your target audience. Well-optimized content can help search engines understand a website's subject matter, attract organic traffic, answer user questions, and build topical relevance over time.",
  },
  {
    question: "What is a content marketing strategy?",
    answer:
      "A content marketing strategy is a plan that defines what content a business should create, who it should target, which channels it should use, and what business goals the content should support. A strategy typically considers audience research, topics, keywords, content formats, distribution channels, publishing schedules, and performance measurement.",
  },
  {
    question: "How long does content marketing take to produce results?",
    answer:
      "Content marketing is generally a long-term strategy, and results depend on factors such as content quality, publishing consistency, competition, website authority, search demand, distribution, and business objectives. Some content can generate engagement or traffic relatively quickly, while organic search growth and brand authority usually require consistent effort over time.",
  },
  {
    question: "What is email marketing?",
    answer:
      "Email marketing is the use of email to communicate with prospects and existing customers through targeted and relevant messages. Businesses can use email marketing to nurture leads, promote products or services, share valuable content, increase customer engagement, drive website traffic, and encourage repeat purchases.",
  },
  {
    question: "How can email marketing benefit my business?",
    answer:
      "Email marketing can help businesses maintain relationships with prospects and customers, nurture leads, promote products or services, distribute content, increase customer engagement, and encourage repeat business. Because email allows businesses to communicate directly with subscribers, it can be an effective channel for ongoing customer communication.",
  },
  {
    question: "What email marketing services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides email marketing services that can include email marketing strategy, campaign planning, email copywriting, audience segmentation, targeting, lead nurturing, promotional campaigns, campaign execution, and performance analysis.",
  },
  {
    question: "How does email marketing help with lead nurturing?",
    answer:
      "Email marketing helps nurture leads by providing relevant information and communications at different stages of the customer journey. Businesses can use segmented email campaigns to educate prospects, address their needs, promote relevant offers, and encourage them to take the next step toward becoming customers.",
  },
];

const ContentMarketing = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Content Marketing Companies in Bangalore | Strategy Expert.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Discover leading content marketing companies in Bangalore. Elevate your brand's digital presence through tailored strategy, premium content, and higher ROI."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="content marketing companies in bangalore, content marketing company in bangalore, content marketing agency in bangalore, email marketing service agency in bangalore, email marketing service in bangalore"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Content Marketing Companies in Bangalore | Strategy Expert."
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Discover leading content marketing companies in Bangalore. Elevate your brand's digital presence through tailored strategy, premium content, and higher ROI."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/content-marketing"
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
          content="Content Marketing Companies in Bangalore | Strategy Expert."
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Discover leading content marketing companies in Bangalore. Elevate your brand's digital presence through tailored strategy, premium content, and higher ROI."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/content-marketing"
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
                "name": "Content Marketing & Email Automation",
                "item": "https://worexatechnologies.com/services/content-marketing"
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
                Content Marketing & Email Automation
              </span>
            </nav>

            {/* Main Headline - Dual Tone White & Orange */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">Content & Email Marketing </span>
              <span className="text-[#f97316]">Services That Build Engagement & Drive Conversions</span>
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
              Build meaningful customer relationships and drive consistent business growth with Worexa Technologies’ content and email marketing services. We create valuable, engaging, and conversion-focused content that helps businesses attract the right audience, build trust, nurture prospects, and turn customers into long-term brand advocates.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines content strategy, audience research, creative storytelling, email campaigns, personalized messaging, automation, and performance analytics to deliver content that supports your business goals. Whether your goal is brand awareness, lead nurturing, customer engagement, website traffic, or conversions, we create content and email campaigns designed to deliver measurable results.
            </p>
            <p className="text-xl md:text-2xl font-black text-orange-600">
              Right Content. Right Audience. Better Engagement.
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
              <ServiceContactForm serviceName="Content Marketing & Email Automation" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Content & Email Marketing Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Audience & Content Research",
                desc: "We understand your target audience, industry, competitors, and customer journey to develop relevant content and email strategies."
              },
              {
                title: "Content Strategy & Creation",
                desc: "Our team creates engaging blogs, social content, newsletters, email copy, and marketing content that communicates your brand message and drives action."
              },
              {
                title: "Email Campaign Setup & Personalization",
                desc: "We create targeted email campaigns with compelling subject lines, personalized messaging, clear CTAs, and audience segmentation to improve engagement and conversions."
              },
              {
                title: "Automation & Performance Tracking",
                desc: "We set up relevant email workflows and track opens, clicks, engagement, conversions, and other key metrics to measure campaign effectiveness."
              },
              {
                title: "Continuous Testing & Optimization",
                desc: "We test content, subject lines, messaging, CTAs, and audience segments to identify what performs best and continuously optimize campaigns for stronger engagement and ROI."
              }
            ].map((step, i) => (
              <div
                key={step.title}
                className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-600 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-extrabold text-black mb-4">
                  <span className="text-orange-600 mr-2">0{i + 1}.</span> {step.title}
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

            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Content Marketing Services Include:</h2>
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
                    Content strategy & planning
                  </h3>
                  <p className="text-gray-600">
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    SEO blog writing & articlesn
                  </h3>
                  <p className="text-gray-600">
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Website & landing page content
                  </h3>
                  <p className="text-gray-600">
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  04
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Social media content (posts, reels)
                  </h3>
                  <p className="text-gray-600">
                  </p>
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
                    Video content & creatives
                  </h3>
                  <p className="text-gray-600">
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Ad creatives & graphic design
                  </h3>
                  <p className="text-gray-600">
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  07
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Content calendar planning
                  </h3>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  08
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Content optimization (SEO & engagement)
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

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center text-left">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  Content That <br />
                  <span className="text-orange-600 italic">Drives Growth</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Content should do more than just inform - it should drive measurable business outcomes.
                  As a performance-focused marketing and advertising company in Bangalore we ensure every piece of content serves a clear purpose: attracting the right audience and guiding them through the buying journey.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our strategies help you:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Build brand authority and trust</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Attract high-quality organic traffic</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Nurture leads effectively</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Increase customer retention and lifetime value</li>
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
              Content & Email Marketing?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Choosing the right partner can transform how your brand communicates with its audience.
              As an experienced marketing and advertising company in Bangalore, we focus on building scalable systems that deliver long-term value, not just short-term engagement.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Data-driven content strategies",
              "Consistent and high-quality content creation",
              "Automated email systems for scalability",
              "Transparent performance tracking"
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

          <p className="text-lg text-white mb-16">
            Our content and email marketing strategies are designed to deliver sustainable growth:
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              "Stronger brand authority",
              "Better audience engagement",
              "Increased lead nurturing and conversions",
              "Higher customer retention rates",
              "Long-term business growth"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition"
              >
                <span className="w-2.5 h-2.5 bg-orange-600 rounded-full"></span>
                <p className="text-gray-800 font-medium text-left">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-white text-lg">
            Every strategy is built to ensure your content works as a powerful driver of business success.
          </p>

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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Content Marketing & Email Marketing Services
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

export default ContentMarketing;
