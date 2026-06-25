import { useEffect, useState } from "react";
import { useMobile } from "@/hooks/use-mobile";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) return;

    let requestRef: number;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      const target = e.target as HTMLElement;
      const isHoverable = target.closest("a, button, [role='button'], h1, h2, h3");
      setIsHovering(!!isHoverable);
    };

    const updatePosition = () => {
      setPosition(prev => {
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      requestRef = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-primary transform -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? "32px" : "8px",
        height: isHovering ? "32px" : "8px",
        mixBlendMode: isHovering ? "difference" : "normal"
      }}
    />
  );
}
