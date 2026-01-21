import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function ClassesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="py-12">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
