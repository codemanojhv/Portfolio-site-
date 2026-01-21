"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const Campus = () => {
  return (
    <section id="campus" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Location
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
              Visit our <span className="text-saffron">Yelahanka Campus</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Experience the Digital Gurukul in person. Our campus in Yelahanka New Town is a serene space for learning, designed to foster focus, creativity, and spiritual growth.
            </p>
            
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-saffron/10 p-3 rounded-xl text-saffron">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-xl">Address</h4>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Yelahanka New Town, Bangalore,<br />
                  Karnataka 560064, India
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
              Get Directions
              <Navigation size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.755490978051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae187c5e636605%3A0xad30a7d9b936d5d6!2sYelahanka%20New%20Town%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709825424564!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Yelahanka"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
