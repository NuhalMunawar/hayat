"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const wings = [
  {
    icon: "🏥",
    name: "Specialized Hospital",
    desc: "Cancer Institute, Cardiology, Kidney, Gynaecology & Obstetrics, Fertility Institute",
  },
  {
    icon: "🔬",
    name: "Diagnostic Centre",
    desc: "AI-powered pathology, MRI, CT Scan, X-Ray, ECG, USG — Pathology through Immunology",
  },
  {
    icon: "🩺",
    name: "Doctor's Chambers",
    desc: "Private, fully-equipped consultation rooms across multiple floors for all specialities",
  },
  {
    icon: "💊",
    name: "Pharmacy",
    desc: "Authentic medicines sourced from authorized manufacturers with full documentation",
  },
  {
    icon: "🛒",
    name: "Super Shop",
    desc: "Full-scale superstore covering groceries, personal care, and health essentials",
  },
  {
    icon: "👓",
    name: "Optical Shop",
    desc: "Prescription glasses, frames, contact lenses with expert optician consultations",
  },
  {
    icon: "🍽️",
    name: "Restaurant & Café",
    desc: "Nutritious meals including diabetic-friendly and heart-healthy menus",
  },
  {
    icon: "🧃",
    name: "Coffee Shop & Juice Bar",
    desc: "Fresh brews, nutrient-rich juices and smoothies for patients, visitors and staff",
  },
  {
    icon: "🎠",
    name: "Kids' Amusement Park",
    desc: "Indoor play zone with rides, games and attractions — so families unwind while you consult",
  },
  {
    icon: "🅿️",
    name: "Paid Car Parking",
    desc: "150+ spaces across 3 basements, CCTV-monitored 24/7 with valet service",
  },
  {
    icon: "🏦",
    name: "ATM & Banking",
    desc: "On-site ATM for secure cash access, payments and account services",
  },
];

export default function ComplexWings() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="complex" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C5A84F] text-xs font-medium tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-inter)]">
            The Complex
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#0B1E3D] font-semibold leading-tight">
            11 Revenue-Generating Wings
          </h2>
          <p className="mt-5 text-[#1A1A1A]/60 max-w-xl mx-auto text-base leading-relaxed font-[family-name:var(--font-inter)]">
            Each wing operates independently as a profit centre — giving investors diversified
            income from a single ownership stake.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {wings.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group border border-[#E8E3DA] rounded-sm p-6 hover:border-[#C5A84F] hover:shadow-md transition-all duration-300 bg-[#F9F6F0]"
            >
              <span className="text-3xl mb-4 block">{w.icon}</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#0B1E3D] mb-2 group-hover:text-[#C5A84F] transition-colors">
                {w.name}
              </h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                {w.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
