import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are branding and creative services?",
    answer:
      "Branding and creative services help businesses develop a recognizable brand identity and communicate consistently across their marketing channels. These services can include brand strategy, logo design, visual identity, brand messaging, marketing creatives, social media designs, advertising creatives, and brand guidelines.",
  },
  {
    question: "Why is branding important for a business?",
    answer:
      "Branding helps a business establish a recognizable identity, communicate its values, build customer trust, differentiate itself from competitors, and create a consistent experience across marketing channels. Strong branding can also help businesses develop a more memorable presence among their target audience.",
  },
  {
    question: "What branding and creative services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides branding and creative services that can include brand strategy, logo design, visual identity, brand guidelines, marketing creatives, social media designs, advertising creatives, creative direction, and other brand assets tailored to a business's objectives and target audience.",
  },
  {
    question: "What is brand identity?",
    answer:
      "Brand identity is the collection of visual and communication elements a business uses to represent itself to its audience. It can include the logo, colors, typography, imagery, visual style, brand voice, messaging, and other elements that create a consistent and recognizable brand presence.",
  },
  {
    question: "How can Worexa Technologies help create a strong brand identity?",
    answer:
      "Worexa Technologies develops brand identities by combining strategic planning, audience research, creative direction, design, and business objectives. The process focuses on creating a distinctive identity that reflects the brand's values and can be applied consistently across websites, social media, advertising, and other marketing materials.",
  },
  {
    question: "What is the difference between branding and creative design?",
    answer:
      "Branding defines how a business should be positioned, recognized, and perceived, while creative design focuses on visually communicating that brand across different channels. Branding establishes the strategic and visual foundation, while creative design applies that foundation to marketing materials and customer touchpoints.",
  },
  {
    question: "What is included in a brand identity package?",
    answer:
      "A brand identity package can include elements such as logo design, color palette, typography, visual guidelines, brand imagery, graphic elements, brand messaging, and brand usage guidelines. The exact deliverables depend on the business's requirements and the scope of the branding project.",
  },
  {
    question: "Does Worexa Technologies provide rebranding services?",
    answer:
      "Yes, Worexa Technologies provides rebranding services for businesses that want to refresh or reposition their existing brand. Rebranding can involve updating the visual identity, redesigning the logo, refining brand messaging, establishing a new creative direction, and creating updated brand guidelines.",
  },
  {
    question: "When should a business consider rebranding?",
    answer:
      "A business may consider rebranding when its current identity no longer reflects its positioning, target audience, products, services, or business direction. Rebranding can also be appropriate when a company is entering a new market, merging with another business, experiencing significant growth, or seeking to differentiate itself from competitors.",
  },
  {
    question: "Why are brand guidelines important?",
    answer:
      "Brand guidelines provide rules for using a brand's visual and communication elements consistently. They can define how logos, colors, typography, imagery, messaging, and other brand assets should be used across different marketing channels, helping maintain a consistent brand experience.",
  },
];

