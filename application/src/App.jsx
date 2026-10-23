import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

/* ============================================
   DATA (Clean & Professional — No Emojis)
   ============================================ */

const SERVICES_DATA = [
  {
    title: 'Android App Development',
    desc: 'Reach Android users with customized mobile applications designed around your business objectives. We help create Android apps with intuitive navigation, essential business features, and user-friendly interfaces.',
    ideal: 'Startups, service businesses, e-commerce brands, and growing enterprises.',
    tags: ['Android SDK', 'Kotlin', 'Java', 'Material Design'],
  },
  {
    title: 'iOS App Development',
    desc: 'Build mobile applications for Apple\'s iOS ecosystem with a focus on usability, design consistency, and performance. We help businesses plan and develop iOS applications according to their project requirements.',
    ideal: 'Businesses targeting iPhone and iPad users.',
    tags: ['iOS Ecosystem', 'Swift', 'SwiftUI', 'Apple HIG'],
  },
  {
    title: 'Cross-Platform App Development',
    desc: 'Reach users across multiple platforms with a cross-platform development approach. Depending on your requirements, we can help plan applications that share functionality across Android and iOS.',
    ideal: 'Startups and businesses seeking to reach multiple mobile audiences.',
    tags: ['Flutter', 'React Native', 'Single Codebase', 'Fast Delivery'],
  },
  {
    title: 'E-commerce App Development',
    desc: 'Create a convenient mobile shopping experience for your customers. E-commerce applications can include product catalogs, shopping carts, payment gateway integrations, order tracking, and customer account management.',
    ideal: 'Online stores, retail businesses, and emerging consumer brands.',
    tags: ['Product Catalogs', 'Shopping Carts', 'Payment Gateways', 'Order Tracking'],
  },
  {
    title: 'Custom Business App Development',
    desc: 'Improve business processes with applications tailored to your operational needs. From customer management to workflow automation, we help businesses identify and implement suitable app solutions.',
    ideal: 'Service providers, SMEs, and enterprises.',
    tags: ['Workflow Automation', 'CRM Integration', 'Process Optimization', 'Custom Logic'],
  },
  {
    title: 'UI/UX Design for Mobile Apps',
    desc: 'Create engaging digital experiences with user-focused mobile app design. We focus on intuitive navigation, clear layouts, and consistent interfaces that help users interact with your application.',
    ideal: 'Applications needing intuitive journeys and high engagement.',
    tags: ['User-Focused UX', 'Intuitive Navigation', 'Clear Layouts', 'Wireframing'],
  },
  {
    title: 'App Testing and Quality Assurance',
    desc: 'Identify functional issues and improve application reliability through testing and quality assurance based on your project\'s requirements.',
    ideal: 'Ensuring seamless performance, security, and bug-free releases.',
    tags: ['Functional Testing', 'Reliability QA', 'Compatibility', 'Bug Detection'],
  },
  {
    title: 'App Maintenance and Support',
    desc: 'Keep your application aligned with changing business needs through updates, bug fixes, compatibility improvements, and ongoing maintenance as agreed for your project.',
    ideal: 'Long-term app stability, OS updates, and proactive fixes.',
    tags: ['Bug Fixes', 'Compatibility', 'OS Updates', 'Ongoing SLA'],
  },
  {
    title: 'HRMS Software Development',
    desc: 'Simplify HR operations with custom HRMS software designed to streamline employee management, automate HR workflows, and improve workforce efficiency. Worexa Technologies helps businesses explore digital HR solutions tailored to their operational requirements.',
    ideal: 'Businesses seeking streamlined workforce and HR management.',
    tags: ['Employee Management', 'Automated Workflows', 'Attendance & Leave', 'HR Automation'],
  },
];

const PROCESS_STEPS = [
  { num: '1', title: 'Discovery & Consultation', desc: 'Understand your business goals, app requirements, target audience, and project scope.' },
  { num: '2', title: 'Planning & Architecture', desc: 'Define app features, technical requirements, integrations, and development timelines.' },
  { num: '3', title: 'UI/UX App Design', desc: 'Create intuitive user journeys, interactive prototypes, and responsive interfaces.' },
  { num: '4', title: 'App Development', desc: 'Build functional mobile applications tailored to your business requirements.' },
  { num: '5', title: 'Testing & Quality Assurance', desc: 'Test functionality, usability, compatibility, and performance.' },
  { num: '6', title: 'App Launch & Deployment', desc: 'Prepare and deploy your application to the relevant platforms.' },
  { num: '7', title: 'App Maintenance & Support', desc: 'Provide updates, bug fixes, and enhancements according to the agreed scope.' },
];

