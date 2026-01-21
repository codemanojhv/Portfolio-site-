"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock, Users, Award, Video, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Expert Gurus",
    description: "Learn from highly qualified instructors with decades of experience in their respective fields.",
    color: "bg-saffron",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Scheduling",
    description: "Classes available at your convenience with both live sessions and recorded content.",
    color: "bg-blue-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Small Batch Sizes",
    description: "Personalized attention with maximum 15 students per batch for better interaction.",
    color: "bg-green-500",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Live Interactive",
    description: "Real-time doubt clearing and interactive sessions for effective learning.",
    color: "bg-purple-500",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certified Courses",
    description: "Get recognized certifications upon completion of our structured courses.",
    color: "bg-orange-500",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Authentic Content",
    description: "Curriculum designed with authentic references from ancient scriptures.",
    color: "bg-pink-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-saffron/10 text-saffron-dark border border-saffron/20"
          >
            Why MitraEdu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6"
          >
            Why Choose <span className="text-saffron">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            We&apos;re not just another online platform. We&apos;re a digital Gurukul committed to preserving and promoting India&apos;s rich educational heritage while making it accessible to the modern learner.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-cream/30 border border-orange-100 hover:shadow-xl hover:shadow-saffron/5 transition-all duration-300"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-saffron to-saffron-dark rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="text-white/80" />
                  <span className="text-4xl md:text-5xl font-bold text-white">5000+</span>
                </div>
                <p className="text-white/80 font-medium">Happy Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GraduationCap className="text-white/80" />
                  <span className="text-4xl md:text-5xl font-bold text-white">50+</span>
                </div>
                <p className="text-white/80 font-medium">Expert Teachers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="text-white/80" />
                  <span className="text-4xl md:text-5xl font-bold text-white">98%</span>
                </div>
                <p className="text-white/80 font-medium">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="text-white/80" />
                  <span className="text-4xl md:text-5xl font-bold text-white">100+</span>
                </div>
                <p className="text-white/80 font-medium">Courses Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
