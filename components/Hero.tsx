"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1E3D]">
      {/* Ambient radial glow — gold, top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(197,168,79,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Subtle bottom fade to slightly darker navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07152B]/60 pointer-events-none" />

      {/* Decorative corner lines — top-left */}
      <svg
        className="absolute top-10 left-10 opacity-20"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <line x1="0" y1="0" x2="80" y2="0" stroke="#C5A84F" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="80" stroke="#C5A84F" strokeWidth="1" />
      </svg>

      {/* Decorative corner lines — bottom-right */}
      <svg
        className="absolute bottom-10 right-10 opacity-20"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <line x1="80" y1="80" x2="0" y2="80" stroke="#C5A84F" strokeWidth="1" />
        <line x1="80" y1="80" x2="80" y2="0" stroke="#C5A84F" strokeWidth="1" />
      </svg>

      {/* Thin horizontal rule — decorative center bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[80vw] h-px bg-gradient-to-r from-transparent via-[#C5A84F]/25 to-transparent"
        style={{ marginTop: "6rem" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Overline label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="block w-10 h-px bg-[#C5A84F]/50" />
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.25em] uppercase">
            Founding Investor Opportunity · Chattogram, Bangladesh
          </p>
          <span className="block w-10 h-px bg-[#C5A84F]/50" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.12] tracking-tight mb-6"
        >
          Chattogram&apos;s Most Ambitious
          <br />
          <span className="text-[#C5A84F]">Healthcare Investment</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="font-[family-name:var(--font-inter)] text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A 14-floor integrated medical and lifestyle complex on O.R. Nizam Road —
          built with zero bank debt, backed by proven hospital founders, and open
          to a limited number of founding investors.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#investment"
            className="px-9 py-4 bg-[#C5A84F] hover:bg-[#D4BC72] text-[#0B1E3D] font-semibold rounded-sm tracking-widest transition-colors duration-200 text-sm uppercase"
          >
            Explore the Opportunity
          </a>
          <a
            href="tel:01335074940"
            className="px-9 py-4 border border-white/20 hover:border-[#C5A84F]/60 text-white/70 hover:text-[#C5A84F] font-medium rounded-sm tracking-widest transition-all duration-200 text-sm uppercase"
          >
            Call Us Now
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-white/25 text-xs tracking-widest uppercase"
        >
          Regulated · Transparent · Debt-Free
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#C5A84F]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
