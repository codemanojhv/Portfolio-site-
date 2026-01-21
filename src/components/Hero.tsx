"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-warm-paper">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-saffron blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-karnataka-yellow blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-saffron/10 text-saffron-dark border border-saffron/20"
            >
              The Digital Gurukul
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-serif font-bold text-charcoal leading-tight mb-6"
            >
              Reviving Ancient Wisdom for the <span className="text-saffron">Modern World</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Master Sanskrit, Kannada, and Vedic Mathematics through our interactive, personalized learning platform designed for the 21st century.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="bg-saffron hover:bg-saffron-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group">
                Start Learning Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-cream text-charcoal px-8 py-4 rounded-full font-bold text-lg transition-all border border-orange-100">
                Explore Courses
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start opacity-70"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-charcoal">5000+</span>
                <span className="text-sm uppercase tracking-wider font-semibold">Students</span>
              </div>
              <div className="w-px h-10 bg-charcoal/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-charcoal">50+</span>
                <span className="text-sm uppercase tracking-wider font-semibold">Expert Gurus</span>
              </div>
              <div className="w-px h-10 bg-charcoal/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-charcoal">98%</span>
                <span className="text-sm uppercase tracking-wider font-semibold">Success Rate</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=800"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="bg-saffron/20 p-3 rounded-xl">
                <BookOpen className="text-saffron-dark" />
              </div>
              <div>
                <p className="font-bold text-charcoal">Vedic Wisdom</p>
                <p className="text-sm text-slate-500">Live Interactive Classes</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="bg-green-100 p-3 rounded-xl">
                <GraduationCap className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-charcoal">Certified Courses</p>
                <p className="text-sm text-slate-500">Globally Recognized</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
