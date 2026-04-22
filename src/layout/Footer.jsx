/**
 * Footer.jsx
 * ─────────────────────────────────────────────────────────────
 * Full site footer for Ditechted.
 * 5-column grid (brand spans 2) → 2-col on tablet → stacked mobile.
 * Dark background, muted links, accent hover, social icons.
 */

import { Link } from 'react-router-dom';
import {
  Globe, Mail, Phone, MapPin,
} from 'lucide-react';
import logo from '../assets/Logos/DITECTED-14.png';
import logoDark from '../assets/Logos/DITECTED-15.png';
import { useTheme } from '../components/ThemeProvider';

// ─── Link data ────────────────────────────────────────────────
const COMPANY_LINKS = [
  { label: 'About',        to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers',      to: '/careers' },
];

const SERVICES_LINKS = [
  { label: 'Web Development', to: '/services#web-app' },
  { label: 'Cloud & DevOps',  to: '/services#cloud-devops' },
  { label: 'AI & Automation', to: '/services#ai-automation' },
  { label: 'IT Consulting',   to: '/services#it-consulting' },
];

const RESOURCES_LINKS = [
  { label: 'Insights', to: '/insights' },
  { label: 'Contact',  to: '/contact' },
];

// ─── Inline SVG Icons ──────────────────────────────────────────
const LinkedInIcon = ({ size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const GithubIcon = ({ size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const SOCIAL_LINKS = [
  { icon: LinkedInIcon, label: 'LinkedIn',  href: 'https://www.linkedin.com' },
  { icon: TwitterIcon,  label: 'Twitter',   href: 'https://x.com' },
  { icon: GithubIcon,   label: 'GitHub',    href: 'https://github.com' },
  { icon: Globe,        label: 'Website',   href: 'https://ditechted.com' },
];

const CONTACT_INFO = [
  { icon: Mail,    text: 'info@ditechted.com',  href: 'mailto:info@ditechted.com' },
  { icon: Phone,   text: '+233 24 000 0000',    href: 'tel:+233240000000' },
  { icon: MapPin,  text: 'Accra, Ghana',         href: null },
];

// ─── Reusable column heading ──────────────────────────────────
const ColHeading = ({ children }) => (
  <h4 className="text-slate-900 dark:text-white text-sm font-semibold mb-5 tracking-wide">
    {children}
  </h4>
);

// ─── Reusable link item ───────────────────────────────────────
const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-slate-600 dark:text-slate-500 hover:text-primary dark:hover:text-accent transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

// ─── Footer ───────────────────────────────────────────────────
const Footer = () => {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const activeLogo = isDark ? logoDark : logo;

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#09090f] transition-colors duration-300">

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="container-site pt-14 pb-12 md:pt-16 md:pb-14 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-8">

          {/* ── Brand column (wider) ─────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-4 lg:pr-10">
            {/* Logo */}
            <Link to="/" className="inline-block mb-2 -ml-1">
              <img
                src={activeLogo}
                alt="Ditechted"
                className="h-8 sm:h-9 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Tagline */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[300px]">
              IT consulting and digital transformation solutions for modern businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent hover:border-primary dark:hover:border-accent transition-all duration-200 hover:scale-105"
                >
                  <Icon size={17} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Company ─────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <ColHeading>Company</ColHeading>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, to }) => (
                <FooterLink key={label} to={to}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Services ─────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <ColHeading>Services</ColHeading>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ label, to }) => (
                <FooterLink key={label} to={to}>{label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Resources + Contact ──────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-10">
            {/* Resources */}
            <div>
              <ColHeading>Resources</ColHeading>
              <ul className="space-y-3">
                {RESOURCES_LINKS.map(({ label, to }) => (
                  <FooterLink key={label} to={to}>{label}</FooterLink>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <ColHeading>Contact</ColHeading>
              <ul className="space-y-3">
                {CONTACT_INFO.map(({ icon: Icon, text, href }) => (
                  <li key={text} className="flex items-start gap-2.5">
                    <Icon size={14} strokeWidth={2} className="text-primary dark:text-accent mt-0.5 shrink-0" />
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition-colors duration-200 leading-snug"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-600 dark:text-slate-400 leading-snug">{text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-slate-200 dark:border-white/5">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600 text-center sm:text-left">
            © 2026 Ditechted. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs text-slate-400 dark:text-slate-600 hover:text-primary dark:hover:text-accent transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-slate-400 dark:text-slate-600 hover:text-primary dark:hover:text-accent transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
