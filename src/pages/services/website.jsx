import ServiceContactForm from '../../components/ServiceContactForm';
﻿import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

const approach = [
  {
    title: "SEO & Audience Research",
    desc: "We research your target audience, search intent, competitors, and relevant keywords to create a website strategy aligned with how your customers search online.",
  },
  {
    title: "SEO-Friendly Website Structure",
    desc: "We develop a clear website architecture with optimized URLs, headings, internal linking, navigation, and content structure to help search engines understand your website.",
  },
  {
    title: "AEO & Search-Ready Content",
    desc: "We structure website content around real user questions and search intent, using clear answers, relevant headings, FAQs, and structured information to improve visibility in AI-powered and answer-based search.",
  },
  {
    title: "Technical SEO & Performance",
    desc: "We focus on mobile responsiveness, page speed, crawlability, indexability, metadata, image optimization, and Core Web Vitals to create a technically strong website.",
  },
  {
    title: "Testing, Optimization & Growth",
    desc: "We test website functionality, user experience, mobile performance, and SEO elements before launch. After launch, we identify opportunities for continuous optimization and organic growth.",
  },
];

const services = [
  "Website design & development",
  "UI/UX design & optimization",
  "Landing page design & creation",
  "E-commerce website development",
  "Conversion rate optimization (CRO)",
  "Responsive & mobile-friendly design",
  "Website speed & performance optimization",
];

const benefits = [
  "Custom, user-focused designs",
  "Fast, responsive, and secure websites",
  "SEO-ready development",
  "Conversion-focused structure",
];

const outcomes = [
  "Professional and high-performing website",
  "Better user experience and engagement",
  "Increased lead generation",
  "Higher conversion rates",
  "Stronger online presence",
];

const faqs = [
  {
    question: "What is website development?",
    answer:
      "Website development is the process of building, implementing, maintaining, and improving a website for a business, organization, or individual. It can include front-end development, back-end development, responsive design implementation, content management systems, e-commerce functionality, integrations, security, performance optimization, and ongoing maintenance.",
  },
  {
    question: "Why is website development important for a business?",
    answer:
      "A professionally developed website provides a business with a central online presence where customers can learn about its products or services, contact the business, and take actions such as making a purchase or submitting an enquiry. A well-developed website can also support credibility, user experience, search visibility, lead generation, and digital marketing.",
  },
  {
    question: "What website development services does Worexa Technologies provide?",
    answer:
      "Worexa Technologies provides custom website development services that can include business website development, corporate websites, responsive web development, e-commerce websites, landing pages, website redesign, website optimization, and website maintenance. Development requirements are tailored to the website's purpose, target audience, and business objectives.",
  },
  {
    question: "Does Worexa Technologies develop responsive websites?",
    answer:
      "Yes. Worexa Technologies develops responsive websites that are designed to adapt to different screen sizes and devices, including desktops, tablets, and smartphones. Responsive development helps provide a consistent and usable experience for visitors across different devices.",
  },
  {
    question: "Can Worexa Technologies develop an e-commerce website?",
    answer:
      "Yes. Worexa Technologies provides e-commerce website development for businesses that want to sell products or services online. An e-commerce website can include product pages, shopping functionality, checkout processes, payment integrations, responsive design, and other features required for an online store.",
  },
  {
    question: "How does website development affect SEO?",
    answer:
      "Website development can directly affect SEO through factors such as site structure, page speed, mobile responsiveness, crawlability, technical implementation, URL structure, internal linking, and accessibility. Developing a technically sound website gives search engines a clearer structure to understand and can provide a stronger foundation for ongoing SEO.",
  },
  {
    question: "Does Worexa Technologies provide website maintenance services?",
    answer:
      "Yes. Website maintenance can include software and security updates, content changes, technical improvements, performance monitoring, bug fixes, backups, and other ongoing website management tasks. Regular maintenance helps keep a website functional, secure, and up to date.",
  },
  {
    question: "Can website development help generate more leads?",
    answer:
      "Yes. A website can support lead generation when it combines clear messaging, relevant content, intuitive navigation, strong calls to action, fast performance, mobile responsiveness, and conversion-focused landing pages. Worexa Technologies considers these factors when developing websites around specific business goals.",
  },
  {
    question: "How secure should a business website be?",
    answer:
      "A business website should include appropriate security measures based on its technology, functionality, and the type of information it handles. Security practices can include HTTPS, secure authentication, software updates, access controls, backups, vulnerability management, and protection against common web threats.",
  },
  {
    question: "Why choose Worexa Technologies for website development?",
    answer:
      "Worexa Technologies combines web development, design, SEO, user experience, and digital marketing knowledge to create websites around business objectives. Our approach focuses on developing professional, responsive, user-friendly, and performance-conscious websites that provide a strong foundation for digital growth.",
  },
];

