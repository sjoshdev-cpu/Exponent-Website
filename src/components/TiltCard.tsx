import { ReactNode, useRef } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { motion, useInView } from "framer-motion";

export default function TiltCard({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Update inner highlight
    const highlight = ref.current.querySelector('.tilt-highlight') as HTMLElement;
    if (highlight) {
      highlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 80%)`;
    }
  };

  const handleMouseLeave = () => {
    if (isMobile || !ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    
    const highlight = ref.current.querySelector('.tilt-highlight') as HTMLElement;
    if (highlight) {
      highlight.style.background = "transparent";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative transition-all duration-200 ease-out will-change-transform transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="tilt-highlight absolute inset-0 pointer-events-none rounded-inherit z-10 transition-colors duration-200" />
      {children}
    </motion.div>
  );
}
