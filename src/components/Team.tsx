"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Dr. Ananya Rao",
    role: "Founder & Lead Sanskrit Instructor",
    image: "https://images.unsplash.com/photo-1622460241924-a114e6abe1ff?auto=format&fit=crop&q=80&w=400",
    bio: "With over 15 years of experience in Vedic studies and a PhD in Sanskrit Literature, Dr. Rao envisions a world where ancient wisdom is accessible to all.",
    isFounder: true,
  },
  {
    name: "Rajesh Kumar",
    role: "Senior Kannada Tutor",
    image: "https://images.unsplash.com/photo-1598975546110-65ec9e59e690?auto=format&fit=crop&q=80&w=400",
    bio: "Rajesh brings 10 years of linguistic expertise, specializing in teaching spoken Kannada to non-native speakers with ease.",
  },
  {
    name: "Priya Sharma",
    role: "Vedic Math Expert",
    image: "https://images.unsplash.com/photo-1749700332031-cf99864959ea?auto=format&fit=crop&q=80&w=400",
    bio: "Passionate about making mathematics fun and intuitive using ancient Vedic techniques that speed up calculation.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-cream/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-saffron font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Meet Our Gurus
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal"
          >
            The Minds Behind MitraEdu
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white rounded-[2.5rem] p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all group relative ${
                member.isFounder ? "lg:scale-110 z-10 border-saffron/30" : ""
              }`}
            >
              {member.isFounder && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-saffron text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  FOUNDER
                </div>
              )}
              
              <div className="relative mb-8 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-karnataka-yellow rounded-full rotate-6 group-hover:rotate-12 transition-transform" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{member.name}</h3>
                <p className="text-saffron font-semibold mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "{member.bio}"
                </p>
                
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-saffron transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-saffron transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-saffron transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
