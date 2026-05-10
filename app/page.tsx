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
    </>
  );
}
