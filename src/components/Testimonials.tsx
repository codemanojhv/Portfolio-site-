"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

const testimonials = [
  {
    id: 1,
    parentName: "Saritha V",
    message: "My daughter loves the Sanskrit sessions! The teachers are so patient.",
    response: "We're so happy to hear that! She's a quick learner.",
    time: "10:30 AM",
  },
  {
    id: 2,
    parentName: "Manjunath K",
    message: "The Vedic Math tricks helped my son clear his competitive exams.",
    response: "That's fantastic news! Congratulations to him.",
    time: "Yesterday",
  },
  {
    id: 3,
    parentName: "Lakshmi Narayana",
    message: "Is there a trial class for Kannada speaking?",
    response: "Yes! Every Saturday. Sending details.",
    time: "4:15 PM",
  },
  {
    id: 4,
    parentName: "Deepa N",
    message: "My son actually looks forward to the class. The stories are great.",
    response: "Storytelling is the heart of our teaching method.",
    time: "Tuesday",
  },
  {
    id: 5,
    parentName: "Karthik R",
    message: "Just wanted to say the notes provided are excellent.",
    response: "Thank you Karthik! We try to keep resources comprehensive.",
    time: "9:00 AM",
  },
  {
    id: 6,
    parentName: "Anjali M",
    message: "Can we switch from Tuesday batch to Wednesday?",
    response: "Sure Anjali, Wednesday 6 PM slot is available. Updated.",
    time: "11:45 AM",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-warm-paper/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block">
            Parent Love
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
            Trusted by Families
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-whatsapp-bg rounded-2xl shadow-lg border border-orange-100 overflow-hidden"
            >
              {/* WhatsApp Header */}
              <div className="bg-whatsapp-green px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                  {item.parentName.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold leading-none">{item.parentName}</p>
                  <p className="text-white/70 text-[10px] mt-1">online</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4 flex flex-col gap-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                {/* Received Message */}
                <div className="self-start bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[85%] shadow-sm">
                  <p className="text-sm text-charcoal leading-snug">{item.message}</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">{item.time}</span>
                </div>

                {/* Sent Message */}
                <div className="self-end bg-whatsapp-light rounded-lg rounded-tr-none px-4 py-2 max-w-[85%] shadow-sm relative">
                  <p className="text-sm text-charcoal leading-snug">{item.response}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[10px] text-slate-500">12:00 PM</span>
                    <CheckCheck size={14} className="text-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
