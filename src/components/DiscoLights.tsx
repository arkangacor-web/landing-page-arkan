import { motion } from "framer-motion";

const DiscoLights = () => {
  const beams = [
    { angle: -60, color: "hsl(270 100% 65%)", delay: 0, duration: 4 },
    { angle: -35, color: "hsl(320 100% 60%)", delay: 0.5, duration: 3.5 },
    { angle: -10, color: "hsl(220 100% 60%)", delay: 1, duration: 5 },
    { angle: 15, color: "hsl(185 100% 55%)", delay: 1.5, duration: 4.2 },
    { angle: 40, color: "hsl(270 100% 65%)", delay: 0.8, duration: 3.8 },
    { angle: 60, color: "hsl(320 100% 60%)", delay: 2, duration: 4.5 },
    { angle: -50, color: "hsl(185 100% 55%)", delay: 1.2, duration: 3.2 },
    { angle: 25, color: "hsl(220 100% 60%)", delay: 0.3, duration: 5.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Light source point at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground/80 blur-sm z-10" />

      {/* Rotating beams */}
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: "3px",
            height: "120%",
            background: `linear-gradient(to bottom, ${beam.color.replace(")", " / 0.6)")}, ${beam.color.replace(")", " / 0.15)")}, transparent 70%)`,
            filter: "blur(4px)",
            boxShadow: `0 0 15px 3px ${beam.color.replace(")", " / 0.2)")}`,
          }}
          animate={{
            rotate: [beam.angle, beam.angle + 40, beam.angle - 30, beam.angle + 20, beam.angle],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: beam.delay,
          }}
        />
      ))}

      {/* Wide sweeping beams */}
      {[
        { from: -70, to: 70, color: "hsl(270 100% 65%)", duration: 6, delay: 0 },
        { from: 60, to: -60, color: "hsl(320 100% 60%)", duration: 7, delay: 1 },
        { from: -40, to: 50, color: "hsl(220 100% 60%)", duration: 5, delay: 2 },
      ].map((sweep, i) => (
        <motion.div
          key={`sweep-${i}`}
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: "6px",
            height: "110%",
            background: `linear-gradient(to bottom, ${sweep.color.replace(")", " / 0.3)")}, transparent 60%)`,
            filter: "blur(8px)",
          }}
          animate={{ rotate: [sweep.from, sweep.to, sweep.from] }}
          transition={{ duration: sweep.duration, repeat: Infinity, ease: "easeInOut", delay: sweep.delay }}
        />
      ))}

      {/* Floor reflection */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/4"
        style={{
          background: "radial-gradient(ellipse at center bottom, hsl(270 100% 65% / 0.08), transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default DiscoLights;
