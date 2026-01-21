import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Campus from "@/components/Campus";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Testimonials />
      <Campus />
      <CTA />
      <Footer />
    </main>
  );
}
