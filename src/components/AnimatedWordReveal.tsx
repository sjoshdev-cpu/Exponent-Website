import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedWordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <h1 ref={ref} className={`font-bold text-5xl md:text-6xl lg:text-[76px] leading-[1.05] tracking-[-0.03em] ${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const isExecution = word.replace(/[.,]/g, '') === "Execution";
        
        return (
          <div key={i} className="overflow-hidden inline-block mr-[0.25em] mb-2">
            <motion.span
              className={`inline-block relative ${isExecution ? "text-white" : ""}`}
              initial={{ clipPath: "inset(100% 0 0 0)", y: "100%" }}
              animate={isInView ? { clipPath: "inset(0 0 0 0)", y: "0%" } : { clipPath: "inset(100% 0 0 0)", y: "100%" }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.06,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {word}
              {isExecution && (
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + words.length * 0.06 + 0.2 }}
                />
              )}
            </motion.span>
          </div>
        );
      })}
    </h1>
  );
}
