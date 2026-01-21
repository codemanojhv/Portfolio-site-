import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import WhatWeTeach from "@/components/WhatWeTeach";
import WhyChooseUs from "@/components/WhyChooseUs";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatWeTeach />
      <Methodology />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
