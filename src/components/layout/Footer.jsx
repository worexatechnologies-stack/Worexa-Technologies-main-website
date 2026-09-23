import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const FacebookIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const logoWhiteImg = '/assets/logo-white.png';

const servicesCol1 = [
  { name: 'Search Engine Optimization (SEO)', path: '/services/search-engine-optimization-seo' },
  { name: 'Social Media Marketing & Paid Campaigns', path: '/services/social-media-marketing' },
  { name: 'Branding & Creative Strategy', path: '/services/branding-and-creative-strategy' },
  { name: 'UI/UX & Conversion Optimization (CRO)', path: '/services/ui-ux-and-cro' },
  { name: 'Public Relations (PR)', path: '/services/public-relations' },
];

const servicesCol2 = [
  { name: 'Google Ads & Performance Marketing', path: '/services/google-ads' },
  { name: 'Content Marketing & Email Automation', path: '/services/content-marketing' },
  { name: 'Website Design & Development', path: '/services/web-development' },
  { name: 'Offline Advertising', path: '/services/offline-advertising' },
  { name: 'Photoshoot', path: '/services/photoshoot' },
];

const company = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Articles', path: '/articles' },
  { name: 'Contact', path: '/contact' },
  { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

const socialLinks = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/people/Worexa-Technologies/61586485404277/#', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/worexatechnologies/', label: 'Instagram' },
  { Icon: LinkedinIcon, href: 'https://in.linkedin.com/company/worexatechnologies', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://twitter.com/', label: 'Twitter' },
];

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@worexatechnologies.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer style={{ background: '#111111' }} className="text-zinc-300 border-t border-zinc-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">

        {/* ── Main 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[200px_1fr_130px_270px] gap-12 lg:gap-8 pb-10 border-b border-zinc-800/40">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logoWhiteImg}
                alt="Worexa Technologies"
                width="150"
                height="40"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
              Clever Move. Bold Growth. We help Bangalore businesses scale with performance-focused marketing, advertising, branding, and web solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800/50 text-zinc-300 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services (2 sub-columns) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Services
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
              {/* Left sub-column */}
              <div className="flex flex-col gap-3.5">
                {servicesCol1.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="text-sm text-zinc-400 hover:text-orange-400 transition-colors leading-snug"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              {/* Right sub-column */}
              <div className="flex flex-col gap-3.5">
                {servicesCol2.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="text-sm text-zinc-400 hover:text-orange-400 transition-colors leading-snug"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Company
            </h3>
            <div className="flex flex-col gap-3.5">
              {company.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/best-marketing-company-in-bangalore"
                className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors leading-snug cursor-pointer"
              >
                Best Marketing Company in Bangalore
              </a>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-3">

              {/* Phone */}
              <a
                href="tel:+919187233616"
                className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 px-4 py-3 text-sm text-zinc-300 hover:border-orange-500/40 hover:text-white transition-all duration-200 group"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                  <Phone size={14} />
                </span>
                <span className="font-medium">+91 9187233616</span>
              </a>

              {/* Email */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 px-4 py-3 text-sm text-zinc-300 hover:border-orange-500/40 hover:text-white transition-all duration-200 group text-left w-full"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                  <Mail size={14} />
                </span>
                <span className="font-medium">
                  {copiedEmail
                    ? <span className="text-emerald-400">Copied!</span>
                    : 'info@worexatechnologies.com'
                  }
                </span>
              </button>

              {/* Address */}
              <a
                href="https://www.google.com/maps?q=Worexa+Technologies,+3rd+Phase,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 px-4 py-3 text-sm text-zinc-300 hover:border-orange-500/40 hover:text-white transition-all duration-200 group"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200 mt-0.5">
                  <MapPin size={14} />
                </span>
                <span className="font-medium leading-relaxed">
                  Gopalan Workspace, 4th Floor,<br />
                  Banashankari 3rd Stage, Bengaluru,<br />
                  Karnataka 560085
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Worexa Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms-and-conditions" className="text-zinc-400 hover:text-orange-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy" className="text-zinc-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <p className="hidden sm:block">Marketing and advertising company in Bangalore.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
