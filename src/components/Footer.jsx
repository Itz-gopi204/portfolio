import { motion } from "framer-motion";
import { socialLinks, navLinks, heroInfo } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white text-2xl font-bold mb-4">{heroInfo.name}</h3>
            <p className="text-secondary text-sm leading-relaxed">
              AI/ML Engineer & Full-Stack Developer passionate about building intelligent systems that solve real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-secondary hover:text-[#915EFF] transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#achievements"
                  className="text-secondary hover:text-[#915EFF] transition-colors text-sm"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-secondary hover:text-[#915EFF] transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF]/20 transition-colors"
                >
                  <img src={link.icon} alt={link.name} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-secondary text-sm">
              gopimahamkali3101@gmail.com
            </p>
            <p className="text-secondary text-sm">
              +91 8309383698
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-sm"
            >
              {currentYear} {heroInfo.name}. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-sm flex items-center gap-2"
            >
              Built with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              using React & Three.js
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
