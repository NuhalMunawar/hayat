"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leaders = [
  {
    name: "Capt. Md Showkat Hossain Chowdhury",
    title: "Chairman — Hayat Life Care",
    bio: "A seasoned Master Mariner and Chairman of Hayat Holdings and Marinus Pvt. Ltd., Capt. Showkat brings visionary leadership forged across the marine and construction industries at both national and international levels. His track record of strategic growth and forward-thinking initiatives shapes the foundation of Hayat Life Care.",
    initials: "SC",
  },
  {
    name: "Dr. Mohammad Azizul Haque",
    title: "Managing Director — Hayat Life Care",
    bio: "Founder of Park View Hospital, Ekhusey Hospital, Delta Hospital and Treatment Hospital in Chattogram, Dr. Azizul is one of the Port City's most accomplished healthcare entrepreneurs. An Associate Professor at Chattogram Medical College & Hospital, he leads Hayat Life Care with a firm commitment to clinical excellence and hospital management best practices.",
    initials: "AH",
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Leadership
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#0B1E3D] font-semibold leading-tight">
            Led by Proven Founders
          </h2>
          <p className="mt-5 text-[#1A1A1A]/60 max-w-lg mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            The team behind Hayat Life Care has already built and operated multiple hospitals
            across Chattogram.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-[#E8E3DA] rounded-sm p-8 hover:border-[#C5A84F]/50 hover:shadow-md transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#0B1E3D] flex items-center justify-center mb-6">
                <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#C5A84F]">
                  {l.initials}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B1E3D] mb-1">
                {l.name}
              </h3>
              <p className="text-[#C5A84F] text-sm font-medium mb-4 font-[family-name:var(--font-inter)]">
                {l.title}
              </p>
              <p className="text-[#1A1A1A]/65 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                {l.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