const PORTFOLIO_DATA = [
  {
    category: 'Education Technology',
    kicker: 'EDUCATION & PROFESSIONAL PLATFORM',
    title: 'Vlope Hub',
    subtitle: 'Digital Learning & Professional Platform',
    desc: 'A digital platform designed to connect users with education and professional opportunities through a convenient, user-friendly experience.',
    servicesList: 'App Development | Digital Platform | User Experience',
    url: 'vlopehub.com/platform',
    status: 'Live Platform',
    metric: 'EduTech',
    metricLabel: 'Learning & Professional Platform',
    badge: 'Education & Career',
    highlights: ['Connect users with learning opportunities', 'Convenient and user-friendly portal interface'],
    tech: ['App Development', 'Digital Platform', 'User Experience', 'Cloud API'],
  },
  {
    category: 'HR Technology',
    kicker: 'HUMAN RESOURCE MANAGEMENT',
    title: 'HRMS Software',
    subtitle: 'Smart HR Management Software',
    desc: 'Simplify human resource operations with HRMS software designed to help businesses manage employee information, attendance, leave requests, and HR workflows efficiently.',
    servicesList: 'HRMS Development | Business Automation | Software Solutions',
    url: 'hrms.worexatech.com',
    status: 'Enterprise Solution',
    metric: 'HR Tech',
    metricLabel: 'Smart HR Automation',
    badge: 'Workforce Efficiency',
    highlights: ['Manage employee info, attendance & leave', 'Streamline operations & automated workflows'],
    tech: ['HRMS Development', 'Business Automation', 'Software Solutions', 'Secure Cloud'],
  },
  {
    category: 'Matrimony & Social',
    kicker: 'MATRIMONY MOBILE APP',
    title: 'MyDearPartner',
    subtitle: 'Find Your Perfect Life Partner',
    desc: 'A matrimony app designed to help individuals discover potential life partners and explore meaningful relationships through a convenient digital matchmaking experience.',
    servicesList: 'Matrimony App Development · Mobile App',
    url: 'mydearpartner.app',
    status: 'Live Mobile App',
    metric: 'Mobile App',
    metricLabel: 'Digital Matchmaking',
    badge: 'Real-Time Matchmaking',
    highlights: ['Discover potential partners securely', 'Convenient digital matchmaking experience'],
    tech: ['Matrimony App Development', 'Mobile App', 'Android & iOS', 'Real-Time Chat'],
  },
];

