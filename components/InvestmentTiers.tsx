"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Bronze",
    nameColor: "#CD7F32",
    amount: "৳10,00,000",
    shares: "1 share",
    benefits: ["Lifetime financial benefit", "Personal health access", "Social recognition & share certificate"],
    highlight: false,
  },
  {
    name: "Silver",
    nameColor: "#A8A9AD",
    amount: "৳20,00,000 – ৳39,00,000",
    shares: "2+ shares",
    benefits: ["Lifetime financial benefit", "Personal health access", "Partner health access", "Social recognition & share certificate"],
    highlight: false,
  },
  {
    name: "Gold",
    nameColor: "#C5A84F",
    amount: "৳50,00,000 – ৳89,00,000",
    shares: "5+ shares",
    benefits: ["Lifetime financial benefit", "Personal & partner health access", "Family health access", "Social recognition & share certificate"],
    highlight: false,
  },
  {
    name: "Platinum",
    nameColor: "#E5E4E2",
    amount: "৳1,00,00,000 – ৳1,39,00,000",
    shares: "10+ shares",
    benefits: ["Lifetime financial benefit", "Full family health access", "Parents included", "Social recognition & share certificate"],
    highlight: true,
  },
  {
    name: "Diamond",
    nameColor: "#B9F2FF",
    amount: "৳1,50,00,000 – ৳1,90,00,000",
    shares: "15+ shares",
    benefits: ["Lifetime financial benefit", "Full family + parents health access", "Parents-in-law included", "Social recognition & share certificate"],
    highlight: true,
  },
  {
    name: "VIP Director",
    nameColor: "#C5A84F",
    amount: "৳2,00,00,000+",
    shares: "20+ shares",
    benefits: ["Lifetime financial benefit", "VIP access to all facilities", "Full family + parents + in-laws", "Social recognition & share certificate"],
    highlight: true,
  },
];

export default function InvestmentTiers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="investment" className="bg-[#F9F6F0] py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Investment Tiers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#0B1E3D] font-semibold leading-tight">
            Pathways to Prestige Ownership
          </h2>
          <p className="mt-5 text-[#1A1A1A]/60 max-w-xl mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            Ownership includes all 11 business wings with proportionate full land ownership.
            Share price: <strong className="text-[#0B1E3D]">৳10 Lacs per share</strong> (first phase).
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-sm p-7 border transition-all duration-300 ${
                t.highlight
                  ? "bg-[#0B1E3D] border-[#C5A84F]/40 shadow-xl"
                  : "bg-white border-[#E8E3DA] hover:border-[#C5A84F]/50 hover:shadow-md"
              }`}
            >
              {t.highlight && (
                <span className="inline-block text-[#0B1E3D] bg-[#C5A84F] text-xs font-semibold px-3 py-1 rounded-full mb-4 font-[family-name:var(--font-inter)] tracking-wide">
                  Become a Director
                </span>
              )}
              <h3
                className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-1"
                style={{ color: t.nameColor }}
              >
                {t.name}
              </h3>
              <p
                className={`text-sm font-medium mb-1 font-[family-name:var(--font-inter)] ${
                  t.highlight ? "text-white/80" : "text-[#1A1A1A]/70"
                }`}
              >
                {t.amount}
              </p>
              <p
                className={`text-xs mb-6 font-[family-name:var(--font-inter)] ${
                  t.highlight ? "text-[#C5A84F]/70" : "text-[#1A1A1A]/40"
                }`}
              >
                Minimum {t.shares}
              </p>
              <ul className="space-y-2.5">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-[#C5A84F] flex-shrink-0">✓</span>
                    <span
                      className={`text-sm font-[family-name:var(--font-inter)] leading-snug ${
                        t.highlight ? "text-white/70" : "text-[#1A1A1A]/65"
                      }`}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#1A1A1A]/50 mb-6 font-[family-name:var(--font-inter)]">
            A limited number of shares are available.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#0B1E3D] hover:bg-[#122847] text-white font-semibold rounded text-sm tracking-wide transition-colors duration-200 font-[family-name:var(--font-inter)]"
          >
            Register Your Interest
          </a>
        </motion.div>
      </div>
    </section>
  );
}
