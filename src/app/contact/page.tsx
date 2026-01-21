import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-24 bg-cream/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-karnataka-yellow/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
              Get in <span className="text-saffron">Touch</span>
            </h1>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Have questions about our courses? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-saffron to-saffron-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Location</h4>
                      <p className="text-white/80">Yelahanka New Town, Bangalore, Karnataka 560064, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                      <p className="text-white/80">+91 98765 43210</p>
                      <p className="text-white/80">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Address</h4>
                      <p className="text-white/80">hello@mitraedu.com</p>
                      <p className="text-white/80">support@mitraedu.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <p className="text-white/80">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-white/80">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white/10 rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7985c2d15230?auto=format&fit=crop&q=80&w=600"
                    alt="Contact us"
                    width={600}
                    height={160}
                    className="w-full h-40 object-cover rounded-xl opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-[2.5rem] shadow-xl p-10 border border-orange-100">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">Send a Message</h2>
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-charcoal mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal mb-2">Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all">
                      <option>Select a course</option>
                      <option>Sanskrit Excellence</option>
                      <option>Spoken Kannada</option>
                      <option>Vedic Mathematics</option>
                      <option>Vedic Chanting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-orange-100 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all resize-none" placeholder="Tell us about your learning goals..."></textarea>
                </div>
                <button className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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
