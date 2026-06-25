import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative flex flex-col items-start mb-6">
      <motion.h2
        className={`font-bold text-3xl md:text-4xl lg:text-[42px] leading-[1.2] tracking-[-0.01em] ${className}`}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.h2>
    </div>
  );
}
