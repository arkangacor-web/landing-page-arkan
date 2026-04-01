import { Projector, Moon, Hand, Settings } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Projector, title: "Wall Mapping", description: "Proyeksi visual dinamis pada berbagai permukaan untuk event, pertunjukan, dan instalasi." },
  { icon: Moon, title: "Dark Room Installation", description: "Ruang gelap immersive dengan visual 360° yang menciptakan pengalaman tak terlupakan." },
  { icon: Hand, title: "Interactive Visual Experience", description: "Instalasi interaktif yang merespons gerakan dan sentuhan pengunjung secara real-time." },
  { icon: Settings, title: "Custom Project", description: "Solusi visual kreatif yang dirancang khusus sesuai kebutuhan brand dan konsep Anda." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px]"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-neon-pink font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Layanan</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl">
            Apa yang Kami <span className="text-accent text-glow-pink">Tawarkan</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <motion.div
                className="rounded-xl p-6 bg-card border border-border text-center group h-full"
                whileHover={{
                  y: -10,
                  borderColor: "hsl(270 100% 65% / 0.4)",
                  boxShadow: "0 0 20px hsl(270 100% 65% / 0.3), 0 0 40px hsl(270 100% 65% / 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5"
                  whileHover={{ scale: 1.2, rotate: 15, backgroundColor: "hsl(270 100% 65% / 0.2)" }}
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-heading font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
