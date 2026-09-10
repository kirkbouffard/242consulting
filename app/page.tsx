import About from "@/components/About";
import Advisory from "@/components/Advisory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <LogoStrip />
        <Advisory />
        <About />
        <Process />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
