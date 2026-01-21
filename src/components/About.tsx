"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, BookOpen, Users, Target, Award } from "lucide-react";

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
              <Image
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800"
                alt="Traditional Indian learning"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-saffron p-8 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
              <Quote className="text-white mb-4" size={32} fill="white" />
              <p className="text-white font-serif italic text-lg leading-snug">
                &quot;Education is not the filling of a pail, but the lighting of a fire.&quot;
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
              At MitraEdu, we believe that ancient wisdom shouldn&apos;t be confined to old manuscripts. Our mission is to make the profound teachings of Sanskrit, the logical beauty of Kannada, and the mathematical brilliance of the Vedas accessible to everyone, everywhere.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We combine traditional &quot;Gurukul&quot; values—personalized mentorship, deep respect for knowledge, and holistic growth—with cutting-edge digital platforms to provide an unparalleled learning experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-cream/30 rounded-xl">
                <div className="bg-saffron/20 p-3 rounded-xl shrink-0">
                  <BookOpen className="text-saffron-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Personalized</h4>
                  <p className="text-slate-500 text-sm">Tailored learning paths for every student&apos;s pace.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cream/30 rounded-xl">
                <div className="bg-green-500/20 p-3 rounded-xl shrink-0">
                  <Users className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Community</h4>
                  <p className="text-slate-500 text-sm">Join a community of passionate learners.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cream/30 rounded-xl">
                <div className="bg-blue-500/20 p-3 rounded-xl shrink-0">
                  <Target className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Result Oriented</h4>
                  <p className="text-slate-500 text-sm">Proven track record of student success.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cream/30 rounded-xl">
                <div className="bg-orange-500/20 p-3 rounded-xl shrink-0">
                  <Award className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Certified</h4>
                  <p className="text-slate-500 text-sm">Industry-recognized certifications.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
