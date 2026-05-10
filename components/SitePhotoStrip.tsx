"use client";

export default function SitePhotoStrip() {
  return (
    <div className="w-full relative overflow-hidden" style={{ height: "420px" }}>
      {/* The exterior photo as a clean, cropped landscape strip */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hayatlifecare.com/images/hayat-exterior-new.jpg')",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Subtle dark vignette on edges only */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D]/60 via-transparent to-[#0B1E3D]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E3D]/40 via-transparent to-[#0B1E3D]/40" />

      {/* Floating label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white/50 text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-inter)]">
          O.R. Nizam Road, Chattogram
        </p>
      </div>
    </div>
  );
}
