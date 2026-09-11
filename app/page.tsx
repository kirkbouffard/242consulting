import Advisory from "@/components/Advisory";
import Choice from "@/components/Choice";
import Circle from "@/components/Circle";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import StickyBar from "@/components/StickyBar";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Choice />
        <Advisory />
        <Circle />
        <Work />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
