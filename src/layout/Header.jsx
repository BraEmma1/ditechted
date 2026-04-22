/**
 * Header.jsx
 * ─────────────────────────────────────────────────────────────
 * Sticky, responsive navbar for Ditechted.
 *
 * Features:
 *  - Transparent → frosted glass on scroll
 *  - Desktop nav with animated underline hover
 *  - Accent CTA button with scale hover
 *  - Mobile: hamburger → slide-in panel (Framer Motion)
 *  - Body scroll lock when mobile menu is open
 */

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logos/DITECTED-14.png";

// ─── Navigation links ─────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

// ─── Animation variants ───────────────────────────────────────
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 26, stiffness: 220 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ─── Component ────────────────────────────────────────────────
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection → toggle frosted glass
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when viewport hits desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Sticky Header Bar ───────────────────────────────── */}
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-in-out border-b",
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent border-transparent py-2",
        ].join(" ")}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── Logo ──────────────────────────────────────── */}
            <Link
              to="/"
              className="flex items-center select-none group"
              aria-label="Ditechted home"
            >
              <img
                src={logo}
                alt="Ditechted"
                className="h-8 w-80 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* ── Right side: Nav + CTA ─────────────────────── */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* ── Desktop Navigation ────────────────────────── */}
              <nav
                className="hidden lg:flex items-center gap-1 p-1.5 rounded-full"
                aria-label="Main navigation"
              >
                {NAV_LINKS.map(({ label, to }) => (
                  <NavLink
                    key={label}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      [
                        "relative px-5 py-2 text-[14px] font-semibold rounded-full",
                        "transition-all duration-300 ease-out",
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* ── Desktop CTA + Mobile Hamburger ────────────── */}
              <div className="flex items-center gap-3">
                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={[
                    "hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap",
                    "px-6 py-2.5 rounded-full",
                    "bg-primary text-white text-[14px] font-semibold",
                    "shadow-[0_4px_14px_rgba(0,199,252,0.3)]",
                    "transition-all duration-300",
                    "hover:bg-support hover:shadow-[0_6px_20px_rgba(0,199,252,0.4)] hover:-translate-y-[2px]",
                    "active:scale-95 active:translate-y-0",
                  ].join(" ")}
                >
                  Start a Project
                </Link>

                {/* Hamburger toggle */}
                <button
                  onClick={() => setMenuOpen(true)}
                  className={[
                    "lg:hidden flex items-center justify-center",
                    "w-10 h-10 rounded-full bg-white/80 border border-slate-200 text-slate-700 shadow-sm",
                    "hover:bg-slate-50 transition-all duration-200",
                    "active:scale-95"
                  ].join(" ")}
                  aria-label="Open navigation menu"
                  aria-expanded={menuOpen}
                >
                  <Menu size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu (AnimatePresence for exit animation) ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim backdrop */}
            <motion.div
              key="mobile-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.aside
              key="mobile-panel"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={[
                "fixed top-0 right-0 bottom-0 z-50",
                "w-80 max-w-[85vw]",
                "bg-white flex flex-col",
                "shadow-2xl lg:hidden",
              ].join(" ")}
              aria-label="Mobile navigation"
            >
              {/* Panel top bar */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 shrink-0">
                <img
                  src={logo}
                  alt="Ditechted"
                  className="h-1 w-auto object-contain"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Nav links — staggered */}
              <nav className="flex flex-col px-4 py-6 gap-0.5 flex-1 overflow-y-auto">
                {NAV_LINKS.map(({ label, to }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 + i * 0.055,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <NavLink
                      to={to}
                      end={to === "/"}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        [
                          "flex items-center px-4 py-3 rounded-xl",
                          "text-[0.9375rem] font-medium",
                          "transition-colors duration-150",
                          isActive
                            ? "text-primary bg-blue-50"
                            : "text-slate-700 hover:text-primary hover:bg-slate-50",
                        ].join(" ")
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Panel CTA */}
              <div className="px-5 pb-8 pt-2 shrink-0">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "flex items-center justify-center w-full",
                    "px-5 py-3.5 rounded-full",
                    "bg-accent text-slate-900 text-sm font-semibold",
                    "transition-all duration-200",
                    "hover:shadow-[0_4px_20px_rgba(0,199,252,0.35)] active:scale-95",
                  ].join(" ")}
                >
                  Start a Project
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
