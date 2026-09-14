import About from "@/components/About";
import Advisory from "@/components/Advisory";
import Choice from "@/components/Choice";
import Circle from "@/components/Circle";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Nav from "@/components/Nav";
import ScrollState from "@/components/ScrollState";
import StickyBar from "@/components/StickyBar";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <LogoStrip />
        <Choice />
        <Advisory />
        <Circle />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
      <ScrollState />
    </>
  );
}
