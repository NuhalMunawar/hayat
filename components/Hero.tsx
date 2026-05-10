"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://hayatlifecare.com/images/hayat-exterior-new.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E3D]/85 via-[#0B1E3D]/70 to-[#0B1E3D]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#C5A84F] text-sm font-medium tracking-[0.2em] uppercase mb-6"
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
          className="font-[family-name:var(--font-inter)] text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
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
            className="px-8 py-4 bg-[#C5A84F] hover:bg-[#D4BC72] text-[#0B1E3D] font-semibold rounded tracking-wide transition-colors duration-200 text-sm"
          >
            Explore the Opportunity
          </a>
          <a
            href="tel:01335074940"
            className="px-8 py-4 border border-white/40 hover:border-[#C5A84F] text-white hover:text-[#C5A84F] font-medium rounded tracking-wide transition-all duration-200 text-sm"
          >
            Call Us Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#C5A84F]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
