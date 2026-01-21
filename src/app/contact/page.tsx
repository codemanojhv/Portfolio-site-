import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-cream/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-saffron p-12 text-white">
              <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0" />
                  <p>Yelahanka New Town, Bangalore, Karnataka 560064, India</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="shrink-0" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="shrink-0" />
                  <p>hello@mitraedu.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-charcoal mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-2">Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all">
                    <option>Sanskrit Excellence</option>
                    <option>Spoken Kannada</option>
                    <option>Vedic Mathematics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
