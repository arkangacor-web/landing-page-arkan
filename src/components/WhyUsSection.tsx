import { Sparkles, Cpu, Palette, Users } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Sparkles, title: "Kreatif & Inovatif", desc: "Konsep visual yang segar dan out-of-the-box untuk setiap project." },
  { icon: Cpu, title: "Teknologi Terbaru", desc: "Menggunakan perangkat dan software projection mapping terkini." },
  { icon: Palette, title: "Custom Sesuai Brand", desc: "Setiap karya dirancang khusus sesuai identitas dan kebutuhan brand." },
  { icon: Users, title: "Tim Profesional", desc: "Didukung oleh tim kreatif dan teknis yang berpengalaman." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-neon-cyan/5 blur-[100px]"
        animate={{ y: [0, -50, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-neon-cyan font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Keunggulan</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl">
            Mengapa Memilih <span className="text-neon-cyan">Kami?</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 100}>
              <motion.div
                className="text-center group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "hsl(270 100% 65% / 0.2)",
                    boxShadow: "0 0 25px hsl(270 100% 65% / 0.4), 0 0 50px hsl(270 100% 65% / 0.2)",
                  }}
                >
                  <r.icon className="w-9 h-9 text-primary" />
                </motion.div>
                <h3 className="font-heading font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
