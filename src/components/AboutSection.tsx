import { Building2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-neon-purple/5 blur-[100px]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-neon-pink/5 blur-[100px]"
        animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-neon-purple font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Tentang Kami</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Kami Menghidupkan <span className="text-primary text-glow-purple">Ruang & Imajinasi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Menghadirkan pengalaman visual yang memukau melalui teknologi projection mapping dan instalasi immersive.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <motion.div
              className="rounded-xl p-8 bg-card border border-border gradient-border group h-full"
              whileHover={{ y: -8, boxShadow: "0 0 25px hsl(270 100% 65% / 0.3), 0 0 50px hsl(270 100% 65% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Building2 className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl mb-3">Wall Mapping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proyeksi visual spektakuler pada gedung, panggung, dan berbagai permukaan. Sempurna untuk event besar, launching produk, dan pertunjukan seni.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <motion.div
              className="rounded-xl p-8 bg-card border border-border gradient-border group h-full"
              whileHover={{ y: -8, boxShadow: "0 0 25px hsl(320 100% 60% / 0.3), 0 0 50px hsl(320 100% 60% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5"
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <Lightbulb className="w-7 h-7 text-accent" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl mb-3">Dark Room Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ruang immersive dengan visual & lighting yang menyelimuti pengunjung dalam pengalaman multisensori. Ideal untuk pameran, brand activation, dan instalasi seni.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
