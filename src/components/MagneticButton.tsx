import { ReactNode, useRef } from "react";
import { useMobile } from "@/hooks/use-mobile";

export default function MagneticButton({ 
  children, 
  className = "", 
  as: Component = "button",
  ...props 
}: { 
  children: ReactNode; 
  className?: string;
  as?: any;
  [key: string]: any;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const isMobile = useMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const maxMove = 6;
    const moveX = Math.max(-maxMove, Math.min(maxMove, (e.clientX - centerX) / 5));
    const moveY = Math.max(-maxMove, Math.min(maxMove, (e.clientY - centerY) / 5));

    ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = () => {
    if (isMobile || !ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <Component
      ref={ref}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
}
