"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");
    const mailto = `mailto:info@hayatlifecare.com?subject=Investment Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#07152B] py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-white font-semibold leading-tight">
            Ready to Be Part of
            <br />
            <em className="text-[#C5A84F] not-italic">Something Historic?</em>
          </h2>
          <p className="mt-5 text-white/60 max-w-lg mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            Speak directly with the founders. A limited number of shares remain available
            in the first phase.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                  Call Us Directly
                </p>
                <a
                  href="tel:01335074940"
                  className="block font-[family-name:var(--font-playfair)] text-3xl text-[#C5A84F] hover:text-[#D4BC72] transition-colors mb-2"
                >
                  01335-074940
                </a>
                <a
                  href="tel:01335074941"
                  className="block font-[family-name:var(--font-playfair)] text-3xl text-[#C5A84F] hover:text-[#D4BC72] transition-colors"
                >
                  01335-074941
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/8801335074940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-[#C5A84F] transition-colors text-base font-[family-name:var(--font-inter)]"
                >
                  <span className="text-xl">💬</span>
                  Message on WhatsApp
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                  Email
                </p>
                <a
                  href="mailto:info@hayatlifecare.com"
                  className="text-white/80 hover:text-[#C5A84F] transition-colors text-base font-[family-name:var(--font-inter)]"
                >
                  info@hayatlifecare.com
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                  Office Hours
                </p>
                <p className="text-white/70 text-base font-[family-name:var(--font-inter)]">
                  10:00 AM – 9:00 PM, Every Day
                </p>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                  Head Office
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                  Mishmak Manjuri, Badshah Miah Road
                  <br />
                  Ameerbag, Chattogram
                </p>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
                  Project Site
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                  Manashi, O.R. Nizam Road
                  <br />
                  Chattogram (West of CMCH)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-[#C5A84F]/30 rounded-sm p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#C5A84F] mb-2">
                  Thank you
                </h3>
                <p className="text-white/60 text-sm font-[family-name:var(--font-inter)]">
                  Your email client should have opened. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C5A84F] transition-colors font-[family-name:var(--font-inter)]"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C5A84F] transition-colors font-[family-name:var(--font-inter)]"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C5A84F] transition-colors font-[family-name:var(--font-inter)]"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-inter)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your interest in investing..."
                    className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C5A84F] transition-colors resize-none font-[family-name:var(--font-inter)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C5A84F] hover:bg-[#D4BC72] text-[#0B1E3D] font-semibold py-4 rounded text-sm tracking-wide transition-colors duration-200 font-[family-name:var(--font-inter)]"
                >
                  Send Inquiry
                </button>
                <p className="text-white/30 text-xs text-center font-[family-name:var(--font-inter)]">
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
