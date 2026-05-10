"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F9F6F0] py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-5 font-[family-name:var(--font-inter)]">
              About Hayat Life Care
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#0B1E3D] font-semibold leading-tight mb-6">
              More Than a Hospital.{" "}
              <em className="text-[#C5A84F]">A Lifestyle Destination.</em>
            </h2>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
              Hayat Life Care envisions becoming Chattogram&apos;s first holistic healthcare
              destination — where expert medical care, advanced diagnostics, and everyday
              convenience exist under one roof.
            </p>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
              From specialist consultations and AI-powered diagnostics to a restaurant, pharmacy,
              superstore, and children&apos;s play zone — Hayat is designed so families never have
              to choose between healthcare and comfort.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-[#C5A84F] pl-5">
              <p className="font-[family-name:var(--font-playfair)] text-lg italic text-[#0B1E3D] leading-relaxed">
                &ldquo;Built with purpose, driven by innovation, and guided by heart — to save
                and serve the generation.&rdquo;
              </p>
              <cite className="mt-2 block text-sm text-[#1A1A1A]/50 not-italic font-[family-name:var(--font-inter)]">
                — Founder Directors, Hayat Life Care
              </cite>
            </blockquote>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm shadow-2xl aspect-[3/4]">
              <Image
                src="https://hayatlifecare.com/images/hayat-exterior-vertical.jpg"
                alt="Hayat Life Care Complex"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -left-6 bg-[#0B1E3D] text-white px-6 py-5 rounded-sm shadow-xl">
              <div className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#C5A84F]">
                Sister Concern
              </div>
              <div className="text-white/60 text-sm mt-1 font-[family-name:var(--font-inter)]">
                of Hayat Holdings
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
