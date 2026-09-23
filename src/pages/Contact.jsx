import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  Clock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const SUBMIT_TIMEOUT_MS = 30000;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      const responseText = await res.text();
      let result = {};

      if (!res.ok && !responseText) {
        throw new Error(
          "PHP backend is not running. Start a PHP server on 127.0.0.1:8000 or upload the site to PHP hosting."
        );
      }

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          responseText || "The mail server returned an invalid response."
        );
      }

      if (res.ok && result.success) {
        setSubmitted(true);
        e.target.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert(
          result.message ||
          result.error ||
          "PHP backend returned an error. Please check the hosting mail settings."
        );
      }
    } catch (error) {
      console.error(error);

      if (error.name === "AbortError") {
        alert(
          "Mail server is taking too long to respond. Please try again, or contact us directly at info@worexatechnologies.com."
        );
        return;
      }

      alert(
        error.message ||
        "PHP backend is not running. Install PHP and run npm run dev:backend, or test this form on PHP hosting."
      );
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen">
      <Helmet>
        <title id="metaTitle">Contact Worexa Technologies | Get in Touch with Us Today.</title>
        <meta
          name="description"
          id="metaDescription"
          content="Contact Worexa Technologies for expert digital marketing, web development, branding, and business growth solutions. We are here to help your business succeed."
        />
        <meta
          name="keywords"
          id="metaKeywords"
          content="contact worexa technologies, digital marketing agency bangalore contact, web design company bangalore address, seo agency bangalore number, contact us, contact worexa"
        />
        <meta id="ogTitle" property="og:title" content="Contact Worexa Technologies | Get in Touch with Us Today." />
        <meta id="ogType" property="og:type" content="website" />
        <meta id="ogDescription" property="og:description" content="Contact Worexa Technologies for expert digital marketing, web development, branding, and business growth solutions. We are here to help your business succeed." />
        <meta id="ogUrl" property="og:url" content="https://worexatechnologies.com/contact" />
        <meta id="ogSiteName" property="og:site_name" content="Worexa Technologies" />
        <meta id="ogImage" property="og:image" content="https://worexatechnologies.com/assets/logo.png" />
        <meta id="twitterSite" name="twitter:site" content="https://twitter.com/" />
        <meta id="twitterTitle" name="twitter:title" content="Contact Worexa Technologies | Get in Touch with Us Today." />
        <meta id="twitterDescription" name="twitter:description" content="Contact Worexa Technologies for expert digital marketing, web development, branding, and business growth solutions. We are here to help your business succeed." />
        <meta id="author" name="author" content="Akshay" />
        <link id="canonical" rel="canonical" href="https://worexatechnologies.com/contact" />
        <meta id="indexingStatus" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta id="Publisher" property="publisher" content="Worexa Technologies" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      {/* Header & Form Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile Heading */}
          <div className="lg:hidden text-center sm:text-left mb-8">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Let’s Talk <span className="text-gradient">Growth.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Inquiries (On Mobile: order-2, displays after form) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1 lg:col-span-5 space-y-8 w-full"
            >
              <div className="hidden lg:block">
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  Let’s Talk <span className="text-gradient">Growth.</span>
                </h1>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+919187233616"
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:border-orange-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 break-normal [overflow-wrap:normal]">Direct Consultation</h4>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5 group-hover:text-orange-600 transition-colors">+91 9187233616</p>
                    <p className="text-xs text-slate-500 mt-1">Mon–Sat • 9:00 AM to 7:00 PM IST</p>
                  </div>
                </a>

                <a
                  href="mailto:info@worexatechnologies.com"
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:border-orange-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 break-normal [overflow-wrap:normal]">Email Proposals</h4>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5 group-hover:text-orange-600 transition-colors break-all">info@worexatechnologies.com</p>
                    <p className="text-xs text-slate-500 mt-1">Guaranteed response within 24 business hours</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps?q=Worexa+Technologies,+3rd+Phase,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:border-orange-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 break-normal [overflow-wrap:normal]">Bangalore Headquarters</h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Worexa Technologies Pvt. Ltd.</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Gopalan Workspace, 4th Floor, Banashankari 3rd Stage, Bengaluru, Karnataka 560085
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Modern White Consultation Form (On Mobile: order-1, displays first) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 lg:order-2 lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden w-full"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Inquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                    Thank you for reaching out. Our senior growth strategist will review your brand details and reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900">Send Us a Direct Message</h3>
                    <p className="text-xs text-slate-500 mt-1">Tell us about your brand and what growth milestones you're targeting.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        required
                        name="firstName"
                        type="text"
                        placeholder="e.g. John"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        required
                        name="lastName"
                        type="text"
                        placeholder="e.g. Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        required
                        name="phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10); }}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Business Email *
                      </label>
                      <input
                        id="email"
                        required
                        name="email"
                        type="email"
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details & Growth Goals *
                    </label>
                    <textarea
                      id="message"
                      required
                      name="message"
                      rows="4"
                      placeholder="e.g. We are looking for technical SEO and Google Ads optimization to scale qualified monthly leads..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Transmitting Inquiry..."
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-[420px] w-full relative border-t border-slate-200">
        <iframe
          title="Worexa Technologies Location Map"
          src="https://www.google.com/maps?q=Worexa+Technologies,+3rd+Phase,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085&z=15&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </div>
  );
}