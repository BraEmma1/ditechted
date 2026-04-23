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
import logo from "../assets/Logos/DITECT-14.svg";
import logoDark from "../assets/Logos/DITECT-15.svg";
import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "../components/ThemeProvider";

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
  const { theme } = useTheme();

  // Resolve which logo to show
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const activeLogo = isDark ? logoDark : logo;

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
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-none"
            : "bg-transparent border-transparent py-2",
        ].join(" ")}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── Logo ──────────────────────────────────────── */}
            <Link
              to="/"
              className="flex items-center select-none group -ml-1 sm:ml-0"
              aria-label="Ditechted home"
            >
              <img
                src={activeLogo}
                alt="Ditechted"
                className="h-6 sm:h-7 md:h-8 w-70 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* ── Right side: Nav + CTA ─────────────────────── */}
            <div className="flex items-center gap-4 lg:gap-6">
                <nav
                className="hidden lg:flex items-center gap-2"
                aria-label="Main navigation"
              >
                {NAV_LINKS.map(({ label, to }) => (
                  <NavLink
                    key={label}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      [
                        "relative px-4 py-2 text-[14px] font-semibold",
                        "transition-colors duration-300 ease-out",
                        isActive
                          ? "text-primary dark:text-accent"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white",
                        "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-primary dark:after:bg-accent after:rounded-full after:transition-transform after:duration-300",
                        isActive
                          ? "after:scale-x-100"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* ── Desktop CTA + Mobile Hamburger ────────────── */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <ThemeToggle />
                
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
                    "w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm",
                    "hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200",
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
                "bg-white dark:bg-slate-900 flex flex-col",
                "shadow-2xl lg:hidden",
              ].join(" ")}
              aria-label="Mobile navigation"
            >
              {/* Panel top bar */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <img
                  src={activeLogo}
                  alt="Ditechted"
                  className="h-5 sm:h-6 w-auto object-contain -ml-1"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
                          "relative flex items-center px-4 py-3 rounded-xl",
                          "text-[0.9375rem] font-medium",
                          "transition-colors duration-150",
                          isActive
                            ? "text-primary dark:text-accent bg-blue-50/50 dark:bg-white/5 after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-1/2 after:w-1 after:bg-primary dark:after:bg-accent after:rounded-r-md"
                            : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent hover:bg-slate-50 dark:hover:bg-slate-800/50",
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
