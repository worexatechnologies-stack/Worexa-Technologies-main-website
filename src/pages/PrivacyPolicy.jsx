import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Users,
  Database,
  Globe,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Bell,
  Cookie,
  Server,
  Share2,
  KeyRound,
  Clock,
  UserCheck,
  Baby,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Worexa Technologies</title>
        <meta
          name="description"
          content="Learn how Worexa Technologies collects, uses, stores, and protects your personal and business data. Read our transparent Privacy Policy."
        />
        <link rel="canonical" href="https://worexatechnologies.com/privacy-policy" />
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
              Privacy{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Worexa Technologies respects your privacy and is committed to handling personal information responsibly.
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
              <p className="text-xs font-black uppercase tracking-widest text-orange-600 mb-0.5">Policy Scope</p>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                This Privacy Policy explains how we may collect, use, store, disclose, and protect information when you visit our website, submit an enquiry, communicate with us, or use our services.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            MAIN CONTENT AREA WITH NUMBERED SECTIONS
        ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10">

            {/* 01. Information We May Collect */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  01
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Information We May Collect
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                Depending on how you interact with us, we may collect information such as:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Information You Provide */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wide">
                    <FileText size={16} className="text-orange-600" />
                    <span>Information You Provide</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      'Name',
                      'Email address',
                      'Phone number',
                      'Company or business name',
                      'Job title or designation',
                      'Website or social media details',
                      'Business requirements',
                      'Information submitted through enquiry or contact forms',
                      'Information provided during consultations or communications',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Automatically Collected Information */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wide">
                    <Server size={16} className="text-orange-600" />
                    <span>Automatically Collected Information</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    When you visit our website, certain technical information may be collected automatically, such as: (optional)
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      'IP address',
                      'Browser type',
                      'Device type',
                      'Operating system',
                      'Pages visited',
                      'Approximate usage information',
                      'Referring website',
                      'Date and time of access',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/60 leading-relaxed">
                    The information collected may depend on the analytics, hosting, advertising, and other technologies used on our website.
                  </p>
                </div>
              </div>
            </div>

            {/* 02. How We Use Your Information */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  02
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  How We Use Your Information
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                We may use collected information to:
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Respond to enquiries and requests.',
                  'Provide quotations and consultations.',
                  'Deliver and manage services.',
                  'Communicate with clients and prospective clients.',
                  'Improve our website and services.',
                  'Understand website usage and performance.',
                  'Manage marketing campaigns.',
                  'Send service-related communications.',
                  'Send promotional communications where permitted.',
                  'Prevent fraud, misuse, or security incidents.',
                  'Meet legal and regulatory obligations.',
                ].map((purpose) => (
                  <div key={purpose} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 03. Marketing Communications */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  03
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Marketing Communications
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                If you provide your contact information for marketing or business enquiries, we may contact you regarding our services, offers, updates, or relevant business information, subject to applicable law. You may request to stop receiving promotional communications by contacting us or using an available unsubscribe mechanism.
              </p>
            </div>

            {/* 04. Cookies and Similar Technologies */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  04
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Cookies and Similar Technologies
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our website may use cookies and similar technologies to improve functionality, understand website traffic, remember preferences, measure performance, and support marketing activities. Cookies may be provided by Worexa Technologies or by third-party service providers. You can manage certain cookie preferences through your browser or available website controls. Disabling some cookies may affect certain website functionality.
              </p>
            </div>

            {/* 05. Analytics and Advertising Services */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  05
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Analytics and Advertising Services
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We may use third-party technologies such as analytics, advertising, conversion tracking, or social media tools. These services may process certain information according to their own privacy policies and applicable terms. Examples may include services provided by Google, Meta, LinkedIn, hosting providers, analytics providers, or other technology partners used by Worexa Technologies.
              </p>
            </div>

            {/* 06. How We Share Information */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  06
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  How We Share Information
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                We do not sell personal information as a business practice. We may share information with trusted service providers, contractors, technology providers, advertising/analytics platforms, or other parties when reasonably necessary to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Provide our services.',
                  'Operate our website.',
                  'Process communications.',
                  'Analyse website performance.',
                  'Deliver marketing services.',
                  'Maintain security.',
                  'Comply with legal obligations.',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={15} className="text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                Where appropriate, we expect service providers handling information on our behalf to maintain reasonable safeguards and use information only for authorized purposes.
              </p>
            </div>

            {/* 07. Client and Business Information */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  07
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Client and Business Information
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                If you engage Worexa Technologies for digital marketing, website, advertising, SEO, social media, or related services, we may receive business information and access credentials required to perform the agreed services. We will use such information only for legitimate business and service-related purposes and according to applicable contractual obligations. Clients should not provide sensitive personal information unless it is necessary for the agreed service.
              </p>
            </div>

            {/* 08. Data Security */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  08
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Data Security
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
              </p>
            </div>

            {/* 09. Data Retention */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  09
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Data Retention
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining business records, resolving disputes, enforcing agreements, and complying with applicable legal obligations. Retention periods may vary depending on the type of information and purpose of processing.
              </p>
            </div>

            {/* 10. Your Privacy Rights */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  10
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Your Privacy Rights
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  Subject to applicable law, you may have rights regarding your personal information, which may include requesting information about processing, correction of inaccurate information, withdrawal of consent where applicable, or other rights available under applicable data-protection laws. Requests can be made using the contact details provided below.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">
                  We may need to verify your identity before processing certain requests.
                </p>
              </div>
            </div>

            {/* 11. Children's Privacy */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  11
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Children&apos;s Privacy
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our website and services are not intentionally directed toward children. We do not knowingly seek to collect personal information from children except where legally permitted and appropriately authorized. If you believe that a child has provided personal information to us improperly, please contact us.
              </p>
            </div>

            {/* 12. Third-Party Websites */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  12
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Third-Party Websites
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Our website may contain links to third-party websites, social media platforms, advertising platforms, or other services. This Privacy Policy does not apply to the privacy practices of those third parties. We encourage users to review the privacy policies of external websites before providing personal information.
              </p>
            </div>

            {/* 13. International Data Transfers */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  13
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  International Data Transfers
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Some service providers or technology platforms used by Worexa Technologies may process information outside India. Where personal information is transferred or processed across jurisdictions, we will take steps required by applicable law.
              </p>
            </div>

            {/* 14. Changes to This Privacy Policy */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-black text-sm">
                  14
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Changes to This Privacy Policy
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our services, technology, legal requirements, or business practices.
                </p>
                <p className="font-semibold text-slate-900">
                  The updated version will be published on this page with a revised effective date.
                </p>
              </div>
            </div>

            {/* 15. Contact Us */}
            <div className="rounded-3xl border-2 border-orange-400 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-orange-400/10 via-amber-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white font-black text-base shadow-md">
                    15
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Contact Us
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl">
                  For privacy-related questions, requests, or concerns, please contact:
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {/* Entity & Website */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Globe size={18} />
                      <span className="text-xs font-black uppercase tracking-wider">Company &amp; Web</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">Worexa Technologies</p>
                    <a
                      href="https://worexatechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-600 hover:text-orange-700 hover:underline block"
                    >
                      worexatechnologies.com
                    </a>
                  </div>

                  {/* Email */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Mail size={18} />
                      <span className="text-xs font-black uppercase tracking-wider">Email Enquiries</span>
                    </div>
                    <a
                      href="mailto:info@worexatechnologies.com"
                      className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors block"
                    >
                      info@worexatechnologies.com
                    </a>
                    <p className="text-[11px] text-slate-500">Official Privacy Desk</p>
                  </div>

                  {/* Office Address */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 text-orange-600">
                      <MapPin size={18} />
                      <span className="text-xs font-black uppercase tracking-wider">Headquarters</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700 leading-relaxed">
                      Gopalan workspace, 4th floor, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-6 py-3 rounded-full transition-all shadow-md hover:scale-105"
                  >
                    <span>Reach Out Directly</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/terms-and-conditions"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-full transition-all"
                  >
                    <span>View Terms &amp; Conditions</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
