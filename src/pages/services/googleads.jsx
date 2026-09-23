import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, MousePointer2, Settings2, LineChart, FastForward, PieChart, Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are Google Ads and performance marketing?",
    answer:
      "Google Ads is a paid advertising platform that allows businesses to promote their products or services across Google Search, Display, Shopping, YouTube, and other Google properties. Performance marketing is a results-focused approach to digital advertising that measures campaigns using outcomes such as leads, sales, conversions, cost per acquisition, and return on ad spend.",
  },
  {
    question: "How can Google Ads help my business?",
    answer:
      "Google Ads can help your business reach potential customers when they are actively searching for relevant products or services. A well-managed Google Ads campaign can increase targeted website traffic, generate leads, drive sales, and provide measurable data that can be used to improve advertising performance.",
  },
  {
    question: "What Google Ads services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides Google Ads services that can include Search Ads, Display Ads, Shopping Ads, remarketing, keyword research, campaign setup, PPC management, conversion tracking, landing page optimization, bid and budget management, and ongoing campaign optimization.",
  },
  {
    question: "Can Google Ads generate qualified leads?",
    answer:
      "Yes, Google Ads can generate qualified leads by targeting people who are actively searching for products or services related to your business. Worexa Technologies focuses on relevant keywords, audience targeting, compelling ad messaging, conversion tracking, and campaign optimization to help attract users with stronger purchase or enquiry intent.",
  },
  {
    question: "How much should I spend on Google Ads?",
    answer:
      "The right Google Ads budget depends on your industry, competition, target locations, keywords, customer value, campaign objectives, and expected cost per lead or sale. Worexa Technologies can help determine a suitable advertising budget based on your business goals and available resources rather than applying the same budget to every business.",
  },
  {
    question: "How long does it take to see results from Google Ads?",
    answer:
      "Google Ads can begin generating impressions, clicks, and potentially leads shortly after campaigns become active, but meaningful performance evaluation requires sufficient conversion data. The time needed to optimize a campaign depends on factors such as budget, competition, conversion volume, targeting, offer, landing page quality, and campaign objectives.",
  },
  {
    question: "What is the difference between Google Ads and SEO?",
    answer:
      "Google Ads provides paid visibility in search results, while SEO focuses on improving a website's organic visibility. Google Ads can generate paid traffic relatively quickly, whereas SEO is generally a longer-term strategy for building organic search visibility. Businesses can use both channels together to support short-term and long-term growth.",
  },
  {
    question: "Does Worexa Technologies provide Google Ads remarketing?",
    answer:
      "Yes, remarketing can be included in a Google Ads strategy when appropriate. Remarketing allows businesses to reach eligible users who have previously interacted with their website or digital presence, helping keep the brand visible to potential customers as they continue their buying journey.",
  },
  {
    question: "How does Worexa Technologies optimize Google Ads campaigns?",
    answer:
      "Worexa Technologies uses campaign data to identify opportunities for improvement and optimize factors such as keywords, search terms, bids, audiences, advertisements, budgets, landing pages, and conversion performance. Ongoing optimization helps campaigns adapt to performance data and changing market conditions.",
  },
  {
    question: "How do you measure Google Ads campaign performance?",
    answer:
      "Google Ads performance can be measured using metrics such as impressions, clicks, click-through rate, conversions, conversion rate, cost per click, cost per lead, cost per acquisition, revenue, and return on ad spend. The most important metrics depend on whether the campaign is designed to generate leads, sales, traffic, or another business outcome.",
  },
  {
    question: "Can Google Ads work for small businesses?",
    answer:
      "Yes, Google Ads can be effective for small businesses when campaigns are focused on relevant audiences, locations, keywords, and business objectives. A smaller business can begin with a controlled budget and prioritize high-intent searches before expanding campaigns based on performance data.",
  },
  {
    question: "Why choose Worexa Technologies for Google Ads and performance marketing?",
    answer:
      "Worexa Technologies combines audience targeting, campaign strategy, conversion tracking, analytics, and continuous optimization to build performance-focused advertising campaigns. Our approach is designed to focus on measurable business outcomes such as relevant traffic, qualified leads, conversions, and advertising efficiency.",
  },
];

