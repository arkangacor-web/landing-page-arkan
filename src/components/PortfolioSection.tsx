import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { img: portfolio1, title: "Building Mapping", category: "Event" },
  { img: portfolio2, title: "Dark Room Exhibition", category: "Pameran" },
  { img: portfolio3, title: "Interactive Wall", category: "Instalasi" },
  { img: portfolio4, title: "Stage Mapping", category: "Konser" },
  { img: portfolio5, title: "Immersive Gallery", category: "Seni" },
  { img: portfolio6, title: "Brand Activation", category: "Komersial" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-neon-blue font-heading font-semibold tracking-[0.2em] uppercase text-sm mb-3">Portfolio</p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl">
            Karya <span className="text-neon-blue">Terbaru</span> Kami
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <motion.div
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={project.img}
                  alt={project.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm">
                  <motion.span
                    className="text-neon-purple text-xs font-heading tracking-[0.2em] uppercase mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="font-heading font-bold text-xl text-foreground text-glow-purple">{project.title}</h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl group-hover:box-glow-purple transition-all duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
