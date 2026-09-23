import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are UI/UX design and conversion rate optimization services?",
    answer:
      "UI/UX design focuses on creating digital interfaces that are visually clear, intuitive, accessible, and easy to use, while conversion rate optimization (CRO) focuses on improving a website or landing page so more visitors complete a desired action. Together, UI/UX and CRO can improve usability, reduce friction, and support better conversion performance.",
  },
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) design focuses on the visual and interactive elements of a digital product, such as layouts, colors, typography, buttons, and other interface components. UX (User Experience) design focuses on the overall experience, including usability, navigation, user journeys, information structure, and how easily users can accomplish their goals.",
  },
  {
    question: "What UI/UX design services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides UI/UX design services that can include website UI design, mobile app UI/UX design, user journey mapping, wireframing, prototyping, landing page design, usability optimization, responsive interface design, and user experience improvements. Designs are developed around the brand, target users, and business objectives.",
  },
  {
    question: "What is conversion rate optimization (CRO)?",
    answer:
      "Conversion rate optimization is the process of improving a website, landing page, or digital experience to increase the percentage of visitors who complete a desired action. These actions can include submitting a form, making a purchase, booking a service, requesting a quote, signing up, or contacting a business.",
  },
  {
    question: "How can CRO improve my website conversion rate?",
    answer:
      "CRO can improve conversion rates by identifying and reducing barriers that prevent visitors from taking desired actions. Optimization may involve improving page layouts, messaging, navigation, calls to action, forms, trust signals, page speed, user journeys, and other elements that influence user behavior.",
  },
  {
    question: "How can Worexa Technologies increase my website's conversion rate?",
    answer:
      "Worexa Technologies uses user behavior analysis, UX evaluation, landing page optimization, conversion-focused design, and CRO techniques to identify potential friction points. We can then optimize elements such as navigation, page structure, calls to action, forms, content presentation, and user flows based on available data and business objectives.",
  },
  {
    question: "Why is UI/UX design important for website conversions?",
    answer:
      "Good UI/UX design makes it easier for visitors to understand a website, find relevant information, navigate between pages, and complete important actions. By reducing unnecessary friction and creating a clearer user journey, effective UX can support engagement and improve opportunities for conversion.",
  },
  {
    question: "What is a user journey in UX design?",
    answer:
      "A user journey describes the steps a person takes when interacting with a website, app, or digital product to achieve a specific goal. Mapping the user journey helps identify user needs, friction points, confusing interactions, and opportunities to create a simpler and more effective experience.",
  },
  {
    question: "How do you identify conversion problems on a website?",
    answer:
      "Conversion problems can be identified through methods such as website and UX audits, user behavior analysis, conversion data, analytics, user feedback, usability testing, landing page analysis, and examination of user journeys. The findings can help identify areas where visitors may encounter confusion, friction, or unnecessary steps.",
  },
  {
    question: "Can UI/UX design improve SEO?",
    answer:
      "Yes. Good UX can support SEO by improving factors such as mobile usability, navigation, page experience, accessibility, content discoverability, and user engagement. However, UI/UX design is only one part of SEO, and search visibility also depends on technical SEO, content, relevance, authority, and other ranking factors.",
  },
];

