import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is social media marketing?",
    answer:
      "Social media marketing is the use of social media platforms to promote a business, build brand awareness, engage with customers, and generate website traffic, leads, or sales. It can include strategy, content creation, creative design, publishing, community management, paid campaigns, and performance analysis.",
  },
  {
    question: "How can social media marketing benefit my business?",
    answer:
      "Social media marketing can help your business increase brand awareness, reach relevant audiences, build customer relationships, generate website traffic, increase engagement, and support lead generation and sales. The results depend on your target audience, industry, content strategy, consistency, and marketing objectives.",
  },
  {
    question: "How can Worexa Technologies improve my social media presence?",
    answer:
      "Worexa Technologies develops customized social media strategies based on your business goals, target audience, industry, and chosen platforms. Our services can include social media strategy, content creation, creative design, copywriting, content publishing, audience engagement, campaign management, paid social advertising, and performance analysis.",
  },
  {
    question: "Which social media platforms are best for my business?",
    answer:
      "The best social media platforms depend on your target audience, industry, business goals, content format, and available resources. Worexa Technologies identifies where your potential customers are most active and develops a platform-specific strategy rather than using the same approach across every social network.",
  },
  {
    question: "What social media marketing services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides social media marketing services that can include strategy development, content planning, social media posts, graphic and creative design, copywriting, video content, publishing, community engagement, paid social media campaigns, and performance reporting.",
  },
  {
    question: "How long does social media marketing take to show results?",
    answer:
      "Social media marketing can generate engagement and visibility relatively quickly, but consistent audience growth, brand recognition, and lead generation usually require ongoing effort. The timeline depends on factors such as your industry, audience, content quality, posting consistency, platform selection, campaign objectives, and advertising budget.",
  },
  {
    question: "Can social media marketing generate leads for my business?",
    answer:
      "Yes, social media marketing can generate leads by reaching relevant audiences and directing interested users toward your website, landing pages, contact forms, messages, or other conversion points. Worexa Technologies combines audience targeting, engaging content, campaign optimization, and performance analysis to support lead-generation objectives.",
  },
  {
    question: "Does Worexa Technologies provide paid social media advertising?",
    answer:
      "Yes, Worexa Technologies can incorporate paid social media advertising into a social media marketing strategy when it aligns with your business objectives. Paid campaigns can be used to increase reach, drive website traffic, generate leads, promote products or services, and reach specific audience segments.",
  },
  {
    question: "How does Worexa Technologies create a social media strategy?",
    answer:
      "Worexa Technologies creates a social media strategy by analyzing your business objectives, target audience, industry, competitors, existing social presence, content opportunities, and selected platforms. We then develop a strategy covering content, creative direction, publishing, engagement, campaigns, and performance measurement.",
  },
  {
    question: "How do you measure social media marketing performance?",
    answer:
      "Social media performance can be measured using metrics such as reach, impressions, engagement, follower growth, website traffic, clicks, leads, conversions, and return on advertising spend where applicable. The most relevant metrics depend on the campaign objectives and overall business goals.",
  },
];

