"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-saffron rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Ready to begin your <span className="text-charcoal italic">Vedic Journey?</span>
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of students who are already rediscovering the power of ancient knowledge with MitraEdu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-charcoal text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Book a Free Demo
              </button>
              <button className="bg-white text-saffron-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-cream transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                View All Courses
              </button>
            </div>
            <p className="mt-8 text-white/70 font-medium">
              No credit card required. Start your 7-day free trial today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