const Uiux = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Top UI Design Companies in Bangalore | UI/UX CRO Expert.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Work with the Top UI Design Companies in Bangalore to transform your app or website. We deliver exceptional, modern user experiences that drive high ROI."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="top ui design companies in bangalore, top ui/ux design companies in banashankari, ui design company in bangalore, what is ui/ux design, ui/ux design companies near me"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Top UI Design Companies in Bangalore | UI/UX CRO Expert."
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Work with the Top UI Design Companies in Bangalore to transform your app or website. We deliver exceptional, modern user experiences that drive high ROI."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/ui-ux-and-cro"
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
          content="Top UI Design Companies in Bangalore | UI/UX CRO Expert."
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Work with the Top UI Design Companies in Bangalore to transform your app or website. We deliver exceptional, modern user experiences that drive high ROI."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/ui-ux-and-cro"
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
                "name": "UI/UX Design & Conversion Rate (CRO)",
                "item": "https://worexatechnologies.com/services/ui-ux-design"
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
              <span className="text-white">UI/UX Design & Conversion Optimization </span>
              <span className="text-[#f97316]">Services That Turn Visitors Into Customers</span>
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
              Create seamless digital experiences that are easy to use, visually engaging, and designed to convert with Worexa Technologies’ UI/UX and CRO services. We combine user research, intuitive design, usability, and conversion-focused strategies to help businesses improve customer experience and turn more website visitors into leads and customers.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines user research, information architecture, wireframing, responsive UI design, user journey optimization, conversion analysis, A/B testing, and continuous improvement to create digital experiences aligned with both user needs and business goals. Whether you want to improve your website experience, reduce bounce rates, increase engagement, generate more leads, or improve conversions, we create user-focused solutions built for measurable growth.
            </p>
            <p className="text-xl md:text-2xl font-black text-orange-600">
              Better Experience. Better Engagement. Better Conversions.
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
              <ServiceContactForm serviceName="UI/UX Design & Conversion Rate (CRO)" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our UI/UX & CRO Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User & Business Research",
                desc: "We understand your target users, business objectives, competitors, pain points, and customer journey to identify opportunities for better experiences and conversions."
              },
              {
                title: "UX Strategy & User Journey",
                desc: "We structure intuitive navigation, information architecture, and user flows to make it easier for visitors to find information and take action."
              },
              {
                title: "UI Design & Responsive Experience",
                desc: "We create clean, modern, and responsive interfaces that deliver a consistent experience across desktop, tablet, and mobile devices."
              },
              {
                title: "Conversion Analysis & Optimization",
                desc: "We analyze user behaviour, landing pages, forms, CTAs, and conversion paths to identify friction points and opportunities to improve conversion rates."
              },
              {
                title: "Testing, Optimization & Growth",
                desc: "We use A/B testing, performance data, and user insights to continuously refine designs and experiences, helping maximize engagement, leads, and conversions."
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

            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our UI/UX Design Services Include:
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
                    User research & experience strategy
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Wireframing & prototyping
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    UI design (web & mobile interfaces)
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
                    UX optimization & user journey mapping
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  05
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Landing page UI/UX design
                  </h3>

                </div>
              </div>

              <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
                  06
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Conversion-focused design (CRO)
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
                    Responsive & mobile-first design
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
          <div className="max-w-10xl mx-auto bg-orange-50 rounded-[2.5rem] p-8 md:p-14 border border-orange-100 relative overflow-hidden group shadow-2xl">

            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/40 blur-[100px] rounded-full group-hover:bg-orange-300/40 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                  Turn Visitors <br />
                  <span className="text-orange-600 italic">Into Customers</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Driving traffic is only half the job - converting that traffic is what matters most.
                  As a results-focused marketing and advertising company in Bangalore we ensure your website is optimized to deliver maximum value from every visitor.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our CRO strategies help you:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Increase conversion rates</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Reduce bounce rates</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Improve user engagement</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Maximize ROI from existing traffic</li>
                </ul>
                <p className="mt-6 pt-6 border-t border-orange-100 text-sm text-slate-500 font-medium italic">
                  Every improvement is designed to enhance user experience while driving real business outcomes.
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
              UI/UX & CRO?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Choosing the right partner can significantly impact your website performance. Even small changes can lead to major improvements in conversions.
              As an experienced marketing and advertising company in Bangalore, we focus on continuous optimization and data-driven decisions to turn your website into a high-performing asset.

            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Data-driven optimization strategies",
              "User-focused design improvements",
              "Continuous testing and refinement",
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
            Our UI/UX design & CRO solutions are designed to deliver measurable business impact:
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              "Higher conversion rates and ROI",
              "Better user experience and engagement",
              "Reduced drop-offs and bounce rates",
              "Clear, intuitive interface design",
              "Stronger customer trust and retention"
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
            Your interface becomes more than just visually appealing - it becomes an optimized conversion funnel.
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About UI/UX Design & CRO Services
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

export default Uiux;
