"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544640805-35c0fa648a35?auto=format&fit=crop&q=80&w=800"
                alt="Ancient wisdom"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-saffron p-8 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
              <Quote className="text-white mb-4" size={32} fill="white" />
              <p className="text-white font-serif italic text-lg leading-snug">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-karnataka-yellow/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 leading-tight">
              A Modern Approach to <span className="text-saffron">Tradition</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At MitraEdu, we believe that ancient wisdom shouldn't be confined to old manuscripts. Our mission is to make the profound teachings of Sanskrit, the logical beauty of Kannada, and the mathematical brilliance of the Vedas accessible to everyone, everywhere.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We combine traditional "Gurukul" values—personalized mentorship, deep respect for knowledge, and holistic growth—with cutting-edge digital platforms to provide an unparalleled learning experience.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-charcoal text-xl mb-2">Personalized</h4>
                <p className="text-slate-500">Tailored learning paths for every student's pace.</p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-xl mb-2">Authentic</h4>
                <p className="text-slate-500">Taught by experts with deep traditional roots.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
