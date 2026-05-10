import Image from "next/image";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/hayatlifecare",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@hayatLifecareltd",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.94A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon fill="#0B1E3D" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hayatlifecareltd",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hayat-life-care",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071428] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <Image
              src="https://hayatlifecare.com/images/logo.svg"
              alt="Hayat Life Care"
              width={120}
              height={36}
              className="h-9 w-auto mb-4"
              unoptimized
            />
            <p className="text-white/40 text-sm leading-relaxed font-[family-name:var(--font-inter)] max-w-xs">
              One destination. Every need.
              <br />A sister concern of Hayat Holdings.
            </p>
          </div>

          {/* Addresses */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              Addresses
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[#C5A84F] text-xs font-medium mb-1 font-[family-name:var(--font-inter)]">
                  Head Office
                </p>
                <p className="text-white/50 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                  Mishmak Manjuri, Badshah Miah Road, Ameerbag, Chattogram
                </p>
              </div>
              <div>
                <p className="text-[#C5A84F] text-xs font-medium mb-1 font-[family-name:var(--font-inter)]">
                  Project Site
                </p>
                <p className="text-white/50 text-sm leading-relaxed font-[family-name:var(--font-inter)]">
                  Manashi, O.R. Nizam Road, Chattogram
                </p>
              </div>
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-[family-name:var(--font-inter)]">
              Contact
            </p>
            <div className="space-y-2 mb-6">
              <a
                href="tel:01335074940"
                className="block text-white/60 hover:text-[#C5A84F] text-sm transition-colors font-[family-name:var(--font-inter)]"
              >
                01335-074940
              </a>
              <a
                href="tel:01335074941"
                className="block text-white/60 hover:text-[#C5A84F] text-sm transition-colors font-[family-name:var(--font-inter)]"
              >
                01335-074941
              </a>
              <a
                href="mailto:info@hayatlifecare.com"
                className="block text-white/60 hover:text-[#C5A84F] text-sm transition-colors font-[family-name:var(--font-inter)]"
              >
                info@hayatlifecare.com
              </a>
            </div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-full border border-white/15 hover:border-[#C5A84F] text-white/50 hover:text-[#C5A84F] flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-[family-name:var(--font-inter)]">
            © 2025 Hayat Life Care. All rights reserved. RJSC Registered.
          </p>
          <p className="text-white/25 text-xs font-[family-name:var(--font-inter)]">
            hayatlifecare.com
          </p>
        </div>
      </div>
    </footer>
  );
}