const Website = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full bg-white">
      <Helmet>
        <title id="metaTitle">Website Design and Development in Bangalore | Web Development</title>
        <meta
          name="description"
          id="metaDescription"
          content="Looking for premium Website Design and Development in Bangalore? We craft stunning, responsive, and SEO-optimized sites to help grow your business online."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="website design and development in bangalore, website design and development, website design companies in banashankari, e commerce website design & development, website design and development company"
        />
        <meta
          id="ogTitle"
          property="og:title"
          content="Website Design and Development in Bangalore | Web Development"
        />
        <meta id="ogType" property="og:type" content="website" />
        <meta
          id="ogDescription"
          property="og:description"
          content="Looking for premium Website Design and Development in Bangalore? We craft stunning, responsive, and SEO-optimized sites to help grow your business online."
        />
        <meta
          id="ogUrl"
          property="og:url"
          content="https://worexatechnologies.com/services/web-development"
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
          content="Website Design and Development in Bangalore | Web Development"
        />
        <meta
          id="twitterDescription"
          name="twitter:description"
          content="Looking for premium Website Design and Development in Bangalore? We craft stunning, responsive, and SEO-optimized sites to help grow your business online."
        />
        <meta id="author" name="author" content="Akshay" />
        <link
          id="canonical"
          rel="canonical"
          href="https://worexatechnologies.com/services/web-development"
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
                "name": "Web & Mobile App Development",
                "item": "https://worexatechnologies.com/services/web-development"
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
                Web & Mobile App Development
              </span>
            </nav>

            {/* Main Headline - Dual Tone White & Orange */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.12] [text-wrap:balance]">
              <span className="text-white">Web Development Services for </span>
              <span className="text-[#f97316]">Fast, Scalable & High-Converting Websites</span>
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
              <div className="h-1 w-24 rounded-full bg-orange-600" />
            <p className="text-lg font-medium leading-relaxed text-gray-600 sm:text-xl">
              Build a fast, user-friendly, SEO-friendly, and conversion-focused website with Worexa Technologies. We develop websites that are designed not only to look professional but also to perform effectively across search engines and AI-powered search platforms.
            </p>
            <p className="text-lg font-medium leading-relaxed text-gray-600 sm:text-xl">
              Our approach combines SEO-friendly website architecture, responsive design, technical optimization, structured content, fast loading speeds, mobile optimization, and AEO best practices to help your website become easier for both users and search engines to understand. Whether you need a business website, corporate website, eCommerce website, landing page, or custom web development solution, we create websites aligned with your brand, target audience, and business objectives.
            </p>
            <p className="text-xl md:text-2xl font-black text-orange-600">
              Better Website. Better Visibility. Better Business Growth
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
              <ServiceContactForm serviceName="Web & Mobile App Development" />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-7xl text-center sm:mb-16">
            <h2 className="mb-6 text-4xl font-black uppercase text-black">Our Website Development Approach</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {approach.map((step, i) => (
              <div key={step.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:border-orange-600 hover:shadow-xl sm:p-8 lg:p-10">
                <h3 className="mb-3 text-lg font-extrabold text-black sm:mb-4 sm:text-xl">
                  <span className="mr-2 text-orange-600">0{i + 1}.</span>{step.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="mb-6 text-4xl font-black uppercase text-black">Our Web Development Services Include:</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
            {services.map((item, i) => (
              <div
                key={item}
                className={`${i === services.length - 1 ? 'lg:col-span-2 lg:mx-auto lg:w-[48%]' : ''} group flex items-center gap-4 rounded-[2rem] border border-transparent bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-500 hover:shadow-2xl sm:gap-5 sm:p-7`}
              >
                <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl bg-orange-100 text-lg font-bold text-orange-600 sm:h-[60px] sm:min-w-[60px] sm:text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-black sm:text-2xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-orange-100 bg-orange-50 p-6 shadow-2xl md:p-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-[100px] transition-colors duration-700" />

            <div className="relative z-10 flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                  Websites <br />
                  <span className="italic text-orange-600">That Convert</span>
                </h2>
                <p className="text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
                  A good website looks great - a great website performs. As a performance-focused marketing and advertising company in Bangalore, we build websites that convert visitors into leads and customers.
                </p>
              </div>

              <div className="rounded-[2rem] border border-orange-200 bg-white p-5 shadow-sm transition-all duration-500 hover:border-orange-500 sm:p-8 md:p-10 lg:w-1/2">
                <h3 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-orange-600">
                  Our websites are built to:
                </h3>
                <ul className="space-y-3 text-base font-light text-slate-700 sm:space-y-4 sm:text-lg">
                  {["Increase user engagement", "Improve conversion rates", "Generate leads and sales", "Strengthen your brand presence"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-orange-100 pt-6 text-sm font-medium italic text-slate-500">
                  Every element from layout to call-to-action is optimized to turn visitors into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-20">
            <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-600">
              Why Choose Us
            </span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-black md:text-6xl">
              Why Choose Us For <br className="hidden md:block" />
              Website Development?
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg">
              Choosing the right partner is critical when building a website that truly performs. As an experienced marketing and advertising company in Bangalore, we focus on creating websites that are visually impressive and optimized for long-term growth.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {benefits.map((item, i) => (
              <div
                key={item}
                className="group relative flex min-h-[180px] flex-col justify-between rounded-[2rem] border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:border-orange-500 hover:shadow-2xl md:min-h-[220px] md:p-8"
              >
                <div className="flex justify-end">
                  <span className="text-5xl font-black leading-none text-orange-100 md:text-6xl">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="relative z-10 mt-6 text-xl font-bold leading-relaxed text-black md:text-2xl">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h2 className="mb-6 text-4xl font-black uppercase text-white">
            What You Can Expect
          </h2>

          <p className="mb-10 text-base text-white/90 sm:mb-16 sm:text-lg">
            Our website development solutions are designed to deliver measurable business impact:
          </p>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 sm:gap-8">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md sm:px-6 sm:py-5"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange-600" />
                <p className="text-left font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-white/90 sm:mt-16">
            Your website becomes more than just a platform - it becomes a powerful growth engine for your business.
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Questions</span> About Web Development Services
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

export default Website;
