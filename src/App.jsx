import { motion } from "framer-motion";
import { About, Achievements, Contact, Experience, Hero, Navbar, Works } from "./components";
import Backdrop from "./components/Backdrop";
import { phone, socialLinks } from "./constants";

const App = () => {
  return (
    <div className="relative min-h-screen bg-night text-cream">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Achievements />
        <Contact />
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-line"
      >
        <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-serif text-base text-cream">Gopi Jagadheesh</p>
            <p className="mt-1">
              Software & AI engineer · RGUKT Nuzvid ·{" "}
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-cream">
                {phone}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} className="hover:text-cream" target={link.name === "Email" ? undefined : "_blank"} rel="noreferrer">
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