const TECH_CATEGORIES = [
  { title: 'Frontend Engineering', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend & APIs', items: ['Node.js', 'Python', 'Java', 'Go', 'GraphQL', 'RESTful'] },
  { title: 'Mobile Platforms', items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Android SDK'] },
  { title: 'Cloud & Database', items: ['AWS', 'Google Cloud', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis'] },
];

const WHY_CHOOSE_POINTS = [
  {
    id: 'customized',
    title: 'Customized Solutions',
    desc: 'Applications planned around your specific business requirements.',
    tag: 'Tailored Scope',
    stats: 'Tailored',
    substats: 'Custom Architecture',
    badges: ['Specific Requirements', 'Tailored Architecture', 'Full Ownership', 'Agile Plan'],
  },
  {
    id: 'user-centric',
    title: 'User-Centric Design',
    desc: 'Interfaces designed to make navigation intuitive and convenient.',
    tag: 'Intuitive UX',
    stats: 'Engaging',
    substats: 'Fluid Interfaces',
    badges: ['Intuitive Navigation', 'Convenient Layouts', 'Clear Journeys', 'Figma Wireframes'],
  },
  {
    id: 'business-focused',
    title: 'Business-Focused Development',
    desc: 'Features selected to support your operational and customer needs.',
    tag: 'Operational Goals',
    stats: 'Outcome-Driven',
    substats: 'Operational Fit',
    badges: ['Customer Needs', 'Process Automation', 'Business Value', 'High Performance'],
  },
  {
    id: 'scalable',
    title: 'Scalable Solutions',
    desc: 'Architecture planned with future growth and enhancements in mind.',
    tag: 'Future-Proof',
    stats: '99.98%',
    substats: 'Growth Ready',
    badges: ['Modular Architecture', 'Cloud Reliability', 'Elastic Scaling', 'Zero Downtime'],
  },
  {
    id: 'quality',
    title: 'Quality-Focused Approach',
    desc: 'Testing and quality checks appropriate to the project scope.',
    tag: 'Reliable Stability',
    stats: 'Verified',
    substats: 'Rigorous QA',
    badges: ['Functional Checks', 'Compatibility Tests', 'Security QA', 'Bug Prevention'],
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Project Support',
    desc: 'Assistance across planning, design, development, testing, and launch, depending on the agreed scope.',
    tag: 'Complete Lifecycle',
    stats: 'Full Scope',
    substats: 'Launch & Support',
    badges: ['Planning & Design', 'Development & QA', 'Store Deployment', 'Ongoing Support'],
  },
];

const FAQS = [
  {
    q: 'What are app development services?',
    a: 'App development services involve planning, designing, building, testing, and maintaining mobile applications for businesses, startups, and other organizations.',
  },
  {
    q: 'How do I choose an app development company in Bangalore?',
    a: 'Evaluate a company\'s relevant experience, portfolio, technical capabilities, development process, communication, project scope, and post-launch support before making a decision.',
  },
  {
    q: 'Do you offer Android and iOS app development?',
    a: 'Android and iOS development can be planned according to your project\'s requirements, target audience, and preferred technology.',
  },
  {
    q: 'How long does mobile app development take?',
    a: 'The timeline depends on the app\'s complexity, number of features, design requirements, integrations, testing, and project scope. A timeline can be estimated after the initial requirements discussion.',
  },
  {
    q: 'Can you develop a custom app for my business?',
    a: 'Yes, custom app development can be planned around your business objectives, target audience, workflows, and required features.',
  },
  {
    q: 'Do you provide app maintenance and support?',
    a: 'Maintenance services may include bug fixes, compatibility updates, performance improvements, and feature enhancements, depending on the agreed scope.',
  },
  {
    q: 'How can I get a quotation for app development?',
    a: 'Contact Worexa Technologies with your app idea, preferred platforms, required features, and estimated budget to discuss your project and request a quotation.',
  },
];

/* ============================================
   MAIN COMPONENT
   ============================================ */
export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const lenisRef = useRef(null);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    industry: 'Fashion And Lifestyle',
    lookingFor: 'Strategy',
    duration: '6 Months Above',
    budget: '30k - 1lakh',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Lenis Smooth Scrolling and GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // GSAP Entrance and Scroll Animations
    const ctx = gsap.context(() => {
      // Dynamic Zoom-in on Scroll Down / Zoom-out on Scroll Up
      gsap.to('.zoom-bg-grid', {
        scale: 1.45,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      gsap.to('.zoom-bg-glow.glow-1', {
        scale: 1.6,
        x: -90,
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      gsap.to('.zoom-bg-glow.glow-2', {
        scale: 1.5,
        x: 100,
        y: -110,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      gsap.to('.circle-1', {
        scale: 1.45,
        rotation: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      gsap.to('.circle-2', {
        scale: 1.35,
        rotation: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      });

      // Hero Elements
      gsap.fromTo(
        '.hero-headline',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', clearProps: 'all' }
      );

      gsap.fromTo(
        '.hero-subtext',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: 'power2.out', clearProps: 'all' }
      );

      gsap.fromTo(
        '.hero-contact-card',
        { y: 15, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: 'power2.out', clearProps: 'all' }
      );

      // Animate Service Cards on scroll
      gsap.utils.toArray('.service-card-compact').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 22, scale: 0.95, opacity: 0.5 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.45,
            delay: (i % 4) * 0.06,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      });

      // Animate Portfolio Cards on scroll
      gsap.utils.toArray('.portfolio-card-compact').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 22, scale: 0.95, opacity: 0.5 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.45,
            delay: (i % 4) * 0.07,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      });

      // Animate Process Steps on scroll
      gsap.utils.toArray('.step-item-compact').forEach((step, i) => {
        gsap.fromTo(
          step,
          { x: 18, opacity: 0.5 },
          {
            scrollTrigger: {
              trigger: step,
              start: 'top 92%',
            },
            x: 0,
            opacity: 1,
            duration: 0.35,
            delay: i * 0.05,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      });

      // Animate Why Choose Us Cards
      gsap.utils.toArray('.why-hero-bento, .why-pillar-card').forEach((box, i) => {
        gsap.fromTo(
          box,
          { y: 20, scale: 0.96, opacity: 0.5 },
          {
            scrollTrigger: {
              trigger: box,
              start: 'top 90%',
            },
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.45,
            delay: (i % 2) * 0.08,
            ease: 'power2.out',
            clearProps: 'all',
          }
        );
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const smoothScrollTo = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -70 });
    }
    setDrawerOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      alert('Please fill in all required fields (Name, Phone, and Email).');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <div className="worexa-app">
      {/* ---- DYNAMIC ZOOM-IN / ZOOM-OUT SCROLL BACKGROUND ---- */}
      <div className="scroll-zoom-bg-container" aria-hidden="true">
        <div className="zoom-bg-grid" />
        <div className="zoom-bg-glow glow-1" />
        <div className="zoom-bg-glow glow-2" />
        <div className="zoom-bg-circle circle-1" />
        <div className="zoom-bg-circle circle-2" />
      </div>

      {/* ---- REDESIGNED EXECUTIVE NAVBAR ---- */}
      <header className="worexa-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="brand-logo-link" aria-label="Worexa Technologies Home">
            <img
              src="/worexa-logo.png"
              alt="Worexa Technologies Logo"
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="desktop-nav-links" aria-label="Main Navigation">
            <a
              href="#services"
              className="desktop-nav-link"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}
            >
              Services
            </a>
            <a
              href="#process"
              className="desktop-nav-link"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#process'); }}
            >
              Process
            </a>
            <a
              href="#portfolio"
              className="desktop-nav-link"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#portfolio'); }}
            >
              Work
            </a>
            <a
              href="#technologies"
              className="desktop-nav-link"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#technologies'); }}
            >
              Technologies
            </a>
            <a
              href="#why-us"
              className="desktop-nav-link"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#why-us'); }}
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="desktop-nav-link"
              onClick={(e) => { e.preventDefault(); smoothScrollTo('#faq'); }}
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            {/* Call button with clean SVG */}
            <a href="tel:09187233616" className="btn-call" aria-label="Call Worexa Technologies">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call</span>
            </a>

            {/* WhatsApp button with clean SVG */}
            <a
              href="https://wa.me/919187233616?text=Hello%20Worexa%20Technologies,%20I%20want%20to%20discuss%20an%20application%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.8 14.15c-.24.67-1.39 1.29-1.92 1.37-.49.07-1.12.1-3.26-.78-2.57-1.07-4.22-3.69-4.35-3.86-.13-.18-1.04-1.39-1.04-2.65s.66-1.88.89-2.14c.24-.25.52-.32.7-.32.18 0 .35.01.5.02.16.01.38-.06.59.45.23.55.77 1.88.84 2.02.07.14.11.3.02.48-.09.18-.14.29-.28.45-.14.16-.29.35-.42.47-.14.14-.29.3-.13.57.17.27.74 1.22 1.58 1.97 1.08.97 2.01.1 2.29.13.29.04.45-.09.6-.13.15-.59.69-.74.92-.16.24-.31.25-.55.13z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Quick Quote CTA */}
            <button
              onClick={() => smoothScrollTo('#contact')}
              className="btn-nav-quote"
            >
              Get a Quote
            </button>

            {/* Menu Drawer Toggle */}
            <button
              className="btn-menu-toggle"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open full menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ---- SLIDE-OUT LUXURY DRAWER PANEL ---- */}
      {drawerOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className={`drawer-panel ${drawerOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-header">
          <img
            src="/worexa-logo.png"
            alt="Worexa Technologies Logo"
            style={{ height: '32px', width: 'auto' }}
          />
          <button
            className="btn-drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="drawer-nav-list">
          <a
            href="#services"
            className="drawer-nav-item"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}
          >
            <span>Application Services</span>
            <span className="drawer-num">01</span>
          </a>
          <a
            href="#process"
            className="drawer-nav-item"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#process'); }}
          >
            <span>Development Process</span>
            <span className="drawer-num">02</span>
          </a>
          <a
            href="#portfolio"
            className="drawer-nav-item"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#portfolio'); }}
          >
            <span>Featured Portfolio</span>
            <span className="drawer-num">03</span>
          </a>
          <a
            href="#technologies"
            className="drawer-nav-item"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#technologies'); }}
          >
            <span>Technologies & Stacks</span>
            <span className="drawer-num">04</span>
          </a>
          <a
            href="#why-us"
            className="drawer-nav-item"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#why-us'); }}
          >
            <span>Why Choose Worexa</span>
            <span className="drawer-num">05</span>
          </a>
          <a
            href="#faq"
            className="drawer-nav-item"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('#faq'); }}
          >
            <span>Frequently Asked Questions</span>
            <span className="drawer-num">06</span>
          </a>
        </nav>

        <div className="drawer-contact-box">
          <div className="drawer-contact-title">Bengaluru Engineering Hub</div>
          <div className="drawer-contact-line">3rd Phase, Banashankari 3rd Stage, Bengaluru 560085</div>
          <div className="drawer-contact-line">
            <a href="mailto:info@worexatechnologies.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              info@worexatechnologies.com
            </a>
          </div>
          <div className="drawer-contact-line">
            <a href="tel:09187233616" style={{ color: 'inherit', textDecoration: 'none' }}>
              +91 91872 33616
            </a>
          </div>

          <button
            onClick={() => smoothScrollTo('#contact')}
            className="btn-explore-orange"
            style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* ---- FULL SCREEN HERO SECTION ---- */}
      <section className="hero-section grid-bg" id="hero">
        <div className="container hero-grid">
          {/* Left Column */}
          <div className="hero-left">
            <h1 className="hero-headline">
              App Development Services in{' '}
              <span className="underlined-word">
                Bangalore.
                <svg className="curved-underline-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M2,14 Q50,2 98,12" stroke="#FF5500" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="hero-subtext">
              At Worexa Technologies, we provide customized mobile app development services to startups, small businesses, and established enterprises. Our approach combines user-focused design, modern development practices, and business-oriented functionality to create applications that meet your specific requirements.
            </p>
            <p className="hero-subtext" style={{ marginTop: 8, fontSize: '0.84rem', color: '#64748B' }}>
              Whether you want to launch a new mobile application, expand your digital presence, or improve an existing app, our services focus on usability, functionality, performance, and scalability.
            </p>

            <button
              onClick={() => smoothScrollTo('#portfolio')}
              className="btn-explore-orange"
            >
              Explore Our Work <span style={{ fontSize: '0.9rem' }}>↓</span>
            </button>
          </div>

          {/* Right Column: Ultra-Compact Sleek Contact Us Card (No Emojis) */}
          <div className="hero-contact-card" id="contact">
            <div className="card-header-row">
              <div className="card-title-group">
                <span className="pipe-orange">|</span>
                <span>Contact </span>
                <span className="card-title-orange">Us.</span>
              </div>

              <div className="job-seeker-badge">
                Job seekers kindly do not fill the form
              </div>
            </div>

            {formSubmitted ? (
              <div className="form-success-banner">
                <div className="form-success-icon">✓</div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: 2 }}>
                  Enquiry Received
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: 12 }}>
                  Thank you, <strong>{formState.name}</strong>. Our Bengaluru engineering team will reach out with a detailed proposal within 24 hours.
                </p>
                <button
                  className="btn-explore-orange"
                  style={{ padding: '6px 16px', fontSize: '0.8rem' }}
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form className="compact-form" onSubmit={handleSubmit}>
                <div className="form-2col">
                  {/* Name */}
                  <div className="form-field">
                    <label className="field-label">
                      Name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input-compact"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Organization's Name */}
                  <div className="form-field">
                    <label className="field-label">
                      Organization's Name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      className="input-compact"
                      placeholder="Enter organization name"
                      value={formState.organization}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-2col">
                  {/* Contact Number with clean text prefix */}
                  <div className="form-field">
                    <label className="field-label">
                      Contact Number <span className="asterisk">*</span>
                    </label>
                    <div className="phone-input-wrap">
                      <div className="country-flag-badge">
                        <span>+91</span>
                        <span style={{ fontSize: '0.6rem', marginLeft: 1 }}>▾</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        className="phone-raw-input"
                        placeholder="Enter phone number*"
                        value={formState.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label className="field-label">
                      Email <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input-compact"
                      placeholder="Enter business email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-2col">
                  {/* Select Industry Type */}
                  <div className="form-field">
                    <label className="field-label">
                      Select Industry Type <span className="asterisk">*</span>
                    </label>
                    <select
                      name="industry"
                      className="input-compact"
                      value={formState.industry}
                      onChange={handleInputChange}
                    >
                      <option value="Fashion And Lifestyle">Fashion And Lifestyle</option>
                      <option value="Healthcare & Telemedicine">Healthcare & Telemedicine</option>
                      <option value="Fintech & Banking">Fintech & Banking</option>
                      <option value="SaaS & Technology">SaaS & Technology</option>
                      <option value="E-commerce & Retail">E-commerce & Retail</option>
                      <option value="Education & EdTech">Education & EdTech</option>
                      <option value="Real Estate">Real Estate</option>
                    </select>
                  </div>

                  {/* Looking For */}
                  <div className="form-field">
                    <label className="field-label">
                      Looking For <span className="asterisk">*</span>
                    </label>
                    <select
                      name="lookingFor"
                      className="input-compact"
                      value={formState.lookingFor}
                      onChange={handleInputChange}
                    >
                      <option value="Strategy">Strategy</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Enterprise ERP/CRM">Enterprise ERP/CRM</option>
                      <option value="E-commerce Store">E-commerce Store</option>
                      <option value="Cloud Architecture">Cloud Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="form-2col">
                  {/* Project Duration */}
                  <div className="form-field">
                    <label className="field-label">
                      Project Duration <span className="asterisk">*</span>
                    </label>
                    <select
                      name="duration"
                      className="input-compact"
                      value={formState.duration}
                      onChange={handleInputChange}
                    >
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 Months Above">6 Months Above</option>
                    </select>
                  </div>

                  {/* Project Budget */}
                  <div className="form-field">
                    <label className="field-label">
                      Project Budget <span className="asterisk">*</span>
                    </label>
                    <select
                      name="budget"
                      className="input-compact"
                      value={formState.budget}
                      onChange={handleInputChange}
                    >
                      <option value="30k - 1lakh">30k - 1lakh</option>
                      <option value="1lakh - 3lakh">1lakh - 3lakh</option>
                      <option value="3lakh - 5lakh">3lakh - 5lakh</option>
                      <option value="5lakh Above">5lakh Above</option>
                    </select>
                  </div>
                </div>

                {/* Growth Goals / Brief Message */}
                <div className="form-field">
                  <label className="field-label">Growth Goals / Brief Message</label>
                  <textarea
                    name="message"
                    className="input-compact"
                    placeholder="Share your goals, target CAC/ROAS, or key challenges..."
                    value={formState.message}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn-form-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'PROCESSING...' : 'SUBMIT →'}
                </button>

                {/* Trust guarantee footer (No emojis) */}
                <div className="form-trust-footer">
                  <span>100% Confidential • No Spam Guarantee • Bangalore Strategists</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ---- SERVICES SECTION (Our Mobile App Development Services) ---- */}
      <section className="section-compact section-white" id="services">
        <div className="container">
          <div className="sec-header-compact">
            <div className="section-kicker-tag">COMPREHENSIVE EXPERTISE</div>
            <h2 className="sec-title-compact">
              Our Mobile <span className="highlight-orange">App Development</span> Services
            </h2>
            <p className="sec-subtitle-compact">
              Our app development services focus on usability, functionality, performance, and scalability to help create applications that meet your specific business requirements.
            </p>
          </div>

          <div className="services-compact-grid">
            {SERVICES_DATA.map((srv, idx) => (
              <div key={idx} className="service-card-compact">
                <div className="service-header-row">
                  <span className="service-num-badge">#{String(idx + 1).padStart(2, '0')}</span>
                  <span className="service-lead-pill">{srv.tags[0]}</span>
                </div>
                <h3 className="service-name-compact">{srv.title}</h3>
                <p className="service-desc-compact">{srv.desc}</p>
                {srv.ideal && (
                  <div className="service-ideal-box">
                    <strong>Ideal for:</strong> {srv.ideal}
                  </div>
                )}
                <div className="service-tags-compact">
                  {srv.tags.map((t, ti) => (
                    <span key={ti} className="tag-compact">{t}</span>
                  ))}
                </div>
                <button
                  onClick={() => smoothScrollTo('#contact')}
                  className="service-readmore"
                >
                  Request Consultation <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- DEVELOPMENT PROCESS ("Our App Development Process") ---- */}
      <section className="section-compact section-light" id="process">
        <div className="container">
          <div className="sec-header-compact">
            <div className="section-kicker-tag">STRUCTURED 7-STEP PROCESS</div>
            <h2 className="sec-title-compact">
              Our App <span className="highlight-orange">Development Process</span>
            </h2>
            <p className="sec-subtitle-compact">
              We turn your app ideas into powerful digital solutions. Our structured 7-step development process ensures quality, transparency, and a seamless experience from concept to launch.
            </p>
          </div>

          <div className="process-compact-wrap">
            {/* Left Box */}
            <div className="process-highlight-card">
              <span className="process-badge-label">Agile Methodology</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: 6 }}>
                Our App Development Workflow
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.55, marginBottom: 14 }}>
                We follow a structured development process to transform your ideas into user-friendly mobile applications. From initial planning to deployment, we focus on quality, communication, and your business objectives.
              </p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span className="tag-compact" style={{ background: '#FFF2EB', color: '#FF5500', fontWeight: 700 }}>
                  Custom App Solutions
                </span>
                <span className="tag-compact" style={{ background: '#ECFDF5', color: '#10B981', fontWeight: 700 }}>
                  Agile Development
                </span>
                <span className="tag-compact" style={{ background: '#EFF6FF', color: '#3B82F6', fontWeight: 700 }}>
                  Quality-Focused Testing
                </span>
              </div>
            </div>

            {/* Right Steps */}
            <div className="process-steps-list-compact">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="step-item-compact">
                  <div className="step-num-orange">{step.num}</div>
                  <div className="step-info-compact">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- PORTFOLIO / OUR WORK (Modern Agency Showcase Cards) ---- */}
      <section className="section-compact section-white" id="portfolio">
        <div className="container">
          <div className="sec-header-compact">
            <div className="section-kicker-tag">OUR WORK & PORTFOLIO</div>
            <h2 className="sec-title-compact">
              Our <span className="highlight-orange">Work</span> & Portfolio
            </h2>
            <p className="sec-subtitle-compact">
              Explore digital solutions designed to simplify business operations, improve user experiences, and support digital growth.
            </p>
          </div>

          <div className="portfolio-compact-grid">
            {PORTFOLIO_DATA.map((proj, idx) => (
              <div key={idx} className="portfolio-card-compact">
                {/* Simulated Modern Browser Bar */}
                <div className="portfolio-browser-bar">
                  <div className="portfolio-browser-left">
                    <div className="terminal-dots">
                      <span className="t-dot dot-red" />
                      <span className="t-dot dot-yellow" />
                      <span className="t-dot dot-green" />
                    </div>
                    <div className="portfolio-url-bar">
                      <svg className="url-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      <span>{proj.url}</span>
                    </div>
                  </div>
                  <div className="portfolio-live-badge">
                    <span className="live-pulse-dot" />
                    <span>{proj.status}</span>
                  </div>
                </div>

                {/* Impact Metric Banner */}
                <div className="portfolio-metric-banner">
                  <div className="p-metric-group">
                    <span className="p-metric-val">{proj.metric}</span>
                    <span className="p-metric-lbl">{proj.metricLabel}</span>
                  </div>
                  <span className="portfolio-pill-badge">{proj.badge}</span>
                </div>

                {/* Card Body */}
                <div className="portfolio-body">
                  <div className="portfolio-kicker-row">
                    <span className="portfolio-category-kicker">{proj.kicker || proj.category}</span>
                    <span className="portfolio-type-pill">{proj.category}</span>
                  </div>

                  <h4>
                    <span>{proj.title} <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B', display: 'block' }}>{proj.subtitle}</span></span>
                    <svg className="title-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </h4>

                  <p>{proj.desc}</p>

                  {/* Highlights with check icons */}
                  <div className="portfolio-highlights-list">
                    {proj.highlights.map((h, hi) => (
                      <div key={hi} className="p-highlight-row">
                        <svg className="p-highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack & action */}
                  <div className="portfolio-footer-row">
                    <div className="portfolio-tech-chips">
                      {proj.tech.map((t, ti) => (
                        <span key={ti} className="tech-tag-sm">{t}</span>
                      ))}
                    </div>
                    <a href="#contact" className="portfolio-case-link">
                      <span>Explore Case Study</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- TECHNOLOGIES WE USE ---- */}
      <section className="section-compact section-light" id="technologies">
        <div className="container">
          <div className="sec-header-compact">
            <h2 className="sec-title-compact">
              Technologies <span className="highlight-orange">We Use</span>
            </h2>
            <p className="sec-subtitle-compact">
              Tested modern stacks selected for sub-second performance, security, and developer productivity.
            </p>
          </div>

          <div className="tech-compact-grid">
            {TECH_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="tech-card-compact">
                <div className="tech-card-title">{cat.title}</div>
                <div className="tech-pill-list">
                  {cat.items.map((item, ii) => (
                    <span key={ii} className="tech-pill-sm">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- WHY CHOOSE WOREXA TECHNOLOGIES FOR APP DEVELOPMENT ---- */}
      <section className="section-compact section-white" id="why-us">
        <div className="container">
          <div className="sec-header-compact">
            <div className="section-kicker-tag">THE WOREXA ADVANTAGE</div>
            <h2 className="sec-title-compact">
              Why Choose <span className="highlight-orange">Worexa Technologies</span> for App Development?
            </h2>
            <p className="sec-subtitle-compact">
              Choosing the right development partner is an important step in building a successful mobile application. At Worexa Technologies, our approach focuses on understanding your requirements and developing solutions aligned with your business goals.
            </p>
          </div>

          <div className="why-container-redesigned">
            {/* Top Spotlight Bento Banner */}
            <div className="why-hero-bento">
              <div className="why-hero-content">
                <div className="why-hub-badge">
                  <span className="hub-pulse-dot" />
                  <span>Bengaluru Engineering Hub • Karnataka, India</span>
                </div>
                <h3 className="why-hero-title">Direct Senior Engineers. Zero Outsourcing Middlemen.</h3>
                <p className="why-hero-desc">
                  At Worexa Technologies, our approach focuses on understanding your requirements and developing solutions aligned with your business goals. We engineer mobile applications planned with future growth, intuitive navigation, and high operational performance.
                </p>
                <div className="why-hero-assurances">
                  <div className="assurance-item">
                    <svg className="assurance-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Customized App Solutions</span>
                  </div>
                  <div className="assurance-item">
                    <svg className="assurance-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>User-Centric Design</span>
                  </div>
                  <div className="assurance-item">
                    <svg className="assurance-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Business-Focused Development</span>
                  </div>
                  <div className="assurance-item">
                    <svg className="assurance-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>End-to-End Project Support</span>
                  </div>
                </div>
              </div>

              <div className="why-hero-metrics">
                <div className="hero-metric-tile">
                  <div className="metric-val">100%</div>
                  <div className="metric-lbl">Tailored Solutions</div>
                  <div className="metric-sub">Planned around your specific goals</div>
                </div>
                <div className="hero-metric-tile">
                  <div className="metric-val">Quality</div>
                  <div className="metric-lbl">Focused Testing</div>
                  <div className="metric-sub">Rigorous checks across devices</div>
                </div>
                <div className="hero-metric-tile">
                  <div className="metric-val">Scalable</div>
                  <div className="metric-lbl">Future-Proof Architecture</div>
                  <div className="metric-sub">Planned with future growth in mind</div>
                </div>
                <div className="hero-metric-tile">
                  <div className="metric-val">End-to-End</div>
                  <div className="metric-lbl">Complete Support</div>
                  <div className="metric-sub">From concept to deployment & launch</div>
                </div>
              </div>
            </div>

            {/* 6 Pillar Cards Grid */}
            <div className="why-pillars-grid">
              {WHY_CHOOSE_POINTS.map((pillar, idx) => (
                <div key={pillar.id} className="why-pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-index-badge">0{idx + 1}</div>
                    <span className="pillar-tag">{pillar.tag}</span>
                    <div className="pillar-stat-pill">
                      <span className="p-stat-val">{pillar.stats}</span>
                      <span className="p-stat-sub">{pillar.substats}</span>
                    </div>
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                  <div className="pillar-badges-wrap">
                    {pillar.badges.map((b, bi) => (
                      <span key={bi} className="pillar-feature-badge">
                        <svg className="badge-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Turn your business idea banner */}
            <div className="why-cta-banner">
              <div className="why-cta-text">
                <h3>Let's turn your business idea into a mobile application</h3>
                <p>Collaborate with Worexa Technologies for custom mobile application planning, UI/UX design, and development.</p>
              </div>
              <button
                onClick={() => smoothScrollTo('#contact')}
                className="btn-why-cta"
              >
                <span>Start Your Project</span>
                <span style={{ fontSize: '1.05rem' }}>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- REDESIGNED MODERN FAQ SECTION ---- */}
      <section className="section-compact section-white" id="faq">
        <div className="container">
          <div className="faq-split-layout">
            {/* Left FAQ Info Panel */}
            <div className="faq-left-panel">
              <span className="faq-kicker-badge">FAQ & Insights</span>
              <h2 className="faq-main-title">
                Frequently Asked Questions About <span className="highlight-orange">App Development Services.</span>
              </h2>
              <p className="faq-main-desc">
                Everything you need to know about our application development timelines, code ownership, SLAs, and technical consultation in Bengaluru.
              </p>

              <div className="faq-support-box">
                <h4>Have a unique requirement?</h4>
                <p>
                  Our senior software architects are available to discuss system design, non-disclosure agreements, and custom milestones.
                </p>
                <button
                  onClick={() => smoothScrollTo('#contact')}
                  className="btn-faq-ask"
                >
                  Ask Our Architects →
                </button>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="faq-accordion-list">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-accordion-item ${openFaq === idx ? 'active' : ''}`}
                >
                  <button
                    className="faq-header-btn"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <div className="faq-q-left">
                      <span className="faq-num-pill">{String(idx + 1).padStart(2, '0')}</span>
                      <h4>{faq.q}</h4>
                    </div>
                    <div className="faq-chevron" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <div className="faq-expand-body">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- WOREXA FOOTER (Clean Typography) ---- */}
      <footer className="worexa-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div>
              <div className="footer-logo-box">
                <img
                  src="/worexa-logo.png"
                  alt="Worexa Technologies Logo"
                  style={{ height: '28px', width: 'auto', display: 'block' }}
                />
              </div>
              <p className="footer-desc">
                Leading Application Development & Custom Software Engineering Company in Bengaluru. We build powerful software that scales businesses.
              </p>
              <div style={{ marginTop: 12, fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.5 }}>
                <strong style={{ color: '#E2E8F0', display: 'block', marginBottom: 2 }}>Office Address:</strong>
                3rd Phase, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085
              </div>
            </div>

            <div>
              <div className="footer-col-title">Services</div>
              <div className="footer-col-links">
                <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Web Applications</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Mobile App Development</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Custom Software</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Enterprise ERP & CRM</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo('#services'); }}>Cloud Solutions & DevOps</a>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Company</div>
              <div className="footer-col-links">
                <a href="#portfolio" onClick={(e) => { e.preventDefault(); smoothScrollTo('#portfolio'); }}>Our Portfolio</a>
                <a href="#process" onClick={(e) => { e.preventDefault(); smoothScrollTo('#process'); }}>Development Process</a>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); smoothScrollTo('#why-us'); }}>Why Choose Us</a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); smoothScrollTo('#faq'); }}>Frequently Asked Questions</a>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Quick Connect</div>
              <div className="footer-col-links">
                <a href="tel:09187233616" style={{ fontSize: '0.78rem', color: '#CBD5E1', textDecoration: 'none' }}>
                  Phone: <span style={{ color: '#fff', fontWeight: 600 }}>09187233616</span>
                </a>
                <a href="mailto:info@worexatechnologies.com" style={{ fontSize: '0.78rem', color: '#CBD5E1', textDecoration: 'none' }}>
                  Email: <span style={{ color: '#fff', fontWeight: 600 }}>info@worexatechnologies.com</span>
                </a>
                <a
                  href="https://wa.me/919187233616?text=Hello%20Worexa%20Technologies,%20I%20want%20to%20discuss%20an%20application%20development%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.78rem', color: '#10B981', display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginTop: 2 }}
                >
                  <span className="live-pulse-dot" style={{ width: 6, height: 6 }} />
                  WhatsApp: 09187233616
                </a>
                <button
                  onClick={() => smoothScrollTo('#contact')}
                  style={{
                    display: 'inline-block',
                    background: '#FF5500',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    textAlign: 'center',
                    marginTop: 8,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Request A Quote
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© {new Date().getFullYear()} Worexa Technologies. All rights reserved.</span>
            <span>3rd Phase, Banashankari 3rd Stage, Bengaluru 560085 • Global Clients</span>
          </div>
        </div>
      </footer>

      {/* ---- MOBILE FLOATING ACTION BUTTONS (Phone & WhatsApp) ---- */}
      <div className="mobile-floating-actions" aria-label="Mobile quick contact">
        {/* Floating Phone Button */}
        <a href="tel:09187233616" className="fab-item fab-phone" aria-label="Call Worexa Technologies">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919187233616?text=Hello%20Worexa%20Technologies,%20I%20want%20to%20discuss%20an%20application%20development%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="fab-item fab-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.8 14.15c-.24.67-1.39 1.29-1.92 1.37-.49.07-1.12.1-3.26-.78-2.57-1.07-4.22-3.69-4.35-3.86-.13-.18-1.04-1.39-1.04-2.65s.66-1.88.89-2.14c.24-.25.52-.32.7-.32.18 0 .35.01.5.02.16.01.38-.06.59.45.23.55.77 1.88.84 2.02.07.14.11.3.02.48-.09.18-.14.29-.28.45-.14.16-.29.35-.42.47-.14.14-.29.3-.13.57.17.27.74 1.22 1.58 1.97 1.08.97 2.01.1 2.29.13.29.04.45-.09.6-.13.15-.59.69-.74.92-.16.24-.31.25-.55.13z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
