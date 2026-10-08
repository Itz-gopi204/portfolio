import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, resumeUrl } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-night/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-serif text-lg tracking-tight text-cream">
          Gopi
        </a>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className={`relative text-sm transition-colors ${
                active === link.id ? "text-cream" : "text-mist hover:text-cream"
              }`}
            >
              {link.title}
              {active === link.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-mint"
                />
              )}
            </button>
          ))}
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-night"
          >
            Resume
          </motion.a>
        </nav>

        <div className="flex items-center gap-2 md:ml-5">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full border border-line px-3 py-1.5 text-sm text-cream md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-night/95 px-5 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="block w-full py-3 text-left text-base text-cream"
              >
                {link.title}
              </button>
            ))}
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-block py-3 text-mint">
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
