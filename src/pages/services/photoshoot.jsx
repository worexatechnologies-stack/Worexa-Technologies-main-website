import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are photography and creative production services?",
    answer:
      "Photography and creative production services help businesses create professional visual content for their brand, products, people, campaigns, and marketing activities. This content can be used across websites, social media, advertising, promotional materials, e-commerce platforms, and other marketing channels.",
  },
  {
    question: "Why is professional photography important for a business?",
    answer:
      "Professional photography helps businesses present their products, services, people, and brand in a visually consistent and credible way. High-quality images can strengthen brand presentation, improve marketing content, support customer engagement, and provide reusable visual assets for websites, social media, advertising, and promotional campaigns.",
  },
  {
    question: "What photography and creative production services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides photography and creative production services that can include product photography, corporate photography, brand photography, event photography, promotional photography, creative photography, marketing content production, and visual content creation. Services can be tailored to the brand, campaign, audience, and intended marketing channels.",
  },
  {
    question: "What types of business photography can Worexa Technologies create?",
    answer:
      "Worexa Technologies can create different types of commercial photography, including product photography, corporate portraits, team photography, workplace photography, brand lifestyle photography, event photography, promotional photography, and campaign-specific visual content. The photography style and production approach depend on the brand and intended use of the images.",
  },
  {
    question: "How can Worexa Technologies create visual content for my brand?",
    answer:
      "Worexa Technologies develops visual content by combining creative direction, photography, branding, storytelling, composition, and marketing objectives. The process focuses on creating imagery that communicates the brand's message while maintaining consistency across different marketing channels.",
  },
  {
    question: "Can Worexa Technologies create photography for social media?",
    answer:
      "Yes. Worexa Technologies can create branded photography and visual content for social media platforms. Content can include product images, lifestyle photography, campaign visuals, promotional images, behind-the-scenes content, corporate photography, and other assets designed around the brand's social media strategy.",
  },
  {
    question: "Can Worexa Technologies create photography for advertising campaigns?",
    answer:
      "Yes. Photography can be created specifically for digital and offline advertising campaigns. Advertising photography can be developed around the campaign concept, target audience, brand identity, messaging, advertising format, and intended placement.",
  },
  {
    question: "How does brand photography differ from product photography?",
    answer:
      "Brand photography focuses on visually communicating a company's identity, personality, people, lifestyle, and values, while product photography focuses primarily on presenting specific products clearly and attractively. Businesses can use both types of photography together to create a complete visual representation of their brand and offerings.",
  },
  {
    question: "How can professional photography improve my brand image?",
    answer:
      "Professional photography can improve brand presentation by providing consistent, high-quality visuals that reflect the desired positioning and personality of the business. Consistent photography across websites, social media, advertising, and marketing materials can also create a more recognizable visual identity.",
  },
  {
    question: "How long does a professional photoshoot take?",
    answer:
      "The duration of a photoshoot depends on factors such as the number of products or subjects, locations, concepts, setups, styling requirements, equipment, and the number of final images required. A simple product shoot may require less production time than a multi-location brand or advertising photoshoot.",
  },
  {
    question: "Why choose Worexa Technologies for photography and creative production?",
    answer:
      "Worexa Technologies combines professional photography, creative production, branding, content marketing, and digital marketing expertise to create purposeful visual content. Our approach focuses on producing photography and creative assets that are aligned with the brand, campaign objectives, target audience, and intended marketing channels.",
  },
];

const Photoshoot = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Discover the Photo Shoot Services in Digital Marketing</title>
        <meta
          name="description"
          id="metaDescription"
          content="Elevate your brand with expert photo shoot services in digital marketing. We capture high-quality, engaging visuals that boost your online conversions today."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="photo shoot service in digital marketing, what kind of photo shoot is available in worexa, top product and e-commerce photography in bangalore, corporate and professional shoots in banashankari, photo shoot services in banashankari"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Discover the Photo Shoot Services in Digital Marketing"
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Elevate your brand with expert photo shoot services in digital marketing. We capture high-quality, engaging visuals that boost your online conversions today."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/photoshoot"
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
          content="Discover the Photo Shoot Services in Digital Marketing"
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Elevate your brand with expert photo shoot services in digital marketing. We capture high-quality, engaging visuals that boost your online conversions today."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/photoshoot"
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
                "name": "Commercial Photoshoot & Production",
                "item": "https://worexatechnologies.com/services/photoshoot"
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
                Commercial Photoshoot & Production
              </span>
            </nav>

            {/* Main Headline - Dual Tone White & Orange */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">Photo Shoot & Creative Production </span>
              <span className="text-[#f97316]">Services for Powerful Brand Content</span>
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
              Bring your brand to life with Worexa Technologies’ photo shoot and creative production services. We create high-quality, engaging visual content that helps businesses showcase their products, services, people, and brand identity across digital and offline channels.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines creative planning, concept development, professional photography, video production, creative direction, editing, and platform-ready content to deliver visuals that capture attention and communicate your brand effectively. Whether you need product photography, brand photography, corporate shoots, social media content, promotional videos, or campaign creatives, we develop visual content tailored to your brand, audience, and marketing goals.
            </p>

            <p className="text-xl md:text-2xl font-black text-orange-600">
              Creative Vision. Powerful Visuals. Stronger Brand Impact.
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
              <ServiceContactForm serviceName="Commercial Photoshoot & Production" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">
              Our Photo Shoot & Creative Production Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Concept & Creative Planning",
                desc: "We understand your brand, campaign objectives, target audience, and content requirements to develop creative concepts that align with your marketing goals."
              },
              {
                title: "Pre-Production & Shoot Planning",
                desc: "From location and props to styling, shot lists, talent, and production requirements, we carefully plan every element before the shoot."
              },
              {
                title: "Professional Photo & Video Production",
                desc: "We create high-quality product, lifestyle, corporate, brand, and promotional photography and video content designed to capture attention and showcase your brand effectively."
              },
              {
                title: "Editing & Creative Enhancement",
                desc: "Our team enhances your visuals through professional editing, colour correction, retouching, video editing, motion graphics, and other creative treatments."
              },
              {
                title: "Platform-Ready Creative Delivery",
                desc: "We optimize and deliver creative assets in the right formats and dimensions for websites, social media, digital advertising, print, and marketing campaigns, helping your content perform across channels."
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

            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Photoshoot Services Include:</h2>
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
                  Great visuals don’t just look good - they perform.
                  As a performance-focused marketing and advertising company in Bangalore, we ensure your visual content helps you attract attention, increase engagement, and improve conversions.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our photoshoot services help you:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  {[
                    "Build a strong brand image",
                    "Increase social media engagement",
                    "Improve ad performance",
                    "Create high-quality marketing assets"
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
              Photoshoots?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
              Choosing the right creative partner can make a huge difference in how your brand is perceived.
              As an experienced marketing and advertising company in Bangalore, we combine creativity with strategy to deliver visuals that not only look great but also drive results.

            </p>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Professional and creative execution",
              "Brand-focused visual storytelling",
              "High-quality editing and delivery",
              "Content optimized for marketing use"
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

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "High-quality, professional visuals",
              "Stronger brand perception",
              "Better engagement across platforms",
              "Improved ad and campaign performance",
              "Consistent visual identity"
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Photography & Creative Production Services
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

export default Photoshoot;
