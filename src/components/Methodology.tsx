"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, BookOpen, MessageSquare, Target, TrendingUp, Lightbulb } from "lucide-react";

const methodology = [
  {
    step: "01",
    title: "Assessment",
    description: "We begin with a detailed assessment of your current knowledge level and learning goals to create a personalized path.",
    icon: <Target className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500",
  },
  {
    step: "02",
    title: "Interactive Learning",
    description: "Live sessions with real-time interaction, doubt clearing, and collaborative learning with fellow students.",
    icon: <MessageSquare className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=500",
  },
  {
    step: "03",
    title: "Practice & Revision",
    description: "Regular assignments, quizzes, and practice sessions to reinforce learning and track progress.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=500",
  },
  {
    step: "04",
    title: "Certification",
    description: "Complete the course with comprehensive evaluations and receive recognized certifications.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=500",
  },
];

const Methodology = () => {
  return (
    <section className="py-24 bg-cream/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-saffron/10 text-saffron-dark border border-saffron/20">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
              How We <span className="text-saffron">Teach</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-8">
              Our teaching methodology blends the best of traditional Gurukul wisdom with modern digital tools. We focus on understanding, not just memorization, ensuring that knowledge stays with you for a lifetime.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-saffron/20 p-3 rounded-xl shrink-0">
                  <Monitor className="text-saffron-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Live Online Classes</h4>
                  <p className="text-slate-600">Real-time interactive sessions with screen sharing and digital whiteboards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-karnataka-yellow/20 p-3 rounded-xl shrink-0">
                  <Lightbulb className="text-karnataka-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Practical Application</h4>
                  <p className="text-slate-600">Learn by doing with real-world examples and hands-on exercises.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl shrink-0">
                  <BookOpen className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-1">Comprehensive Materials</h4>
                  <p className="text-slate-600">Access to recorded sessions, PDF notes, and practice worksheets.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                alt="Teaching methodology"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-saffron text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl">
                  24/7
                </div>
                <div>
                  <p className="font-bold text-charcoal">Support Available</p>
                  <p className="text-sm text-slate-500">Anytime, anywhere</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-karnataka-yellow/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-saffron text-white px-4 py-2 rounded-full font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cream/50 text-saffron p-2 rounded-xl">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
