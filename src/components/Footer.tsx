"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-serif font-bold text-saffron mb-6 block">
              MitraEdu
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Empowering the next generation with ancient wisdom and modern digital excellence. Join our community of lifelong learners.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-saffron transition-colors">Home</Link></li>
              <li><Link href="#classes" className="text-slate-400 hover:text-saffron transition-colors">Our Classes</Link></li>
              <li><Link href="#team" className="text-slate-400 hover:text-saffron transition-colors">Our Team</Link></li>
              <li><Link href="#testimonials" className="text-slate-400 hover:text-saffron transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Our Courses</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 hover:text-saffron transition-colors cursor-pointer">Sanskrit Excellence</li>
              <li className="text-slate-400 hover:text-saffron transition-colors cursor-pointer">Spoken Kannada</li>
              <li className="text-slate-400 hover:text-saffron transition-colors cursor-pointer">Vedic Mathematics</li>
              <li className="text-slate-400 hover:text-saffron transition-colors cursor-pointer">Ancient History</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-saffron shrink-0" size={20} />
                <span>123 Vedic Way, Digital Gurukul, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-saffron shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-saffron shrink-0" size={20} />
                <span>hello@mitraedu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} MitraEdu. All rights reserved. Designed for a premium education experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
