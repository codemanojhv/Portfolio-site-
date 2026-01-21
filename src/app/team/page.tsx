import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="py-12">
        <Team />
      </div>
      <Footer />
    </main>
  );
}
