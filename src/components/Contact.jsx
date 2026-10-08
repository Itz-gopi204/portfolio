import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { email, phone, socialLinks } from "../constants";
import Reveal from "./Reveal";

const Contact = () => {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio note from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setLoading(false);
      setStatus("opened");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Gopi",
          from_email: form.email,
          to_email: email,
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-line bg-night/60 px-4 py-3 text-cream outline-none transition placeholder:text-mist/60 focus:border-mint";

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">Contact</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">Say hello</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-mist">
            If you have a role, a project, or a problem worth building for, send a note. I read everything.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a className="text-cream transition-colors hover:text-mint" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
            <li>
              <a className="text-cream transition-colors hover:text-mint" href={`tel:${phone.replace(/\s/g, "")}`}>
                {phone}
              </a>
            </li>
            {socialLinks
              .filter((link) => link.name !== "Email")
              .map((link) => (
                <li key={link.name}>
                  <a className="text-cream transition-colors hover:text-mint" href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={reduce ? undefined : { y: -4 }}
            className="rounded-2xl border border-line bg-card/80 p-6 shadow-glow sm:p-7"
          >
            <label className="block text-sm text-cream" htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={fieldClass}
                placeholder="Your name"
              />
            </label>
            <label className="mt-4 block text-sm text-cream" htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={fieldClass}
                placeholder="you@email.com"
              />
            </label>
            <label className="mt-4 block text-sm text-cream" htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={fieldClass}
                placeholder="What would you like to talk about?"
              />
            </label>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="mt-5 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-night disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send message"}
            </motion.button>
            {status === "sent" && <p className="mt-3 text-sm text-mint">Message sent. I'll get back to you.</p>}
            {status === "opened" && (
              <p className="mt-3 text-sm text-mint">Your email app should be open with the message ready.</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-500">That didn't send. Email me directly at {email}.</p>
            )}
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
