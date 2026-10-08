import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";

const Backdrop = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-mint"
        style={{ scaleX }}
      />
      <div className="grid-fade absolute inset-0" />
      <motion.div
        className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {!reduce && (
        <motion.div
          className="fixed z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/10 blur-3xl"
          style={{ left: x, top: y }}
        />
      )}
    </div>
  );
};

export default Backdrop;
