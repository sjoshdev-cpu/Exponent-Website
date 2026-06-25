import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  staggerChildren = false
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}
