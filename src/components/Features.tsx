"use client";

import { motion } from "framer-motion";
import { Book, Languages, Calculator, CheckCircle2 } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Sanskrit Excellence",
    description: "Master the language of the gods. From basic grammar to advanced Vedic literature.",
    icon: <Book className="w-8 h-8" />,
    color: "bg-saffron",
    features: ["Shloka Pronunciation", "Panini Grammar", "Vedic Mantras"],
  },
  {
    id: 2,
    title: "Spoken Kannada",
    description: "Connect with the roots of Karnataka. Learn to speak Kannada fluently in just 90 days.",
    icon: <Languages className="w-8 h-8" />,
    color: "bg-karnataka-yellow",
    features: ["Daily Conversations", "Cultural Context", "Grammar & Script"],
  },
  {
    id: 3,
    title: "Vedic Mathematics",
    description: "Ancient secrets for lightning-fast calculations. 10x your speed and accuracy.",
    icon: <Calculator className="w-8 h-8" />,
    color: "bg-blue-500",
    features: ["Mental Math Tricks", "Competitive Exam Prep", "Speed Multiplication"],
  },
];

const Features = () => {
  return (
    <section id="classes" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4"
          >
            Explore <span className="text-saffron">Classes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Expertly crafted curriculum blending traditional teaching methods with modern pedagogical tools.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-cream/30 p-8 rounded-[2rem] border border-orange-100 hover:shadow-2xl hover:shadow-saffron/10 transition-all group"
            >
              <div className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {course.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">{course.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-4">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-saffron w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-4 rounded-xl border-2 border-saffron text-saffron font-bold hover:bg-saffron hover:text-white transition-all">
                Course Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
