"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F9F6F0] py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — label + headline + pull quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-5 font-[family-name:var(--font-inter)]">
              About Hayat Life Care
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#0B1E3D] font-semibold leading-tight mb-8">
              More Than a Hospital.{" "}
              <em className="text-[#C5A84F]">A Lifestyle Destination.</em>
            </h2>

            <blockquote className="border-l-2 border-[#C5A84F] pl-5 mb-8">
              <p className="font-[family-name:var(--font-playfair)] text-lg italic text-[#0B1E3D] leading-relaxed">
                &ldquo;Built with purpose, driven by innovation, and guided by heart — to save
                and serve the generation.&rdquo;
              </p>
              <cite className="mt-2 block text-sm text-[#1A1A1A]/50 not-italic font-[family-name:var(--font-inter)]">
                — Founder Directors, Hayat Life Care
              </cite>
            </blockquote>

            {/* Stat strip */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "4,950", l: "Total shares available" },
                { v: "৳10L", l: "Per share (first phase)" },
                { v: "5%", l: "Buyback over 3 years" },
                { v: "100%", l: "Shareholder-funded" },
              ].map((s) => (
                <div key={s.v} className="bg-white border border-[#E8E3DA] rounded-sm px-5 py-4">
                  <div className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0B1E3D]">
                    {s.v}
                  </div>
                  <div className="text-[#1A1A1A]/50 text-xs mt-1 font-[family-name:var(--font-inter)]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — body copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="pt-2"
          >
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
              Hayat Life Care envisions becoming Chattogram&apos;s first holistic healthcare
              destination — where expert medical care, advanced diagnostics, and everyday
              convenience exist under one roof.
            </p>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
              From specialist consultations and AI-powered diagnostics to a restaurant, pharmacy,
              superstore, and children&apos;s play zone — Hayat is designed so families never
              have to choose between healthcare and comfort.
            </p>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
              Positioned directly adjacent to Chattogram Medical College Hospital on O.R. Nizam
              Road — the highest-footfall medical corridor in the Port City — Hayat Life Care
              captures an audience that is already there.
            </p>

            <a
              href="#investment"
              className="inline-flex items-center gap-2 text-[#0B1E3D] font-semibold text-sm border-b border-[#0B1E3D]/30 hover:border-[#C5A84F] hover:text-[#C5A84F] transition-all duration-200 font-[family-name:var(--font-inter)] pb-0.5"
            >
              View investment tiers →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
