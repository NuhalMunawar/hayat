"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const floors = [
  {
    label: "B",
    name: "Basement",
    subtitle: "Paid Car Parking",
    desc: "Three basement levels with 150+ paid parking spaces, CCTV surveillance, and valet service — safe and accessible around the clock.",
    img: "https://hayatlifecare.com/images/wings/floor_basement.jpg",
    tag: "Parking",
  },
  {
    label: "G",
    name: "Ground Floor",
    subtitle: "Retail & Daily Essentials",
    desc: "Super shop, pharmacy, ATM booth, optical shop, and coffee shop — daily essentials and healthcare convenience right at the entrance.",
    img: "https://hayatlifecare.com/images/wings/gallery_supershop.jpg",
    tag: "Retail",
  },
  {
    label: "1",
    name: "Level 1",
    subtitle: "Reception & Waiting",
    desc: "Premium patient reception and registration. A spacious, calm, and welcoming first point of care designed for comfort and ease.",
    img: "https://hayatlifecare.com/images/wings/floor_level1.jpg",
    tag: "Reception",
  },
  {
    label: "2",
    name: "Level 2",
    subtitle: "Restaurant & Juice Bar",
    desc: "Hygienic restaurant and juice bar with nutritious, diabetic-friendly and heart-healthy menus — so families can dine comfortably while patients are cared for.",
    img: "https://hayatlifecare.com/images/wings/floor_level2.jpg",
    tag: "Dining",
  },
  {
    label: "3",
    name: "Level 3",
    subtitle: "Diagnostic Laboratory",
    desc: "International-standard pathology lab from clinical chemistry through immunology. Advanced testing powered by AI-driven diagnostic equipment.",
    img: "https://hayatlifecare.com/images/wings/floor_level3.jpg",
    tag: "Diagnostics",
  },
  {
    label: "5",
    name: "Level 5",
    subtitle: "Doctor's Chambers",
    desc: "Private, fully-equipped consultation rooms for all medical specialties — experienced physicians available for scheduled appointments and walk-ins.",
    img: "https://hayatlifecare.com/images/wings/floor_level5.jpg",
    tag: "Consultation",
  },
  {
    label: "9+",
    name: "Upper Floors",
    subtitle: "Specialized Hospital",
    desc: "Chattogram's first specialized hospital — Cancer Institute, Cardiology, Nephrology, Gynaecology & Obstetrics, and Fertility Institute. A landmark for the region.",
    img: "https://hayatlifecare.com/images/wings/floor_above9.jpg",
    tag: "Hospital",
  },
];

export default function FloorPlan() {
  const [active, setActive] = useState(0);
  const floor = floors[active];

  return (
    <section id="floorplan" className="bg-[#F9F6F0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            Floor by Floor
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#0B1E3D] font-semibold leading-tight">
            14 Floors.{" "}
            <em className="text-[#C5A84F] not-italic">One Vision.</em>
          </h2>
          <p className="mt-5 text-[#1A1A1A]/60 max-w-xl mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            Explore the layout of Hayat Life Care — from basement parking to a
            world-class specialized hospital on the upper levels.
          </p>
        </motion.div>

        {/* Floor selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {floors.map((f, i) => (
            <button
              key={f.label}
              onClick={() => setActive(i)}
              className={`min-w-[3rem] px-4 py-2.5 text-sm font-semibold rounded-sm border transition-all duration-200 font-[family-name:var(--font-inter)] tracking-wide ${
                active === i
                  ? "bg-[#0B1E3D] border-[#0B1E3D] text-[#C5A84F]"
                  : "bg-white border-[#E8E3DA] text-[#0B1E3D]/60 hover:border-[#C5A84F]/60 hover:text-[#0B1E3D]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md">
              <Image
                src={floor.img}
                alt={floor.subtitle}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#0B1E3D]/90 text-[#C5A84F] text-xs font-bold px-3 py-1 rounded-sm font-[family-name:var(--font-inter)] tracking-widest">
                  {floor.label}
                </span>
                <span className="bg-[#C5A84F] text-[#0B1E3D] text-xs font-semibold px-3 py-1 rounded-sm font-[family-name:var(--font-inter)] tracking-wide">
                  {floor.tag}
                </span>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-inter)]">
                {floor.name}
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#0B1E3D] font-semibold mb-5 leading-tight">
                {floor.subtitle}
              </h3>
              <div className="w-10 h-px bg-[#C5A84F]/50 mb-5" />
              <p className="text-[#1A1A1A]/65 text-base leading-relaxed font-[family-name:var(--font-inter)]">
                {floor.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
