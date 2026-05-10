"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "First PET-CT Scan in Chattogram",
    desc: "State-of-the-art PET-CT imaging for advanced cancer detection and monitoring — a first in the region, bringing global diagnostics locally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.22-6.78-1.42 1.42M6.64 17.36l-1.42 1.42m0-12.86 1.42 1.42M17.36 17.36l1.42 1.42" />
      </svg>
    ),
  },
  {
    title: "Dedicated Women's Diagnostic Floor",
    desc: "An entire floor exclusively for women — ensuring privacy, comfort, and dignity in every aspect of healthcare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v8m-3-3h6" />
      </svg>
    ),
  },
  {
    title: "AI-Enabled Paperless Healthcare",
    desc: "App-based appointments, digital reports, and AI-driven diagnostics for a seamless, modern patient experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6m-6 4h6m-6 4h4" />
      </svg>
    ),
  },
  {
    title: "Global Hospital Partnerships",
    desc: "Collaborations with Bumrungrad, Apollo, Tata Memorial, Fortis, Narayana Health, and more — ensuring continuity of care beyond borders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c-3.5 4-3.5 16 0 20M12 2c3.5 4 3.5 16 0 20" />
      </svg>
    ),
  },
  {
    title: "Waiting Becomes Family Time",
    desc: "Restaurant, juice bar, and kids' amusement park — families stay engaged and comfortable throughout every visit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Zero Bank Loan",
    desc: "100% shareholder-funded. No debt burden — your investment is secured by real, tangible assets with complete financial transparency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Single Unified Management",
    desc: "All 11 business wings under one management team — consistent quality, seamless coordination, and full accountability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Largest in Chattogram",
    desc: "The biggest integrated diagnostic and specialist consultation center in Chattogram's medical hub — right beside CMCH.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21h18M9 21V7l3-4 3 4v14M9 21H5V11l4-2M15 21h4V11l-4-2" />
      </svg>
    ),
  },
];

export default function WhatMakesUsDifferent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Our Uniqueness
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#0B1E3D] font-semibold leading-tight">
            What Makes Hayat{" "}
            <em className="text-[#C5A84F] not-italic">Truly Different</em>
          </h2>
          <p className="mt-5 text-[#1A1A1A]/60 max-w-xl mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            First of its kind in Chattogram — designed to set new standards in
            integrated healthcare, patient experience, and investment security.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[#F9F6F0] border border-[#E8E3DA] rounded-sm p-6 hover:border-[#C5A84F]/60 hover:shadow-md transition-all duration-300"
            >
              <div className="text-[#C5A84F] mb-4">{f.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-[#0B1E3D] text-base font-semibold mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
