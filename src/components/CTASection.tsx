import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-neon-purple/10 blur-[100px]"
        animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-neon-pink/10 blur-[100px]"
        animate={{ scale: [1.3, 0.8, 1.3], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-6">
            Buat Project Kamu Jadi{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>
              Lebih Hidup
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan pengalaman visual yang tak terlupakan.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-lg font-heading font-bold text-primary-foreground text-lg box-glow-purple"
            style={{ background: "var(--gradient-neon)" }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px hsl(270 100% 65% / 0.6), 0 0 80px hsl(270 100% 65% / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi via WhatsApp
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
