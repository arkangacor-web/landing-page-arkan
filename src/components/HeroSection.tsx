import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import DiscoLights from "./DiscoLights";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Immersive visual mapping"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <DiscoLights />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(270 100% 65% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(270 100% 65% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Moving particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-purple/60"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -80, 0],
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neon-purple font-heading font-semibold tracking-[0.3em] uppercase text-sm mb-6 text-glow-purple"
        >
          Wall Mapping & Dark Room Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Transform Your Space Into{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>
            Immersive Visual Experience
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Jasa profesional wall mapping & dark room exhibition untuk event, brand, dan instalasi seni
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        >
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-heading font-bold text-primary-foreground text-glow-purple box-glow-purple"
            style={{ background: "var(--gradient-neon)" }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px hsl(270 100% 65% / 0.6), 0 0 60px hsl(270 100% 65% / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Konsultasi Sekarang
          </motion.a>
        </motion.div>
      </div>

      {/* Floating orbs with more dynamic movement */}
      <motion.div
        className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-neon-purple/15 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-neon-pink/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-neon-blue/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0], scale: [1.2, 0.8, 1.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </section>
  );
};

export default HeroSection;
