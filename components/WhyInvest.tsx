"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: "🏛️",
    title: "Zero Bank Debt",
    body: "Hayat Life Care is 100% shareholder-funded. No loan exposure, no bank dependency — your investment drives the project directly.",
  },
  {
    icon: "📋",
    title: "RJSC Registered",
    body: "Fully incorporated and registered under RJSC, Bangladesh. Complete legal transparency and investor protection.",
  },
  {
    icon: "🔄",
    title: "Buyback Guarantee",
    body: "A 5% buyback guarantee over 3 years gives investors a clear, contractual exit path — a commitment rare in early-stage projects.",
  },
  {
    icon: "📍",
    title: "Prime Location",
    body: "Directly adjacent to Chattogram Medical College Hospital — the highest-footfall medical address in the Port City.",
  },
];

export default function WhyInvest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0B1E3D] py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Why Invest
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-white font-semibold leading-tight">
            Built on Fundamentals That{" "}
            <em className="text-[#C5A84F] not-italic">Protect Your Capital</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/10 hover:border-[#C5A84F]/40 transition-all duration-300"
            >
              <div className="text-3xl mb-5">{r.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#C5A84F] mb-3">
                {r.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
