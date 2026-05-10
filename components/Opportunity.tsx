"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "55 Katha", label: "Prime Land, O.R. Nizam Road" },
  { value: "14 Floors", label: "+ 3 Basements" },
  { value: "11", label: "Revenue-Generating Wings" },
  { value: "150+", label: "Paid Parking Spaces" },
];

export default function Opportunity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-[#0B1E3D] py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            The Opportunity
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-white font-semibold leading-tight">
            Chattogram&apos;s Healthcare Gap Is{" "}
            <em className="text-[#C5A84F] not-italic">Your Entry Point</em>
          </h2>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            The Port City of Bangladesh has no fully integrated, all-under-one-roof medical and
            lifestyle complex. Hayat Life Care fills that gap — positioned directly adjacent to
            Chattogram Medical College Hospital, on 55 Katha of prime land.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0B1E3D] px-8 py-10 text-center hover:bg-[#122847] transition-colors duration-200"
            >
              <div className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#C5A84F] mb-2">
                {s.value}
              </div>
              <div className="text-white/50 text-sm font-[family-name:var(--font-inter)] leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
