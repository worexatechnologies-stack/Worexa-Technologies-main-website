import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Mail,
  MapPin,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function TermsAndConditions() {

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Worexa Technologies</title>
        <meta
          name="description"
          content="Review the Terms & Conditions governing your access to and use of Worexa Technologies website, services, digital solutions, and communications."
        />
        <link rel="canonical" href="https://worexatechnologies.com/terms-and-conditions" />
      </Helmet>

      <main className="min-h-screen bg-slate-50/60 selection:bg-orange-500 selection:text-white">
        
        {/* =========================================================================
            HERO HEADER
        ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20 border-b border-slate-800">
          {/* Subtle Ambient Radial Glows */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-orange-500/15 via-amber-500/5 to-transparent blur-3xl opacity-80" />
          <div className="pointer-events-none absolute -bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white"
            >
              Terms &amp;{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Welcome to Worexa Technologies. These Terms &amp; Conditions govern your access to and use of our website, services, content, and communications.
            </motion.p>
          </div>
        </section>

        {/* =========================================================================
            ACKNOWLEDGMENT CALLOUT BANNER
        ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50/70 to-white p-5 sm:p-6 shadow-lg shadow-orange-950/5 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-0.5">Binding Agreement</p>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                By accessing or using our website or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            MAIN CONTENT AREA WITH QUICK NAV & SECTION CARDS
        ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Section Cards */}
          <div className="space-y-10">
            
            {/* 01. About Worexa Technologies */}
            <div id="about" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  01
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  About Worexa Technologies
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                Worexa Technologies provides digital marketing and technology-related services, which may include:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Search Engine Optimization (SEO)',
                  'Social Media Marketing',
                  'Content Creation',
                  'Social Media Management',
                  'Performance Marketing',
                  'Google Ads and Meta Ads',
                  'Website Development',
                  'Website Optimization',
                  'Digital Strategy',
                  'Content Marketing',
                  'Branding and related digital services'
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{service}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">Please Note: </span>
                The exact services provided to a client will depend on the agreed proposal, quotation, scope of work, or service agreement.
              </div>
            </div>

            {/* 02. Use of Our Website */}
            <div id="use" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  02
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Use of Our Website
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                You agree to use this website only for lawful purposes. You must not:
              </p>

              <ul className="space-y-3">
                {[
                  'Use the website for fraudulent or unlawful activities.',
                  'Attempt to gain unauthorized access to our systems or website.',
                  'Introduce malicious code, viruses, or harmful material.',
                  'Copy, reproduce, modify, or distribute our website content without permission.',
                  'Interfere with the security, operation, or functionality of the website.',
                  'Use information obtained from the website for unlawful or misleading purposes.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 03. Services and Scope of Work */}
            <div id="scope" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  03
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Services and Scope of Work
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                All services are provided according to the scope agreed between Worexa Technologies and the client.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                Deliverables, timelines, revisions, advertising budgets, campaign requirements, payment terms, and other project conditions may be specified separately in a proposal, quotation, invoice, work order, or service agreement.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                Any work outside the agreed scope may require additional charges and prior written approval.
              </div>
            </div>

            {/* 04. Client Responsibilities */}
            <div id="responsibilities" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  04
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Client Responsibilities
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                Clients are responsible for providing accurate and timely information, content, credentials, approvals, brand assets, and other materials reasonably required to perform the services.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Delays in receiving required information, approvals, access, or materials may affect project timelines. Clients must ensure that materials supplied to Worexa Technologies do not infringe the intellectual property, privacy, or other legal rights of third parties.
              </p>
            </div>

            {/* 05. Advertising and Marketing Results */}
            <div id="results" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  05
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Advertising and Marketing Results
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                Digital marketing performance can be affected by factors outside our control, including:
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
                {[
                  'Search engine algorithm changes',
                  'Advertising platform policies',
                  'Competition',
                  'Market conditions',
                  'Audience behaviour',
                  'Platform outages',
                  'Changes in advertising costs',
                  'Third-party technology or service providers'
                ].map((factor) => (
                  <div key={factor} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                <span className="font-bold text-slate-900">Disclaimer: </span>
                Worexa Technologies does not guarantee specific rankings, traffic levels, leads, sales, revenue, conversions, or advertising results unless expressly agreed in writing. Any projections, estimates, or expected results communicated during a project are indicative and should not be treated as guaranteed outcomes.
              </div>
            </div>

            {/* 06. Third-Party Platforms */}
            <div id="third-party" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  06
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Third-Party Platforms
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our services may involve third-party platforms such as Google, Meta, LinkedIn, hosting providers, analytics services, social media platforms, or other technology providers. Worexa Technologies is not responsible for changes, suspension, downtime, policy changes, account restrictions, algorithm updates, or technical issues caused by third-party platforms.
              </p>
            </div>

            {/* 07. Payments and Cancellation */}
            <div id="payments" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  07
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Payments and Cancellation
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                Fees, payment schedules, deposits, recurring charges, cancellation terms, and applicable taxes will be communicated in the relevant quotation, invoice, or service agreement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Unless otherwise agreed in writing, work may be paused if required payments are overdue. Any cancellation, refund, or outstanding-payment conditions will be governed by the applicable client agreement or quotation.
              </p>
            </div>

            {/* 08. Intellectual Property */}
            <div id="ip" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  08
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Intellectual Property
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                Unless otherwise agreed in writing, Worexa Technologies retains ownership of its pre-existing materials, methodologies, templates, processes, strategies, proprietary systems, and internal resources.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                Client-specific final deliverables may be transferred to the client according to the applicable project agreement and payment terms.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Third-party assets, including stock images, fonts, software, plugins, music, and other licensed materials, remain subject to their respective licences and terms.
              </p>
            </div>

            {/* 09. Website Content */}
            <div id="content" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  09
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Website Content
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-3">
                The information published on this website is provided for general informational purposes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Although we aim to keep the information accurate and updated, we do not guarantee that every piece of information will always be complete, current, or error-free.
              </p>
            </div>

            {/* 10. Confidentiality */}
            <div id="confidentiality" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  10
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Confidentiality
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We may receive confidential business, marketing, customer, financial, technical, or other information from clients. We will take reasonable steps to protect confidential information and use it only for legitimate business and service-related purposes, subject to applicable law and the terms of the relevant client agreement.
              </p>
            </div>

            {/* 11. Limitation of Liability */}
            <div id="liability" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  11
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Limitation of Liability
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                To the extent permitted by applicable law, Worexa Technologies shall not be responsible for indirect, incidental, consequential, special, or loss-of-profit damages arising from the use of our website or services.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is prohibited by applicable law.
              </p>
            </div>

            {/* 12. External Links */}
            <div id="external-links" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  12
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  External Links
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-3">
                Our website may contain links to third-party websites or services.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                These links are provided for convenience. Worexa Technologies does not control and is not responsible for the content, availability, security, privacy practices, or policies of third-party websites.
              </p>
            </div>

            {/* 13. Changes to These Terms */}
            <div id="changes" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  13
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Changes to These Terms
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-3">
                Worexa Technologies may update these Terms &amp; Conditions from time to time.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Updated terms will be published on this page with a revised effective date. Your continued use of the website after an update constitutes use subject to the revised terms, to the extent permitted by applicable law.
              </p>
            </div>

            {/* 14. Governing Law */}
            <div id="law" className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  14
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Governing Law
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-3">
                These Terms &amp; Conditions shall be governed by the laws applicable in India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Any disputes shall be subject to the jurisdiction of the courts having appropriate jurisdiction over the applicable matter and location.
              </p>
            </div>

            {/* 15. Contact Us */}
            <div id="contact" className="rounded-3xl border-2 border-orange-300/80 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/50 p-7 sm:p-10 shadow-lg shadow-orange-500/5">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-black text-sm shadow-md">
                  15
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Contact Us
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                For questions regarding these Terms &amp; Conditions, please contact:
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {/* Email */}
                <a
                  href="mailto:info@worexatechnologies.com"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                    <p className="text-sm font-black text-slate-900 break-all">info@worexatechnologies.com</p>
                  </div>
                </a>

                {/* Website */}
                <Link
                  to="/"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Website</p>
                    <p className="text-sm font-black text-slate-900">worexatechnologies.com</p>
                  </div>
                </Link>

                {/* Address */}
                <a
                  href="https://www.google.com/maps?q=Worexa+Technologies,+3rd+Phase,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Location</p>
                    <p className="text-xs font-bold text-slate-900 leading-snug">
                      Gopalan workspace, 4th floor, Banashankari 3rd Stage, Bengaluru 560085
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-orange-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-600 font-medium text-center sm:text-left">
                  Have a specific question regarding a service agreement or proposal?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xs px-6 py-2.5 transition-all shadow-md shadow-orange-500/20 hover:scale-105"
                >
                  <span>Reach Support</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}
