"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1E3D]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg1.jpeg')" }}
      />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#1a3a6e33_0%,transparent_70%)]" />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #C5A84F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal accent line — top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            background:
              "conic-gradient(from 200deg at 100% 0%, #C5A84F 0deg, transparent 60deg)",
          }}
        />
      </div>

      {/* Gold accent bar — bottom left */}
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-[#C5A84F] opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#C5A84F] text-sm font-medium tracking-[0.2em] uppercase mb-6 font-[family-name:var(--font-inter)]"
        >
          Founding Investor Opportunity · Chattogram, Bangladesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
        >
          Chattogram&apos;s Most Ambitious
          <br />
          <em className="text-[#C5A84F] not-italic">Healthcare Investment</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-inter)] text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A 14-floor integrated medical and lifestyle complex on O.R. Nizam Road —
          built with zero bank debt, backed by proven hospital founders, and open
          to a limited number of founding investors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#investment"
            className="px-8 py-4 bg-[#C5A84F] hover:bg-[#D4BC72] text-[#0B1E3D] font-semibold rounded tracking-wide transition-colors duration-200 text-sm font-[family-name:var(--font-inter)]"
          >
            Explore the Opportunity
          </a>
          <a
            href="tel:01335074940"
            className="px-8 py-4 border border-white/30 hover:border-[#C5A84F] text-white/80 hover:text-[#C5A84F] font-medium rounded tracking-wide transition-all duration-200 text-sm font-[family-name:var(--font-inter)]"
          >
            Call Us Now
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-white/35 text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]"
        >
          <span>RJSC Registered</span>
          <span className="text-white/15">·</span>
          <span>Zero Bank Debt</span>
          <span className="text-white/15">·</span>
          <span>Buyback Guarantee</span>
          <span className="text-white/15">·</span>
          <span>Hayat Holdings</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#C5A84F]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
