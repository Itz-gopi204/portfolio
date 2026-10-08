import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const reduce = useReducedMotion();
  const [light, setLight] = useState(() => document.documentElement.classList.contains("light"));

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    try {
      localStorage.setItem("theme", light ? "light" : "dark");
    } catch (e) {}
  }, [light]);

  return (
    <motion.button
      type="button"
      onClick={() => setLight((value) => !value)}
      whileTap={reduce ? undefined : { scale: 0.9 }}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Dark mode" : "Light mode"}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-line bg-card/70 text-cream transition-colors hover:border-mint/50"
    >
      <AnimatePresence initial={false}>
        <motion.svg
          key={light ? "moon" : "sun"}
          initial={reduce ? false : { rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          viewBox="0 0 24 24"
          className="absolute inset-0 m-auto h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {light ? (
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          )}
        </motion.svg>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