const SocialMedia = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Social Media Marketing Company in Bangalore | SMM experts.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Elevate your brand with a strategic social media marketing company in Bangalore. Drive growth through targeted paid advertising and expert audience engagement."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="social media marketing company in bangalore, social media marketing agency in bangalore, social media marketing agency in banashankari, social media marketing agency near me"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Social Media Marketing Company in Bangalore | SMM experts."
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Elevate your brand with a strategic social media marketing company in Bangalore. Drive growth through targeted paid advertising and expert audience engagement."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/social-media-marketing"
        />
        <meta
          id="ogSiteName"
          property="og:site_name"
          content="Worexa Technologies"
        />
        <meta
          id="ogImage"
          property="og:image"
          content="https://worexatechnologies.com/assets/logo-white-BbXdMiya.png"
        />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta
          id="twitterTitle"
          name="twitter:title"
          content="Social Media Marketing Company in Bangalore | SMM experts."
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Elevate your brand with a strategic social media marketing company in Bangalore. Drive growth through targeted paid advertising and expert audience engagement."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/social-media-marketing"
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
                "name": "Social Media & Community Building",
                "item": "https://worexatechnologies.com/services/social-media-marketing"
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
              <span className="text-white">Social Media Management & Paid Advertising </span>
              <span className="text-[#f97316]">Services That Grow Your Brand</span>
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
              Build your brand, engage your audience, and turn social media into a measurable growth channel with Worexa Technologies’ social media management and paid campaign services. We create strategic, creative, and data-driven campaigns that help businesses increase brand visibility, generate qualified leads, drive conversions, and improve ROI.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines audience research, content strategy, creative development, paid advertising, campaign optimization, conversion tracking, and performance analytics to ensure your social media efforts are focused on meaningful business outcomes. Whether your goal is brand awareness, audience engagement, lead generation, customer acquisition, or sales, we help you reach the right audience across platforms such as Instagram, Facebook, and LinkedIn.
            </p>
            <p className="text-xl md:text-2xl font-black text-orange-600">
              Right Audience. Right Content. Better Results.
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
              <ServiceContactForm serviceName="Social Media & Community Building" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Social Media Management & Paid Campaign Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Audience & Competitor Research",
                desc: "We identify your ideal audience, understand their interests and behaviour, and analyze competitors to create a focused social media strategy."
              },
              {
                title: "Content & Creative Strategy",
                desc: "We develop engaging social media content, creatives, reels, and ad copy designed to capture attention, strengthen your brand, and encourage action."
              },
              {
                title: "Campaign Setup & Targeting",
                desc: "From awareness and engagement to lead generation and remarketing campaigns, we set up precise targeting, budgets, placements, and campaign objectives for better performance."
              },
              {
                title: "Conversion Tracking & Analytics",
                desc: "We track engagement, clicks, leads, conversions, cost per lead, and other key metrics to measure campaign performance and make data-driven improvements."
              },
              {
                title: "Continuous Testing & Scaling",
                desc: "We test audiences, creatives, messaging, and campaign strategies to identify what performs best and scale successful campaigns for consistent growth and improved ROI."
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

      {/* SOCIAL MEDIA SERVICES SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold uppercase tracking-[4px]">
              Social Media Solutions
            </span>

            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Social Media Marketing Services Include:</h2>
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
                    Social Media Strategy & Planning
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Content Creation
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Social Media Account Management
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  04
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Paid Social Media Advertising
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
                    Audience Targeting & Growth Strategy
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Influencer Marketing & Collaborations
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  07
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Community Management & Engagement
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  08
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Social Media Analytics & Performance Tracking
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

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  Social Media That <br />
                  <span className="text-orange-600 italic">Drives Results</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Social media should do more than just increase visibility - it should drive real business outcomes.
                  As a performance-focused marketing and advertising company in Bangalore we turn your social platforms into powerful lead generation channels that contribute directly to your growth.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our Strategies Help You:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Increase brand awareness</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Build trust and credibility</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Generate high-quality leads</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Improve customer engagement</li>
                </ul>
                <p className="mt-6 pt-6 border-t border-orange-100 text-sm text-slate-500 font-medium italic">
                  Every campaign is designed with clear goals and measurable outcomes to ensure consistent business impact.
                </p>
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
              Social Media Marketing?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Choosing the right partner can transform how your brand performs online.
              As an experienced marketing and advertising company in Bangalore, we focus on building strategies that are both creative and result-driven - helping your brand stay visible, competitive, and relevant.

            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Data-driven social media strategies",
              "Customized campaigns tailored to your business",
              "Strong focus on engagement and conversions",
              "Transparent reporting and insights"
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
            Our social media strategies are designed to deliver consistent and scalable growth:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Stronger brand presence",
              "Higher audience engagement",
              "Increased lead generation",
              "Better conversion rates",
              "Improved return on investment"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                <p className="text-slate-800 font-semibold text-left">{item}</p>
              </div>
            ))}
          </div>

          <p className="max-w-2xl mx-auto text-white font-medium">
            Every campaign is optimized to ensure your social media efforts translate into real business results.
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Social Media Marketing Services
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

export default SocialMedia;
