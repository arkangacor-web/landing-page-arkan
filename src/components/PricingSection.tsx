import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const plans = [
  { name: "Basic Package", price: "Rp 3.000.000", features: ["1 area mapping", "Durasi 1–2 menit animasi", "Konsultasi desain", "Setup & instalasi"], highlight: false },
  { name: "Standard Package", price: "Rp 7.000.000", features: ["Multi surface mapping", "Animasi custom + sound", "Revisi 2x", "Setup & tim teknis"], highlight: true },
  { name: "Premium Package", price: "Rp 15.000.000", features: ["Full immersive dark room", "Interactive + lighting", "Konsep event lengkap", "Tim kreatif & teknis full"], highlight: false },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-neon-purple font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Harga</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl">
            Paket <span className="text-primary text-glow-purple">Layanan</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 150}>
              <motion.div
                className={`rounded-xl p-8 border relative h-full ${
                  plan.highlight
                    ? "bg-card border-primary/50 box-glow-purple scale-105"
                    : "bg-card border-border"
                }`}
                whileHover={{
                  y: -10,
                  boxShadow: plan.highlight
                    ? "0 0 30px hsl(270 100% 65% / 0.5), 0 0 60px hsl(270 100% 65% / 0.2)"
                    : "0 0 20px hsl(270 100% 65% / 0.3), 0 0 40px hsl(270 100% 65% / 0.15)",
                  borderColor: "hsl(270 100% 65% / 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {plan.highlight && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-heading font-bold text-primary-foreground flex items-center gap-1"
                    style={{ background: "var(--gradient-neon)" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-3 h-3" /> Populer
                  </motion.div>
                )}
                <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">Mulai dari</p>
                <p className="font-heading font-black text-3xl text-primary text-glow-purple mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://luxe-form.myscalev.com/p/wall-mapping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-heading font-semibold ${
                    plan.highlight
                      ? "text-primary-foreground box-glow-purple"
                      : "bg-secondary text-foreground"
                  }`}
                  style={plan.highlight ? { background: "var(--gradient-neon)" } : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pilih Paket
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-muted-foreground text-sm mt-10">
            * Harga bisa disesuaikan dengan kebutuhan project
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