const GoogleAds = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const approach = [
    { title: "Audience Targeting", desc: "Identifying high-intent keywords and precise audience segments to reach the right people at the right time.", icon: <Target className="w-6 h-6" /> },
    { title: "High-Converting Copy", desc: "Creating compelling ad copy that captures attention, increases CTR, and drives meaningful conversions.", icon: <MousePointer2 className="w-6 h-6" /> },
    { title: "Campaign Setup", desc: "From Search to Display and Remarketing, we build optimized structures for peak performance.", icon: <Settings2 className="w-6 h-6" /> },
    { title: "Conversion Tracking", desc: "Tracking every click and lead to measure performance and refine strategies for better ROI.", icon: <LineChart className="w-6 h-6" /> },
    { title: "Testing & Scaling", desc: "Running A/B tests and analyzing data to scale campaigns that deliver the best revenue growth.", icon: <FastForward className="w-6 h-6" /> },
    { title: "ROI Reporting", desc: "Transparent, data-driven insights focused on Return on Ad Spend (ROAS) and business impact.", icon: <PieChart className="w-6 h-6" /> }
  ];

  return (
    <div className="w-full bg-white selection:bg-orange-100 selection:text-orange-600">
      <Helmet>
        <title id="metaTitle">Best Google Ads Management Company in Bangalore | PPC Experts.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Looking for the best Google Ads management company in Bangalore. Maximize ROI, generate quality Leads, and grow your business with expert PPC and Performance Marketing services."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="best google ads management company in bangalore, best google ads management agency in bangalore, google ads management service company in bangalore, ads management service company, meta ads management agency in banashankari"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Best Google Ads Management Company in Bangalore | PPC Experts."
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Looking for the best Google Ads management company in Bangalore. Maximize ROI, generate quality Leads, and grow your business with expert PPC and Performance Marketing services."
        />
        <meta id="ogUrl" property="og:url" content="https://worexatechnologies.com/services/google-ads" />
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
          content="Best Google Ads Management Company in Bangalore | PPC Experts."
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Looking for the best Google Ads management company in Bangalore. Maximize ROI, generate quality Leads, and grow your business with expert PPC and Performance Marketing services."
        />
        <meta id="author" name="author" content="Akshay" />
        <link id="canonical" rel="canonical" href="https://worexatechnologies.com/services/google-ads" />
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
                "name": "Google Ads & Performance Marketing",
                "item": "https://worexatechnologies.com/services/google-ads"
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
                Google Ads & Performance Marketing
              </span>
            </nav>

            {/* Main Headline - Dual Tone White & Orange */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">Google Ads & Performance Marketing </span>
              <span className="text-[#f97316]">Services That Drive Leads, Sales & ROI</span>
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
              Turn your advertising budget into measurable business growth with Worexa Technologies’ Google Ads and performance marketing services. We create data-driven campaigns that connect your business with the right audience, generate qualified leads, increase conversions, and improve ROI.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines keyword research, audience targeting, compelling ad copy, campaign optimization, conversion tracking, analytics, and continuous testing to ensure every campaign is built for performance. Whether your goal is lead generation, online sales, customer acquisition, or brand growth, we help you reach high-intent customers across Google and other digital advertising platforms.
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
              <ServiceContactForm serviceName="Google Ads & Performance Marketing" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Google Ads & Performance Marketing Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Keyword & Audience Targeting",
                desc: "We identify high-intent keywords and precisely target your ideal audience to ensure your ads reach the right people at the right time."
              },
              {
                title: "High-Converting Ad Copy",
                desc: "Our team creates compelling ad copy that captures attention, improves click-through rates, and encourages users to take action."
              },
              {
                title: "Campaign Setup & Optimization",
                desc: "From Search and Performance Max to Display and remarketing campaigns, we set up and continuously optimize every aspect of your campaigns for better performance."
              },
              {
                title: "Conversion Tracking & Analytics",
                desc: "We track clicks, leads, sales, and conversions to measure campaign performance and make data-driven improvements."
              },
              {
                title: "Continuous Testing & Scaling",
                desc: "We test keywords, audiences, ad copies, and strategies to identify what works best and scale high-performing campaigns for consistent growth and improved ROI."
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
              Google Ads Solutions
            </span>

            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our Google Ads Services Include
            </h2>
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
                    Search, Display & YouTube Ad Campaigns
                  </h3>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    High-Converting Ad Copy Creation
                  </h3>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Audience Targeting & Remarketing
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
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Conversion Tracking Setup
                  </h3>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  05
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Bid Management & Budget Optimization
                  </h3>
                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    A/B Testing & Performance Improvement
                  </h3>
                </div>
              </div>

            </div>

          </div>

          {/* CENTERED 7TH CARD */}
          <div className="flex justify-center mt-8">
            <div className="w-full lg:w-[48%]">
              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  07
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Detailed Reporting & Insights
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      {/* --- 4. RESULTS SECTION --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto bg-orange-50 rounded-[2.5rem] p-8 md:p-14 border border-orange-100 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/40 blur-[100px] rounded-full group-hover:bg-orange-300/40 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  Performance That <br />
                  <span className="text-orange-600 italic">Drives Revenue</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Paid advertising should do more than generate traffic - it should generate revenue.
                  As a performance-focused marketing and advertising company in Bangalore we build systems that consistently deliver high-quality leads and scalable results.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-4">
                  Our approach helps you achieve:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Higher Conversion Rates</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Lower Cost Per Lead</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Better Return on Ad Spend (ROAS)</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span> Scalable campaign performance</li>
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
              Google Ads?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Choosing the right partner for paid advertising can make a significant difference in your results. Poorly managed campaigns waste budget, while a well-optimized strategy can drive exponential growth.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Data-driven campaign strategies",
              "Focus on ROI, not just clicks",
              "Transparent reporting and insights",
              "Continuous optimization for better results"
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
            Our Google Ads strategies are designed to deliver measurable outcomes that directly impact your business:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Increased lead generation",
              "Better quality traffic",
              "Higher conversion rates",
              "Improved return on investment",
              "Scalable growth opportunities"
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
              <span>Questions &amp; Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Google Ads & Performance Marketing Services
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

export default GoogleAds;
