import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ background: "var(--gradient-neon)" }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <ScrollReveal>
            <div>
              <h3 className="font-heading font-black text-xl text-primary text-glow-purple mb-4">
                LUMINAR<span className="text-foreground">VFX</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Spesialis wall mapping & dark room experience untuk event, brand, dan instalasi seni di Indonesia.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +62 812-3456-7890</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> hello@luminarvfx.com</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Jakarta, Indonesia</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Sosial Media</h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
                  whileHover={{ scale: 1.2, backgroundColor: "hsl(270 100% 65% / 0.2)", boxShadow: "0 0 20px hsl(270 100% 65% / 0.4)" }}
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
                  whileHover={{ scale: 1.2, backgroundColor: "hsl(270 100% 65% / 0.2)", boxShadow: "0 0 20px hsl(270 100% 65% / 0.4)" }}
                >
                  <svg className="w-5 h-5 text-foreground fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" /></svg>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 LuminarVFX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
