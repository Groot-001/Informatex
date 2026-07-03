import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";
import { useLenis } from "../../lib/SmoothScrollProvider";

/* Lightweight inline brand icons (lucide-react no longer ships social/brand icons) */
const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.9 3H21.6l-5.83 6.66L22.6 21h-5.35l-4.19-5.48L8.24 21H5.53l6.24-7.13L4.4 3h5.49l3.79 5.01L18.9 3zm-.94 16.17h1.49L8.11 4.74H6.51l11.45 14.43z" />
  </svg>
);
const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
  </svg>
);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33m0-1.33c-3.29 0-3.7.01-5 .07-1.29.06-2.17.27-2.94.57a6.9 6.9 0 0 0-2.5 1.63A6.9 6.9 0 0 0 .93 4.24c-.3.77-.51 1.65-.57 2.94C.3 8.48.29 8.89.29 12.18s.01 3.7.07 5c.06 1.29.27 2.17.57 2.94.3.8.7 1.5 1.63 2.5.99.93 1.7 1.33 2.5 1.63.77.3 1.65.51 2.94.57 1.3.06 1.71.07 5 .07s3.7-.01 5-.07c1.29-.06 2.17-.27 2.94-.57a6.9 6.9 0 0 0 2.5-1.63 6.9 6.9 0 0 0 1.63-2.5c.3-.77.51-1.65.57-2.94.06-1.3.07-1.71.07-5s-.01-3.7-.07-5c-.06-1.29-.27-2.17-.57-2.94a6.9 6.9 0 0 0-1.63-2.5A6.9 6.9 0 0 0 19.94.64c-.77-.3-1.65-.51-2.94-.57C15.7.01 15.29 0 12 0z" />
    <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 5.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const lenis = useLenis();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 1500);
    }
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    // Scroll reset on route change is handled globally by <ScrollToTop />.
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
    { icon: TwitterIcon, label: "Twitter / X", href: "#" },
    { icon: GithubIcon, label: "GitHub", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="relative bg-[#001c31] text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Top brand accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#003152] via-[#62aff0] to-[#003152]" />

      {/* Ambient background glow for brand cohesion */}
      <div className="absolute -top-24 left-1/4 w-80 h-80 bg-[#003152]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#62aff0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8 text-left">
          {/* Brand info */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-2 space-y-5 flex flex-col items-start rounded-3xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 md:p-0 md:bg-transparent md:border-0 md:rounded-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#003152] flex items-center justify-center text-white shadow-lg border border-[#62aff0]/30 shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Informa<span className="text-[#62aff0]">tech</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We architect mission-critical cloud ecosystems, custom AI
              solutions, and military-grade cybersecurity infrastructure for
              Fortune 500 enterprises and global leaders.
            </p>

            {/* Stay Informed - Newsletter signup */}
            <div className="w-full max-w-sm">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Stay Informed
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Subscribe to our monthly briefing on enterprise AI benchmarks
                and zero-trust security bulletins.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="enter.work@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full min-w-0 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-[#62aff0]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-[#003152] hover:bg-[#0e649e] text-white text-xs font-semibold shrink-0 transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-emerald-400 flex items-center justify-start gap-1 animate-fadeIn">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed
                    successfully!
                  </p>
                )}
              </form>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#003152] hover:border-[#62aff0]/40 hover:text-[#62aff0] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links - Accordion on mobile, static list on tablet/desktop */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 px-5 md:p-0 md:bg-transparent md:border-0 md:rounded-none">
            {/* Mobile: Accordion */}
            <Accordion
              type="multiple"
              className="md:hidden"
              defaultValue={["company"]}
            >
              <AccordionItem value="company">
                <AccordionTrigger>Company</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5 text-sm text-left">
                    <li>
                      <button
                        onClick={() => handleNavClick("/")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Company Overview
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/services")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Our Capabilities
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/gallery")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Gallery
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/contact")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Global Locations
                      </button>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* Tablet & Desktop: Static list */}
            <div className="hidden md:block space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => handleNavClick("/")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Company Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Our Capabilities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/gallery")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/contact")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Global Locations
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Links - Accordion on mobile, static list on tablet/desktop */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 px-5 md:p-0 md:bg-transparent md:border-0 md:rounded-none">
            {/* Mobile: Accordion */}
            <Accordion
              type="multiple"
              className="md:hidden"
              defaultValue={["services"]}
            >
              <AccordionItem value="services">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2.5 text-sm text-slate-400 text-left">
                    <li>
                      <button
                        onClick={() => handleNavClick("/services")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        App Development
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/services")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        SEO Optimization
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/services")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Technical Writing
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/services")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Data Analysis & Strategy
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("/services")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Social Media Marketing
                      </button>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* Tablet & Desktop: Static list */}
            <div className="hidden md:block space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    App Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    SEO Optimization
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Technical Writing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Data Analysis & Strategy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Social Media Marketing
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-start sm:col-span-2 md:col-span-2 lg:col-span-1 rounded-2xl bg-white/[0.04] border border-white/10 p-5 md:p-0 md:bg-transparent md:border-0">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Reach our global headquarters or connect with our regional teams
              directly.
            </p>

            <div className="text-xs space-y-2 text-slate-400 w-full">
              <div className="flex items-center justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#62aff0] shrink-0" />
                <span>Baluwatar, Kalikamarg, Kathmandu</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Phone className="w-4 h-4 text-[#62aff0] shrink-0" />
                <a
                  href="tel:+977 981-3440643"
                  className="hover:text-white transition-colors"
                >
                  +977 981-3440643
                </a>
              </div>
              <div className="flex items-center justify-start gap-2">
                <Mail className="w-4 h-4 text-[#62aff0] shrink-0" />
                <a
                  href="mailto:hr@informatextech.com"
                  className="hover:text-white transition-colors"
                >
                  hr@informatextech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 lg:mt-14 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-5 md:rounded-none md:bg-transparent md:border-x-0 md:border-b-0 md:border-t md:border-slate-800/80 md:px-0 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p className="max-w-md sm:max-w-none">
            © {new Date().getFullYear()} Informatech Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Security SLA
            </span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute bottom-6 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/15 hidden lg:flex items-center justify-center text-slate-300 hover:bg-[#003152] hover:border-[#62aff0]/40 hover:text-[#62aff0] transition-all duration-200 hover:-translate-y-1 cursor-pointer z-10"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};