const Branding = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full">
      <Helmet>
        <title id="metaTitle">Top Branding Strategy Agency in Bangalore | Creative Strategy</title>
        <meta
          name="description"
          id="metaDescription"
          content="Partner with the Top Branding Strategy Agency in Bangalore. We build impactful brand identities, distinct positioning, and creative designs that drive growth."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="top branding stratergy agency in bangalore, what is branding strategy, what is branding strategy in marketing, brand strategy vs creative strategy, marketing creative strategy, brand strategy & creative direction"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Top Branding Strategy Agency in Bangalore | Creative Strategy"
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Partner with the Top Branding Strategy Agency in Bangalore. We build impactful brand identities, distinct positioning, and creative designs that drive growth."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/branding-and-creative-strategy"
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
          content="Top Branding Strategy Agency in Bangalore | Creative Strategy"
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Partner with the Top Branding Strategy Agency in Bangalore. We build impactful brand identities, distinct positioning, and creative designs that drive growth."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/branding-and-creative-strategy"
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
                "name": "Branding & Creative Strategy",
                "item": "https://worexatechnologies.com/services/branding-and-creative-strategy"
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
              <span className="text-white">Branding & Creative Design </span>
              <span className="text-[#f97316]">Services That Build Memorable Brands</span>
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
              Build a memorable brand with Worexa Technologies’ branding and creative design services. We help businesses create a distinctive visual identity that communicates their values, connects with the right audience, and builds recognition across digital and offline touchpoints.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Our approach combines brand strategy, market research, visual identity, creative design, brand messaging, and consistent communication to create a strong and recognizable brand presence. Whether you are launching a new brand, rebranding an existing business, or looking to strengthen your visual identity, we develop creative solutions aligned with your business goals and target audience.
            </p>
            <p className="text-xl md:text-2xl font-black text-orange-600">
              Strong Identity. Creative Impact. Lasting Recognition.
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
              <ServiceContactForm serviceName="Branding & Creative Strategy" />
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* --- 3. APPROACH GRID --- */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Branding & Creative Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand & Market Research",
                desc: "We understand your business, audience, competitors, market positioning, and brand goals to develop a clear and relevant branding direction."
              },
              {
                title: "Brand Strategy & Positioning",
                desc: "We define your brand personality, positioning, messaging, and visual direction to help your business stand out in a competitive market."
              },
              {
                title: "Visual Identity & Creative Design",
                desc: "We create memorable logos, colour systems, typography, brand guidelines, social media creatives, marketing materials, and other visual assets that reflect your brand identity."
              },
              {
                title: "Brand Consistency & Communication",
                desc: "We ensure your visual identity and messaging remain consistent across websites, social media, advertising, presentations, and other customer touchpoints."
              },
              {
                title: "Creative Optimization & Growth",
                desc: "We continuously refine creative assets based on audience response, campaign performance, and changing market trends to strengthen brand recognition and engagement."
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

      <h2 className="text-4xl font-black text-black mb-6 uppercase">Our Branding Services Include:</h2>
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
              Brand strategy & positioning
            </h3>
            
          </div>
        </div>

        <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
          <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
            02
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Logo design & visual identity
            </h3>
          </div>
        </div>

        <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
          <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
            03
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Brand guidelines & consistency
            </h3>
          </div>
        </div>

        <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
          <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
            04
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Color palette & typography
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
              Brand messaging & tone of voice
            </h3>
            
          </div>
        </div>

        <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
          <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
            06
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Social media branding
            </h3>
            
          </div>
        </div>

        <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
          <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
            07
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Packaging & brand collaterals
            </h3>
          </div>
        </div>


        <div className="group bg-white rounded-[2rem] p-7 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-500 transition-all duration-300 flex items-start gap-5">
          <div className="min-w-[60px] h-[60px] rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl font-bold">
            08
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Rebranding & brand refresh
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
                  Branding That <br />
                  <span className="text-orange-600 italic">Drives Business Growth</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Branding is not just about aesthetics - it’s about creating a long-term business asset.
                  As a performance-focused marketing and advertising company in Bangalore we build brands that not only stand out but also drive measurable results.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-[2rem] border border-orange-200 hover:border-orange-500 transition-all duration-500 shadow-inner">
                <h3 className="text-sm font-black text-orange-600 uppercase tracking-[0.2em] mb-6">
                  Our Branding Strategies Help You:
                </h3>
                <ul className="space-y-4 text-lg text-slate-800 font-medium">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Stand out in a competitive market</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Build trust and credibility</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Create a strong emotional connection with your audience</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></span>Increase customer loyalty and recognition</li>
                </ul>
                <p className="mt-6 pt-6 border-t border-orange-100 text-sm text-slate-500 font-medium italic">
                  Every element of your brand is designed to support long-term business growth.
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
        Branding?
      </h2>

      <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mt-8">
        Choosing the right partner can make a significant difference in how your brand is perceived in the market.
As an experienced marketing and advertising company in Bangalore, we focus on building brands that are both visually compelling and strategically positioned for success.

      </p>
    </div>

    {/* CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

      {[
        "Strategic and research-driven approach",
        "Unique and customized brand identity",
        "Balance of creativity and performance",
        "Consistent brand experience across all platforms"
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
            Our branding strategies are designed to create lasting impact and measurable growth:
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              "Strong and memorable brand identity",
              "Clear and consistent brand messaging",
              "Increased customer trust and loyalty",
              "Better brand recognition in your market",
              "Long-term competitive advantage"
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Branding & Creative Services
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

export default Branding;
