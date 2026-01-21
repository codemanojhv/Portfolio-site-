"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollText, Brain, Globe, Sparkles, Award } from "lucide-react";

const teachings = [
  {
    title: "Sanskrit Language",
    description: "Discover the ancient language that holds the key to India's rich heritage. Learn from basic alphabets to advanced Vedic literature.",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&q=80&w=600",
    topics: ["Panini Grammar", "Shloka Recitation", "Vedic Literature", "Script Writing"],
    icon: <ScrollText className="w-6 h-6" />,
  },
  {
    title: "Spoken Kannada",
    description: "Master the official language of Karnataka through practical conversations, cultural immersion, and interactive sessions.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600",
    topics: ["Daily Conversations", "Cultural Phrases", "Grammar & Syntax", "Reading & Writing"],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Vedic Mathematics",
    description: "Unlock lightning-fast calculation techniques from ancient India. Perfect for competitive exams and mental agility.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
    topics: ["Speed Calculations", "Mental Math Tricks", "Pattern Recognition", "Problem Solving"],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Vedic Chanting",
    description: "Learn the sacred art of Vedic mantra chanting with proper pronunciation, rhythm, and spiritual understanding.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=600",
    topics: ["Mantra Pronunciation", "Chanting Techniques", "Vedic Rhythm", "Spiritual Wisdom"],
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const WhatWeTeach = () => {
  return (
    <section className="py-24 bg-cream/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-karnataka-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-saffron/10 text-saffron-dark border border-saffron/20"
          >
            Our Curriculum
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6"
          >
            What We <span className="text-saffron">Teach</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            Our carefully crafted curriculum combines ancient wisdom with modern teaching methodologies. Each course is designed to provide deep understanding while keeping learning engaging and practical.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {teachings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-orange-50"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-saffron text-white p-3 rounded-xl mb-3 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {item.description}
                </p>
                <div>
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                    <Award className="text-saffron w-5 h-5" />
                    What You&apos;ll Learn
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 bg-cream/50 text-charcoal font-medium rounded-full text-sm border border-orange-100"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-saffron hover:bg-saffron-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
            Explore All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeTeach;
