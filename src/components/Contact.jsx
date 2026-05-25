import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";

const inputClass =
  "w-full bg-[#0d0b1a] border border-white/10 focus:border-[#915EFF]/70 py-4 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none font-medium transition-all duration-200 focus:shadow-[0_0_16px_rgba(145,94,255,0.2)]";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId  = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: open mailto if EmailJS not configured
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(`mailto:gopimahamkali3101@gmail.com?subject=${subject}&body=${body}`);
      setLoading(false);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name:  form.name,
          to_name:    "Gopi",
          from_email: form.email,
          to_email:   "gopimahamkali3101@gmail.com",
          message:    form.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        setStatus("error");
        console.error(error);
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0d0b1a] border border-white/8 p-8 rounded-2xl"
        style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col gap-2">
            <span className="text-white/80 text-[14px] font-semibold uppercase tracking-wider">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white/80 text-[14px] font-semibold uppercase tracking-wider">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-white/80 text-[14px] font-semibold uppercase tracking-wider">
              Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              required
              className={`${inputClass} resize-none`}
            />
          </label>

          {/* Status messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3"
              >
                <span className="text-2xl">✅</span>
                <p className="text-emerald-400 text-[14px] font-medium">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
              >
                <span className="text-2xl">⚠️</span>
                <p className="text-red-400 text-[14px] font-medium">
                  Something went wrong. Try emailing directly at{" "}
                  <a
                    href="mailto:gopimahamkali3101@gmail.com"
                    className="underline"
                  >
                    gopimahamkali3101@gmail.com
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="relative w-fit py-3 px-10 rounded-xl text-white font-bold text-[15px] overflow-hidden transition-all duration-200 disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #915EFF 0%, #7c3aed 100%)",
              boxShadow: "0 4px 20px rgba(145,94,255,0.35)",
            }}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Direct contact links */}
        <div className="mt-8 pt-6 border-t border-white/8">
          <p className="text-secondary text-[13px] mb-4 uppercase tracking-wider font-semibold">
            Or reach me directly
          </p>
          <div className="flex flex-row gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full flex justify-center items-center transition-all duration-200"
                style={{
                  background: "rgba(21,16,48,0.8)",
                  border: "1px solid rgba(145,94,255,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(145,94,255,0.4)";
                  e.currentTarget.style.borderColor = "rgba(145,94,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(145,94,255,0.25)";
                }}
                title={link.name}
              >
                <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
