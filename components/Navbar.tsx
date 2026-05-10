"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "The Complex", href: "#complex" },
  { label: "Investment", href: "#investment" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1E3D] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="https://hayatlifecare.com/images/logo.svg"
            alt="Hayat Life Care"
            width={140}
            height={40}
            className="h-10 w-auto"
            unoptimized
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#C5A84F] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-[#C5A84F] hover:bg-[#D4BC72] text-[#0B1E3D] text-sm font-semibold rounded tracking-wide transition-colors duration-200"
          >
            Speak With Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-4 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B1E3D] border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#C5A84F] text-sm font-medium py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-[#C5A84F] text-[#0B1E3D] text-sm font-semibold rounded text-center"
          >
            Speak With Us
          </a>
        </div>
      )}
    </header>
  );
}
