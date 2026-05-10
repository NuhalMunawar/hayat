import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import About from "@/components/About";
import ComplexWings from "@/components/ComplexWings";
import WhyInvest from "@/components/WhyInvest";
import InvestmentTiers from "@/components/InvestmentTiers";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <About />
        <ComplexWings />
        <WhyInvest />
        <InvestmentTiers />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      {/* Fixed call button */}
      <a
        href="tel:01335074940"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#C5A84F] hover:bg-[#D4BC72] text-[#0B1E3D] font-semibold text-sm px-4 py-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
        Call Us
      </a>
    </>
  );
}
