import { motion } from "framer-motion";
import {
  About,
  Achievements,
  CaseStudies,
  Contact,
  Experience,
  Focus,
  Hero,
  Navbar,
  Works,
} from "./components";
import Backdrop from "./components/Backdrop";
import { phone, socialLinks } from "./constants";

const App = () => {
  return (
    <div className="relative min-h-screen bg-night/90 text-cream">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Experience />
        <Works />
        <CaseStudies />
        <Achievements />
        <Contact />
      </main>
      <motion.footer
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky bottom-0 z-30 border-t border-line bg-night/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-page items-center gap-4 px-5 py-2.5 text-xs text-mist sm:px-8">
          <div className="min-w-0 flex-1">
            <p className="truncate">
              <span className="font-serif text-sm text-cream">Gopi Mahamkali</span>
              <span className="hidden md:inline">
                {" "}· Software & AI engineer · Rajiv Gandhi University of Knowledge Technologies, Nuzvid
              </span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-x-4 overflow-x-auto">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="whitespace-nowrap text-cream hover:text-mint">
              {phone}
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`whitespace-nowrap hover:text-cream ${link.name === "Email" ? "" : "hidden sm:inline"}`}
                target={link.name === "Email" ? undefined : "_blank"}
                rel="noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
