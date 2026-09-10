import Advisory from "@/components/Advisory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Ways from "@/components/Ways";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ways />
        <Advisory />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
